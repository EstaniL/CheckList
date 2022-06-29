import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css'
import Tarea from "./Tarea";

function ListaDeTareas(){

    const [tareas, setTareas]= useState([]);/*El valor inicial de tareas es un arreglo vacio*/

    const agregarTarea = tarea =>{ /*Esta tarea es la que se crea en TareaFormulario, es enviada por props.onSubmit(tareaNueva)*/
        console.log(tarea);
        if (tarea.texto.trim()){/*Quiero ver si la propiedad texto del objeto tarea sacandole los espacios no esta vacia*/
            tarea.texto = tarea.texto.trim(); /*Si no esta vacia le saco los espacios vacios al final y adelante*/
            
            const tareasActualizadas = [tarea, ...tareas];
            /*Pongo la ultima tarea creado en la primera posicion de un arreglo y con ...tareas(spred) lo que hago es convertir las anteriores*/
            /*tareas de un arreglo a objetos inviduales del arreglo, que cada una ocupe una posicion individual*/
            setTareas(tareasActualizadas); /*Todo el arreglo anterior se manda a este tareas [tareas, setTareas]*/
        }
    }
    const eliminarTarea = id=>{
        const tareasActualizadas = tareas.filter(tareas => tareas.id !== id);
        /*Si el id es igual al que estoy pidiendo, no lo vas a meter en el arreglo*/
        setTareas(tareasActualizadas); /*Entonces al arreglo va a tener todas las tareas menos la filtrada*/
    }

    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tareas =>{
            if(tareas.id == id){ 
                tareas.completada = !tareas.completada /*Si tareas.completada es True la vamos a poner en false y viceversa*/
            }
            return tareas;
        });
        setTareas(tareasActualizadas);
    }

    return(
        <>
            <TareaFormulario onSubmit={agregarTarea} /*Paso la funcion agregarTarea a TareaFormulario*//>
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tareas) =>
                    <Tarea /*Estos son todos los props que recibe el componente Tarea*/
                        key={tareas.id}
                        id={tareas.id}
                        texto={tareas.texto}
                        completada={tareas.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}

                    />
                    
                    )
                }
            </div>
        </>
        
    );

}

export default ListaDeTareas;