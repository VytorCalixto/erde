// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Nações Pequenas";
export const SITE_DESCRIPTION =
  "Hub da campanha";
export const TWITTER_HANDLE = "@vytorcalixto";
export const MY_NAME = "Vytor Calixto";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
