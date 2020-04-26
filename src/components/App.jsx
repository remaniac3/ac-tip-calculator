import React, { useState } from "react";

function App() {

    let totalCP = 0;
    let totalSP = 0;
    let totalGP = 0;
    let tipAmount = 0;
    let netProfit = 0;

    const [prices, setPrices] = useState({
        singleCostPrice: "",
        singleSellPrice: "",
        numberOfTurnips: "",
        tipPercentage: "",
    });

    function handleChange(event) {
        const {value, name} = event.target;

        setPrices(prevValue => {
            return {
                ...prevValue,
                [name] : value,
            };
        });
    }

    function Calculation() {

        calcTotalCP();
        calcTotalSP();
        calcTotalGP();
        calcTipAmount();
        calcNetProfit();

        console.log(totalCP)

        // totalCP = prices.singleCostPrice * prices.numberOfTurnips
        // totalSP = prices.singleSellPrice * prices.numberOfTurnips
        // totalGP = totalSP - totalCP
        // tipAmount = Math.round(totalGP * ( prices.tipPercentage / 100 ))
        // netProfit = totalGP - tipAmount
        
        // console.log(totalCP, totalSP, totalGP, tipAmount, netProfit)

        return
    };

    function calcTotalCP() {
        totalCP = prices.singleCostPrice * prices.numberOfTurnips;
        document.getElementById("tCP").innerHTML = totalCP;
    };

    function calcTotalSP() {
        totalSP = prices.singleSellPrice * prices.numberOfTurnips
        return
    }

    function calcTotalGP() {
        totalGP = totalSP - totalCP
        return
    }

    function calcTipAmount() {
        tipAmount = Math.round(totalGP * ( prices.tipPercentage / 100 ))
        return
    }

    function calcNetProfit() {
        netProfit = totalGP - tipAmount
        return
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
                {prices.singleCostPrice}
            </div>

            <div>
                Selling Price: 
                <input
                    name="singleSellPrice"
                    onChange={handleChange}
                    value={prices.singleSellPrice}
                />
                {prices.singleSellPrice}
            </div>

            <div>
                Number of Turnips: 
                <input
                    name="numberOfTurnips"
                    onChange={handleChange}
                    value={prices.numberOfTurnips}
                />
                {prices.numberOfTurnips}
            </div>

            <div>
                Tip Percentage: 
                <input
                    name="tipPercentage"
                    onChange={handleChange}
                    value={prices.tipPercentage}
                />
                {prices.tipPercentage}
            </div>

            <hr />

            <div>
                <button onClick={Calculation} type="submit">Calculate</button>
            </div>

            <hr/>

            <div>
                Total Cost Price:
                <span id="tCP">0</span>
            </div>

            <div>
                Total Sales Price:
            </div>

            <div>
                Gross Profit:
            </div>

            <div>
                Tip Amount:
            </div>

            <div>
                Net Profit:
            </div>
        </>
    );
};

export default App;