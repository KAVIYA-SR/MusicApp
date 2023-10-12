import React from 'react'
import {useContext} from 'react';
import ProductCard from './ProductCard'
import {Row, Col} from 'react-bootstrap';
import '../style/free.css'
import NavComp from './NavComp';
import Data from '../context/Data';
import SongCard from './SongCard';

const Yearly = () => {
    const {text,list} =useContext(Data);
    const items =[
        {
            id: "1",
            title: "",
            no: '5',
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
        {
            id:"4",
            title:"Along For The Ride",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 290,
            imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
        },
        {
            id:"5",
            title:"Along For The Ride",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 290,
            imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
        },
        {
            id:"6",
            title:"Along For The Ride",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 290,
            imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
        },
        {
            id:"7",
            title:"Along For The Ride",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 290,
            imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
        },
        {
            id:"8",
            title:"Along For The Ride",
            price:"42",
            no:'5',
            ratings: 4.8,
            numReviews: 290,
            imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
        }
    ]
    const songs =[
        {
            id:'1',
            track :[
                {songid:'1',songsrc:'MusicApp\\src\\song\\titanic\\Titanic.mp3',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                }
            ]
        },
        {
            id:'2',
            imageSrc:'https://p4.wallpaperbetter.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg',
            track :[
                {songid:'5',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://p4.wallpaperbetter.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg',
                title :'',
                },
                {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://p4.wallpaperbetter.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg',
                title :'',
                },
                {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://p4.wallpaperbetter.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg',
                title :'',
                },
                {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://p4.wallpaperbetter.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg',
                title :'',
                
            }
            ]
        },
        {
            id:'3',
            track :[
                {songid:'7',
                songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            },
                {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            },
                {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            },
                {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            }
            ]
        },
        {
            id:'4',
            track :[
                {songid:'7',
                songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            },
                {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            },
                {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            },
                {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            }
            ]
        },
        {
            id:'5',
            track :[
                {songid:'7',
                songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            },
                {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            },
                {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            },
                {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgYwgIPkLv7Zxu6ygYW-A1cMEA7Z9UlzfZgTfldahyNFhYdevsbahd1nFCCI5S1otUBA&usqp=CAU',
                title :'',
            }
            ]
        },
        {
            id:'6',
            track :[
                {songid:'1',songsrc:'MusicApp\\src\\song\\titanic\\Titanic.mp3',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                }
            ]
        },
        {
            id:'7',
            track :[
                {songid:'1',songsrc:'MusicApp\\src\\song\\titanic\\Titanic.mp3',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                }
            ]
        },
        {
            id:'8',
            track :[
                {songid:'1',songsrc:'MusicApp\\src\\song\\titanic\\Titanic.mp3',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'2',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'3',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                },
                {songid:'4',songsrc:'https://drive.google.com/file/d/1gY1sDYVDeD7gPgGx8jkQa78MxtrcjLsw/view?usp=sharing',
                imageSrc: 'https://flxt.tmsimg.com/assets/p20056_v_v8_ab.jpg',title :'',
                }
            ]
        },
    ]
  return (
    <>
        <NavComp />
        <div className='product' style={{margin:'20px',display : text ?'block' :'none'}}>
            <h1 align="center">Enjoy By Hearing Free Music!</h1>
            <Row xs={1} md={4} className='g-4'>{
                items.map((product) =>(
                    <Col align="center" key={product.id}>
                        <ProductCard 
                            product={product} 
                            songs={songs}
                            
                        />
                    </Col>
                ))
            }
            </Row>
        </div>
        <div className='product' style={{margin:'20px',display : !text ?'block' :'none'}}>
            <h1 align="center">Enjoy Your One Month Pack...!</h1>
            <Row xs={1} md={4} className='g-4'>{
                list.map((product) =>(
                    <Col align="center" key={product.id}>
                        <SongCard product={product}/>
                    </Col>
                ))
            }
            </Row>
        </div>
       
    </>
  )
}

export default Yearly