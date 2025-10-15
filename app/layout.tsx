import "./globals.css"
import { ReactNode } from "react"
import { configs } from "./config"
import { CountryKey } from "./types"
import { headers } from "next/headers"
import { CountryProvider } from "./country-context"

function detectCountry(hostname?: string): CountryKey {
  if (!hostname) return "default"
  const sub = hostname.split(".")[0].toLowerCase()
  if (["co", "mx", "eu"].includes(sub)) return sub as CountryKey
  return "default"
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const h = await headers()
  const forwardedHost = h.get("x-forwarded-host") || h.get("host") || ""
  const country = detectCountry(forwardedHost)
  const config = configs[country]

  return (
    <html lang="es">
      <body>
        <CountryProvider value={{ country, config }}>
          {children}
        </CountryProvider>
      </body>
    </html>
  )
  
}