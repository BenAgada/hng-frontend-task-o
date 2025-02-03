
function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.textContent = "Time(UTC): " + now.toUTCString();
}
updateUTCTime();