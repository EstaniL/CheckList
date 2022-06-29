import React, {useState} from "react";
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4} from 'uuid'

function TareaFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    }

    const manejarEnvio = e =>{
        /*Para que toda la app no se vuelva a cargar cuando se envia el formulario se usa preventDefault()*/
        e.preventDefault();

        const tareaNueva = { /*Defino las propiedades que le quiero dar a los objetos tarea*/
            id: uuidv4(),
            texto: input, /*Texto tiene el valor que ingresa el usuario*/
            completada: false
        }

        props.onSubmit(tareaNueva); 

    }



    return(
        <form 
            className='tarea-formulario'
            onSubmit={manejarEnvio} /*Cuando se envie el formulario*/
            >
            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe una Tarea'
                name='texto' 
                onChange={manejarCambio}/*Cuando ocurra un cambio en el input se llama a manejarCambio*/
            
            />
         <button className='tarea-boton'>
             Agregar tarea
         </button>
        </form>
    );
}

export default TareaFormulario;