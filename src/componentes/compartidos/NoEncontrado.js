import { useContext } from "react";
import { Contexto } from "../../servicios/Memoria";



function NoEncontrado() {

    const prueba = useContext((Contexto));
    
    return ( 
        <div>
            ERROR!! GAA! 1 {prueba}
        </div>
     );
}

export default NoEncontrado;