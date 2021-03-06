import {API_KEY, API_URL} from "./constants";

const getTasks = async (successCallback) => {
    try {
      const response = await fetch(`${API_URL}/tasks`, {
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


const addTask = async (title, description, successCallback) => {

  try {
    let task = {
      title: title,
      description: description,
      status: "open"
    }
    const response = await fetch(`${API_URL}/tasks`, {
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(task)
    })

    const data = await response.json()

    if (data.error || typeof successCallback !== 'function') {
      throw new Error('Błąd!');
    }

    successCallback(data.data);

  } catch (err) {
    console.log(err);
  }
};


const deleteTask = async (id) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      headers: {
        "Authorization": API_KEY
      },
      method: "DELETE"
    })

  } catch (err) {
    console.log(err);
  }
}


const closeTask = async (title, description, id) => {
  try {
    let task = {
      title: title,
      description: description,
      status: "closed"
    }
    const response = await fetch(`${API_URL}/tasks/${id}`, {
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify(task)
    })

    // const data = await response.json()

    // if (data.error || typeof successCallback !== 'function') {
    //   throw new Error('Błąd!');
    // }

    // successCallback(data.data);

  } catch (err) {
    console.log(err);
  }
}
  
export {getTasks, addTask, deleteTask, closeTask};
