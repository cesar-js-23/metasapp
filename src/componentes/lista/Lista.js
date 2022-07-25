import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Contexto } from "../../servicios/Memoria";
import Meta from "./Meta";

// const listaMock = [
//   {
//     id: "1",
//     detalles: "Correr por 30 minutos",
//     periodo: "día",
//     eventos: 1,
//     icono: "🏃",
//     meta: 52,
//     plazo: "2030-01-01",
//     completado: 5,
//   },
//   {
//     id: "2",
//     detalles: "Leer libros",
//     periodo: "año",
//     eventos: 6,
//     icono: "📚",
//     meta: 12,
//     plazo: "2030-01-01",
//     completado: 1,
//   },
//   {
//     id: "3",
//     detalles: "Viajar a parques nacionales",
//     periodo: "mes",
//     eventos: 1,
//     icono: "✈️",
//     meta: 60,
//     plazo: "2030-01-01",
//     completado: 40,
//   },
// ];


function Lista() {

    const [estado,enviar] = useContext((Contexto));

    return ( 
        <>
            {/* {metas.map(meta => <Meta key={meta.id} {...meta}></Meta>)}   */}
            {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)}
            <Outlet />
        </>      
     );
}

export default Lista;