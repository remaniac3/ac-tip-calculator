import React from "react"

function App() {

    function StartCalculation() {
        console.log("YO");
    }

    return (
        <>
            <div>
                Cost Price (1 Unit):
                &nbsp;<input type="text" maxLength="3" />
            </div>

            <div>
                Selling Price:
                &nbsp;<input type="text" maxLength="3" />
            </div>

            <div>
                Number of turnips sold:
                &nbsp;<input type="text" maxLength="10" />
            </div>

            <div>
                Tip Percentage:
                &nbsp;<input type="text" maxLength="2" />%
            </div>

            <div>
                <button onClick={StartCalculation}>Calculate</button>
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