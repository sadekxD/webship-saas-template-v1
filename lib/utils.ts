export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const DOMAIN =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_APP_NAME;

export const getSearchParams = (url: string) => {
  // Create a params object
  let params = {} as Record<string, string>;

  new URL(url).searchParams.forEach(function (val, key) {
    params[key] = val;
  });

  return params;
};
