import React, { Fragment } from 'react'
import ResponsiveTableDetails from '../ResponsiveTableDetails'

const ResponsiveTableHeaderList = ({ headings }) => {
    return (
        <Fragment>
            {headings?.map((item, index) => (
                <ResponsiveTableDetails key={index} item={item.title} heading />
            ))}
        </Fragment>
    )
}

export default ResponsiveTableHeaderList
