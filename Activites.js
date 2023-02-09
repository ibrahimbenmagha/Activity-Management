import React from "react";
function Activites(props) {
  const content = props.activiteslist.map((Activite) => {
    if (!Activite.activé) {
      return <option value={Activite.name}>{Activite.name}</option>;
    }
    return null;
  });
  const content2 = props.activiteslist.map((Activite) => {
    if (Activite.activé) {
      return <option value={Activite.name}>{Activite.name}</option>;
    }
    return null;
  });

  return (
    <div>
      <h1>Gestion des activites</h1>
          <span className="App3">
            <span className="reanege">
              <h2>Activités disponibles</h2>
          <select id="activite-disp" multiple>
            {content}
          </select>
          </span>

          <span className="reqnege">
          <button
            className="btn"
            onClick={() =>
              props.moveToselected(
                document.getElementById("activite-disp").value
              )
            }
          >
            Ajouter 1 seul
          </button>
          <button onClick={props.moveAllToSelected} className="btn">
            ajouter tous
          </button>
          <button
            onClick={() =>
              props.moveToUnselected(
                document.getElementById("activite-sel").value
              )
            }
            className="btn"
          >
            suprimer
          </button>
          <button onClick={props.moveAllToUnselected} className="btn">
          suprimer tous
            
          </button>
          </span>

            <span className="eanege">
            <h2>Activités selectionnées</h2>
          <select id="activite-sel" multiple>
            {content2}
          </select>
            </span>

          </span>
          
        
        
        
      
    </div>
  );
}
export default Activites;
