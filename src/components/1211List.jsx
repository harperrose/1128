import React from "react";
import { useEffect } from "react";

const NewList = ({ services }) => {
 useEffect(()=>{
     window.Webflow && window.Webflow.destroy();
     window.Webflow && window.Webflow.ready();
     window.Webflow && window.Webflow.require('ix2').init();
     document.dispatchEvent(new Event('readystatechange'))
   })
  return (
    <ul>
      {services.map((service, index) => (
        <li key={index} data-w-id="602a308b-4c36-166d-441c-eadf98902915" className="animated-list-item">
          <h1>{service.name}</h1>
          <p>{service.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default NewList;
