import React from "react";

function EntryField(props) {
    return (
        <>
            <div>
                <div>
                    {props.entryLabel}
                </div>
                <input
                    type={props.inputType}
                    pattern="[0-9*]"
                    id={props.formParticular}
                />
            </div>
        </>
    );
}

export default EntryField;