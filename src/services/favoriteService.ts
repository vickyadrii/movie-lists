import { api } from "@/configs";
import { User, FavoriteRequest } from "@/types";

const userString = localStorage.getItem("login_context");
const user: User = userString ? JSON.parse(userString) : null;
const sessionIdString = localStorage.getItem("tmdb_session_id");
const sessionId = sessionIdString ? JSON.parse(sessionIdString) : null;

export const addToFavorite = (payload: FavoriteRequest) => {
  return api.post(`/account/${user.id}/favorite`, payload, {
    params: {
      session_id: sessionId,
    },
  });
};

export const getFavorite = () => {
  return api.get(`/account/${user.id}/favorite/movies`, {
    params: {
      session_id: sessionId,
      sort_by: "created_at.asc",
    },
  });
};
