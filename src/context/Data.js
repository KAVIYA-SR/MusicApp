import { createContext, useState } from "react";
import { view } from "../component/Product";

const Data = createContext();
export const DataProvider = ({ children }) => { // Destructure children
        var view=true
        function Changeview(){

            view=!view
        }
      return (
        <Data.Provider value={{view,Changeview}}>
          {children} {/* Render the child components */}
        </Data.Provider>
      );
}  
export default Data