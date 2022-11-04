import urlCat from "urlcat";

export const API_URLS = {
  characters: {
    all: (name: string, page: number) => urlCat(`/character`, { name, page }),
  },
};
