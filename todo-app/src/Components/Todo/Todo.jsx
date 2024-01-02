import React, { useState } from 'react'

export default function Todo() {

    const [inp, setInp] = useState("")
    const [todos,setTodos]= useState([])
    return (
        <div>
            <h1>Todo App</h1>
            <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
            <button onClick={()=>{setTodos([...todos,inp])}}> Add Items</button>


        </div>
    )
}
