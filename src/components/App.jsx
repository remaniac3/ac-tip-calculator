import React, { useState } from "react";
import NumberFormat from "react-number-format";
import Header from "./Header";
import CalcMethodNote from "./CalcMethodNote";
import AppNote from "./AppNote";
import Footer from "./Footer";

import "./layout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

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

    // Limit iOS keyboard input.
    if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
    {
        var inputNumLock = document.querySelectorAll('input[type="number"]');
        for(var i = inputNumLock.length; i--;)
            inputNumLock[i].setAttribute('pattern', '\\d*');
    }

    function handleChange(event) {
        const {value, name} = event.target;

        setPrices(prevValue => {
            return {
                ...prevValue,
                [name] : value,
            };
        });
    }

    // Update amount on text-based IDs.
    function printAmount() {
        document.getElementById("tCP").textContent = totalCP.toLocaleString();
        document.getElementById("tSP").textContent = totalSP.toLocaleString();
        document.getElementById("tGP").textContent = totalGP.toLocaleString();
        document.getElementById("tAmt").textContent = tipAmount.toLocaleString();
        document.getElementById("nP").textContent = netProfit.toLocaleString();
    }

    // Calculation function.
    function Calculation() {
        
        // Eliminate separators to avoid NaN.
        let numOfTurnips = prices.numberOfTurnips;
        numOfTurnips = numOfTurnips.replace(/,/g, "");

        totalCP = prices.singleCostPrice * numOfTurnips;
        totalSP = prices.singleSellPrice * numOfTurnips;
        totalGP = totalSP - totalCP;

        var rawTipAmount = totalSP * (prices.tipPercentage / 100);
            tipAmount = Math.ceil(rawTipAmount/1000)*1000;

        netProfit = totalGP - tipAmount;

        printAmount();
    };

    // Reset value back to zero.
    function clearValue(event) {
        totalCP = 0;
        totalSP = 0;
        totalGP = 0;
        tipAmount = 0;
        netProfit = 0;
        printAmount();

        // Clear the input areas (controlled).
        setPrices({
            singleCostPrice:  "",
            singleSellPrice:  "",
            numberOfTurnips:  "",
            tipPercentage: "",
        });
    }

    return (
        <>
            <Header />

            <div className="area-template main-area">
                {/* Data Entry Area */}
                <form>
                    <div className="form-area">
                        <div className="form-particulars">
                            <div className="form-label font-light-green">Cost Price:</div>
                            <div className="form-input">
                                <NumberFormat
                                    type={"tel"}
                                    allowNegative={false}
                                    format="###"
                                    name={"singleCostPrice"}
                                    onChange={handleChange}
                                    value={prices.singleCostPrice}
                                    className={"amount-input bold-text font-dark-green"}
                                />
                            </div>
                            <div className="amount-unit font-light-green">Bells</div>
                        </div>

                        <div className="form-particulars">
                            <div className="form-label font-light-green">Selling Price: </div>
                            <div className="form-input">
                                <NumberFormat
                                    type={"tel"}
                                    allowNegative={false}
                                    format="###"
                                    name={"singleSellPrice"}
                                    onChange={handleChange}
                                    value={prices.singleSellPrice}
                                    className={"amount-input bold-text font-dark-green"}
                                />
                            </div>
                            <div className="amount-unit font-light-green">Bells</div>
                        </div>

                        <div className="form-particulars">
                            <div className="form-label font-light-green">No. of Turnips: </div>
                            <div className="form-input">
                                <NumberFormat
                                    type={"tel"}
                                    allowNegative={false}
                                    thousandSeparator={true}
                                    name={"numberOfTurnips"}
                                    onChange={handleChange}
                                    value={prices.numberOfTurnips}
                                    className={"amount-input bold-text font-dark-green"}
                                />
                            </div>
                            <div className="amount-unit font-light-green">Units</div>
                        </div>

                        <div className="form-particulars">
                            <div className="form-label font-light-green">Tip: </div>
                            <div className="form-input">
                                <NumberFormat
                                    type={"tel"}
                                    allowNegative={false}
                                    format="##"
                                    name={"tipPercentage"}
                                    onChange={handleChange}
                                    value={prices.tipPercentage}
                                    className={"amount-input bold-text font-dark-green"}
                                />
                            </div>
                            <div className="amount-unit font-light-green">%</div>
                        </div>
                    </div>
                </form>

                {/* Buttons */}
                <div className="button-area">
                    <div className="button-div">
                        <button className="button-size" onClick={Calculation} type="submit">Calculate</button>
                    </div>
                    <div className="button-div">
                        <button className="button-reset" onClick={clearValue}><FontAwesomeIcon icon={faRedoAlt} /></button>
                    </div>
                </div>

                <hr/>

                {/* Results: TIP AMOUNT */}
                <div className="results-area">
                    <div className="font-light-green">Tip Amount:</div>
                    <div className="results-amount bold-text font-dark-green larger-text"><span id="tAmt">0</span></div>
                    <div className="amount-unit font-light-green">Bells</div>
                </div>

                <hr />

                {/* Results: OTHERS */}
                <>
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
                </>
            </div>

            <AppNote />
            <CalcMethodNote />
            <Footer />
        </>
    );
};

export default App;