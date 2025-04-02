document.getElementById("codeInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let valeur = this.value.toLowerCase();
        fetch("server.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ input: valeur })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = data.redirect;
            }
        });
    }
});
