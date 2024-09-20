import { useState } from 'react';
import { ListaTareas } from './ListaTareas';
export const TodoApp = () => {

    const [nuevaTarea, setNuevatarea] = useState<string>('')
    const [listaTareas, setListaTareas] = useState<string[]>([])

    const handleAddTask = () => {
        if (nuevaTarea.trim() === '') return
        setListaTareas(tareaAnteriores => [...tareaAnteriores, nuevaTarea])
        setNuevatarea('')
    }

    const handleBorrarTarea = (index: number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index))
    }

    const handleCambiarSpan = () => {
        const titulo = document.getElementById('TS') as HTMLHeadingElement;
        const boton = document.getElementById('Magia') as HTMLButtonElement;

        boton.addEventListener('mouseenter', () => {
            
            titulo.textContent = " TypeScript";
            titulo.style.color = "#2F74C0";
        });

        boton.addEventListener('mouseleave', () => {
            titulo.textContent = " HTML";
            titulo.style.color = "#E44D26";
        });
    }

    return (
        <div>
            <h1>Lista de tareas<span id='TS'> HTML</span></h1>
            <div>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevatarea(e.target.value)}
                    placeholder="Nueva tarea"
                />
                <button id='Magia' onMouseOver={handleCambiarSpan} onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} ></ListaTareas>
        </div>
    )
}