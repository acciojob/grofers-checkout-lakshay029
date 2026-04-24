const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll('.price');
  let total = 0;

  prices.forEach(function(ele) {
    total += parseFloat(ele.textContent);
  });

  const newRow = document.createElement('tr');
  const totalcell = document.createElement('td');

  totalcell.textContent = 'Total = ' + total;

  newRow.appendChild(totalcell);
  document.querySelector('table').appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);