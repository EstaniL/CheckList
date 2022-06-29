import React from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }){/*Sintaxis de desestructuracion*/
    return(
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className='tarea-texto'
                 onClick={() => completarTarea(id)}/*Cuando se haga click se llama a completarTarea y recibe el id para identificar que tarea debe porner como compl*/> 
                          
                {texto}
            </div>
            <div className='tarea-contenedor-iconos'
                 onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icono'/> 
            </div>
        </div>
       
    );
}

export default Tarea;