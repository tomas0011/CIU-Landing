import './App.css';
import Icon from '@mdi/react';
import {
  mdiCart,
  mdiFacebook,
  mdiInstagram,
  mdiWhatsapp
} from '@mdi/js';
import burger1 from "./img/burger1.jpg";
import burger2 from "./img/burger2.jpg";
import burger3 from "./img/burger3.jpg";
import cheaps from "./img/cheaps.jpg";

function App() {
  return (
    <div className="App" class="bg-dark">
      <nav class="navbar navbar-expand-lg bg-black">
        <div class="container-fluid">
          <button class="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="text-warning mx-4" href="#">
            <Icon path={mdiCart} size={1} />
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav text-center">
              <li class="nav-item">
                <a class="nav-link link-warning" href="#">Recomendaciones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-warning" href="#">Hamburguesas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-warning" href="#">Papas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link link-warning" href="#">Bebidas</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <h1 class="m-5 text-center special-font title-l"><a class="link-warning link-underline-opacity-0" href="#">FitoBurger'S</a></h1>
        <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={burger1} class="d-block carrusel-image" alt="..."/>
            <div class="carousel-caption d-block carrusel-data px-4">
              <div class="d-inline d-sm-flex justify-content-around align-items-center">
                <h5 class="text-warning special-font title-m">Fitoburger Simple</h5>
                <h5 class="text-warning fs-1">8.600$</h5>
              </div>
              <p class="text-warning">Una hamburguesa con un medallon de carne vacuna.</p>
              <div class="d-flex justify-content-around">
                <button type="button" class="btn btn-success">Comprar</button>
                <button type="button" class="btn btn-warning">Agregar <Icon path={mdiCart} size={1} /></button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={burger2} class="d-block carrusel-image" alt="..."/>
            <div class="carousel-caption d-block carrusel-data px-4">
              <div class="d-inline d-sm-flex justify-content-around align-items-center">
                <h5 class="text-warning special-font title-m">Fitoburger C/Cebolla</h5>
                <h5 class="text-warning fs-1">8.800$</h5>
              </div>
              <p class="text-warning">Una hamburguesa con un medallon de carne vacuna y cebolla caramelizada.</p>
              <div class="d-flex justify-content-around">
                <button type="button" class="btn btn-success">Comprar</button>
                <button type="button" class="btn btn-warning">Agregar <Icon path={mdiCart} size={1} /></button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={burger3} class="d-block carrusel-image" alt="..."/>
            <div class="carousel-caption d-block carrusel-data px-4">
              <div class="d-inline d-sm-flex justify-content-around align-items-center">
                <h5 class="text-warning special-font title-m">Combo Fitoburger's</h5>
                <h5 class="text-warning fs-1">10.000$</h5>
              </div>
              <p class="text-warning">Dos hamburguesas con un medallon de carne vacuna.</p>
              <div class="d-flex justify-content-around">
                <button type="button" class="btn btn-success">Comprar</button>
                <button type="button" class="btn btn-warning">Agregar <Icon path={mdiCart} size={1} /></button>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={cheaps} class="d-block carrusel-image" alt="..."/>
            <div class="carousel-caption d-block carrusel-data px-4">
              <div class="d-inline d-sm-flex justify-content-around align-items-center">
                <h5 class="text-warning special-font title-m">Papas Fito's</h5>
                <h5 class="text-warning fs-1">3.100$</h5>
              </div>
              <p class="text-warning">Una porcion grande de papas fritas.</p>
              <div class="d-flex justify-content-around">
                <button type="button" class="btn btn-success">Comprar</button>
                <button type="button" class="btn btn-warning">Agregar <Icon path={mdiCart} size={1} /></button>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        <div class="text-warning py-3 d-flex justify-content-around">
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item list-group-item-action bg-transparent"><a class="link-warning link-underline-opacity-0" href="#"><Icon path={mdiFacebook} size={1} /></a></li>
            <li class="list-group-item list-group-item-action bg-transparent"><a class="link-warning link-underline-opacity-0" href="#"><Icon path={mdiInstagram} size={1} /></a></li>
            <li class="list-group-item list-group-item-action bg-transparent"><a class="link-warning link-underline-opacity-0" href="#"><Icon path={mdiWhatsapp} size={1} /></a></li>
          </ul>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item list-group-item-action bg-transparent"><a class="link-warning link-underline-opacity-0" href="#">ES</a></li>
            <li class="list-group-item list-group-item-action bg-transparent"><a class="link-warning link-underline-opacity-0" href="#">EN</a></li>
            <li class="list-group-item list-group-item-action bg-transparent"><a class="link-warning link-underline-opacity-0" href="#">BR</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
