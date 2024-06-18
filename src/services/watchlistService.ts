import { api } from "@/configs";
import { User, WatchlistRequest } from "@/types";

const userString = localStorage.getItem("login_context");
const user: User = userString ? JSON.parse(userString) : null;
const sessionIdString = localStorage.getItem("tmdb_session_id");
const sessionId = sessionIdString ? JSON.parse(sessionIdString) : null;

export const addToWatchlist = (payload: WatchlistRequest) => {
  return api.post(`/account/${user?.id}/watchlist`, payload, {
    params: {
      session_id: sessionId,
    },
  });
};

export const getWatchlist = () => {
  return api.get(`/account/${user?.id}/watchlist/movies`, {
    params: {
      session_id: sessionId,
      sort_by: "created_at.asc",
    },
  });
};
