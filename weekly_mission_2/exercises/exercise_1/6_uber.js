const Uber = {
    first_name : "Miguel A.",
    last_name : "Gonzalez",
    mobile_number : "999-999-1234",
    score : 5,
    messages: [
        {
            name: "Emmet Brown",
            date: "2022-05-01",
            message: [
                    "Marty, he’s in a ’46 Ford. We’re in a DeLorean. He’d rip through us like we were tin foil.",
                    "Well, here we go.",
                    "Back To The Future!’"
            ]
        }
    ],
    locations: [
        {
            name: "Home",
            lat:18.894076082925018, 
            lng:-96.9349334701907
        }
    ],
    trips:[
        {
            date: "2020-03-06 12:15:01",
            rate: 108.25,
            score: 5,
            driver: "Eduardo R.",
            from : "Reforma Capital",
            to   : "Calz. Ignacio Zaragoza, CDMX"
        }
    ]
}

console.log(`${Uber.first_name + ' ' + Uber.last_name}  has ${Uber.score} stars.`)
Uber.messages.forEach(message => {
    console.log(`${message.name} has send: \n"${message.message}"\nat ${message.date}"`)    
});