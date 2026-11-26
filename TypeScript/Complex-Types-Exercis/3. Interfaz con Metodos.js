"use strict";
// Create a object to fulfilled
const musicList = {
    name: "Wake Up",
    singer: "NEFFEX",
    genre: "Hip-Hop/Rap",
    // Use play method to play song
    play(name, singer, genre, duration) {
        const playSong = `${name} ${singer} ${genre} ${duration}`;
        // Display the played song
        console.log(`Cancion que se esta reproduciendo:
            
            Nombre: ${name}
            Cantante: ${singer}
            Genero: ${genre}
            Duracion: ${duration}
        `);
        // Return the played song
        return playSong;
    },
    // Use pause method to pause the current song
    pause(name) {
        const pauseSong = `${name}`;
        // Indicate the current song was paused
        console.log(`La cancion ${name} se pauso`);
        // Return the paused song
        return pauseSong;
    },
    // Use change method to change the song play
    change(name, singer, genre, duration) {
        // Use change method to change song
        const changeSong = `${name} ${singer} ${genre} ${duration}`;
        // Display the changed song
        console.log(`La cancion que se esta reproduciendo ahora es:
        
            Nombre: ${name}
            Cantante: ${singer}
            Genero: ${genre}
            Duracion: ${duration}
        `);
        // Return the changed song
        return changeSong;
    }
};
// Display the current song play
musicList.play("Wake Up", "NEFFEX", "Hip-Hop/Rap", 426);
musicList.pause("Wake Up");
musicList.change("Purpose", "NEFFEX", "Hip-Hop/Rap", 346);
// Test to call actions with wrong type arguments
musicList.play("Collapse", "NEFFEX", "Hip-Hop/Rap", "250");
