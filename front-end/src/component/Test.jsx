import axios from 'axios';
import React, { useState } from 'react'

const Test = () => {
    const [pdfData, setPdfData] = useState(null);

    const handleGeneratePdf = async () => {
        // Make an API request to generate the PDF
        const response = await axios.post('http://127.0.0.1:8000/api/create-pdf', {
            id: 13 // Replace with the desired ID value
        });

        // const data = response.data;
        // setPdfData(data.pdf);

        const { pdf } = response.data;

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = `data:application/pdf;base64,${pdf}`;
        link.setAttribute('download', 'document.pdf');
        link.style.display = 'none';
        document.body.appendChild(link);
      
        // Trigger the download
        link.click();
      
        // Clean up the link element
        document.body.removeChild(link);
    };

    return (
        <div>
            <button onClick={handleGeneratePdf} className='btn btn-primary'>Generate PDF</button>
            {/* {pdfData && (
                <object
                    data={`data:application/pdf;base64,${pdfData}`}
                    type="application/pdf"
                    width="100%"
                    height="500px"
                >
                    <p>Unable to display PDF.</p>
                </object>
            )} */}
        </div>
    );
}

export default Test
