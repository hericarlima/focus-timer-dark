export default function Sounds() {
    const forest = new Audio('../sounds/forest.wav')
    const rain = new Audio('../sounds/rain.wav')
    const people = new Audio('../sounds/people.wav')
    const fire = new Audio('../sounds/fire.wav')
    
    

    return {
        forest,
        rain,
        people,
        fire
    }
}