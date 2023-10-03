import { createContext,useState} from "react";

const Data = createContext();
export const DataProvider = ({ children }) => { // Destructure children
      const [view,setView] = useState(true);
      const [view1,setView1] = useState(true);
      return (
        <Data.Provider value={{view,setView,view1,setView1}}>
          {children} {/* Render the child components */}
        </Data.Provider>
      );
}  
export default Data