const PullRequest = {
    title: "add: excercise1-weekly2",
    author: "mgonzalez94",
    branchName: "origin/main",
    dateCreated: "2022-04-27 20:52:31",
    status: "open",
    repositoryNameAssociated: "playbook-launchx-nodejs",
    getStatus: function(){
        return `This pull request has been ${this.status}`
    },
    getTitleAndAuthor: function() {
        return `The pull request "${this.title}" was created by ${this.author}`
    }
}

console.log(PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor())