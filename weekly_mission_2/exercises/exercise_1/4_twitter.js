const Twitter = {
    username : "@MmmaikG",
    name: "MGonzalez",
    bio: "404",
    location: "Veracruz,MX",
    following: 132,
    followers: 16,
    tweets: [
        {
            date: "2015-03-10",
            tweet: "Oh! 3:00 de la mañana, es hora de una naranja :3.",
            comments: 0,
            liked: 4,
            retweeted: 0
        }
    ]
}

console.log(`${Twitter.name} has ${Twitter.followers} followers and is following: ${Twitter.following}.`)
Twitter.tweets.forEach(tweet => {
    console.log(`${Twitter.username} has tweeted \n"${tweet.tweet}"\nat ${tweet.date}" \nhas ${tweet.liked} likes.`)    
});