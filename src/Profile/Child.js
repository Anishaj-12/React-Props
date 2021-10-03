import React from 'react'
const Child = (props) => {
    return (
        <div>
            {props.handleAlert()}

        </div>
    )
}
Child.defaultProps  = {
    handleAlert: "Undefined"
}
export default Child
