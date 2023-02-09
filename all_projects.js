/*import './App.css';
import Affichertab from './Afficher';
import AjouterS from './Ajouter'
import Mod from "./Modifier.js"
import { useState } from 'react';
function App() {
  const [listStagiaire, setListS] = useState([{ id: '1', nom: 'brahim', prenom: "aboubakr", adresse: "ma", select: "ma" }])

  var add = (obj) => {
    setListS([...listStagiaire, obj])
  }
  var supp = (obj) => {
    setListS((list) =>
      list.filter(
        (stagiaire) => stagiaire.id !== obj)
    )
  }
  var edit=(obj)=>{


  }
 
  return (
    <div className="App">
      <AjouterS f={add} />
      <Affichertab data={listStagiaire} d={supp} />
      <Mod x={edit}/>

    </div>
  );
}

export default App;
*/






/*import React, { useState, Fragment } from 'react'
import FormAjout from './forms/FormAjout'
import FormAffichage from './forms/FormAffichage.js'
import UserTable from './tables/TableStagiaire'

const App = () => {
	
	const stagiresData = [
		{ id: 1, nom: 'nassiri', prenom: 'taha',adresse:'quods' },
		{ id: 2, nom: 'alami', prenom: 'meryem',adresse:'maarouf' },
		{ id: 3, nom: 'alaoui', prenom: 'ahmed',adresse:"maarif" },
	]

	const initialFormState = { id: null, nom: '', prenom: '',adresse:'' }

	// Setting state
	const [ stagiaires, setStagiaires ] = useState(stagiresData)
	const [ currentStagiaire, setCurrentStagiaire ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const ajouterStagiaire = stagiaire => {
		stagiaire.id = stagiaires.length + 1
		setStagiaires([ ...stagiaires, stagiaire ])
	}

	const supprimerStagiaire = id => {
		setEditing(false)

		setStagiaires(stagiaires.filter(stagiaire => stagiaire.id !== id))
	}

	const modiferStagiaire = (id, updatedStagiaire) => {
		setEditing(false)

		setStagiaires(stagiaires.map(stagiaire => (stagiaire.id === id ? updatedStagiaire : stagiaire)))
	}

	const editRow = stagiaire => {
		setEditing(true)

		setCurrentStagiaire({ id: stagiaire.id, nom: stagiaire.nom, prenom: stagiaire.prenom,adresse:stagiaire.adresse })
	}

	return (
		<div className="container">
			<h1>React CRUD application </h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>afficher les infos d'un stagiaire</h2>
							<FormAffichage
								editing={editing}
								setEditing={setEditing}
								currentStagiaire={currentStagiaire}
								modifierStagiaire={modiferStagiaire}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>ajouter stagiaire</h2>
							<FormAjout ajouterStagiaire={ajouterStagiaire} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>Liste de Stagaires</h2>
					<UserTable stagiaires={stagiaires} editRow={editRow} supprimerStagiaire={supprimerStagiaire} />
				</div>
			</div>
		</div>
	)
}

export default App
*/