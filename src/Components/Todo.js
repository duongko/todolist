import React, { useEffect, useState } from "react";

import Addtodo from "./Addtodo";
import ListToDo from "./ListToDo";


const Todo = () => {
    const initialState = JSON.parse(localStorage.getItem('listodos')) || [];
    //lấy dữ liệu từ localStorange


    console.log("khi dc lay ve", initialState)
    const [listodo, setlistodo] = useState(initialState)
    const [addtodo, setaddtodo] = useState('')

    const [edittodo, setedittodo] = useState('')

    const handleaddtodo = () => {
        if (!addtodo) {
            return
        }



        setlistodo([...listodo, addtodo])
        setaddtodo('')




    }
    const handledelete = (index) => {
        const removedArr = listodo.filter((listodo) => listodo.id !== index);

        setlistodo(removedArr);
        console.log("phần tử xoá", index)

    }


    /////////////


    useEffect(() => {
        const post = localStorage.setItem("listodos", JSON.stringify(listodo))

        console.log("useEffect")
    }, [listodo])

    console.log("render")

    return (
        <div className="container">

            <h2>Todo-List</h2>

            <Addtodo
                handleaddtodo={handleaddtodo}
                addtodo={addtodo}
                setaddtodo={setaddtodo}

            />
            <ListToDo
                listodo={listodo}
                handledelete={handledelete}
                edittodo={edittodo}
                setedittodo={setedittodo}
                setlistodo={setlistodo}


            />
        </div>

    )


}
export default Todo