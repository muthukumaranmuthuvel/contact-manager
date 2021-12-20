import React from 'react'

function DisplayContact({name,email,removeContact,id}) {
  const removeContactHandler =()=>{
    removeContact(id)
  }
    return (
        <div >
  <div className="bg-white shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block" id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">
    <div className=" bg-white flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg">
      <p className="font-bold text-blue-500 text-xl">{name.toUpperCase()}</p>
      <div className="flex items-center hover:cursor-pointer" onClick={removeContactHandler}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </div>
    </div>
    <div className="flex p-3 bg-white rounded-b-lg break-words text-gray-700">
      {email}
    </div>
  </div>
</div>
    )
}

export default DisplayContact
