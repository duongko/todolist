import React, { useEffect, useState } from "react";

import Addtodo from "./Addtodo";
import ListToDo from "./ListToDo";

const Todo = () => {
    const initialState = JSON.parse(localStorage.getItem('listodo')) || [];
    const [listodo, setlistodo] = useState(initialState)
    const [addtodo, setaddtodo] = useState('')

    const [edittodo, setedittodo] = useState('')

    const handleaddtodo = () => {
        if (!addtodo) {
            return
        }



        setlistodo([addtodo, ...listodo])
        setaddtodo('')




    }
    const handledelete = (index) => {
        const removedArr = listodo.filter((listodo) => listodo.id !== index);

        setlistodo(removedArr);
        console.log("phần tử xoá", index)

    }


    /////////////


    useEffect(() => {
        localStorage.setItem("listodo", JSON.stringify(listodo))
    }, [listodo])



    return (
        <div>
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