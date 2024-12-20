export const GET_PROFILE = "GET_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

const baseURL = import.meta.env.VITE_API_URL;

export const getProfile = (id) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/utenti/${id}`;
    const token = localStorage.getItem("authToken");

    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!resp.ok) {
        throw new Error(`Failed to fetch profile: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      dispatch({ type: GET_PROFILE, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProfile = (utentePayload) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/utenti/me`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(utentePayload),
      });
      if (!resp.ok) {
        throw new Error(`Failed to fetch profile: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      dispatch({ type: UPDATE_PROFILE, payload: result });
      return { success: true, data: result };
    } catch (error) {
      console.error("Errore durante la modifica del profilo: ", error);
      return { success: false, message: "Errore durante la connessione al server." };
    }
  };
};
