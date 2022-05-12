class Facebook{
    constructor(username, name, birthdate, friends, following, posts) {
        this.username = username
        this.name = name
        this.birthdate = birthdate
        this.friends = friends
        this.following = following
        this.posts = posts
    }

    getGeneralInfo() {
        return `${this.username} has ${this.friends} friends and is following: ${this.following}.`
    }

    getPosts() {
        this.posts.forEach(post => {
            console.log(`${this.username} has posted \n"${post.comment}"\nat ${post.date}" \nhas ${post.liked} likes.`)    
        })
    }
}

const post = [
    {
        date:"2022-05-04",
        title: "El Josue Perrin",
        comment: "Como tocar la bateria mientras estas en el OXXO y no hay sistema.",
        liked: 2,
        shared:3
    }
]
const myFB = new Facebook("MG0nzalez","Miguel Angel Gonzalez Romero","1994-06-10",120,20,post)
console.log(myFB.getGeneralInfo())
myFB.getPosts()