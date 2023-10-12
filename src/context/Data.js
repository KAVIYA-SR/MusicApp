import { createContext,useState} from "react";

const Data = createContext();
export const DataProvider = ({ children }) => { // Destructure children
      const [view,setView] = useState(true);
      const [view1,setView1] = useState(true);
      const [text,setText] = useState(true);
      const [list,setList]=useState([{songid:'1',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
      {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
      {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'},
      {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing'}]);
      return (
        <Data.Provider value={{view,setView,view1,setView1,text,setText,list,setList}}>
          {children} {/* Render the child components */}
        </Data.Provider>
      );
}  
export default Data