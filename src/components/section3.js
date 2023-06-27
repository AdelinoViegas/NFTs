
import Astronauta1 from '../img/astronauta-1.png';
import Astronauta2 from '../img/astronauta-2.png';
import Astronauta3 from '../img/astronauta-3.png';
import Astronauta4 from '../img/astronauta-4.png';

export default function section3(){
 return(
   <section className="section3">
    <h2><span>Populares</span> da semana</h2>

<div className="aside-left">
  <div className="container-1">
    <div className="text-1">
      <div className="description-1">
        <span>Astronauta 1</span>
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6468 6.01317L3.05785 22.9456L6.5906 25.1549L17.1796 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385901 4.79446L1.32161 8.85405L13.6468 6.01317Z" fill="white"/>
      </svg>
      </div>
      <div className="description-2">
        <span>Adelino Viegas</span>
        <span>1.50&nbsp;RKT</span>
      </div>
    </div>
    <img src={Astronauta1} alt="astronauta1"/>
  </div>
  <div className="container-2">
    <div className="text-2">
      <div className="description-3">
        <span>Astronauta 2</span>
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6468 6.01317L3.05785 22.9456L6.5906 25.1549L17.1796 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385901 4.79446L1.32161 8.85405L13.6468 6.01317Z" fill="white"/>
      </svg>
      </div>
      <div className="description-4">
        <span>Afonso Trindade</span>
        <span>3.75&nbsp;RKT</span>
      </div>
    </div>
    <img src={Astronauta2} alt="astronauta2"/>
  </div>
</div>
<div className="aside-right">
  <div className="container-3">
    <div className="text-3">
      <div className="description-5">
        <span>Astronauta 3</span>
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6468 6.01317L3.05785 22.9456L6.5906 25.1549L17.1796 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385901 4.79446L1.32161 8.85405L13.6468 6.01317Z" fill="white"/>
      </svg>
      </div>
      <div className="description-6">
        <span>Trindade Viegas</span>
        <span>2.0&nbsp;RKT</span>
      </div>
    </div>
    <img src={Astronauta3} alt="astronauta3"/>
  </div>
  <div className="container-4">
    <div className="text-4">
      <div className="description-7">
        <span>Astronauta 4</span>
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6468 6.01317L3.05785 22.9456L6.5906 25.1549L17.1796 8.22243L20.0204 20.5476L24.08 19.6119L19.6417 0.356124L0.385901 4.79446L1.32161 8.85405L13.6468 6.01317Z" fill="white"/>
      </svg>
      </div>
      <div className="description-8">
        <span>Viegas Adelino</span>
        <span>4.30&nbsp;RKT</span>
      </div>
    </div>
    <img src={Astronauta4} alt="astronauta4"/>
  </div>
</div>
   </section>
 );
}