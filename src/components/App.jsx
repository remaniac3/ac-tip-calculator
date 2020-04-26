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
                [name] : value
            };
        });
    }

    function calcTotalCP() {
        totalCP = prices.singleCostPrice * prices.numberOfTurnips
        return
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

    function Calculation() {

        calcTotalCP();
        calcTotalSP();
        calcTotalGP();
        calcTipAmount();
        calcNetProfit();

        // totalCP = prices.singleCostPrice * prices.numberOfTurnips
        // totalSP = prices.singleSellPrice * prices.numberOfTurnips
        // totalGP = totalSP - totalCP
        // tipAmount = Math.round(totalGP * ( prices.tipPercentage / 100 ))
        // netProfit = totalGP - tipAmount
        
        // console.log(totalCP, totalSP, totalGP, tipAmount, netProfit)

        return
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
                <button onClick={Calculation}>Calculate</button>
            </div>

            <hr/>

            <div>
                Total Cost Price: 
                <span>
                    {prices.singleCostPrice}
                </span>
            </div>

            <div>
                Total Sales Price: {calcTotalSP()}
            </div>

            <div>
                Gross Profit: {calcTotalGP()}
            </div>

            <div>
                Tip Amount: {Calculation()}
            </div>

            <div>
                Net Profit: {Calculation()}
            </div>
        </>
    );
};

export default App;