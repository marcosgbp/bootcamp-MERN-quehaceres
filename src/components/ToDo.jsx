import React, { useState, useEffect } from 'react';
import Form from './Form'
import List from './List';
const datos = [];

const Todo = () => {
    const [datosList, setDatosList] = useState(datos);
    useEffect(()=>{
        const lista = window.localStorage.getItem('ListaTodo');
        if(lista!=null){
            setDatosList(JSON.parse(lista));
        }
    }, []); 
    useEffect(()=>{
        const lista = JSON.stringify(datosList);
        window.localStorage.setItem('ListaTodo', lista)
    },[datosList]);
    const addTodo = (data) =>{
        data.id = Date.now();
        setDatosList([...datosList, data])
    }
    const checkTodo = (id)=>{
        let newData = [...datosList];
        let todo = newData.find((todo)=>todo.id===id);
        todo.completed = !todo.completed; 
        setDatosList(newData)
    }
    const deleteTodo = (id) => {
        let newData = datosList.filter(el=>el.id!==id);
        setDatosList(newData);
    }
  return (
    <div>
        <h1>Lista de tareas</h1>
        <Form addTodo={addTodo}/>
        <List data={datosList} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    </div>
  )
}

export default Todo