const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
function listFreelancers() {
  let tableBody = document.getElementById("tableBody");
  let count = 0;
  let sum = 0;
  freelancers.forEach((item) => {
    let delay = Math.random() * 10000;
    setTimeout(() => {
      let row = document.createElement("tr");

      let nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      let occupationCell = document.createElement("td");
      occupationCell.textContent = item.occupation;
      row.appendChild(occupationCell);

      let priceCell = document.createElement("td");
      priceCell.textContent = "$" + item.price;
      row.appendChild(priceCell);
      sum += item.price;

      tableBody.appendChild(row);
      count++;
      let averagePrice = (sum / count).toFixed(2);
      let averagePriceElement = document.getElementById("averagePrice");
      averagePriceElement.textContent = `The average starting price is $${averagePrice}`;
    }, delay);
  });
}
//document.getElementById("addFreelancers").onclick = listFreelancers;
document.addEventListener("DOMContentLoaded", listFreelancers)
