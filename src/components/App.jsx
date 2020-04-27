import React, { useState } from "react";
// import NumberFormat from "react-number-format";
import "./layout.css"

function App() {

    // var NumberFormat = require("react-number-format");

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
        return
    };

    function calcTotalCP() {
        totalCP = prices.singleCostPrice * prices.numberOfTurnips;
        document.getElementById("tCP").textContent = totalCP.toLocaleString();
    };

    function calcTotalSP() {
        totalSP = prices.singleSellPrice * prices.numberOfTurnips;
        document.getElementById("tSP").textContent = totalSP.toLocaleString();
    }

    function calcTotalGP() {
        totalGP = totalSP - totalCP;
        document.getElementById("tGP").textContent = totalGP.toLocaleString();
    }

    function calcTipAmount() {
        tipAmount = Math.round(totalSP * ( prices.tipPercentage / 100 ));
        document.getElementById("tAmt").textContent = tipAmount.toLocaleString();
    }

    function calcNetProfit() {
        netProfit = totalGP - tipAmount;
        document.getElementById("nP").textContent = netProfit.toLocaleString();
    }

    return (
        <>
            <div>
                Cost Price: 
                <input 
                    name="singleCostPrice"
                    type="number"
                    pattern="[0-9*]"
                    onChange={handleChange}
                    value={prices.singleCostPrice}
                />ᴮᵉˡˡˢ
            </div>

            <div>
                Selling Price: 
                <input
                    name="singleSellPrice"
                    type="number"
                    pattern="[0-9*]"
                    onChange={handleChange}
                    value={prices.singleSellPrice}
                />ᴮᵉˡˡˢ
            </div>

            <div>
                Number of Turnips: 
                <input
                    name="numberOfTurnips"
                    type="number"
                    pattern="[0-9*]"
                    onChange={handleChange}
                    value={prices.numberOfTurnips}
                />
            </div>

            <div>
                Tip Percentage: 
                <input
                    name="tipPercentage"
                    type="number"
                    pattern="[0-9*]"
                    onChange={handleChange}
                    value={prices.tipPercentage}
                />%
            </div>

            <div>
                <button onClick={Calculation} type="submit">Calculate</button>
            </div>

            <hr/>

            <div>
                Tip Amount: <span id="tAmt">0</span>
            </div>

            <hr />

            <div>
                Total Cost Price: <span id="tCP">0</span>
            </div>

            <div>
                Total Sales Price: <span id="tSP">0</span>
            </div>

            <div>
                Gross Profit: <span id="tGP">0</span>
            </div>

            <div>
                Net Profit: <span id="nP">0</span>
            </div>
        </>
    );
};

export default App;