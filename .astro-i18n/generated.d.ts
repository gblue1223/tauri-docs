type DefaultLangCode = "en"
type SupportedLangCode = "fr" | "zh-cn"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/api/core-cli/1" | "/api/core-config/1/[...slug]" | "/api/core-js/1/[...slug]" | "/api/core-js/1" | "/blog/[...slug]" | "/docs/core/1/[...slug]" | "/docs/core/1" | "/docs/getting-started" | "/404" | "/about" | "/blog" | "/components" | "/" 
type RouteParams = {"/api/core-cli/1": undefined; "/api/core-config/1/[...slug]": { "...slug": string; }; "/api/core-js/1/[...slug]": { "...slug": string; }; "/api/core-js/1": undefined; "/blog/[...slug]": { "...slug": string; }; "/docs/core/1/[...slug]": { "...slug": string; }; "/docs/core/1": undefined; "/docs/getting-started": undefined; "/404": undefined; "/about": undefined; "/blog": undefined; "/components": undefined; "/": undefined; }
type TranslationPath = string
type TranslationOptions = { [path: string]: undefined | Record<string, string | number | unknown> }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: undefined extends RouteParams[Uri]
			? [params?: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path,
		...args: undefined extends TranslationOptions[Path]
			? [options?: TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
