import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

function GenerateReport({ complaints }) {

    const generatePDF = () => {

        const doc = new jsPDF();

        doc.setFontSize(20);

        doc.text(
            "Cyber Crime Investigation Report",
            20,
            20
        );

        const tableData = complaints.map((complaint) => [
            complaint.category,
            complaint.description,
            complaint.status,
        ]);

        autoTable(doc, {

            startY: 40,

            head: [[
                "Category",
                "Description",
                "Status",
            ]],

            body: tableData,

        });

        doc.save("CyberCrimeReport.pdf");

    };

    return (

        <button
            onClick={generatePDF}
            className="bg-green-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-400 mb-6"
        >
            Generate PDF Report
        </button>

    );

}

export default GenerateReport;