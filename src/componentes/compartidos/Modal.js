// import { useContext } from "react";
import { useParams } from "react-router-dom";
// import { Contexto } from "../../servicios/Memoria";
import Detalles from "../nueva/Detalles";


function Modal({ children }) {

    // const {id} = useParams();
    // const [estado,enviar] = useContext((Contexto));
    return (
      <div className="flex items-center fixed inset-0 bg-gray-500 bg-opacity-75">
        {/* {JSON.stringify(estado.objetos[id])} */}
        <div className="mx-auto">
          {/* <Detalles></Detalles> */}
          { children }
        </div>
      </div>
    );
}

export default Modal;