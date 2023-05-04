import React from 'react';

const AjoutStationnements = () => {
    return (
        <div>
            <h1>Ajout Stationnements</h1>
            User:<br />
            Parking:
            <select>
                <option>Park 1</option>
                <option>Park 2</option>
                <option>Park 3</option>
                <option>Park 4</option>
                <option>Park 5</option>
                <option>Park 6</option>
            </select><br />
            Type Tarif:
            <select>
                <option>tarif 1</option>
                <option>tarif 2</option>
                <option>tarif 3</option>
                <option>tarif 4</option>
                <option>tarif 5</option>
                <option>tarif 6</option>
            </select><br /><br />
            <button>Ajouter</button>
        </div>
    );
};

export default AjoutStationnements;