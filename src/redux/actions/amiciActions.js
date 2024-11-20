export const GET_UTENTI = "GET_UTENTI";

export const GET_AMICI = "GET_AMICI";
export const ADD_AMICO = "ADD_AMICO";
export const DELETE_AMICO = "DELETE_AMICO";

const baseURL = import.meta.env.VITE_API_URL;

export const addAmico = (amiciziaPayload) => {
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
        body: JSON.stringify(amiciziaPayload),
      });
      if (!resp.ok) {
        throw new Error(`Failed to add amicizia: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      dispatch({ type: ADD_AMICO, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAmici = () => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/amicizie`;
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
