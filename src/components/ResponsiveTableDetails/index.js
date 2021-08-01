import React from 'react'

function ResponsiveTableDetails({ item, en, heading }) {
    return (
        <div className="responsive-table-details">
            <div className="hide-on-mobile"></div>
            {!heading && <label>{en}</label>}
            <span>{item}</span>
        </div>
    )
}

export default ResponsiveTableDetails;
