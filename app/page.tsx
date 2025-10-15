"use client"

import Button from "./components/ui/Button"
import { useCountry } from "./country-context"

export default function HomePage() {
  const { country, config } = useCountry()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1
        className="text-4xl font-bold mb-4"
        style={{ color: config.brand.primaryColor }}
      >
        {config.i18n.title}
      </h1>
      <Button
        variant={config.brand.ctaVariant}
        className="px-6 py-3 rounded-2xl shadow-md"
      >
        {config.i18n.cta}
      </Button>
      <p className="mt-6 text-gray-500 text-sm">
        País detectado: <strong>{country}</strong>
      </p>
    </main>
  )
}
