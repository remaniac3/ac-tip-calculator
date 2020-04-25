import React, { useState } from "react";

function EntryField() {
    const [prices, setPrices] = useState({
        singleCostPrice: 0,
        singleSellPrice: 0,
        numberOfTurnips: 0,
        tipPercentage: 0
    });

    function handleChange(event) {
        const newValue = event.target.value;
        const inputName = event.target.name;

        console.log(newValue);
        console.log(inputName);
    }

    return (
        <>
            <div>
                Cost Price: 
                <input 
                    name="singleCostPrice"
                    onChange={handleChange}
                    value={prices.singleCostPrice}
                />
            </div>

            <div>
                Selling Price: 
                <input
                    name="singleSellPrice"
                    onChange={handleChange}
                    value={prices.singleSellPrice}
                />
            </div>

            <div>
                Number of Turnips: 
                <input
                    name="numberOfTurnips"
                    onChange={handleChange}
                    value={prices.numberOfTurnips}
                />
            </div>

            <div>
                Tip Percentage: 
                <input
                    name="tipPercentage"
                    onChange={handleChange}
                    value={prices.tipPercentage}
                />
            </div>

        </>
    );
};

export default EntryField;