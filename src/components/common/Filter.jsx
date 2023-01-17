import React from 'react'


function Filter(props) {

    return (
        <>
            <button
                className={`button_category ${(props.category) === (props.name) ? "button_active" : ""
                    }`}
                onClick={() => (props.setCategory)(props.name)}
            >
                <p>{props.name}</p>
            </button>

        </>
    )
}

export default Filter 