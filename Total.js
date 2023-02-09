import React from "react";
import "./App.css";
import "./Detail";
import Detail from "./Detail";

function Total(props) {
  
  const selectedActivities = props.selectedActivities;
  const total = selectedActivities.reduce(
    (total, Activite) => total + Activite.prix ,
    0
  );

  return <div>
            <span className="Show">
            total: {total}
            </span>
            
         </div>;
}
export default Total;
