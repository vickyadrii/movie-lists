import { api } from "@/configs";

export const createSession = () => {
  return api.get("/authentication/token/new");
};
