function convertTemperature() {

    const tempInput = document.getElementById("temperature").value;
    const conversionType = document.getElementById("conversionType").value;
    const result = document.getElementById("result");

    const decimals = document.querySelector('input[name="decimal"]:checked').value;

    // Check if input is empty
    if (tempInput.trim() === "") {
        result.innerHTML = "Virhe: Anna lämpötila.";
        return;
    }

    // Check if input is a number
    if (isNaN(tempInput)) {
        result.innerHTML = "Virhe: Syötä vain numeroita.";
        return;
    }

    let temp = parseFloat(tempInput);
    let converted;

    // Absolute zero check
    if (conversionType === "cToF") {

        if (temp < -273.15) {
            result.innerHTML = "Virhe: Celsius ei voi olla alle -273.15.";
            return;
        }

        converted = (temp * 9 / 5) + 32;

        result.innerHTML =
            `${temp.toFixed(decimals)} °C = ${converted.toFixed(decimals)} °F`;

    } else {


        if (temp < -459.67) {
            result.inne