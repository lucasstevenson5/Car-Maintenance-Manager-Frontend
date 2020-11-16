import React from 'react';

import { Link } from 'react-router-dom';

function MaintenanceList(props) {
    return (
        <div className="m-2 border-2 border-black p-2 bg-starblue text-center w-3/5 max-w-md">
            <span className="text-gainsboro">Type of Maintenance: </span>{props.maintenanceItem.itemDescription}<br />
            <span className="text-gainsboro">Miles on Car: </span>{props.maintenanceItem.carMiles} miles<br />
            <span className="text-gainsboro">Notes: </span>{props.maintenanceItem.notes}<br /><br />
            <Link to={"/profile/car/" + props.carId + "/maintenanceItem/" + props.maintenanceItem.id} 
                className="hover:text-gainsboro hover:underline"
            >
                    View Details
            </Link>
        </div>
    )
}

export default MaintenanceList;