---
title: secret_bot and Web Requests
layout: Post
bgcolor: '#001855'
date: 2016-11-29
hidden: true
---

If you're reading this page, then you probably found it from the User Agent string that secret_bot sends when making a web request.

First of all, some links.

**[What is secret_bot?](/bot/)**  
**[Source code](https://github.com/SecretOnline/bot)**

# When does secret_bot make a request to my server

There is no `curl`-like functionality in secret_bot. A user can not type something in to request a particular resource from your website.

The only time that secret_bot make a web request is if a command uses it. As an example, `~randomcat` requests the URL `http://random.cat/meow`. ([source](https://github.com/SecretOnline/bot/commit/c2e135fb7ecad3248f5e7bf0bf1a8c499fc41038#diff-ad7f8f227879b62c56b34e5dd2718886R73))

# Does secret_bot respect robots.txt

In almost all cases, yes.

secret_bot checks against the user agent "secret_bot". If you want to allow secret_bot and nothing else, then you can put this in your robots.txt

```
User-Agent: *
Disallow: /

User Agent: secret_bot
Allow: /
```

Under the hood, secret_bot uses [robots.js](https://github.com/ekalinin/robots.js) to parse and evaluate your robots.txt file.

## Exceptions to robots.txt

It is possible to bypass the robots.txt check in secret_bot. If your site is on the list, and you want the functionality removed from secret_bot, then [let me know](/about/).

The following are cases where robots.txt is bypassed.

* `~randomdog`
  * Is not enabled by default, the group `randomstuff` must be enabled first.
  * Requests the URL `http://random.dog`. ([source](https://github.com/SecretOnline/bot/commit/9e1b6524101afed04ae8b2de4dafeeacecac308e#diff-ad7f8f227879b62c56b34e5dd2718886R85))
  * secret_bot does NOT try to index the site. It only accesses the main page.
