var Twitter = require("twitter");

// Super simple check to see that we have the environmental variables in place
if (process.env.TWITTER_CONSUMER_KEY === undefined ||
    process.env.TWITTER_CONSUMER_SECRET === undefined ||
    process.env.TWITTER_TOKEN_KEY === undefined ||
    process.env.TWITTER_TOKEN_SECRET === undefined) {

    console.alert("You have not provided all environmental variables for the " +
        "Twitter to work properly. Please provide the following environmental " +
        "variables:");

    console.alert(" TWITTER_CONSUMER_KEY", process.env.TWITTER_CONSUMER_KEY);
    console.alert(" TWITTER_CONSUMER_SECRET", process.env.TWITTER_CONSUMER_SECRET);
    console.alert(" TWITTER_TOKEN_KEY", process.env.TWITTER_TOKEN_KEY);
    console.alert(" TWITTER_TOKEN_SECRET", process.env.TWITTER_TOKEN_SECRET);
}

// Using the environmental variables we make it fly
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET
});

var params = {
    screen_name: "mikaturunen"
};

client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (error) {
        console.alert();
        return;
    }

    console.log(tweets);
});
