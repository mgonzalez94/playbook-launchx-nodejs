const Facebook = {
    username : "MG0nzalez",
    name: "Miguel Angel Gonzalez Romero",
    birthdate : "1994-06-10",
    friends: 120,
    following: 20,
    posts : [
        {
            date:"2022-05-04",
            title: "El Josue Perrin",
            comment: "Como tocar la bateria mientras estas en el OXXO y no hay sistema.",
            liked: 2,
            shared:3
        }
    ]
}

console.log(`${Facebook.username} has ${Facebook.friends} friends and is following: ${Facebook.following}.`)
Facebook.posts.forEach(post => {
    console.log(`${Facebook.username} has posted \n"${post.comment}"\nat ${post.date}" \nhas ${post.liked} likes.`)    
});