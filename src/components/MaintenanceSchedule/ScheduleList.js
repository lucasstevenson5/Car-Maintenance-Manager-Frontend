import React from 'react';

import { Link } from 'react-router-dom';

function ScheduleList(props) {
    return (
        <div className="m-2 border-2 border-black p-2 bg-starblue text-center w-3/5 max-w-md">
            <span className="text-gainsboro">Type of Maintenance: </span>{props.maintenanceSchedule.itemDescription}<br />
            <span className="text-gainsboro">Every: </span>{props.maintenanceSchedule.carMiles} miles<br />
            <span className="text-gainsboro">Notes: </span>{props.maintenanceSchedule.notes}<br /><br />
            <Link to={"/profile/car/" + props.carId + "/scheduleItem/" + props.maintenanceSchedule.id} 
                className="hover:text-gainsboro hover:underline"
            >
                    View Details
            </Link>
        </div>
    )
}

export default ScheduleList;