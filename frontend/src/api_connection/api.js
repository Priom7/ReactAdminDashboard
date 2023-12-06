export const url = "http://localhost:8000/api";
export const OPEN_API_KEY = ""

export const setHeaders = () => {
  const headers = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  return headers;
};
