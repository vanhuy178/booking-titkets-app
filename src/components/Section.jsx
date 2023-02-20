import React from 'react'
import './styleCompononent/section.scss';
export const Section = props => {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}
