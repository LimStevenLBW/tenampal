import React from 'react'

const MenuItem = ({ itemName, description, price }) => {
    return (
        <div className="Menu-Item">
            <h4>
                {itemName}
            </h4>
            <p>
                {description}

            </p>
            <p>
                {price}
            </p>

        </div>
    );
}

export default MenuItem