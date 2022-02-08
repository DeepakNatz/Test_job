const form = document.forms[0];

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const { yourName, yourMail, yourBill,yourPhone,yourQuery } = this.elements;
  console.log(yourName.value,yourMail.value, yourBill.value,yourPhone.value, yourQuery.value);
  alert("Your queries are submited");
});
