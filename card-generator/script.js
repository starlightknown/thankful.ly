//Create a birthday wishes card generator. Enter the date and the name, then generate a card using either CSS, SVG or the Canvas API (you can choose which one). Expand this project to include a template system (various designs), and you can expand by using a different technology to replicate the same design (CSS vs Canvas API, for example). You can expand to let people save to disk or print the card.

const generateCard = (name, message, theme) => {
  // Set source path
  document.querySelector("#card-h2").innerText = `On the day of teacher's day I want to thank you for ${message}`;
  document.querySelector("#card-h3").innerText = `Happy Teachers day ${name}!`;
  
  document.querySelector("#card-container").classList.remove("teaching");
  document.querySelector("#card-container").classList.remove("writting");
  document.querySelector("#card-container").classList.add(theme);
};

document.addEventListener("DOMContentLoaded", () => {
  

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const theme = document.querySelector("#theme").value;

    if (!name) {
      alert("Please enter a name");
      return;
    }
    if (!message) {
      alert("Please enter a message");
      return;
    }
    

    generateCard(name, message, theme);

    document.querySelector("#card-container").classList.remove("hidden");
    document.querySelector("#form-container").classList.add("hidden");
  });

  document.querySelector("#back").addEventListener("click", (event) => {
    document.querySelector("#card-container").classList.add("hidden");
    document.querySelector("#form-container").classList.remove("hidden");
  });
});