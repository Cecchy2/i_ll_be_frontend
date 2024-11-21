export const GET_UTENTI = "GET_UTENTI";

export const GET_AMICI = "GET_AMICI";
export const ADD_AMICO = "ADD_AMICO";
export const DELETE_AMICO = "DELETE_AMICO";
export const ADD_AMICO_ERROR = "ADD_AMICO_ERROR";
export const GET_AMICO = "GET_AMICO";

const baseURL = import.meta.env.VITE_API_URL;

export const addAmico = (utente1Id, utente2Id) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/amicizie`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          utente1: utente1Id,
          utente2: utente2Id,
        }),
      });
      if (!resp.ok) {
        const errorData = await resp.json();
        throw new Error(errorData.message || `Errore ${resp.status}: ${resp.statusText}`);
      }

      const result = await resp.json();
      dispatch({ type: ADD_AMICO, payload: result });
    } catch (error) {
      console.error(error.message);
      dispatch({ type: ADD_AMICO_ERROR, payload: error.message });
    }
  };
};

export const getAmici = (utenteId) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/amicizie/${utenteId}/amici`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!resp.ok) {
        throw new Error(`Failed to fetch amici: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      dispatch({ type: GET_AMICI, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAmico = (id) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/amicizie/${id}`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!resp.ok) {
        throw new Error(`Failed to delete amicizia: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      dispatch({ type: DELETE_AMICO, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUtentiByNome = (nome) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/utenti/nome/${nome}`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!resp.ok) {
        throw new Error(`Failed to fetch utenti: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      dispatch({ type: GET_UTENTI, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllUtenti = () => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/utenti`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!resp.ok) {
        throw new Error(`Failed to fetch utenti: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      dispatch({ type: GET_UTENTI, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAmico = (amicoId) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/amicizie/${amicoId}`;
    const token = localStorage.getItem("authToken");
    try {
      const resp = await fetch(baseEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!resp.ok) {
        throw new Error(`Failed to fetch amico: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      console.log(result);
      dispatch({ type: GET_AMICO, payload: result });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_AMICO, payload: null });
    }
  };
};
