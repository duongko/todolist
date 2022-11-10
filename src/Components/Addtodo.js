import React from "react";

const Addtodo = (props) => {
    const { listodo, addtodo, setaddtodo, handleaddtodo } = props

    const handletodo = (event) => {
        console.log("giá tri input: ", event.target.value)

        setaddtodo({
            id: Math.floor(Math.random() * 100) + 1,
            todo: event.target.value
        })



    }


    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control"
                    aria-label="Recipient's username" aria-describedby="button-addon2"
                    value={!addtodo ? '' : addtodo.todo} onChange={(event) => handletodo(event)}
                />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                    onClick={() => handleaddtodo()}
                >Button</button>
            </div>
        </div>
    )
}
export default Addtodo