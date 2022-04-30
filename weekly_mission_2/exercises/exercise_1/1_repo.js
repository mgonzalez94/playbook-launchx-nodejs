const Repo = {
    name: "LaunchX",
    author: "mgonzalez94",
    language: "JavaScript",
    numberOfCommits:20,
    stars: 0,
    forks: 5,
    issues_open: 2,
    issues_close: 0,

    getTotalIssues: function() {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo: " + Repo.name)
console.log("Issues totales:  " + Repo.getTotalIssues())
console.log(Repo.getGeneralInfo())
