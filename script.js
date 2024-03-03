function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatMessages = document.getElementById("chat-messages");

    // Display user's message
    var userMessageElement = document.createElement("div");
    userMessageElement.className = "message sent";
    userMessageElement.innerText = userInput;
    chatMessages.appendChild(userMessageElement);

    // Send user input to server for processing
    fetch("/process", {
        method: "POST",
        body: JSON.stringify({message: userInput}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        // Display bot's response
        var botMessageElement = document.createElement("div");
        botMessageElement.className = "message received";
        botMessageElement.innerText = data.message;
        chatMessages.appendChild(botMessageElement);
    });

    // Clear input field
    document.getElementById("user-input").value = "";
}
