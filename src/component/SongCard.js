import React from 'react';


const SongCard = ({ product }) => {
  console.log(product.songsrc);
  const image ={
    minHeight:'270px',
    maxHeight:'270px',
    maxWidth:'100%'
}
  return (
    <div className='card' >
        <img style={image} src={product.imageSrc} className='card-img-top' alt={product.title}></img>
        <div className='card-body'>
            <h2 className='card-title'>{product.title}</h2>
            <audio style={{width:'100%'}} controls src={product.songsrc} />
        </div>
    </div>
  );
};

export default SongCard;
