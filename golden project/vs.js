var alumniForm = document.getElementById("alumniForm");
var nameInput = document.getElementById("nameInput");
var batchInput = document.getElementById("batchInput");
var emailInput = document.getElementById("emailInput");
var alumniTable = document.getElementById("alumniTable").getElementsByTagName("tbody")[0];

alumniForm.addEventListener("submit", addAlumni);

function addAlumni(event) {
  event.preventDefault();
  
  var name = nameInput.value;
  var batch = batchInput.value;
  var email = emailInput.value;
  
  var newRow = alumniTable.insertRow();
  var nameCell = newRow.insertCell(0);
  var batchCell = newRow.insertCell(1);
  var emailCell = newRow.insertCell(2);
  
  nameCell.textContent = name;
  batchCell.textContent = batch;
  emailCell.textContent = email;
  
  nameInput.value = "";
  batchInput.value = "";
  emailInput.value = "";
}
