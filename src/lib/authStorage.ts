import Cookie from "js-cookie";

const cookieKey = "auth-token";

export const setAccessToken = (token: string) => {
  Cookie.set(cookieKey, token, {
    expires: 1,
  });
};

export const getAccessToken = () => {
  const token = Cookie.get(cookieKey);
  return token ?? null;
};

export const removeAccessToken = () => {
  Cookie.remove(cookieKey);
};
