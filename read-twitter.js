var Twitter = require("twitter");

var variablesInPlace = true;

var twitterEnvironmentVariablesMissing = function() {
    variablesInPlace = false;

    console.log("You have not provided all environmental variables for the " +
        "Twitter to work properly. Please provide the following environmental " +
        "variables:");

    console.log(" TWITTER_CONSUMER_KEY", process.env.TWITTER_CONSUMER_KEY);
    console.log(" TWITTER_CONSUMER_SECRET", process.env.TWITTER_CONSUMER_SECRET);
    console.log(" TWITTER_TOKEN_KEY", process.env.TWITTER_TOKEN_KEY);
    console.log(" TWITTER_TOKEN_SECRET", process.env.TWITTER_TOKEN_SECRET);
};

// Super simple check to see that we have the environmental variables in place
if (process.env.TWITTER_CONSUMER_KEY === undefined ||
    process.env.TWITTER_CONSUMER_SECRET === undefined ||
    process.env.TWITTER_TOKEN_KEY === undefined ||
    process.env.TWITTER_TOKEN_SECRET === undefined) {

    twitterEnvironmentVariablesMissing();
}

// Using the environmental variables we make it fly
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_TOKEN_SECRET
});

var params = {
    screen_name: process.env.TWITTER_USER || "mikaturunen"
};

var twitterReader = {
    read: function(mainWindow) {
        if (!variablesInPlace) {
            twitterEnvironmentVariablesMissing();
            // TODO send info to client
            return;
        }

        // Query twitter for feed information
        client.get("statuses/user_timeline", params, function(error, tweets, response) {
            if (error) {
                console.log();
                return;
            }

            var textContentOfTweets = tweets.map(function(t) { return { text: t.text, user: t.user.screen_name }; });
            console.log(textContentOfTweets);
            mainWindow.webContents.send("tweets", textContentOfTweets);
        });
    }
};

module.exports = twitterReader;
