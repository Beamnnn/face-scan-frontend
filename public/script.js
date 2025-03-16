document.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("registerSubmit");
    if (registerBtn) {
        registerBtn.addEventListener("click", async () => {
            const name = document.getElementById("name").value;
            const fileInput = document.getElementById("imageInput").files[0];

            if (!name || !fileInput) {
                alert("Please enter a name and upload an image.");
                return;
            }

            let formData = new FormData();
            formData.append("name", name);
            formData.append("file", fileInput);

            try {
                let response = await fetch("http://127.0.0.1:8000/register-face/",
                    {
                    method: "POST",
                    body: formData
                });

                let data = await response.json();
                document.getElementById("result").innerText = data.message;
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to register face.");
            }
        });
    }
});

function scanFace() {
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = async function () {
        let formData = new FormData();
        formData.append("file", fileInput.files[0]);

        try {
            let response = await fetch("http://127.0.0.1:8000/scan-face/", {
                method: "POST",
                body: formData
            });

            let data = await response.json();
            document.getElementById("result").innerText = data.message;
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to scan face.");
        }
    };
    fileInput.click();
}

function goToRegister() {
    window.location.href = "register.html";
}

function goBack() {
    window.location.href = "index.html";
}
function goToTheory() {
    window.location.href = "theory.html";
}
function goToTutorial() {
    window.location.href = "tutorial.html";
}