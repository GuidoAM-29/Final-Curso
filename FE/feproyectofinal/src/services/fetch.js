async function postData(endpoint,obj) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        const data = await peticion.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}

export async function postDataAutenticado(endpoint,obj) {

  const tok = localStorage.getItem("token")
  console.log("ESTOY AQUI",tok);
  
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(obj)
        })
        const data = await peticion.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}

async function getData(endpoint) {
  try {
    const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const respuesta = await peticion.json();
    
    return respuesta;
  } catch (error) {
    console.error(error);
  }
}

async function getDataAutenticado(endpoint) {
    try {
    const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });

    const respuesta = await peticion.json();
    
    return respuesta;
  } catch (error) {
    console.error(error);
  }
  
}

async function deleteDataAutenticado(endpoint) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        });
        if (peticion.status === 204) {
            return {};
        }
        const data = await peticion.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function patchDataAutenticado(endpoint,obj) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(obj)
        });
        const data = await peticion.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}
export {getData,postData,getDataAutenticado,deleteDataAutenticado,patchDataAutenticado};