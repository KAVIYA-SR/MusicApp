import { createContext} from "react";

const Data = createContext();
export const DataProvider = ({ children }) => { // Destructure children
        var view=true
        function Changeview(){
            
            view=!view
            console.log(view)
        }
      return (
        <Data.Provider value={{view,Changeview}}>
          {children} {/* Render the child components */}
        </Data.Provider>
      );
}  
export default Data