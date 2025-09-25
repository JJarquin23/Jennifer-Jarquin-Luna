const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("usersName").value;
  const email = document.getElementById("usersEmail").value;
  const message = document.getElementById("usersMessage").value;

  // --- Confirmation Section ---
  const messageSection = document.getElementById("message");
  messageSection.innerHTML = `
    <h3>Thank you, ${name}!</h3>
    <p>We got your email: <strong>${email}</strong></p>
    <p>Your message: "${message}"</p>
  `;

  // --- Messages List Section ---
  const messagesSection = document.getElementById("messages");
  const messageList = messagesSection.querySelector("ul");

  // Create list item
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `
    <a href="mailto:${email}">${name}</a>: 
    <span>${message}</span>
  `;

  // Create remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  // Remove the parent <li> when clicked
  removeButton.addEventListener("click", function() {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  // Add button to <li>
  newMessage.appendChild(removeButton);

  // Add <li> to <ul>
  messageList.appendChild(newMessage);

  // Reset form
  form.reset();
});