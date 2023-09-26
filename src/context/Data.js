import { createContext,useState} from "react";

const Data = createContext();
export const DataProvider = ({ children }) => { // Destructure children
      const [view,setView] = useState(true);
      return (
        <Data.Provider value={{view,setView}}>
          {children} {/* Render the child components */}
        </Data.Provider>
      );
}  
export default Data