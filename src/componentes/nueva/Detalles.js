import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Contexto } from '../../servicios/Memoria';
import { actualizarMeta, crearMeta, eliminarMeta } from '../../servicios/Pedidos';
import estilos from './Detalles.module.css';

function Detalles() {

    const {id} = useParams();
    const [ form, setForm] = useState({
      detalles: "",
      periodo: "mes",
      eventos: 1,
      icono: "✈️",
      meta: 60,
      plazo: "2030-01-01",
      completado: 0
    });

    const [estado,enviar] = useContext((Contexto));

    const {detalles,periodo,eventos,icono,meta,plazo,completado} = form;

    const onChange = (event,prop) => {
        setForm(estado => ({...estado,[prop]:event.target.value}));
    }
    const metaMemoria = estado.objetos[id];
    useEffect(() => {
      // 
      if(!id) return;      
      if(!metaMemoria){
        return navegar('/lista');
      }

      setForm(metaMemoria); 
    },[id,metaMemoria]);

    const navegar = useNavigate();

    const crear = async() => {
        // // console.log('crear',form)
        // const nuevaMeta = await crearMeta();
        // enviar({ tipo: 'crear', meta: nuevaMeta});
        // navegar('/lista');
        const nuevaMeta = await crearMeta(form);
        enviar({ tipo: 'crear', meta: nuevaMeta});
        navegar('/lista');
    };

    const cancelar = () => {
      // console.log('crear',form)      
      navegar("/lista");
  };

    const actualizar = async() => {
    // enviar({ tipo: 'actualizar', meta: form});
    // // console.log('crear',form)      
    // navegar("/lista");
    const metaActualizada = await actualizarMeta(form);
    enviar({ tipo: 'actualizar', meta: metaActualizada});
    navegar("/lista");
};

const eliminar = async() => {

  // const idEliminar = await eliminarMeta(form.id);
  await eliminarMeta(form.id);
  enviar({ tipo: 'eliminar',id: form.id});
  // console.log('crear',form)      
  navegar("/lista");
};

    // const opcionesDeFrecuencia = ["día","semana","mes","año"];
    const iconos = ["🏃","📚","✈️"];

    return (
      <div className="tarjeta">
        <form className="p-4">
          <label className="label">
            Describe tu meta
            <input
              className="input"
              value={detalles}
              placeholder="ej. 52 caminatas"
              onChange={(e) => onChange(e, "detalles")}
            />
          </label>
          <label className="label">
            ¿Con que frecuencias deseas cumplir tu meta?{" "}
            <span>(ej. 1 vez a la semana)</span>
            <div className="flex mb-6">
              <input
                className="input mr-6"
                value={eventos}
                onChange={(e) => onChange(e, "eventos")}
                type="number"
              />
              <select
                className="input"
                value={periodo}
                onChange={(e) => onChange(e, "periodo")}
              >
                {/* {opcionesDeFrecuencia.map((option,index)=> <option key={index} value={option}> {option}</option>)} */}
                <option value="día">Al día</option>
                <option value="semana">A la semana</option>
                <option value="mes">Al mes</option>
                <option value="año">Al año</option>
              </select>
            </div>
          </label>
          <label className="label">
            ¿Cuantas veces deseas completar esta meta?
            <input
              className="input"
              value={meta}
              type="number"
              onChange={(e) => onChange(e, "meta")}
            />
          </label>
          <label className="label">
            ¿Tienes una fecha límite?
            <input
              className="input"
              value={plazo}
              type="date"
              onChange={(e) => onChange(e, "plazo")}
            />
          </label>
          <label className="label">
            ¿Cuantas veces haz completado ya esta meta?
            <input
              className="input"
              value={completado}
              onChange={(e) => onChange(e, "completado")}
              type="number"
            />
          </label>
          <label className="label">
            Escoge el icono para la meta
            <select
              className="input"
              value={icono}
              onChange={(e) => onChange(e, "icono")}
            >
              {iconos.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </form>
        <div className={estilos.botones} >
          {!id && <button className="boton boton--negro" onClick={crear}>Crear</button>}
          {id && <button className="boton boton--negro" onClick={actualizar}>Actualizar</button>}
          {id && <button className="boton boton--rojo" onClick={eliminar}>eliminar</button>}
          <button className="boton boton--gris" onClick={cancelar}>Cancelar</button>
        </div>
      </div>
    );
}

export default Detalles;