// Create a interface to music player with a current song and threes actions: play, pause and change song
interface MusicPlayer {
    name: string,
    singer: string,
    genre: string,
    duration: number

    play(name: string, singer:string, genre: string, duration: number): string;
    pause(name: string): string;
    change(name: string, singer:string, genre: string, duration: number): string;
}

// Create a object to fulfilled
const musicList: MusicPlayer = {
    name: "Wake Up",
    singer: "NEFFEX",
    genre: "Hip-Hop/Rap",

    // Use play method to play song
    play(name: string, singer: string, genre: string, duration: number): string {

        const playSong: string = `${name} ${singer} ${genre} ${duration}`;

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
    pause(name: string): string {

        const pauseSong: string = `${name}`;

        // Indicate the current song was paused
        console.log(`La cancion ${name} se pauso`);

        // Return the paused song
        return pauseSong;
    },

    // Use change method to change the song play
    change(name: string, singer:string, genre: string, duration: number): string {

        // Use change method to change song
        const changeSong: string = `${name} ${singer} ${genre} ${duration}`;

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
}

// Display the current song play
musicList.play("Wake Up", "NEFFEX", "Hip-Hop/Rap", 426);
musicList.pause("Wake Up");
musicList.change("Purpose", "NEFFEX", "Hip-Hop/Rap", 346);

// Test to call actions with wrong type arguments
musicList.play("Collapse", "NEFFEX", "Hip-Hop/Rap", "250");