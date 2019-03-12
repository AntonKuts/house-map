import React, { useState, useEffect } from 'react';
import NewTemplate from './NewTemplate';
import PropertiesList from './PropertiesList';
import axios from 'axios';
import './App.css';

function App() {

const [properties, setProperties] = useState([]);
const [templates, setTemplates] = useState([]);
const [template, setTemplate] = useState([]);

  useEffect(() => {
  axios.get('http://demo4452328.mockable.io/properties')
      .then(function (response) {
        console.log(response.data.data);
        setProperties(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }, []);

  useEffect(() => {
  axios.get('http://demo4452328.mockable.io/templates')
      .then(function (response2) {
        let data = response2.data;
        console.log(data);
        setTemplates(data);
        setTemplate(data[0].template);
      })
      .catch(function (error) {
      });
    }, []);

  return (
     <div className="сontainer">
      <h4> House map </h4>
      <NewTemplate
        templates={templates}
        setTemplate={setTemplate}
      />
      {properties ? properties.map((propertie, index, arr) => (
        <PropertiesList
          propertie = {propertie}
          template = {template}
          index={index}
        />
      )) : ""}
     </div>
  )
}

export default App;
