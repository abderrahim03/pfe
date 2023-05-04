import React from 'react';

const ConsulterDepenses = () => {
    return (
        <div>
            <h1>Consulter Depenses</h1>
            Du:
            <input type='date' />
            Au:
            <input type='date' />
            <button>Consulter Depenses</button>
            <table>
                <thead>
                    <tr>
                        <th>nom dess parkings</th>
                        <th>ville</th>
                        <th>prix</th>
                        <th>nombre unite</th>
                        <th>montant</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Park 1</td>
                        <td>Sale </td>
                        <td>10dh</td>
                        <td>20</td>
                        <td>200dh</td>
                    </tr>
                    <tr>
                        <td>Park 2</td>
                        <td>Rabat </td>
                        <td>20dh</td>
                        <td>10</td>
                        <td>200dh</td>
                    </tr>
                    <tr>
                        <td>Park 3</td>
                        <td>Temara </td>
                        <td>5dh</td>
                        <td>10</td>
                        <td>50dh</td>
                    </tr>
                    <tr>
                        <td>Park 4</td>
                        <td>Sale </td>
                        <td>15dh</td>
                        <td>20</td>
                        <td>300dh</td>
                    </tr>
                </tbody>
            </table><br />
            Total: 750dh

        </div>
    );
};

export default ConsulterDepenses;