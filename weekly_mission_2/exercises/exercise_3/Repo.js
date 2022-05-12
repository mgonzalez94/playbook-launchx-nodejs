class Repo {
    constructor(name, author, language, numberofCommits, 
                stars, forks, issues_open, issues_close) {
        this.name = name
        this.author = author
        this.language = language
        this.numberofCommits = numberofCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }
    getRepoName() {
        return `Nombre del repo: ${this.name}`
    }
    getTotalIssues() {
        return this.issues_open + this.issues_close
    }
    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

const repo = new Repo("LaunchX","mgonzalez94","JS",20,0,5,2,0)
console.log(repo.getRepoName())
console.log(repo.getTotalIssues())
console.log(repo.getGeneralInfo())