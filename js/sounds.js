export default function Sounds() {
    const forest = new Audio('../sounds/forest.wav')
    const rain = new Audio('../sounds/rain.wav')
    const people = new Audio('../sounds/people.wav')
    const fire = new Audio('../sounds/fire.wav')
    
    forest.loop = true
    rain.loop = true
    people.loop = true
    fire.loop = true

    return {
        forest,
        rain,
        people,
        fire
    }
}