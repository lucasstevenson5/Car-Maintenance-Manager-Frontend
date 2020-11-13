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
            <div className="mb-6">
                As always, follow your manufacturer suggestions as these are very generic guidelines and all cars are different
            </div>
            <div className="pb-10">
                <p>Regular Maintenance</p>
                <div>
                    <span className="text-starblue">Oil Change (conventional oil): </span> 3000 miles or 3 months
                </div>
                <div className="mb-6">
                    <span className="text-starblue">Oil Filter: </span> 3000 miles or 3 months
                </div>
                <p>Maintenance Around Every 30k Miles</p>
                <div>
                    <span className="text-starblue">Engine Air Filter: </span> 15000 to 30000 miles
                </div>
                <div className="mb-6">
                    <span className="text-starblue">Fuel Filter: </span> as early as 30000 miles
                </div>
                <p>Maintenance Around Every 60k Miles</p>
                <div>
                    <span className="text-starblue">Battery: </span> 40000 to 50000 miles or around 4 to 5 years
                </div>
                <div>
                    <span className="text-starblue">Brake Fluid Flush: </span> Anywhere between 20000 to 45000 depending on the manufacturer
                </div>
                <div>
                    <span className="text-starblue">Brake Pads/Shoes: </span> Listen for screeching noise, good set can last up to 50000 miles
                </div>
                <div>
                    <span className="text-starblue">Brake Rotors: </span> Roughly 60000 miles
                </div>
                <div>
                    <span className="text-starblue">Coolant Flush: </span> 60000 miles
                </div>
                <div className="mb-6">
                    <span className="text-starblue">Transmission Fluid Flush: </span> Cars with manual transmission: 30-60k miles. Cars with automatic transmission: 30-100k miles. Different for trucks under heavy strain.
                </div>
                <p>Maintenance Around Every 90k Miles</p>
                <div>
                    <span className="text-starblue">Hoses: </span> Have them checked as your car approaches 100k miles
                </div>
                <div>
                    <span className="text-starblue">Power Steering Fluid Flush: </span> Around 75000 miles
                </div>
                <div>
                    <span className="text-starblue">Spark Plugs: </span> Copper Plugs: 30000 miles. Iridium or Titanium Plugs: up to 100k miles
                </div>
                <div>
                    <span className="text-starblue">Timing Belt: </span> Between 75000 and 90000 miles
                </div>
            </div>
        </div>
    )
}

export default GenericMaintenance;