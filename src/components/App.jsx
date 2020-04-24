import React from "react";

import CostPriceSingle from "./CostPriceSingle";
// import EntryField from "./EntryField";
// import SellingPriceSingle from "./SellingPriceSingle";

import formula from "./formula";

function App() {
        function Calculation() {
            var costPrice = document.getElementById("costPriceSingle").value;
            // var sellPrice = document.getElementById("sellingPriceSingle").value;

            console.log(costPrice);
        };

        return (
            <>
                <CostPriceSingle />
                {/* <SellingPriceSingle /> */}

                <div>
                    Selling Price:
                    <input
                        type="number"
                        min="1"
                        max="999"
                    />
                </div>

                <div>
                    Number of Turnips Sold:
                    <input
                        type="number"
                        min="1"
                        max="999999"
                    />
                </div>

                <div>
                    Tip Percentage:
                    <input
                        type="number"
                        min="1"
                        max="99"
                    />%
                </div>

                <div>
                    <button onClick={Calculation}>Calculate</button>
                </div>

                <div>
                    Total Cost Price:
                </div>

                <div>
                    Sales:
                </div>

                <div>
                    Gross Profit:
                </div>

                <div>
                    Tip:
                </div>

                <div>
                    Net Profit:
                </div>

            </>
        );
    };

export default App;