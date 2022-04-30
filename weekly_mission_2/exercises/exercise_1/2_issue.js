const Issue = {
    title : "Typo Readme.me",
    repositoryNameAssociated: "playbook-launchx-nodejs",
    status: "Open",
    numberOfComments: 4,
    labels: ["weekly-mission-2","typo"],
    author: "mgonzalez94",
    dateCreated: "2022-04-26 20:51:20",
    lastUpdated: "2022-04-27 20:01:00",

    getTitleAndAuthor : function() {
        return `${this.title} from ${this.author}`
    },
    getGeneralInfo : function() {
        return `This Issue is ${this.status} was created at ${this.dateCreated}`
    }
}

console.log(`Title: ${Issue.title} \nRepository: ${Issue.repositoryNameAssociated} \nStatus: ${Issue.status} \nLabels: ${Issue.labels}`)
console.log(Issue.getGeneralInfo())