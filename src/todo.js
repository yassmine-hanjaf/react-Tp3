import React, { useState } from 'react';
import Task from './task';

export default function Todo1() {
    let [tache, settache] = useState([
        { id: 1, nom: 'sport' },
        { id: 2, nom: 'music' },
        { id: 3, nom: 'react' }
    ]);
    let [tch, settch] = useState('');

    let addtask = () => {
        let ntache = [...tache];
        let ntch = { id: Date.now(), nom: tch }; // Utilisez un horodatage unique comme id
        ntache.push(ntch);
        settache(ntache);
        settch(''); // Réinitialisez la valeur de tch après l'ajout de la tâche
    };

    let deletetask = (idp) => {
        let ntache = tache.filter((t) => t.id !== idp);
        settache(ntache);
    };

    return (
        <div>
            <h1> --to do list-- </h1><br />
            <form action="">
               <p style={{ color: "dark" }}> Entrez une tâche:</p><br /><br /> <input type="text" value={tch} onChange={(e) => settch(e.target.value)} /> &nbsp;&nbsp;
                <button className='btn btn-info' onClick={addtask}>Ajouter</button>
            </form>
            <br />
            <ul style={{ listStyleType: "none" }}>
                {
                    tache.map((t) => {
                        return <li key={t.id}><Task delf={() => deletetask(t.id)} txt={t.nom} /></li>
                    })
                }
            </ul>
        </div>
    );
}
