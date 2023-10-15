import { createContext,useState} from "react";

const Data = createContext();
export const DataProvider = ({ children }) => { // Destructure children
      const [view,setView] = useState(true);
      const [view1,setView1] = useState(true);
      const [text,setText] = useState(true);
      const [list,setList]=useState([]);
      const [play,setPlay]=useState('');
      const [playbg,setPlaybg]=useState('');
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
            imageSrc:'https://w0.peakpx.com/wallpaper/771/901/HD-wallpaper-avatar-the-way-of-water-2.jpg',
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
         ,
         background:'linear-gradient(to right top, #bb4545, #bb5050, #ba5a5a, #b96464, #b76e6e, #b87878, #b88181, #b88b8b, #bc9797, #bfa4a4, #c2b0b0, #c4bdbd)'  
        },
        {id:'2',
        playList:'https://open.spotify.com/playlist/1bFIa4jcI9XyCNmHLv6pQZ',
        background:'linear-gradient(to right top, #727272, #7d7d7d, #878787, #929292, #9d9d9d, #a9a9a9, #b4b4b4, #c0c0c0, #cfcfcf, #dfdfdf, #efefef, #ffffff)'
        },
        {id:'3',
        playList:'https://open.spotify.com/playlist/4JWL6fpnL8sjFNYUwF50l7'    ,
        background:'linear-gradient(to right top, #114567, #184a6b, #1e4e6e, #245372, #2a5875, #36627f, #426c88, #4d7792, #628aa4, #779eb7, #8cb2ca, #a2c6de)'
        }

    ]

      return (
        <Data.Provider value={{view,setView,view1,setView1,text,setText,list,setList,items,songs,play,setPlay,setPlaybg,playbg}}>
          {children} {/* Render the child components */}
        </Data.Provider>
      );
}  
export default Data