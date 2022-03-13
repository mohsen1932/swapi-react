export const extractIDFromURL = (url: string) => {
  if (url) return url.replace(/https:\/\/swapi.dev\/api\/films\/|\//g, "");
};
