import urlCat from "urlcat";

export const API_URLS = {
  characters: {
    all: (name: string, page: number) => urlCat(`/character`, { name, page }),
    single: (id: string) => urlCat(`/character/:id`, { id }),
  },
  episodes: {
    single: (id: string) => urlCat(`/episode/:id`, { id }),
  },
};
