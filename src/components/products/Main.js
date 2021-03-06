import React from 'react';
import { NavLink, Route, HashRouter, Link } from 'react-router-dom';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Products from '../../pages/Products';
import Support from '../../pages/Support';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeGif from '../../images/gif/Inicio.gif';
import ProductsGif from '../../images/gif/producto.gif';
import ProfileGif from '../../images/gif/perfil.gif';
import SupportGif from '../../images/gif/soporte.gif';
import CloseGif from '../../images/gif/cerrar-sesión.gif';
import useSound from 'use-sound';
import HomeSound from './../../audio/inicio.mp4'
import ProductSound from './../../audio/productos.mp4'
import ProfileSound from './../../audio/Perfil.mp4'
import SupportSound from './../../audio/soporte.mp4'
import CloseSound from './../../audio/cerrar-sesión.mp4'


import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default function Main() {

    const [play] = useSound(HomeSound);
    const [play1] = useSound(ProductSound);
    const [play2] = useSound(ProfileSound);
    const [play3] = useSound(SupportSound);
    const [play4] = useSound(CloseSound);

    let login;
    let perfil;
    let cerrar;

    if(cookies.get('username')) {
        login = <li className='item d-flex align-items-center nav-user-avatar position-relative'><div className='user-avatar mr-3'></div> ¡Hola!, {cookies.get('username')}</li>;
        perfil = <NavLink onClick={play2} to='/perfil' className='text-decoration-none section-three position-relative d-flex'>
        <div className='ml-5 d-flex align-items-center'>
            <i class="fas fa-user mr-3 icon-list-nav"></i><li className='item nav-section'>Perfil</li>
        </div>
        <span className='Tooltip-acces-menu'> <img className="tooltip-img-acces" src={ProfileGif} alt="" /></span>
    </NavLink>;

    cerrar = <NavLink onClick={play4} to='/soporte' className='text-decoration-none section-five position-relative d-flex'>
    <div className='ml-5 d-flex align-items-center' onClick={logOut}>
        <i class="fas fa-sign-out-alt mr-3 icon-list-nav"></i><li className='item nav-section'>Cerrar sesión</li>
    </div>
    <span className='Tooltip-acces-menu'> <img className="tooltip-img-acces" src={CloseGif} alt="" /></span>
</NavLink>;
    }

    else {
        login = <NavLink to='/login'><li className='item d-flex align-items-center nav-user-avatar position-relative'>INICIAR SESIÓN</li></NavLink>;
    }

    function logOut() {
        cookies.remove('id', { path: "/" });
        cookies.remove('firstname', { path: "/" });
        cookies.remove('lastname', { path: "/" });
        cookies.remove('email', { path: "/" });
        cookies.remove('username', { path: "/" });
        cookies.remove('usertype', { path: "/" });
        window.location.href = './';
    }

    return (
        <HashRouter>
            <section className='app'>
                <ul className='navbar p-0 mt-0 d-flex flex-column flex-reverse position-fixed nav-style
                justify-content-center position-relative'>
                    {login}
                    <div className='line-section position-relative'></div>
                    <div className='line-section-two position-relative'></div>
                    <div className='align-items-center'>
                        <NavLink onClick={play} exact to='/' className='text-decoration-none section-one position-relative d-flex'>
                            <div className='ml-5 d-flex align-items-center'>
                                <i class="fas fa-home mr-3 icon-list-nav"></i><li className='item nav-section'>Home</li>
                                <span className='Tooltip-acces-menu'> <img className="tooltip-img-acces" src={HomeGif} alt="" /></span>
                            </div>
                        </NavLink>

                        <NavLink onClick={play1} to='/productos' className='text-decoration-none section-two position-relative d-flex'>
                            <div className='ml-5 d-flex align-items-center'>
                                <i class="fas fa-shopping-cart mr-3 icon-list-nav ">
                                </i><li className='item nav-section'>Productos</li>
                                <span className='Tooltip-acces-menu'> <img className="tooltip-img-acces" src={ProductsGif} alt="" /></span>
                            </div>
                        </NavLink>

                        {perfil}

                        <NavLink onClick={play3} to='/soporte' className='text-decoration-none section-four position-relative d-flex' >
                            <div className='ml-5 d-flex align-items-center'>
                                <i class="fas fa-question-circle mr-3 icon-list-nav"></i><li className='item nav-section'>Soporte</li>
                            </div>
                            <span className='Tooltip-acces-menu'> <img className="tooltip-img-acces" src={SupportGif} alt="" /></span>
                        </NavLink>

                        {cerrar}
                    </div>
                </ul>
                <div className='content'>
                    <Route exact path='/' component={Home} />
                    <Route path='/perfil' component={Profile} />
                    <Route path='/productos' component={Products} />
                    <Route path='/soporte' component={Support} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </div>
            </section>
        </HashRouter>
    )
}