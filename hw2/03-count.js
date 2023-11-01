const input = document.getElementById("user-input");
const textContainer = document.getElementById("text");

input.addEventListener("input", handleKeyDown);

function handleKeyDown() {
  const userInput = input.value.trim();
  if (userInput === "") return;

  const text = textContainer.textContent;
  const regex = new RegExp(`\\b${userInput}\\b`, "g");

  const highlightedText = text.replace(
    regex,
    (match) => `<span class="highlighted">${match}</span>`
  );

  textContainer.innerHTML = highlightedText;
}
