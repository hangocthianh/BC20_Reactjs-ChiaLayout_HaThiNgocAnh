import React from 'react'

export default function ChildFnc(props) {
    const {username, age} = props;
    return (
        
        <div>
            <h2>Child Function</h2>
            <p>Username: {username} - age: {age}</p>

        </div>
    )
}
