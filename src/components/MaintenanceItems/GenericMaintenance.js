import React from 'react';

function GenericMaintenance(props) {
    return (
        <div className="bg-gainsboro text-center">
            <h1 className="text-lg">Maintenance Schedules</h1>
            <div>When both mileage or time frame is listed, follow whichever happens first</div>
            <div>
                Reference
                <a href="https://www.cargurus.com/Cars/articles/the_car_maintenance_schedule_you_should_follow"
                    target="_blank"
                >
                    <span className="text-shamrock underline mx-1">This Link</span>
                </a>
                for schedules listed below
            </div>
            <div>
                As always, follow your manufacturer suggestions as these are very generic guidelines and all cars are different
            </div>
            <div>
                <div>
                    <span className="text-starblue">Oil Change (conventional oil): </span> 3000 miles or 3 months
                </div>
                <div>
                    <span className="text-starblue">Oil Filter: </span> 3000 miles or 3 months
                </div>
                <div>
                    <span className="text-starblue">Engine Air Filter: </span> 15000 to 30000 miles
                </div>
                <div>
                    <span className="text-starblue">Fuel Filter: </span> as early as 30000 miles
                </div>
            </div>
        </div>
    )
}

export default GenericMaintenance;