// wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const funFactBtn = document.getElementById("fun-fact-btn");
  const funFactParagraph = document.getElementById("fun-fact");

  const funFacts = [
    // consts store values that are not dynamic
    "Web Dev is my favorite committee!",
    "Atharva and Angad are the best committee leads!",
    "I love web dev!",
    // add more facts here
  ];

  funFactBtn.addEventListener("click", () => {
    // pick a random fact
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactParagraph.textContent = funFacts[randomIndex]; // code like this can be used to update html
    console.log("Fun fact button clicked!"); // code like this can be used to print to console

    // toggle visibility
    funFactParagraph.classList.toggle("hidden");
  });
});
