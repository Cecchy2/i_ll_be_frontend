export const fetchMessaggi = (chatId) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_MESSAGGI_REQUEST" });
    try {
      const response = await fetch(`/api/chat/${chatId}/messaggi`);
      const data = await response.json();
      dispatch({ type: "FETCH_MESSAGGI_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_MESSAGGI_FAILURE", payload: error.message });
    }
  };
};

export const inviaMessaggio = (chatId, mittente, testo) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/chat/${chatId}/messaggi`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mittente, testo }),
      });
      const nuovoMessaggio = await response.json();
      dispatch({ type: "INVIA_MESSAGGIO", payload: nuovoMessaggio });
    } catch (error) {
      console.error("Errore invio messaggio:", error);
    }
  };
};
