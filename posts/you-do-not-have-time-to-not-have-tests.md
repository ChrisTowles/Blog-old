---
title: You do not have time to not have tests
date: 2021-12-17T16:00:00.000+00:00
lang: en
duration: 7 min
---

# {{ $frontmatter.title }}

So first a full disclosure: I was really late to get on the testing band wagon.

Its shamefully obvious now but I had heard about testing for years before I understood its value. I wish had fully incorporated it into my development practices sooner. So maybe I can convince you to do the same.

<!-- more -->

## Life without Tests

If you were like me, you may have thought you didn't have time to write tests. You ship features fast and adding tests would slow down the process and a waste time. And the first week or two of a project you may be right.

Good news, the project is a success.  Now users what new features. You need to and you need to maintain it for a long time. Maybe years in-fact. You need to add features, add different code paths and scenarios. How to you ensure that new features work and old features didn't break?

You manually just have to test them. things like:

- Account creation, login, logout, etc.
- User profile, settings, etc.
- User's posts, comments, etc.
- checkout and payment, etc.

However now that your project is a success, you can't be breaking things in production. So you have to be very careful. Every new feature affects the whole system. Any

fast features are shipped, they are not always perfect. They are not always 100% correct. They are not always bug free. They are not always maintainable. They are not always testable.

## Tests save Time

> Blog post is still a work in progress
