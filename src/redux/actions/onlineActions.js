export const UPDATE_ONLINE_STATUS = "UPDATE_ONLINE_STATUS";

const baseURL = import.meta.env.VITE_API_URL;

export const updateOnlineStatus = (utenteId, online) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/utenti/${utenteId}/online`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ online }),
      });
      if (!resp.ok) {
        throw new Error(`Failed to update online status: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      dispatch({ type: UPDATE_ONLINE_STATUS, payload: result });
    } catch (error) {
      console.error(error);
    }
  };
};
