# Electron-Twitter
Simplified tutorial / hello world style Electron js application. Demonstrated the common way of how to use web technologies on desktop environment in a cross-platform compatible manner. Application uses Twitter API to fetch tweets of the user. Requires TOKEN, KEY to be present for the Twitter API to function properly. Application is ugly as zero CSS is involved but mainly shows how to get a cross-platform compatible application running in desktop environment with web technologies.

Details are provided as part of the environmental variables the application requires to run.


## How to install
### Installing electron-twitter
As it's not currently packed into a distributable of it's own as that warrants for another tutorial on it's own we are just simply going to run it through NPM and jump through some hoops.

Here we go:

    cd some/temp/location/
    npm install electron-twitter
    cd node_modules/electron-twitter
    npm install


### Displaying tweets (optional)
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

## How to run
After you have installed electron-twitter, running it can be simply done by

    npm start


## Details to note
It obviously is lacking in the UI department as it's a tutorial usage / hello world style entry into Electro. I wanted to show how simple it is to build applications in a cross-platform manner for desktops with web technologies, not make it look pretty. Obviously that would be a great next step for another tutorial, we'll see :)


## What are the possible next steps for those following the tutorial/hello world?

- Pack the application into a distributable for easy distribution
- Make it look pretty with simple CSS
- Distribute it for everyone to enjoy
