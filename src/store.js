export const initialStore=()=>{
  return{
    people: [jsonify(fetch("https://www.swapi.tech/api/people/"))],
    planet: [jsonify("https://www.swapi.tech/api/planet/")],
    species: [jsonify("https://www.swapi.tech/api/species/")],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}