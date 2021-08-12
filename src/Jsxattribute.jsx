import React from 'react';

 const img1='https://picsum.photos/202/300'; 
 const img2='https://picsum.photos/200/301'; 
 const img3='https://picsum.photos/200/302'; 
 const link='https://picsum.photos/201/301'; 

 const photo = ()=>{
     return(
         <>
     <h1>Rondom Images</h1>
     <img src={img1} alt="img-1"/>
     <img src={img2} alt="img-2"/>
     <a href="https://www.youtube.com/" target="_blank"><img src={img3} alt="img-3"/></a>
     </>
     );
 }


 export default photo;