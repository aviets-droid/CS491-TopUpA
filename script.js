// Aisling Viets
// 6/20/25
// Quiz Top-Up A

/** Todo when button is pressed */
function buttonClick() {
  alert("This is Aisling");
}

/** Create and configure CSS style sheet */
function addStyleSheet() {
  const styleElement = document.createElement("style");
  document.body.appendChild(styleElement);
  const stylesheet = document.styleSheets[0];
  stylesheet.insertRule("p { color: red }", 0);
  stylesheet.insertRule("p { display: inline-block}", 1);
  stylesheet.insertRule("p { margin-right: 5px}", 2);
}

/** Create paragraph for text
 * @param {string} content
 */
function addText(content) {
  const text = document.createElement("p");
  text.id = "txt";
  text.textContent = content;
  document.body.appendChild(text);
}

/** Create button with delay (ms) on click
 * @param {string} content
 * @param {number} delay
 */
function addButton(content, delay) {
  const button = document.createElement("button");
  button.id = "btn";
  button.textContent = content;
  button.addEventListener("click", function() {
    setTimeout(buttonClick, delay);
  });
  document.body.appendChild(button);
}

/** Runs all functions to create the page */
function createPage() {
  addStyleSheet();
  addText("Hello");
  addButton("Professor", 1000);
}