const serverIP = "Server-KimP.aternos.me";

function copyIP() {
  navigator.clipboard.writeText(serverIP)
    .then(() => {
      document.getElementById("message").textContent =
        "✓ IP adresa byla zkopírována!";
    })
    .catch(() => {
      document.getElementById("message").textContent =
        "IP adresa: " + serverIP;
    });
}
