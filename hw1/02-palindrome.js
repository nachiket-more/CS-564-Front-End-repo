const elem = document.querySelector("input");
const result = document.getElementById("result-text");

elem.addEventListener("input", handleInput);

function isPalindromeNumber(number) {
  const numStr = number.toString();
  const reversedStr = numStr.split("").reverse().join("");
  return numStr === reversedStr;
}

function handleInput() {
  if (this.value < 0 || isNaN(this.value)) {
    result.innerHTML = "No. Try again.";
    result.style.color = "red";
  } else {
    if (isPalindromeNumber(this.value)) {
      result.innerHTML = "Yes. This is palindrome!";
      result.style.color = "green";
    } else {
      result.innerHTML = "No. Try again.";
      result.style.color = "red";
    }
  }
}
