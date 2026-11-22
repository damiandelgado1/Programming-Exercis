// Create a function to receive the traffic light color
function trafficLightColor(color: string) {
    
    // If the traffic light color is red
    if (color === "red") {

        // Return the action that the driver must take: Stop
        return "Parar";
    
    // If the traffic light color is yellow
    } else if (color === "yellow") {

        // Return the action that the driver must be has: Caution
        return "Precaucion";

    // If the traffic light color is green
    } else if (color === "green") {

        // Return the action that the driver must be: Go
        return "Avanzar";

    // If the traffic light color is any other color
    } else {

        // Return that the traffic light color is outside the allowed range
        return "El color del semaforo ingresado no es valido";

    }
}    

// Call the function and enter the traffic light color
let trafficLight: string = trafficLightColor("green");

// Display the action the driver must take
console.log(trafficLight);