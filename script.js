function submit() {
  let paymentType = document.getElementById('paymentType');
  let purchase = document.getElementById('purchase');
  let date = document.getElementById('date');
  let amount = document.getElementById('amount');
  let expenseItems = document.getElementById('expenseItems');
  let newExpenseItemRow = document.createElement('tr');
  
  let newExpenseItemContent1 = document.createElement('td');
  let newExpenseItemContent2 = document.createElement('td');
  let newExpenseItemContent3 = document.createElement('td');
  let newExpenseItemContent4 = document.createElement('td');
  let deleteButton = document.createElement('button');
    
  newExpenseItemContent1.textContent = paymentType.value;
  newExpenseItemContent2.textContent = purchase.value;
  newExpenseItemContent3.textContent = date.value;
  newExpenseItemContent4.textContent = amount.value;
  deleteButton.textContent = "X";

  expenseItems.appendChild(newExpenseItemRow);
  newExpenseItemRow.appendChild(newExpenseItemContent1);
  newExpenseItemRow.appendChild(newExpenseItemContent2);
  newExpenseItemRow.appendChild(newExpenseItemContent3);
  newExpenseItemRow.appendChild(newExpenseItemContent4);
  newExpenseItemRow.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => deleteRow(deleteButton));
  deleteButton.className = "deleteButtons";
}

function deleteRow(element) {
  element.parentElement.remove();
}