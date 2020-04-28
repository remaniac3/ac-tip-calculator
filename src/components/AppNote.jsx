import React from "react";

function AppNote() {
    return(
        <>
            <div className="area-template note-area font-dark-brown between-containers">
                <div className="wrapper-desktop">
                    <p><strong>Tip amount</strong> is calculated based on the total sales amount with <em>one thousand (1,000)</em> rounding-up for easier Bells withdrawal.</p>
                </div>
            </div>
        </>
    );
}

export default AppNote;