import { createContext,useState } from "react";
export const TodoListContext = createContext(null);
export function TodoListProvider({ children }) {
    const[cart,setCart] =useState([])
    
  return <TodoListContext.Provider value={{cart,setCart}}>{children}</TodoListContext.Provider>;
}
