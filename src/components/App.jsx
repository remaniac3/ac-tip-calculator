import React from "react";

import EntryField from "./EntryField";

import formulae from "../formulae";

var costPrice = 0;
var sellPrice = 0;
var turnipsSold = 0;
var tipPc = 0;
var totalCP = 0;
var totalSP = 0;
var gProfit = 0;
var tipCalc = 0;
var nProfit = 0;

function createEntry(formula) {
    return (
        <>
            <EntryField
                key={formula.id}
                entryLabel={formula.fullName}
                inputType={formula.type}
                formParticular={formula.nameID}
            />
        </>
    );
}

function displayResults() {
    totalCP = totalCP.toLocaleString('en', {useGrouping:true});
    totalSP = totalSP.toLocaleString('en', {useGrouping:true});
    gProfit = gProfit.toLocaleString('en', {useGrouping:true});
    tipCalc = tipCalc.toLocaleString('en', {useGrouping:true});
    nProfit = nProfit.toLocaleString('en', {useGrouping:true});

    document.getElementById("totalCostPrice").innerHTML = totalCP;
    document.getElementById("totalSalesPrice").innerHTML = totalSP;
    document.getElementById("grossProfit").innerHTML = gProfit;
    document.getElementById("tipValue").innerHTML = tipCalc;
    document.getElementById("netProfit").innerHTML = nProfit;
}

function App() {

    function Calculation() {
        costPrice = document.getElementById("costPriceSingle").value;
        sellPrice = document.getElementById("sellPriceSingle").value;
        turnipsSold = document.getElementById("numOfTurnips").value;
        tipPc = document.getElementById("tipPercentage").value;

        console.log(costPrice, sellPrice, turnipsSold, tipPc);
        
        totalCP = costPrice * turnipsSold;
        totalSP = sellPrice * turnipsSold;
        gProfit = totalSP - totalCP;
        tipCalc = Math.floor(totalSP * (tipPc / 100));
        nProfit = gProfit - tipCalc;

        displayResults();
    };

    function ResetValue() {
        costPrice = 0;
        sellPrice = 0;
        turnipsSold = 0;
        tipPc = 0;
        totalCP = 0;
        totalSP = 0;
        gProfit = 0;
        tipCalc = 0;
        nProfit = 0;
        displayResults();
    }


    return (
        <>
            {formulae.map(createEntry)}

            <hr />

            <div>
                <button onClick={Calculation}>Calculate</button>
                &nbsp;
                <button onClick={ResetValue} type="reset">Reset</button>
            </div>

            <hr />

            <div>
                Total Cost Price: <span id="totalCostPrice" />
            </div>

            <div>
                Total Sales: <span id="totalSalesPrice" />
            </div>

            <div>
                Gross Profit: <span id="grossProfit" />
            </div>

            <div>
                Tip: <span id="tipValue" />
            </div>

            <div>
                Net Profit: <span id="netProfit" />
            </div>

        </>
    );
};

export default App;