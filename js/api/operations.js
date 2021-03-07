import {API_KEY, API_URL} from "./constants";


const getOperations = async (id, successCallback) => {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
        headers: {
          Authorization: API_KEY,
        },
      });
  
      const data = await response.json();
  
      if (data.error || typeof successCallback !== 'function') {
        throw new Error('Błąd!');
      }
  
      successCallback(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  
const deleteOperation = async (id) => {
  try {
    const response = await fetch(`${API_URL}/operations/${id}`, {
      headers: {
        Authorization: API_KEY
      },
      method: "DELETE"
    })

  } catch (err) {
    console.log(err);
  }
}

export {getOperations, deleteOperation};
