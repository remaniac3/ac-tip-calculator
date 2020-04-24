import React from "react";

function CostPriceSingle() {
    return (
        <div>
            Cost Price (1 Unit):
            &nbsp;
            <input
                type="number"
                min="1"
                max="999"
                id="costPriceSingle"
            />
        </div>
    )
}

export default CostPriceSingle;