import React from 'react';
import './ResponsiveTable.css';
import en from "../../locale/en.json";

//Components
import ResponsiveTableContainer from '../ResponsiveTableContainer';
import ResponsiveTableHeader from '../ResponsiveTableHeader';
import ResponsiveTableDetailsList from '../ResponsiveTableDetailsList';
import ResponsiveTableHeaderList from '../ResponsiveTableHeaderList';

const ResponsiveTable = ({ headings, rows }) => {
  return (
    <ResponsiveTableContainer>
      <ResponsiveTableHeader>
        <ResponsiveTableHeaderList headings={headings} />
      </ResponsiveTableHeader>
      <ResponsiveTableDetailsList rows={rows} en={en}/>
    </ResponsiveTableContainer>
  )
}

export default ResponsiveTable;