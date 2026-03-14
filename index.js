
const form = document.getElementById("contact-form");
const status = document.getElementById("my-form-status");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = {
        name: form.elements["name"].value,
        email: form.elements["email"].value,
        message: form.elements["message"].value
    };

    try {
        const response = await fetch(form.action, {
            method: form.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            status.textContent = "✅ Message sent!";
            form.reset();
        } else {
            status.textContent = "❌ Error sending message.";
        }
    } catch (error) {
        status.textContent = "❌ Error sending message.";
        console.error(error);
    }
});
