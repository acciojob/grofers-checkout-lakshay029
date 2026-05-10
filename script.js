    // Get all price elements
    const prices = document.querySelectorAll(".prices");

    let total = 0;

    // Calculate total
    prices.forEach((price) => {
      total += Number(price.textContent);
    });

    // Create new row
    const totalRow = document.createElement("tr");

    // Create single cell
    const totalCell = document.createElement("td");

    totalCell.colSpan = 2;
    totalCell.textContent = "Total Price: " + total;

    // Append cell to row
    totalRow.appendChild(totalCell);

    // Append row to table
    document.getElementById("groceryTable").appendChild(totalRow);