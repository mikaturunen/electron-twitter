# Electron-Twitter
Simplified tutorial / hello world style Electron js application. Demonstrated the common way of how to use web technologies on desktop environment in a cross-platform compatible manner. Application uses Twitter API to fetch tweets of the user. Requires TOKEN, KEY to be present for the Twitter API to function properly.

Details are provided as part of the environmental variables the application requires to run.


## How to install


## How to run
You need to go to [Twitters manage applications](https://apps.twitter.com/) and create yourself a simple application. The details do not matter. What matter are the following variables you are going to need from there:

    Consumer Key (API Key)
    Consumer Secret (API Secret)
    Access Token
    Access Token Secret

Once you have generated the application following the on-screen instructions, you can simply switch to the _Keys and Access tokens_ tab and copy the values. You need to set the values from there into the following environmental variables for the application to load tweets for you:

    Windows example (note: these are just made up values):

    set TWITTER_TOKEN_SECRET=7A7bR56LFuY9KaYo7qoFLpsKt3ly7CwWBJolLrBrUmWheiIuZqxgdJ
    set TWITTER_CONSUMER_SECRET=7A7bR56LFuY9KaYo7qoFLpsKt3ly7CwWBJolLrBrUmWheiIuZqxgdJ
    set TWITTER_TOKEN_KEY=7A7bR56LFuY9KaYo7qoFLpsKt3ly7CwWBJolLrBrUmWheiIuZqxgdJ
    set TWITTER_TOKEN_SECRET=7A7bR56LFuY9KaYo7qoFLpsKt3ly7CwWBJolLrBrUmWheiIuZqxgdJ
    set TWITTER_USER=mikaturunen

Once the values are set, the application will fetch the latest tweets from the provided TWITTER_USER and display them. If the values are not set, no tweets will be displayed.


## Details to note
