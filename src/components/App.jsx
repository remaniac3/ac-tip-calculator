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
            <div className="main-area">
                <div className="form-area">
                    <div className="form-particulars">
                        <div className="form-label">Cost Price:</div>
                        <div className="form-input">
                            <input 
                                className="amount-input"
                                name="singleCostPrice"
                                type="number"
                                pattern="[0-9*]"
                                onChange={handleChange}
                                value={prices.singleCostPrice}
                            />
                        </div>
                        <div className="amount-unit">Bells</div>
                    </div>

                    <div className="form-particulars">
                        <div className="form-label">Selling Price: </div>
                        <div className="form-input">
                            <input
                                className="amount-input"
                                name="singleSellPrice"
                                type="number"
                                pattern="[0-9*]"
                                onChange={handleChange}
                                value={prices.singleSellPrice}
                            />
                        </div>
                        <div className="amount-unit">Bells</div>
                    </div>

                    <div className="form-particulars">
                        <div className="form-label">No. of Turnips: </div>
                        <div className="form-input">
                            <input
                                className="amount-input"
                                name="numberOfTurnips"
                                type="number"
                                pattern="[0-9*]"
                                onChange={handleChange}
                                value={prices.numberOfTurnips}
                            />
                        </div>
                        <div className="amount-unit">Units</div>
                    </div>

                    <div className="form-particulars">
                        <div className="form-label">Tip: </div>
                        <div className="form-input">
                            <input
                                className="amount-input"
                                name="tipPercentage"
                                type="number"
                                pattern="[0-9*]"
                                onChange={handleChange}
                                value={prices.tipPercentage}
                            />
                        </div>
                        <div className="amount-unit">%</div>
                    </div>
                </div>

                <div className="button-area">
                    <div className="button-div">
                        <button onClick={Calculation} type="submit">Calculate</button>
                    </div>
                </div>

                <hr/>

                <div className="results-area">
                    <div>Tip Amount:</div>
                    <div className="results-amount"><span id="tAmt">0</span></div>
                    <div className="amount-unit">Bells</div>
                </div>

                <hr />

                <div className="results-area">
                    <div>Total Cost Price:</div>
                    <div className="results-amount"><span id="tCP">0</span></div>
                    <div className="amount-unit">Bells</div>
                </div>

                <div className="results-area">
                    <div>Total Sales Price:</div>
                    <div className="results-amount"><span id="tSP">0</span></div>
                    <div className="amount-unit">Bells</div>
                </div>

                <div className="results-area">
                    <div>Gross Profit:</div>
                    <div className="results-amount"><span id="tGP">0</span></div>
                    <div className="amount-unit">Bells</div>
                </div>

                <div className="results-area">
                    <div>Net Profit:</div>
                    <div className="results-amount"><span id="nP">0</span></div>
                    <div className="amount-unit">Bells</div>
                </div>
            </div>
        </>
    );
};

export default App;