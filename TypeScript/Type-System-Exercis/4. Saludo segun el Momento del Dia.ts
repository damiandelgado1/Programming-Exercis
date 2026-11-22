// Create a function to receive a hour
function dayHour(hour: number) {
    
    // If the hour received is between 7 and 11
    if (hour >= 7 && hour <= 11) {

        // Display the message "Buenos Dias"
        return `Buenos Dias`;

    // If the hour received is between 12 and 19
    } else if (hour >= 12 && hour <= 19) {

        // Display the message "Buenas Tardes"
        return `Buenas Tardes`;
        
    // If the hour received is between 20 and 23
    } else if (hour >= 20 && hour <= 23) {
        
        // Display the message "Buenas Noches"
        return `Buenas Noches`;
        
    // If the hour is not specified
    } else {

        // Display the actual hour
        const currentTime = new Date();

        const currentHour = `${String(currentTime.getHours()).padStart(2, "0")}:` + `${String(currentTime.getMinutes()).padStart(2, "0")}:` + `${String(currentTime.getSeconds()).padStart(2, "0")};`

        return `La Hora actual es: ${currentHour}`;
    }
}

// Call the function to enter the hour
let greetingMessage: string = dayHour(13);

// Display the greeting message
console.log(greetingMessage);