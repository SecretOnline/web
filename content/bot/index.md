---
title: secret_bot
layout: Project
github: bot
bgcolor: '#001855'
priority: 1
---

# What is secret_bot?

secret_bot is a project that started as a small IRC bot for quickly pasting commonly asked-for links when people came into the channel with the same question as the last 5 people. It may have grown a little bit from there.

# Where can secret_bot be used?

For now, secret_bot is only available on Discord. However, with bot v6.0, new connections can be added. Proper documentation for this will be coming.

# How do I use secret_bot on my server?

First, you might want to try out the bot. You can join a [test channel](https://discord.gg/jCSdKDg) to give it a go. If you like it, type `~bot-invite` to get the invite link. Select the server (you must have the Manage Server permission), and click Authorize.

# Main Features

## Recursive command processing
* Chain commands together!
> ~flip ~fliptable  
> `┻━┻ ︵╯(˳□˳╯)`

## Per-server config
* Don't like tildes? Have another bot that uses them?
> ~change-prefix .  
> `command prefix changed to .`  
> .woo  
> `\o/`
* Have a channel for bot usage?
> ~allow-channel #bots  
> `added #bots to the list of allowed channels`

## Command groupings
* Choose which groups of commands you'd like to use
> ~enable-addon help  
> `enabled test on this server`  

## Two-tier permissions
* Normal users can't run commands that change bot's settings
> ~permtest  
> `you do not have the correct permissions for ~permtest`
* Admins can do more (on Discord, Admins are those with the Manage Server permission)
> ~permtest  
> `permission test passed`

## Reasonably extensive help
* Most commands (even call-response ones) have a help page associated with them
> ~help flip  
> `[the help page for the flip command]`
* Further help topics are available
> ~help topic groups  
> `[the help topic for command groups]`
* Command list of all commands you can run
> ~commands  
> `[list of commands. only those enabled on this server and have permision for]`
* Help is sent through private messages to avoid channel flooding

# Where's the rest of this documentation?

`// TODO`
