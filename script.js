function Submit() {
  let currency = document.getElementById('currency');
  let purchase = document.getElementById('purchase');
  let date = document.getElementById('date');
  let amount = document.getElementById('amount');
  let expenseItemArray = [currency.value, purchase.value, date.value, amount.value];
  let expenseItems = document.getElementById('expenseItems');
  let newExpenseItemRow = document.createElement('tr');

  let deleteButton = document.createElement('button');
  deleteButton.textContent = "X";

  let newExpenseItemContent1 = document.createElement('td');
  newExpenseItemContent1.textContent = expenseItemArray[0];

  let newExpenseItemContent2 = document.createElement('td');
  newExpenseItemContent2.textContent = expenseItemArray[1];

  let newExpenseItemContent3 = document.createElement('td');
  newExpenseItemContent3.textContent = expenseItemArray[2];

  let newExpenseItemContent4 = document.createElement('td');
  newExpenseItemContent4.textContent = expenseItemArray[3];

  expenseItems.appendChild(newExpenseItemRow);
  newExpenseItemRow.appendChild(newExpenseItemContent1);
  newExpenseItemRow.appendChild(newExpenseItemContent2);
  newExpenseItemRow.appendChild(newExpenseItemContent3);
  newExpenseItemRow.appendChild(newExpenseItemContent4);
  newExpenseItemRow.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => deleteRow(deleteButton));
}

function deleteRow(element) {
  element.parentElement.remove();
}