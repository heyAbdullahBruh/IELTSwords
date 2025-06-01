// Fetch IELTS data from JSON--->

async function fetchWords() {
  const response = await fetch("./ieltsWords.json");
  const data = await response.json();
  visulize(data.slice(0,100))
}


// Target the container
const container = document.getElementById("words");

// Loop and render words
function visulize(ieltsWords) {
  ieltsWords.forEach((item,idx) => {
    const card = document.createElement("div");
    card.className = "word-card";

    card.innerHTML = `
    <div>${idx+1}</div>
    <h4>${item?.banglaMean} — ${item?.englishWord}</h4>
    <p><strong>Example:</strong> ${item.example}</p>
  `;

    container.appendChild(card);
  });
}

function downloadPDF() {
  const element = document.getElementById("words");

  const options = {
    margin: .06,
    filename: "ielts_words.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 5 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(options).from(element).save();
}


fetchWords();
