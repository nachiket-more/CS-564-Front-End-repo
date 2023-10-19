// Add your code here
const form = document.getElementsByClassName("form")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullNameVale = form.elements.fullname.value;
  const emailValue = form.elements.email.value;
  const registrationValue = form.elements.registration.value;
  const checkboxInputs = form.elements.checkbox;
  const textValue = form.elements.textArea.value;

  console.group("========= Form submission =========");
  console.log(
    "Full Name: ",
    fullNameVale == "" ? "no submission" : fullNameVale
  );
  console.log("Email: ", emailValue == "" ? "no submission" : emailValue);
  console.log(
    "Registration Status: ",
    registrationValue == "" ? "no submission" : registrationValue
  );

  const checkedCourse = []
  checkboxInputs.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCourse.push(checkbox.value)
    }
  });
  console.log("Have you taken any of the following courses?: ", checkedCourse.length==0 ? "no submission" : checkedCourse)

  console.log(
    "Anything else?: ",
    textValue == "" ? "no submission" : textValue
  );
  console.groupEnd();
});
