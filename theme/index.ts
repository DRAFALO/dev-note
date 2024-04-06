/* eslint-disable import/no-extraneous-dependencies */

import { Config } from "tailwindcss";
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../tailwind.config";

const tailwind: Config = resolveConfig(tailwindConfig) as unknown as Config;

export default tailwind;
