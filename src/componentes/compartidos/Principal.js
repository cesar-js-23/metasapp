import estilos from './Principal.module.css';
import Vinculo from './Vinculo';
import {ReactComponent as ListaSVG} from '../../img/date.svg';
import {ReactComponent as NuevaSVG} from '../../img/add-new.svg';

function Principal({ children }) {
    return (
      <div className={estilos.principal }>   
        <aside className={estilos.aside}>
            <Vinculo  href="/lista" texto="Lista de Metas">
              <ListaSVG className='h-8 w-8'/>
            </Vinculo>
            <Vinculo href="/crear" texto="Nueva Meta">
              <NuevaSVG className="h-8 w-8 "/>
            </Vinculo>
        </aside>
        <main className={estilos.main + " nm-convex-gray-100"}>
            { children }
        </main>
      </div>
    );
  }
  
  export default Principal;
  