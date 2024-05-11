import Artista1 from '../img/artista-1.png';
import Artista2 from '../img/artista-2.png';
import Artista3 from '../img/artista-3.png';
import Artista4 from '../img/artista-4.png';
import Artista5 from '../img/artista-5.png';
import Artista6 from '../img/artista-6.png';


export default function Main(){
    return(
       <section className="section4">
           <h2>Melhores <span>Artistas</span></h2>
        <div className="container-1">
        <div className="image-1">
            <img src={Artista1} alt="artista-1"/>
        </div>
        <div className="description-1">
            <span>Mayk Brito</span>
            <span>80 Fotografias</span>
        </div>
        </div>

        <div className="container-2">
        <div className="image-2">
            <img src={Artista2} alt="artista-2"/>
        </div>
        <div className="description-2">
            <span>Jakeliny G.</span>
            <span>99 Fotografias</span>
        </div>
        </div>

        <div className="container-3">
        <div className="image-3">
            <img src={Artista3} alt="artista-3"/>
        </div>
        <div className="description-3">
            <span>João I.(Biro)</span>
            <span>50 Fotografias</span>
        </div>
        </div>
        <div className="container-4">
        <div className="image-4">
            <img src={Artista4} alt="artista-4"/>
        </div>
        <div className="description-4">
            <span>Tamires Santos</span>
            <span>43 Fotografias</span>
        </div>
        </div>
        <div className="container-5">
        <div className="image-5">
            <img src={Artista5} alt="artista-5"/>
        </div>
        <div className="description-5">
            <span>Ana Silva</span>
            <span>28 Fotografias</span>
        </div>
        </div>
        <div className="container-6">
        <div className="image-6">
            <img src={Artista6} alt="artista-6"/>
        </div>
        <div className="description-6">
            <span>Diego F.</span>
            <span>20 Fotografias</span>
        </div>
        </div>
        <div className="page">
            <p>Ver todos os artistas</p>&nbsp;&nbsp;&nbsp;&nbsp;
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.98811 4.20788L1.63474 14.3674L3.75438 15.6929L10.1078 5.53343L11.8123 12.9286L14.248 12.3671L11.585 0.81365L0.031564 3.47665L0.592988 5.91241L7.98811 4.20788Z" fill="#FF5B50"/>
        </svg>
        </div> 
       </section>
    );
}