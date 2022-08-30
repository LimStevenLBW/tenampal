import React from 'react'

const Hours = () => {

    let d = new Date();
    let day = d.getDay()

    return (
        <React.Fragment>

            <h3 className="hours-heading">
                Business Hours
            </h3>

            <h4 className={day === 1 ? "today-heading" : "day-heading"}>Mon Closed </h4>
            <h4 className={day === 2 ? "today-heading" : "day-heading"}>Tue Closed </h4>
            <h4 className={day === 3 ? "today-heading" : "day-heading"}>Wed 8:00 AM - 4:00 PM</h4>
            <h4 className={day === 4 ? "today-heading" : "day-heading"}>Thu 8:00 AM - 4:00 PM</h4>
            <h4 className={day === 5 ? "today-heading" : "day-heading"}>Fri 8:00 AM - 4:00 PM</h4>
            <h4 className={day === 6 ? "today-heading" : "day-heading"}>Sat 8:00 AM - 4:00 PM</h4>
            <h4 className={day === 0 ? "today-heading" : "day-heading"}>Sun 8:00 AM - 4:00 PM</h4>
        </React.Fragment>
    );
}

export default Hours;