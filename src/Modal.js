import React from 'react'
import "./DisplayContact.css";
function Modal(props) {
    return (
        <div className=" flex justify-center items-center w-96 px-4 py-4 bg-gray-300 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg flex-col">
            <div className="mt-3 font-bold mx-auto">
                <p>Are you Sure you want to delete {props.deleteItem.name}?</p>
            </div>
            <div className=" mt-3 flex justify-between">
                <button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={()=>props.close(false)}>NO</button>
                <button 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={()=>{
                    props.removeContactHandler(props.deleteItem.id)
                    props.setDeleteItem("");
                    props.close(false)
                    }}>YES</button>
            </div>
        </div>
    )
}

export default Modal
