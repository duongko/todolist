import { useState } from "react"


const ListToDo = (props) => {
    const { listodo, handledelete } = props
    const [show, setshow] = useState()




    return (

        <div>
            {listodo.map((value, index) => {


                return (

                    <div key={value.id} style={{ display: "flex" }}>
                        <li >{value.todo} </li>
                        <span><button onClick={() => handledelete(value.id)}> xoá</button></span>

                    </div>

                )
            })}

        </div>
    )


}
export default ListToDo