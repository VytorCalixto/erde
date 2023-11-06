// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Nações Pequenas";
export const SITE_DESCRIPTION =
  "Hub da campanha";
export const TWITTER_HANDLE = "@vytorcalixto";
export const MY_NAME = "Vytor Calixto";

// setup in astro.config.mjs
export const BASE_URL = import.meta.env.BASE_URL;
export const SITE_URL = new URL(import.meta.env.SITE).origin;

export const FULL_URL = `${SITE_URL}${BASE_URL}`;