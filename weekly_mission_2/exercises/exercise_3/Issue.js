class Issue {
    constructor(title, repositoryNameAssociated, 
                status, numberOfComments, labels, author,
                dateCreated, lastUpdated) {
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status,
        this.numberOfComments = numberOfComments,
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated,
        this.lastUpdated = lastUpdated
    }

    getTitleAndAuthor() {
        return `${this.title} from ${this.author}`
    }
    getGeneralInfo() {
        return `This Issue is ${this.status} was created at ${this.dateCreated}`
    }
}

const myLifeIssue = new Issue("Typo Readme.me", "playbook-launchx-nodejs", "Open",
                          4, ["weekly-mission-2","typo"],
                          "mgonzalez94", "2022-04-26 20:51:20" , "2022-04-27 20:01:00")

console.log(myLifeIssue.getTitleAndAuthor())
console.log(myLifeIssue.getGeneralInfo())