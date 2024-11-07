export const UPLOAD_IMMAGINE = "UPLOAD_IMMAGINE";

const baseURL = import.meta.env.VITE_API_URL;

export const uploadAvatar = (immagine) => {
  return async (dispatch) => {
    const baseEndPoint = `${baseURL}/utenti/me`;
    const token = localStorage.getItem("authToken");
    const formData = new FormData();
    formData.append("immagine", immagine);

    try {
      const resp = await fetch(baseEndPoint, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!resp.ok) {
        throw new Error(`Failed to update immagine: ${resp.status} ${resp.statusText}`);
      }
      const result = await resp.json();
      console.log("Avatar modificato" + result);
      dispatch({ type: UPLOAD_IMMAGINE, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};
