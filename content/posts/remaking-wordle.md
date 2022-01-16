---
title: Making a wordle clone
date: "January 15, 2022"
description: I built this version due to the sudden motivation I got from a similar project. It ended up working out!
oneline: ...In 2 hours
location: New Delhi, India
---

![Wordle UI](/images/posts/wordle.png)
_The Wordle Interface_

If you haven't heard about [Wordle](https://www.powerlanguage.co.uk/wordle/) (yet), you should probably check it out. Just like most recent 'internet-breaking' trends, it is a _simple_ game which offers a great user experience. No Login, no newsletter, no nothing. Just come, play, and leave. Plus, it saves data in the localstorage; so, you get stats without any unnecessary process to go through in between.

Inspired by Guillermo Rauch's [tweet](https://twitter.com/rauchg/status/1480269182021226496), I decided to build a clone myself. Since everyone was making it in JavaScript, I decided to use Python. Naah, that's not it. It just boils down to preferences. Although my entire personal site is built on a JavaScript framework, I still don't love JavaScript enough to use for writing the _interesting_ projects. The code for my version is on [Github](https://github.com/achintyajha/wordle), check it out!

I had a pretty good time writing the program and finally got the hang of [Python Flask](https://flask.palletsprojects.com/en/2.0.x/), and at the end, the code is just a monstrous collection of if-statements. Since I am using a .txt file approach for storing the word to guess and the user's guesses, Heroku doesn't work too well for deployement. Meanwhile, if you want to try it, I have attached a 5-minute setup (which is actually just a 2-minute setup) along with the [Github](https://github.com/achintyajha/wordle) repository.
