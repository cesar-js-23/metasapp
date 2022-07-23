import './Encabezado.css';
// import {ReactComponent as Logo } from '../../img/123.jpg';
// import {ReactComponent as Perfil } from '../../img/img1.png';
import {ReactComponent as PerfilSVG} from '../../img/customer.svg';
import {ReactComponent as LogoSVG } from '../../img/fire.svg';
// import foto from '../../img/medical.svg';
// import perfil from '../../img/customer.svg';

function Encabezado() {
  return (
    <header className="encabezado">   
        <div className="contenedor">
            {/* <Logo /> */}
            {/* <img className="logo" src={foto}/>   */}
            <LogoSVG className="logo"/>
            <a href="/" className="app">Metas App</a>          
        </div>
        <nav className="vinculo">
            {/* <Perfil /> */}
            {/* <img className="h-10 w-10 mr-2" src={perfil}/>   */}
            <PerfilSVG className="h-10 w-10"/>
            {/* <a className="h-6 w-6 mr-5 " href="/perfil">Perfil</a> */}
        </nav>
    </header>
  );
}

export default Encabezado;
