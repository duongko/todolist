import React, { useEffect, useState } from "react";

import Addtodo from "./Addtodo";
import ListToDo from "./ListToDo";

const Todo = () => {
    const [listodo, setlistodo] = useState([])
    const [addtodo, setaddtodo] = useState('')


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


    return (
        <div>
            <Addtodo
                handleaddtodo={handleaddtodo}
                addtodo={addtodo}
                setaddtodo={setaddtodo} />
            <ListToDo
                listodo={listodo}
                handledelete={handledelete}

            />
        </div>

    )


}
export default Todo