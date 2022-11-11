import { useState } from "react"


const ListToDo = (props) => {
    const { listodo, handledelete, setedittodo, edittodo, setlistodo } = props
    const [show, setshow] = useState()
    const [valueupdate, setvalueupdate] = useState('')

    const handleupdate = (value) => {





        setedittodo(value)




    }
    const handleedit = (event) => {

        let edittodos = { ...edittodo }
        edittodos.todo = event.target.value

        setedittodo(edittodos)


        console.log("biến event là :", event.target.value)
    }
    const isempty = Object.keys(edittodo).length === 0
    console.log("kiểm tra obj là", isempty)

    const handlesave = (index) => {

        // console.log("value:", index)
        let listodos = [...listodo]
        const objindex = listodos.findIndex((p) => p.id === index.id);
        listodos[objindex].todo = [edittodo.todo];

        setedittodo('')

    }




    return (

        <div>
            {listodo.map((value, index) => {


                return (

                    <div key={value.id} style={{ display: "flex" }}>


                        {isempty ?
                            <div>

                                <span>{index + 1}-{value.todo} </span>

                                <span><button onClick={() => handleupdate(value)}> Edit</button></span>
                            </div>

                            :
                            <div>

                                {value.id === edittodo.id ?


                                    <div>
                                        <span><input type="text" value={edittodo.todo} onChange={(event) => { handleedit(event) }} /> </span>
                                        <span><button onClick={() => handlesave(value)}> save</button></span>
                                    </div>
                                    :
                                    <>
                                        <span>{index + 1}-{value.todo} </span>
                                        <span><button onClick={() => handleupdate(value)}> Edit</button></span>

                                    </>

                                }
                            </div>



                        }




                        <span><button onClick={() => handledelete(value.id)}> xoá</button></span>



                    </div>

                )
            })}

        </div>
    )


}
export default ListToDo