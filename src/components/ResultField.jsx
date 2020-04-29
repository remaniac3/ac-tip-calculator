import React from "react";

function ResultField(props) {
    return (
        <>
            <div>{props.particulars}:</div>
            <div>{props.calculationTarget}</div>
        </>
    );
};

export default ResultField;