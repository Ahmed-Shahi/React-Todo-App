import React, { useState } from 'react'

export default function Todo() {

    let [List,setList] = useState([])
    let [input,setinput] = useState('')

    function AddItems(){
        let copyList = [...List]
        copyList.push(input) 
        setList(copyList)
        // console.log(copyList);
        setinput('');
        // input ko empty karny ky liy input tag mein value lagani ho gi
    }

    function Updateinput(e){
        setinput(e.target.value)
        // console.log(e.target.value);
    }

    function Delete(e){
        // idhar addItem wala hi kam kary gein
        let copyList = [...List]
        copyList.splice(e,1) 
        setList(copyList)
    }
    function Edit(e){
        prompt('UPDATE VALUE',e)
        
    }

    function DeleteAll(e){
        setList([])
    }
    return (
        <div>
            <h1>Todo App</h1>
            <input type="text" value={input} onChange={Updateinput} name="" id="" />
            <button onClick={AddItems} >ADD ITEMS</button>
            <button onClick={DeleteAll} >DELETE ALL</button>
            <ul>
                {
                List.map((v,i)=>{
                    return <li key={i}>
                        {v} 
                        <button onClick={()=> Delete(i)} >DELETE</button> 
                        {/* idhar 1 Arrow function create kia phir us mein return (Delete) funtion banaya hy  */}
                        <button onClick={()=> Edit(v)} >EDIT</button> 

                        </li>
                })
                }
            </ul>
        </div>
    )
}
