class Twitter {
    constructor(username, name, bio, location, following, followers,tweets) {
        this.username = username
        this.name = name
        this.bio = bio
        this.location = location
        this.following = following
        this.followers = followers
        this.tweets = tweets
    }

    getBioInfo() {
        return `${this.name} has ${this.followers} followers and is following: ${this.following}.`
    }

    getTweets() {
        this.tweets.forEach(tweet => {
            console.log(`${this.username} has tweeted \n"${tweet.tweet}"\nat ${tweet.date}" \nhas ${tweet.liked} likes.`)    
        });
    }
}
const tweets = [
    {
        date: "2015-03-10",
        tweet: "Oh! 3:00 de la mañana, es hora de una naranja :3.",
        comments: 0,
        liked: 4,
        retweeted: 0
    }
]
const tweet = new Twitter("@MmmaikG","MGonzalez","404","Veracruz,MX",
132, 16, tweets)

console.log(tweet.getBioInfo())
tweet.getTweets()