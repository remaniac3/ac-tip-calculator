import React from "react";

function EntryField(props) {
    return (
        <>
            <div>
                <input
                    type={props.inputType}
                    min={props.minValue}
                    max={props.maxValue}
                    id={props.formParticular}
                />
            </div>
        </>
    );
}

export default EntryField;