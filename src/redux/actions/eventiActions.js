export const GET_EVENTI = "GET_EVENTI";
export const ADD_EVENTO = "ADD_EVENTO";
export const DELETE_EVENTO = "DELETE_EVENTO";
export const ADD_EVENTO_ERROR = "ADD_EVENTO_ERROR";
export const GET_EVENTO = "GET_EVENTO";

const baseURL = import.meta.env.VITE_API_URL;

export const getEventi = () => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/eventi`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!resp.ok) {
        throw new Error(`Failed to fetch eventi: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      dispatch({ type: GET_EVENTI, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getEvento = (eventoId) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/eventi/${eventoId}`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!resp.ok) {
        throw new Error(`Failed to fetch evento: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      dispatch({ type: GET_EVENTO, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const creaEvento = (eventoPayload) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/eventi`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventoPayload),
      });
      if (!resp.ok) {
        throw new Error(`Failed to fetch eventi: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      dispatch({ type: ADD_EVENTO, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};
