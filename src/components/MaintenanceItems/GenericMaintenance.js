import React from 'react';

function GenericMaintenance(props) {
    return (
        <div className="bg-gainsboro text-center">
            <h1 className="text-lg mb-2 underline">Maintenance Schedules</h1>
            <div className="mb-2">1. When both mileage or time frame is listed, follow whichever happens first</div>
            <div className="mb-2">
                2. Reference
                <a href="https://www.cargurus.com/Cars/articles/the_car_maintenance_schedule_you_should_follow"
                    target="_blank"
                >
                    <span className="text-shamrock underline mx-1">This Link</span>
                </a>
                for schedules listed below
            </div>
            <div className="mb-6">
                3. As always, follow your manufacturer suggestions as these are very generic guidelines and all cars are different
            </div>
            <div className="pb-10 flex flex-col flex-wrap content-center">
                <div className="m-2 border-2 border-black p-2 bg-shamrock text-center lg:w-3/5">
                    <p className="text-gainsboro underline text-lg mb-2">Regular Maintenance</p>
                    <div className="text-left">
                        <span className="text-gainsboro">Oil Change (conventional oil): </span> 3000 miles or 3 months
                    </div>
                    <div className="text-left">
                        <span className="text-gainsboro">Oil Filter: </span> 3000 miles or 3 months
                    </div>
                </div>
                <div className="m-2 border-2 border-black p-2 bg-shamrock text-center lg:w-3/5">
                    <p className="text-gainsboro underline text-lg mb-2">Maintenance Around Every 30k Miles</p>
                    <div className="text-left">
                        <span className="text-gainsboro">Engine Air Filter: </span> 15000 to 30000 miles
                    </div>
                    <div className="text-left">
                        <span className="text-gainsboro">Fuel Filter: </span> as early as 30000 miles
                    </div>
                </div>
                <div className="m-2 border-2 border-black p-2 bg-shamrock text-center lg:w-3/5">
                    <p className="text-gainsboro underline text-lg mb-2">Maintenance Around Every 60k Miles</p>
                    <div className="text-left">
                        <span className="text-gainsboro">Battery: </span> 40000 to 50000 miles or around 4 to 5 years
                    </div>
                    <div className="text-left">
                        <span className="text-gainsboro">Brake Fluid Flush: </span> Anywhere between 20000 to 45000 depending on the manufacturer
                    </div>
                    <div className="text-left">
                        <span className="text-gainsboro">Brake Pads/Shoes: </span> Listen for screeching noise, good set can last up to 50000 miles
                    </div>
                    <div className="text-left">
                        <span className="text-gainsboro">Brake Rotors: </span> Roughly 60000 miles
                    </div>
                    <div className="text-left">
                        <span className="text-gainsboro">Coolant Flush: </span> 60000 miles
                    </div>
                    <div className="text-left">
                        <span className="text-gainsboro">Transmission Fluid Flush: </span> Cars with manual transmission: 30-60k miles. Cars with automatic transmission: 30-100k miles. Different for trucks under heavy strain.
                    </div>
                </div>
                <div className="m-2 border-2 border-black p-2 bg-shamrock text-center lg:w-3/5">
                    <p className="text-gainsboro underline text-lg mb-2">Maintenance Around Every 90k Miles</p>
                    <div className="text-left">
                        <span className="text-gainsboro">Hoses: </span> Have them checked as your car approaches 100k miles
                    </div>
                    <div className="text-left">
                        <span className="text-gainsboro">Power Steering Fluid Flush: </span> Around 75000 miles
                    </div>
                    <div className="text-left">
                        <span className="text-gainsboro">Spark Plugs: </span> Copper Plugs: 30000 miles. Iridium or Titanium Plugs: up to 100k miles
                    </div>
                    <div className="text-left">
                        <span className="text-gainsboro">Timing Belt: </span> Between 75000 and 90000 miles
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenericMaintenance;