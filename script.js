function buttonClick() {
  alert("This is Aisling");
}

function addStyleSheet() {
  const styleElement = document.createElement("style");
  document.body.appendChild(styleElement);
  const stylesheet = document.styleSheets[0];
  stylesheet.insertRule("p { color: red }", 0);
  stylesheet.insertRule("p { display: inline-block}", 1);
  stylesheet.insertRule("p { margin-right: 5px}", 2);
}

function addText() {
  const text = document.createElement("p");
  text.id = "txt";
  text.textContent = "Hello";
  document.body.appendChild(text);
}

function addButton() {
  const button = document.createElement("button");
  button.id = "btn";
  button.textContent = "Professor";
  button.addEventListener("click", function() {
    setTimeout(buttonClick, 1000);
  });
  document.body.appendChild(button);
}

function createPage() {
  addStyleSheet();
  addText();
  addButton();
}

document.addEventListener("load", createPage());