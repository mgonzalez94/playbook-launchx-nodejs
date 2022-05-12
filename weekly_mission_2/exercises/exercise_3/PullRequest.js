class PullRequest {
    constructor(title, author, branchName, dateCreated,
                status, repositoryNameassociated) {
        this.title = title
        this.author = author
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameassociated = repositoryNameassociated
    }

    getStatus() {
        return `This pull request has been ${this.status}`
    }
    getTitleAndAuthor() {
        return `The pull request "${this.title}" was created by ${this.author}`
    }
}

const pullRequest = new PullRequest("add: excercise1-weekly2", "mgonzalez94",
"origin/main","2022-04-27 20:52:31","open","playbook-launchx-nodejs")

console.log(pullRequest.getStatus())
console.log(pullRequest.getTitleAndAuthor())