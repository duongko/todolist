import { useState } from "react"
import button from 'react-bootstrap/button';

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

                    <div key={value.id} style={{ display: "flex" }} className="item-list">


                        {isempty ?
                            <div >

                                <span className="size-list">{index + 1}-{value.todo} </span>

                                <span><button onClick={() => handleupdate(value)} className="edit"> Edit</button></span>
                            </div>

                            :
                            <div>

                                {value.id === edittodo.id ?


                                    <div >
                                        <span className="edit-update-cha"><input className="eidit-update" type="text" value={edittodo.todo} onChange={(event) => { handleedit(event) }} /> </span>
                                        <span><button onClick={() => handlesave(value)} className="edit"> save</button></span>
                                    </div>
                                    :
                                    <div >
                                        <span>{index + 1}-{value.todo} </span>
                                        <span><button variant="warning" onClick={() => handleupdate(value)} className="edit"> Edit</button></span>

                                    </div>

                                }
                            </div>



                        }




                        <span><button onClick={() => handledelete(value.id)} className="xoa"> xoá</button></span>



                    </div>

                )
            })}

        </div >
    )


}
export default ListToDo