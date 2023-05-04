import React from 'react';

const ChercherParking = () => {
    return (
        <div>
            <h1>Chercher Parking</h1>
            <input type='text' placeholder='Saisir le prix' /> <button>Chercher</button>
            <ul>
                <li><a href='#'>Park 1</a></li>
                <li><a href='#'>Park 2</a></li>
                <li><a href='#'>Park 3</a></li>
                <li><a href='#'>Park 4</a></li>
                <li><a href='#'>Park 5</a></li>
            </ul>
        </div>
    );
};

export default ChercherParking;