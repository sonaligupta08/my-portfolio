const form = document.getElementById("contact-form");
const status = document.getElementById("my-form-status");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
    message: form.elements["message"].value
};

const response = await fetch(form.action, {
    method: form.method,
    headers : {
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data),
});

if (response.ok){
    status.innerHTML = "✅ Message sent!";
      form.reset();
    } else {
      status.innerHTML = "❌ Error sending message.";
    }
}
});

