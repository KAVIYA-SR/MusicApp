import { createContext,useState} from "react";

const Data = createContext();
export const DataProvider = ({ children }) => { // Destructure children
      const [view,setView] = useState(true);
      const [view1,setView1] = useState(true);
      const [text,setText] = useState(true);
      const [list,setList]=useState([]);
      const [play,setPlay]=useState('');
      const items =[
        {
            id: "1",
            title: "Titanic",
            no: '57',
            imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',
            ratings: 4.8,
            numReviews: 200,
          },
        {
            id:"2",
            title:"Avatar",
            price:"42",
            no:'5',
            imageSrc:'https://p4.wallpaperbetter.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg',
            ratings: 4.8,
            numReviews: 250,
        },
        {
            id:"3",
            title:"Along For The Ride",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 290,
            imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
        },
    ]
    const songs=
    [
        {id:'1',
         playList:'https://open.spotify.com/album/3XwgFTxiWxep4s1VjPEaHs'    
        },
        {id:'2',
        playList:'https://open.spotify.com/album/1H81jGoWeLI8ufq42GfDPn'    
        },
        {id:'3',
        playList:'https://open.spotify.com/playlist/4JWL6fpnL8sjFNYUwF50l7'    
        }

    ]

      return (
        <Data.Provider value={{view,setView,view1,setView1,text,setText,list,setList,items,songs,play,setPlay}}>
          {children} {/* Render the child components */}
        </Data.Provider>
      );
}  
export default Data