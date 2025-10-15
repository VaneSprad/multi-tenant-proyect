export type CountryKey = "default" | "co" | "mx" | "eu"

export type CountryConfig = {
  brand: {
    name: string
    primaryColor: string
    ctaVariant: "solid" | "outline"
  }
  i18n: {
    title: string
    cta: string
  }
}