class Logger {
    constructor(name) {
        // Al crear este objeto se almacenaran estos valores default
        this.count = 0
        this.name = name
    }

    log(message) {
        this.count++
        console.log('['+ this.count + ']' + '['+ this.name + ']' + message)
    }
}

module.exports = new Logger('DEFAULT')
