import { api } from "@/configs";

const sessionIdString = localStorage.getItem("tmdb_session_id");
const sessionId = sessionIdString ? JSON.parse(sessionIdString) : null;

export const getRequestToken = async () => {
  try {
    const res = await api.get("/authentication/token/new");
    return res.data.request_token;
  } catch (error) {
    console.log(error);
  }
};

export const createSession = async (requestToken: string) => {
  const baseOrigin = window.location.origin;

  try {
    const res = await api.post("/authentication/session/new", {
      request_token: requestToken,
    });
    localStorage.setItem("tmdb_session_id", JSON.stringify(res.data.session_id));
    window.location.href = baseOrigin;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSession = (sessionId: string) => {
  return api.delete(`/authentication/session`, {
    params: {
      session_id: sessionId,
    },
  });
};

export const getAccountDetails = async () => {
  try {
    const res = await api.get(`/account`, {
      params: {
        session_id: sessionId,
      },
    });
    localStorage.setItem("login_context", JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};
