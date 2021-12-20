---
title: A Handy Little Alias (for git)
date: "4th September, 2021"
description: Write a function to make life easier with git. Push to a remote repository in one step!
oneline: Technically, it's not even an alias
location: New Delhi, India
---

Writing the same lines to push to your remote repo is a waste of time (2 seconds atmost); here's what I type the most while pushing to a repo-

```zsh
git add .
git commit -am "i am inefficient"
git push origin master
```

And here's how I reduced that to a single line-

## Step 1: Open your zshrc file (or whatever shell you're using)

```zsh
vim ~/.zshrc
```

## Step 2: Write this function

```zsh
git_pushall() {                                                             
    git add .                                                               
    if [ -n "$1" ]                           
    then                                                                    
        git commit -am "$1"                                                 
    else                                                                    
        git commit -am update                                               
    fi                                                                      
        git push origin master                                                  
}   
```

This is pretty self explanatory, but what we are doing is that we are writing a function that takes the commit message as a parameter. It executes three steps: *git add*, *git commit* and *git push*. If we don't pass in an argument then it uses the default message: "update". ***Pretty cool so far***.

## Step 3: Save the changes

Just save the changes and exit from vim; finally, type this in the terminal-

```zsh
source ~/.zshrc
```

Now whenever you need to push a change, here's what you type-

```zsh
git_pushall "I am speeeeeeed"
```

***

I hope this helps and suggestions/changes are welcome :)
