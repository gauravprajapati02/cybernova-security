import jsPDF from "jspdf";

function ComplaintPDF({ complaint }) {

  const generatePDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(22);

    doc.text(
      "Cyber Crime Complaint Report",
      20,
      20
    );

    doc.setFontSize(14);

    doc.text(
      `Complaint ID: ${complaint.complaintId}`,
      20,
      40
    );

    doc.text(
      `Name: ${complaint.name}`,
      20,
      55
    );

    doc.text(
      `Email: ${complaint.email}`,
      20,
      70
    );

    doc.text(
      `Phone: ${complaint.phone}`,
      20,
      85
    );

    doc.text(
      `Category: ${complaint.category}`,
      20,
      100
    );

    doc.text(
      `Status: ${complaint.status}`,
      20,
      115
    );

    doc.text(
      "Description:",
      20,
      135
    );

    doc.text(
      complaint.description,
      20,
      150,
      {
        maxWidth: 170,
      }
    );

    doc.save(
      `${complaint.complaintId}.pdf`
    );

  };

  return (

    <button
      onClick={generatePDF}
      className="bg-green-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-green-400 hover:scale-105 transition duration-300"
    >

      Download PDF

    </button>

  );

}

export default ComplaintPDF;
