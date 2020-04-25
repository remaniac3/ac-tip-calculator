import React from "react";

import EntryField from "./EntryField";

function App() {

    return (
        <>

            <EntryField />

            <hr />
            
            <div>
                <button>Calculate</button>
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