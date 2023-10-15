import { createContext,useState} from "react";

const Data = createContext();
export const DataProvider = ({ children }) => { // Destructure children
      const [view,setView] = useState(true);
      const [view1,setView1] = useState(true);
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
            no:'41',
            imageSrc:'https://w0.peakpx.com/wallpaper/771/901/HD-wallpaper-avatar-the-way-of-water-2.jpg',
            ratings: 4.5,
            numReviews: 250,
        },
        {
            id:"3",
            title:"Along For The Ride",
            no:'30',
            ratings: 4.7,
            numReviews: 290,
            imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
        },
    ]
    const songs=
    [
        {id:'1',
          playList:'https://open.spotify.com/album/3XwgFTxiWxep4s1VjPEaHs',
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
    const monthitems =[
      {
          id: "1",
          title: "Kushi",
          no: '6',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYwjZfHAPgk-zrPMm2Vs9AJEULHALerIRR_nUqqwSTyckKiaR5n2nrsnFbSPqw79_fuI&usqp=CAU',
          ratings: 4.9,
          numReviews: 240,
        },
      {
          id:"2",
          title:"Ena Solapogirai",
          no:'9',
          imageSrc:'https://akamaividz2.zee5.com/image/upload/w_504,h_756,c_scale,f_webp,q_auto:eco/resources/0-0-1z5130170/portrait/1920x77043e482f7776241ce879215e5e0985ccd.jpg',
          ratings: 4.5,
          numReviews: 280,
      },
      {
          id:"3",
          title:"Raja Rani",
          no:'7',
          ratings: 5,
          numReviews: 400,
          imageSrc:'https://m.media-amazon.com/images/S/pv-target-images/5d2a47078ae6f075c2b41bcdade317a1c30b9ad521249d8f0e844a8d276990e5.jpg',
      },
      {
          id:"4",
          title:"Mr&Mrs Ramachari",
          no:'6',
          ratings: 4.7,
          numReviews: 320,
          imageSrc:'https://cdn4.sharechat.com/MrandMsRamachari_3757fd0e_1627892939258_sc_cmprsd_40.jpg?tenant=sc&referrer=pwa-sharechat-service&f=rsd_40.jpg',
      },
      {
          id:"5",
          title:"Prithvi",
          no:'8',
          ratings: 4.8,
          numReviews: 280,
          imageSrc:'https://3.bp.blogspot.com/-JxZQwPdOY6Q/UEsD8L0jToI/AAAAAAAAAQo/rOn_8K-nIyU/s1600/prithvi-ias-10.jpg',
      }
  ]
  const monthsongs=
  [
      {id:'1',
        playList:'https://open.spotify.com/playlist/7nNKu4FCJ9hN8PSC9Zngko',
        background:'linear-gradient(to right top, #727272, #7d7d7d, #878787, #929292, #9d9d9d, #a9a9a9, #b4b4b4, #c0c0c0, #cfcfcf, #dfdfdf, #efefef, #ffffff)'  
      },
      {id:'2',
        playList:'https://open.spotify.com/album/4jVVQLUTDSOBfH8QbbrOyv',
        background:'linear-gradient(to right top, #0f3b7c, #215098, #3166b5, #3f7dd3, #4d95f2)'
      },
      {id:'3',
      playList:'https://open.spotify.com/album/1nOeFhmoJdycHgRtf8KDwA'    ,
      background:'linear-gradient(to right top, #727272, #7d7d7d, #878787, #929292, #9d9d9d, #a9a9a9, #b4b4b4, #c0c0c0, #cfcfcf, #dfdfdf, #efefef, #ffffff)'
      },
      {id:'4',
      playList:'https://open.spotify.com/album/02iPWp1ISQ0IykycFqRBaN'    ,
      background:'linear-gradient(to right top, #c91717, #cf1025, #d40b32, #d8083f, #dc0a4b, #da0d4d, #d71050, #d51352, #cd144b, #c51545, #bd153f, #b51639)'
      },
      {id:'5',
      playList:'https://open.spotify.com/album/0w1l7lqchuDo6xQVcCyCfD'    ,
      background:'linear-gradient(to right top, #424648, #505458, #616269, #737178, #877f87, #978e95, #a79da3, #b7acb2, #c6bfc5, #d7d3d8, #e8e7e9, #fbfbfb)'
      }

  ]
  const yearitems =[
    {
        id: "1",
        title: "Amar",
        no: '6',
        imageSrc: 'https://sund-images.sunnxt.com/87427/1920x1080_Amar_87427_7ba4223c-d964-454d-bbda-0a536d944aa6.jpg',
        ratings: 4.8,
        numReviews: 300,
      },
    {
        id:"2",
        title:"Yejamana",
        no:'8',
        imageSrc:'https://kannada.filmibeat.com/img/2019/01/ondumunjaneyajamana-5-1547882305.jpg',
        ratings: 4.9,
        numReviews: 290,
    },
    {
        id:"3",
        title:"Happy",
        no:'6',
        ratings: 4.5,
        numReviews: 390,
        imageSrc:'https://www.moviesavailableon.com/Images/movies/happybe_happy_m.jpg',
    },
    {
        id:"4",
        title:"Happy days",
        no:'7',
        ratings: 4.8,
        numReviews: 320,
        imageSrc:'https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/happy-days-et00000197-20-02-2021-06-23-35.jpg',
    },
    {
        id:"5",
        title:"Skanda",
        no:'5',
        ratings: 4.8,
        numReviews: 290,
        imageSrc:'https://static.toiimg.com/photo/103012669.cms',
    },
    {
        id:"6",
        title:"Oh Manapenne",
        no:'6',
        ratings: 4.9,
        numReviews: 350,
        imageSrc:'https://tamiladda.com/wp-content/uploads/2021/06/Oh-Manapenne-Movie-OTT-Release-Date.jpg',
    },
    {
        id:"7",
        title:"Ok kanmani",
        no:'9',
        ratings: 5,
        numReviews: 430,
        imageSrc:'https://steamuserimages-a.akamaihd.net/ugc/714160901661227792/5C9BBEAA7DDE568DFC891810E38C827B4D053087/?imw=512&imh=336&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
    },
    {
        id:"8",
        title:"Fault in our stars",
        no:'31',
        ratings: 4.8,
        numReviews:300,
        imageSrc:'https://qph.cf2.quoracdn.net/main-qimg-c0e19fc5167a2923fefc17a312b86d6c.webp',
    },
]
const yearsongs=
[
    {id:'1',
      playList:'https://open.spotify.com/album/0Rygk9ocxqUYWaGpuDq6xD',
      background: 'linear-gradient(to right top, #727272, #7d7d7d, #878787, #929292, #9d9d9d, #a9a9a9, #b4b4b4, #c0c0c0, #cfcfcf, #dfdfdf, #efefef, #ffffff)',  
    },
    {id:'2',
      playList:'https://open.spotify.com/album/2UYe0Qo6pisI59saQJr1N3',
      background:'linear-gradient(to right top, #424648, #505458, #616269, #737178, #877f87, #978e95, #a79da3, #b7acb2, #c6bfc5, #d7d3d8, #e8e7e9, #fbfbfb)'
    },
    {id:'3',
    playList:'https://open.spotify.com/album/3uwuEHWDG63T01gnWwJJSB'    ,
    background:'linear-gradient(to right top, #0c84be, #1482b8, #1b81b2, #217fad, #267da7, #2679a1, #26759c, #267196, #216a8f, #1b6488, #155d81, #0e577a)'
    },
    {id:'4',
    playList:'https://open.spotify.com/album/3zwlmA5XSHN0ovt9Y0Vkjk'    ,
    background:'linear-gradient(to right top, #723c47, #753d49, #773f4c, #7a404e, #7c4251, #844c5a, #8c5563, #945f6c, #a3747f, #b38992, #c29fa6, #d1b5ba)'
    },
    {id:'5',
    playList:'https://open.spotify.com/playlist/4PFbBQYV9YVqxadlBX03tI'    ,
    background:'linear-gradient(to right top, #424648, #505458, #616269, #737178, #877f87, #978e95, #a79da3, #b7acb2, #c6bfc5, #d7d3d8, #e8e7e9, #fbfbfb)'
    },
    {id:'6',
    playList:'https://open.spotify.com/album/3TFU98htALkNnzFMzHbWJR'    ,
    background:'linear-gradient(to right top, #107272, #2c8484, #429696, #57a9a9, #6bbcbc, #7bc5c6, #8bcecf, #9bd7d9, #aad8da, #b8d9db, #c5dadc, #d2dbdc)'
    },
    {id:'7',
    playList:'https://open.spotify.com/playlist/5dPzYwk9qExa3qiplChdO1'    ,
    background:'linear-gradient(to right top, #114567, #184a6b, #1e4e6e, #245372, #2a5875, #36627f, #426c88, #4d7792, #628aa4, #779eb7, #8cb2ca, #a2c6de)'
    },
    {id:'8',
    playList:'https://open.spotify.com/album/2Ik03PV94x2Ze6FoPp2RNP'    ,
    background:'linear-gradient(to right top, #443c17, #4d4624, #565031, #605a3e, #69644c, #6f6b55, #75715d, #7b7866, #7f7c6b, #838171, #888576, #8c8a7c)'
    }

]
      return (
        <Data.Provider value={{view,setView,view1,setView1,items,songs,play,setPlay,setPlaybg,monthitems,monthsongs,yearitems,yearsongs,playbg}}>
          {children}
        </Data.Provider>
      );
}  
export default Data