let intervalId;

function calculate() {
    // Clear any existing interval to avoid multiple intervals running
    if (intervalId) {
        clearInterval(intervalId);
    }

    // Get the birthdate input
    let birthdate = new Date(document.getElementById('birthdate').value);

    // Check if the date is valid
    if (isNaN(birthdate.getTime())) {
        alert("Please enter a valid date.");
        return;
    }

    // Update the age every second
    intervalId = setInterval(() => {
        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageInS = ageInMs / 1000;
        let ageInMins = ageInS / 60;
        let ageInHrs = ageInMins / 60;
        let ageInDays = ageInHrs / 24;
        let ageInMonths = ageInDays / 30.4375;
        let ageInYears = ageInMonths / 12;

        document.querySelector('#years').innerHTML = Math.floor(ageInYears);
        document.querySelector('#months').innerHTML = Math.floor(ageInMonths % 12);
        document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375);
        document.querySelector('#hours').innerHTML = Math.floor(ageInHrs % 24);
        document.querySelector('#minutes').innerHTML = Math.floor(ageInMins % 60);
        document.querySelector('#seconds').innerHTML = Math.floor(ageInS % 60);
        document.querySelector('#seconds').style.borderBottom = '1px grey solid';
    }, 1000);
}

function reset() {
    // Clear the interval and reload the page
    if (intervalId) {
        clearInterval(intervalId);
    }
    window.location.reload();
}

// Initial call to start the calculation
calculate();