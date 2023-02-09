import React, { useState } from "react";
import Total from "./Total";
function Detail(props) {
  
  const [ttotale, setTtotale]=useState(1);
  const selectedActivities = props.activiteslist.filter(
    (Activite) => Activite.activé === true
  );
  const content = selectedActivities.map((Activite) => {
    return (
      <tr>
        <td>
          <img src={Activite.img} width={80} height={60} alt={Activite.name}/>
        </td>
        <td>{Activite.name}</td>
        <td>{Activite.prix}</td>
        <td><input type={"number"} onChange={(e)=>{setTtotale(e.target.value);}
          }/></td>
        <button onClick={() => props.moveToUnselected(Activite.name)} width="30%">
          supprimer
        </button>
      </tr>
    );
  });
  return (
    <span>
      <table className={selectedActivities !== null ? "Show" : "hide"} border={"2"}>
        <tr>
          <th>image</th>
          <th>nom</th>
          <th>prix</th>
          <th>nombre de personnes</th>
          <th>action</th>
        </tr>
        <tbody>{content}</tbody>
      </table>
      <Total selectedActivities={selectedActivities} />
    </span>
  );
}
export default Detail;
