const BASE_URL = import.meta.env.BASE_URL
export function hrefWithBaseURL (url: string) {
  return BASE_URL + url
}

