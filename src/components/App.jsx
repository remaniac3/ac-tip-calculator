import React, { useState } from "react";

import ResultField from "./ResultField";
import formulae from "../formulae";

function createResults(result) {
    return(
        <ResultField
            key={result.id}
            particulars={result.fullName}
            calculationTarget={result.target}
        />
    );
}

function App() {

    var totalCP = 0;
    var totalSP = 0;
    var totalGP = 0;
    var tipAmount = 0;
    var netProfit = 0;

    const [prices, setPrices] = useState({
        singleCostPrice: "",
        singleSellPrice: "",
        numberOfTurnips: "",
        tipPercentage: ""
    });

    function handleChange(event) {
        const {value, name} = event.target;

        setPrices(prevValue => {
            return {
                ...prevValue,
                [name] : value
            };
        });
    }

    function Calculation() {
        totalCP = prices.singleCostPrice * prices.numberOfTurnips
        totalSP = prices.singleSellPrice * prices.numberOfTurnips
        totalGP = totalSP - totalCP
        tipAmount = Math.round(totalGP * ( prices.tipPercentage / 100 ))
        netProfit = totalGP - tipAmount

        console.log(totalCP, totalSP, totalGP, tipAmount, netProfit)
    };

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

            <hr />

            <div>
                <button onClick={Calculation}>Calculate</button>
            </div>

            <hr/>

            <div>
                {formulae.map(createResults)}
            </div>
        </>
    );
};

export default App;