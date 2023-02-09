import React, { useState } from "react";
import "./App.css";
import Activites from "./Activites";
import Detail from "./Detail";
// import imgreq from "./photos/reqneg.jpg";
// import imgse from "./photos/accueil-the-2-1142x705.jpg";
// import imgbi from "./photos/massage.jpg";
// import imgparti from "./photos/parti.jpg"

function App() {
  const listeActivités = [
    {
      name: "Raquettes à neige",
      prix: 300,
      activé: false,
      img: 'imgreq',
    },
    {
      name: "detente et bien etre",
      prix: 400,
      activé: false,
      img: 'imgbi',
    },
    {
      name: "patrimoine et  culture",
      prix: 250,
      activé: false,
      img: 'imgparti',
    },
    {
      name: "séjour en famille ",
      prix: 660,
      activé: false,
      img: 'imgse',
    },
  ];
  const [listState, setActivites] = useState(listeActivités);
  function moveToselected(name) {
    setActivites((listState) =>
      listState.map((Activite) => {
        if (Activite.name === name) {
          return { ...Activite, activé: !Activite.activé };
        }
        return Activite;
      })
    );
  }
  function moveToUnselected(name) {
    setActivites((listState) =>
      listState.map((Activite) => {
        if (Activite.name === name) {
          return { ...Activite, activé: !Activite.activé };
        }
        return Activite;
      })
    );
  }
  function moveAllToSelected() {
    setActivites((listState) =>
      listState.map((Activite) => {
        return { ...Activite, activé: true };
      })
    );
  }
  function moveAllToUnselected() {
    setActivites((listState) =>
      listState.map((Activite) => {
        return { ...Activite, activé: false };
      })
    );
  }

  return (
    <span className="App">
    
      <Activites
        activiteslist={listState}
        moveToselected={moveToselected}
        moveToUnselected={moveToUnselected}
        moveAllToSelected={moveAllToSelected}
        moveAllToUnselected={moveAllToUnselected}
      />
      <Detail
        activiteslist={listState}
        moveToUnselected={moveToUnselected}
      />
    </span>
  );
}

export default App;
