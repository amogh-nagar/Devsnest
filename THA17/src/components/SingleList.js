import React from 'react'

const SingleList = (props) => {
    return (
        <div class="list-item">
            <h2>{props.dishes}</h2>
            <p>You have consumed {props.calories} calories today</p>
        </div>
    )
}

export default SingleList
