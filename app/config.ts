

import { euConfig } from "./config/eu"
import { coConfig } from "./config/co"
import { mxConfig } from "./config/mx"
import { defaultConfig } from "./config/default"
import { CountryConfig, CountryKey } from "./types";


export const configs: Record<CountryKey, CountryConfig> = {
  default: defaultConfig,
  co: coConfig,
  mx: mxConfig,
  eu: euConfig,
};
