import React from 'react';

const ServiceNombre = () => {
    return (
        <div>
            <h1>Calculer le nombre de Stationnements</h1>
            Parking:
            <select>
                <option>Park 1</option>
                <option>Park 2</option>
                <option>Park 3</option>
                <option>Park 4</option>
                <option>Park 5</option>
                <option>Park 6</option>
            </select><br /><br />
            Du:<input type='date' />  Au:<input type='date' /> <button>Calculer</button><br /><br />
            Le nombre de stationnements effectuees est : 200 Stationements.

        </div>
    );
};

export default ServiceNombre;