---
title: Info-Repo
layout: Project
bgcolor: "#01385B"
github: Info-Repo
priority: -9
---

[No Man's Sky](http://www.no-mans-sky.com/) is a game that came out in August 2016. It set some rather lofty goals, with 18 quintillion procedurally generated planets. It managed to do that, but what it failed to do was be a fun game.

---

Before the game's release, I was a member of the [/r/NoMansSkyTheGame subreddit](https://reddit.com/r/NoMansSkyTheGame). I started going through the /new queue and answering questions people had about the game. The questions that were asked were usually pretty similar, and while the subreddit wiki had a lot of information in it, it was a bit hard to navigate.

* [FAQ](https://en.reddit.com/r/NoMansSkyTheGame/wiki/faq?v=e5e8430a-9153-11e4-a9e7-22000b3c84ba)
* [Archive](https://en.reddit.com/r/NoMansSkyTheGame/wiki/archive?v=213f78e8-14e8-11e5-aebf-0ecf5d7b377b)

I set out to fix that. I would create a site with all of the information available on the game at that time. It would have sources for all the information, and be easily searchable. It would also be mobile friendly, which turned out to be a good decision, given that 1/3 of all the traffic to the site was from mobile devices.

![Comparison of desktop vs. mobile users](/assets/img/proj/info-repo/pie.png)

*Comparison of desktop vs. mobile users*

---

The [original version](https://secretonline.github.io/NMS-Info/) of the repository is in [a different GitHub repo](https://github.com/SecretOnline/NMS-Info). It heavily used dynamic HTML, loading the information in one large JSON file and generating all of the page from that. In order to prevent elements from appearing on the page when not needed, there were separate functions for [creating a card](https://github.com/SecretOnline/NMS-Info/blob/master/scripts/info.js#L343) and [adding the information to it](https://github.com/SecretOnline/NMS-Info/blob/master/scripts/info.js#L740).

By far one of the hardest parts of maintaining the Repository was making sure the information in it was correct and up to date. This meant going through many articles and interviews about the game, just to see if there was anything new in them.

When it was ready, I [released it](https://en.reddit.com/r/NoMansSkyTheGame/comments/3remi9/no_mans_sky_information_repository/) into the wild, where it was met with enthusiasm.

![An early version of the Repository](/assets/img/proj/info-repo/initial.png)

*An early version of the Repository*

---

That wasn't the end of the work (*the length of this page should indicate that*), since small bits of information about the game came out all the time. Every time a new article came out, I would read through it, pick out the information, and add it to the Repository.

However, there were things I didn't like about it. The code was a complete mess, and I wanted to rewrite it. However, I didn't want to have to go through all of the DOM manipulation, so I turned to [React](https://facebook.github.io/react/).

I created a [fresh repository](https://github.com/SecretOnline/Info-Repo) to begin from. I then spent a lot of time playing around with React, and eventually settling on a structure for the Repository. After a few weeks, I was happy with where I had got to, so I [released that version](https://en.reddit.com/r/NoMansSkyTheGame/comments/4urkwy/the_information_repository_has_been_updated/), where it was met with even more success.

As always happens, there's always more work to do. For the next two weeks I polished the Repository until I was completely happy to put it aside.

![The final version of the Repository](/assets/img/proj/info-repo/final.png)

*The final version of the Repository*

---

When the game released, I quickly discovered that many parts of the game that had been detailed in the Information Repository weren't actually in the game. I have no idea what was happening at Hello Games, but I can only assume they were rushed to publish the game, and weren't able to make it the experience that it could have been.

I left the Repository online as a comparison of what we were told would be in the game against what was in the final release. I also removed myself from the subreddit, as it had turned into a vitriolic mess of hate against Hello Games.

Mine wasn't the only project to shut down after the release of the game. NMS Origins was a site where people could upload and share their discoveries of the game. I was in contact with their team quite often throughout development, acting as a tester and giving help when I could. Origins was shut down a few weeks after the game released, and the team expressed their disappointment in the game.

![A screenshot of Origins while it was still in development](/assets/img/proj/info-repo/origins.png)

*A screenshot of Origins while it was still in development*

---

Nobody has heard from Hello Games since the release, and apart from the initial bug fixes, nothing has been released. I really hope that Hello Games is still working on the game, but I doubt it is going to gain anywhere near the popularity it had pre-release.
