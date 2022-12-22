import { createContext } from "react";

const Context = createContext();

const FunctionProvider = ({children}) => {
   const name = 'Ashish';
   const callEvent = (event)=>{
        event.preventDefault();
   };

    return (
        <Context.Provider value={{name , callEvent}}>
            {children}
        </Context.Provider> 
    )

};

export {FunctionProvider};

export default Context;