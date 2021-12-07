import React from 'react'

export default function ChildrenComponent(props) {

    return (
        <div>
            <h2>Children</h2>
            {props.children} 
            {/* // children cú pháp bắt buộc, ko phải tên file */}
        </div>
    )
}
