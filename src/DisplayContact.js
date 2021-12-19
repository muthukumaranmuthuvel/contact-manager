import React from 'react'

function DisplayContact({name,email}) {
    return (
        
        // <div className="displaycontact">
        //     <div className="displaycontact_info">
        //        {name &&
        //             <div className="info">
        //                 <h3>Name:</h3><h4>{name}</h4>
        //             </div>
        //        }
        //     </div>
        //     <div className="displaycontact_info">
        //     {email &&
        //             <div className="info">
        //             <h3>E-Mail:</h3><h4>{email}</h4>
        //             </div>
        //        }
        //     </div>
        // </div>
        <div >
  <div className="bg-white shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block" id="static-example" role="alert" aria-live="assertive" aria-atomic="true" data-mdb-autohide="false">
    <div className=" bg-white flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-gray-200 rounded-t-lg">
      <p className="font-bold text-blue-500 text-xl">{name.toUpperCase()}</p>
      <div className="flex items-center hover:cursor-pointer">
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
