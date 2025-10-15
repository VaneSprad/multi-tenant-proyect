"use client"

import { createContext, useContext, ReactNode } from "react"
import { CountryConfig, CountryKey } from "./types";

type Ctx = { country: CountryKey; config: CountryConfig }
const CountryContext = createContext<Ctx | null>(null)

export function CountryProvider({
  value,
  children,
}: {
  value: Ctx
  children: ReactNode
}) {
  return <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
}

export const useCountry = () => {
  const ctx = useContext(CountryContext)
  if (!ctx) throw new Error("CountryContext not found")
  return ctx
}
