import { createContext, useReducer } from 'react';

export const Contexto = createContext(null);

// const listaMock = [
//     {
//       id: "1",
//       detalles: "Correr por 30 minutos",
//       periodo: "día",
//       eventos: 1,
//       icono: "🏃",
//       meta: 52,
//       plazo: "2030-01-01",
//       completado: 5,
//     },
//     {
//       id: "2",
//       detalles: "Leer libros",
//       periodo: "año",
//       eventos: 6,
//       icono: "📚",
//       meta: 12,
//       plazo: "2030-01-01",
//       completado: 1,
//     },
//     {
//       id: "3",
//       detalles: "Viajar a parques nacionales",
//       periodo: "mes",
//       eventos: 1,
//       icono: "✈️",
//       meta: 60,
//       plazo: "2030-01-01",
//       completado: 40,
//     },
//   ];

  let memoria = localStorage.getItem('metas');

  const estadoInicial = memoria
    ? JSON.parse(memoria)
    : {
        orden: [],
        objetos: {}
    };

  // const estadoInicial = {
  //   orden: [],
  //   objetos: {}
  // }

  function reductor(estado, accion){
    switch(accion.tipo){
        case 'colocar':{
            const metas = accion.metas;
            const nuevoEstado = {
                orden: metas.map(meta => meta.id),
                objetos:metas.reduce((objeto,meta) => ({...objeto, [meta.id]: meta}),{})
            };
            localStorage.setItem('metas',JSON.stringify(nuevoEstado));
            console.log('Bebito Fiu fiu2',nuevoEstado);
            return nuevoEstado;
        };
        case 'crear':{
            // const id = accion.meta.id;
            console.log('acction',accion)
            console.log('acction de meta',accion.meta)
            const id = String(Math.random());            
            const nuevoEstado = {
              orden: [...estado.orden, id],
              objetos: {
                // ...accion.meta,
                ...estado.objetos,
                // [id]: accion.meta,
                // [id]: id,
                [id]: accion.meta,
              },
            };
            nuevoEstado.objetos[id].id = id;
            console.log('pruebita',nuevoEstado.objetos[id].detalles)            
            localStorage.setItem('metas',JSON.stringify(nuevoEstado));
            console.log('Bebito Fiu fiu',nuevoEstado);
            console.log('PORFAVOR SAL ID: ', id)
            return nuevoEstado;
        };
        case 'actualizar':{
          // const id = accion.meta.id;
          const id = accion.meta.id;
          estado.objetos[id] = {
              ...estado.objetos[id],              
              ...accion.meta
              }
          
          const nuevoEstado = { ... estado };
          localStorage.setItem('metas',JSON.stringify(nuevoEstado));
          return nuevoEstado;
      };
      case 'eliminar':{
        // const id = accion.meta.id;
        const id = accion.id;
        const nuevoOrden = estado.orden.filter( item => item !== id );
        delete estado.objetos[id];
        const nuevoEstado = {
          orden: nuevoOrden,
          objetos: estado.objetos
        };
        localStorage.setItem('metas',JSON.stringify(nuevoEstado));
        return nuevoEstado;
    };
    default:
      throw new Error();

    }
  }

  // reductor(estadoInicial,{tipo: 'colocar', metas: listaMock});
  // const metas = reductor(estadoInicial,{tipo: 'colocar', metas: listaMock});

  // console.log(reductor(estadoInicial,{tipo: 'colocar', metas: listaMock}));


function Memoria({children}) {
  // const [estado, enviar] = useReducer(reductor, metas)
    const [estado, enviar] = useReducer(reductor, estadoInicial)

    return ( 
        <Contexto.Provider value={[estado,enviar]}>
            { children }
        </Contexto.Provider>
     );
}

export default Memoria;