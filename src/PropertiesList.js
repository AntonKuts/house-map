import React from 'react';
import './App.css';
import Constructor from './Constructor';


function PropertiesList({ propertie, template, index }) {

  return (
    <div className="card">
    {template ? template.map((tampl, index) => (
        <Constructor
          propertie = {propertie}
          tampl = {tampl}
          index = {index}
        />
      ))  : ""}
    </div>
  )
}

export default PropertiesList;
