class Uber{
    constructor(first_name, last_name, mobile_number, score, 
        messages, locations, trips) {
        this.first_name = first_name
        this.last_name = last_name
        this.mobile_number = mobile_number
        this.score = score
        this.messages = messages
        this.locations = locations
        this.trips = trips
    }

    getGeneralInfo(){
        return `${this.first_name + ' ' + this.last_name}  has ${this.score} stars.`
    }
    getMessages() {
        this.messages.forEach(message => {
            console.log(`${message.name} has send: \n"${message.message}"\nat ${message.date}"`)    
        })
    }
}

const messages = [
    {
        name: "Emmet Brown",
        date: "2022-05-01",
        message: [
                "Marty, he’s in a ’46 Ford. We’re in a DeLorean. He’d rip through us like we were tin foil.",
                "Well, here we go.",
                "Back To The Future!’"
        ]
    }
]
const locations = [
    {
        name: "Home",
        lat:18.894076082925018, 
        lng:-96.9349334701907
    }
]

const trips = [
    {
        date: "2020-03-06 12:15:01",
        rate: 108.25,
        score: 5,
        driver: "Eduardo R.",
        from : "Reforma Capital",
        to   : "Calz. Ignacio Zaragoza, CDMX"
    }
]
const myUber = new Uber("Miguel A.","Gonzalez","999-999-1234",5,messages,locations,trips)
console.log(myUber.getGeneralInfo())
myUber.getMessages()