import React, { useState } from "react";
// import NumberFormat from "react-number-format";
import Header from "./Header";
import CalcMethodNote from "./CalcMethodNote";
import Footer from "./Footer";
import "./layout.css"
import AppNote from "./AppNote";

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
        var rawTipAmount = totalSP * (prices.tipPercentage / 100);
        tipAmount = Math.ceil(rawTipAmount/1000)*1000;
        document.getElementById("tAmt").textContent = tipAmount.toLocaleString();
    }

    function calcNetProfit() {
        netProfit = totalGP - tipAmount;
        document.getElementById("nP").textContent = netProfit.toLocaleString();
    }

    return (
        <>
            <Header />

            <div className="area-template main-area">
                <div className="form-area">
                    <div className="form-particulars">
                        <div className="form-label font-light-green">Cost Price:</div>
                        <div className="form-input">
                            <input 
                                className="amount-input bold-text font-dark-green"
                                name="singleCostPrice"
                                type="number"
                                pattern="[0-9*]"
                                onChange={handleChange}
                                value={prices.singleCostPrice}
                            />
                        </div>
                        <div className="amount-unit font-light-green">Bells</div>
                    </div>

                    <div className="form-particulars">
                        <div className="form-label font-light-green">Selling Price: </div>
                        <div className="form-input">
                            <input
                                className="amount-input bold-text font-dark-green"
                                name="singleSellPrice"
                                type="number"
                                pattern="[0-9*]"
                                onChange={handleChange}
                                value={prices.singleSellPrice}
                            />
                        </div>
                        <div className="amount-unit font-light-green">Bells</div>
                    </div>

                    <div className="form-particulars">
                        <div className="form-label font-light-green">No. of Turnips: </div>
                        <div className="form-input">
                            <input
                                className="amount-input bold-text font-dark-green"
                                name="numberOfTurnips"
                                type="number"
                                pattern="[0-9*]"
                                onChange={handleChange}
                                value={prices.numberOfTurnips}
                            />
                        </div>
                        <div className="amount-unit font-light-green">Units</div>
                    </div>

                    <div className="form-particulars">
                        <div className="form-label font-light-green">Tip: </div>
                        <div className="form-input">
                            <input
                                className="amount-input bold-text font-dark-green"
                                name="tipPercentage"
                                type="number"
                                pattern="[0-9*]"
                                onChange={handleChange}
                                value={prices.tipPercentage}
                            />
                        </div>
                        <div className="amount-unit font-light-green">%</div>
                    </div>
                </div>

                <div className="button-area">
                    <div className="button-div">
                        <button className="button-size" onClick={Calculation} type="submit">Calculate</button>
                    </div>
                </div>

                <hr/>

                <div className="results-area">
                    <div className="font-light-green">Tip Amount:</div>
                    <div className="results-amount bold-text font-dark-green larger-text"><span id="tAmt">0</span></div>
                    <div className="amount-unit font-light-green">Bells</div>
                </div>

                <hr />

                <div className="results-area">
                    <div className="font-light-green">Total Cost Price:</div>
                    <div className="results-amount font-dark-green"><span id="tCP">0</span></div>
                    <div className="amount-unit font-light-green">Bells</div>
                </div>

                <div className="results-area">
                    <div className="font-light-green">Total Sales Price:</div>
                    <div className="results-amount font-dark-green"><span id="tSP">0</span></div>
                    <div className="amount-unit font-light-green">Bells</div>
                </div>

                <div className="results-area">
                    <div className="font-light-green">Gross Profit:</div>
                    <div className="results-amount font-dark-green"><span id="tGP">0</span></div>
                    <div className="amount-unit font-light-green">Bells</div>
                </div>

                <div className="results-area">
                    <div className="font-light-green">Net Profit:</div>
                    <div className="results-amount bold-text font-dark-green"><span id="nP">0</span></div>
                    <div className="amount-unit font-light-green">Bells</div>
                </div>
            </div>

            <AppNote />
            <CalcMethodNote />
            <Footer />
        </>
    );
};

export default App;