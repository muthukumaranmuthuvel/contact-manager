import React from 'react'

function DisplayContact({name,phone}) {
    return (
        
        <div className="displaycontact">
            <div className="displaycontact_info">
               {name &&
                    <div className="info">
                        <h3>Name:</h3><h4>{name}</h4>
                    </div>
               }
            </div>
            <div className="displaycontact_info">
            {phone &&
                    <div className="info">
                    <h3>Phone:</h3><h4>{phone}</h4>
                    </div>
               }
            </div>
        </div>
    )
}

export default DisplayContact
