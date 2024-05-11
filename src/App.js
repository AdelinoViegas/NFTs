import React from 'react';
/* componentes*/
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Footer from './components/footer';
/*css*/
import  './styles/config.css';
import  './styles/section1.css';
import  './styles/section2.css';
import  './styles/section3.css';
import  './styles/section4.css';
import  './styles/footer.css';
import  './styles/media.css';

let focar = ()=>{
  let input = document.querySelector('.inputs input:first-child');   
  input.style.textAlign = 'left';
  input.removeAttribute('placeholder');
  input.style.paddingLeft = '6px';
}

let desfocar = ()=>{
  let input = document.querySelector('.inputs input:first-child'); 
  input.style.textAlign = 'center';
  input.setAttribute('placeholder','bft@rocketseat.com.br');
  input.style.paddingLeft = '0px';
}

window.onclick = ()=>{
    let header = document.querySelector('.section-main header');
    header.classList.toggle('active');  
}

export default function App(){

  return(
    <>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer focus={focar} blur={desfocar}/>
    </>

  );
}


