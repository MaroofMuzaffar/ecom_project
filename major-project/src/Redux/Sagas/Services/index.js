//use this function if our form has only text data
export async function createRecords(collection, payload) {
  let response = await fetch(`${process.env.REACT_APP_SERVER}/${collection}`, {
      method: "POST",
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify(payload)
  })
  return await response.json()
}

//use this function if our form has file fields
export async function createMultipartRecords(collection, payload) {
  let response = await fetch(`${process.env.REACT_APP_SERVER}/${collection}`, {
      method: "POST",
      headers: {
      },
      body: payload
  })
  return await response.json()
}

export async function getRecords(collection) {
  let response = await fetch(`${process.env.REACT_APP_SERVER}/${collection}`, {
      method: "GET",
      headers: {
          "content-type": "application/json"
      }
  })
  return await response.json()
}


//use this function if our form has only text data
export async function updateRecords(collection, payload) {
  let response = await fetch(`${process.env.REACT_APP_SERVER}/${collection}/${payload.id}`, {
      method: "PUT",
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify(payload)
  })
  return response.json()
}

//use this function if our form has file fields
export async function updateMultipartRecords(collection, payload) {
  let response = await fetch(`${process.env.REACT_APP_SERVER}/${collection}/${payload.get("id")}`, {
      method: "PUT",
      headers: {
      },
      body: payload
  })
  return response.json()
}

export async function deleteRecords(collection, payload) {
  let response = await fetch(`${process.env.REACT_APP_SERVER}/${collection}/${payload.id}`, {
      method: "DELETE",
      headers: {
          "content-type": "application/json"
      }
  })
  return await response.json()
}