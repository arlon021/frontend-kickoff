export const BASE_URL = 'http://localhost:3000';

export async function getTodos(){
    const response = await fetch(`${BASE_URL}/todo`);
    return await response.json();
}

export async function save(todo){
    const response = await fetch(`${BASE_URL}/todo`,{
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': 'application/json'
        } 
    });
    return await response.json();
}

export async function deleteItem(id){
    const response = await fetch(`${BASE_URL}/todo/${id}`, {method: 'DELETE'});
    return await response.json();
}

export async function updateItem(todo){
    const response = await fetch(`${BASE_URL}/todo/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return await response.json();
}