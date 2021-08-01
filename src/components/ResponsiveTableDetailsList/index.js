import React, { Fragment } from 'react'
import ResponsiveTableDetails from '../ResponsiveTableDetails'

const ResponsiveTableDetailsList = ({ rows, en }) => {
    return (
        <Fragment>
            {rows?.map((item, index) => (
                <div key={index} className="responsive-table-row">
                    <ResponsiveTableDetails item={item.name} en={en.NAME} />
                    <ResponsiveTableDetails item={item.websites} en={en.WEBSITE} />
                </div>
            ))}
        </Fragment>
    )
}

export default ResponsiveTableDetailsList
