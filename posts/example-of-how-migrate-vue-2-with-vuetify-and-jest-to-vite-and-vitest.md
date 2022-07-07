---
title: Example of how migrate Vue 2 with Vuetify and Jest to Vite and Vitest
date: 2022-01-09T16:00:00.000+00:00
lang: en
duration: 15 min
---

# {{ $frontmatter.title }}

So my main project at work is a [Vue 2](https://vuejs.org/) and [Vuetify 2](https://vuetifyjs.com/) site, but privately I have been playing with [Vue 3](https://vuejs.org/) and really loved the [Composition API](https://staging.vuejs.org/guide/introduction.html#api-styles) to avoid `mixins`. Due to some new features we are planning building soon. I really wanted to write it in `vue 3`, to prevent needing to migrate it to `vue 3` after it was just finished in `vue 2`.
<!-- more -->

I wanted to investigate how to migrate from `vue 2` to `Vue 3`. My plan was to use the amazing [Migration Build](https://v3.vuejs.org/guide/migration/migration-build.html) to allow `vue 3` to use most `vue 2` components  during a migration period. Which is much less risky for a large project.

I took a rough hack at doing the migration leaving only a handful of pages to test over the course of a day see how likely the migration was. I had to upgrade `Vuetify` from `2.X.X` to early beta version of `3.X.X`. However I was unable to get anything more than a vew `v-cards` and `v-btn` was working. A peer on another work team had said as much but I hadn't listened. My bad.

## Vuetify 3 is not ready of 2021-12-18

With that I had confirmed that unfortunately `Vuetify` is not ready for `vue 3` as of 2021-12-18. I tried the beta [@vuetify/nightly](https://www.npmjs.com/package/@vuetify/nightly) but its far from ready. The documentation said it's to ship February but looking at the missing functionality I really doubted it.

I joined the discord community got caught up on the most recent updates. Basicly its going to take a little longer which is fight. Its Open source and its not liked i've contributed any PR's. Its been a great framework and recommend it to everyone.

I'll update this post when it is ready and has support `vue 3`.

But what can i do?

## Original Goal - Vue 3

So the dream would be to get to `vue 3` but thats not practical without `Vuetify`.  That leaves two options:

- replace `vuetify` with different component framework
- don't upgrade to `vue 3` and keep `vuetify 2.X.X`
  - upgrade to v3 once its ready

To be clear, replacing `vuetify` has almost no upside for my employer.

- it would take alot of time to convert the large codebase.
- likely to introduce bugs
- no improvement for the user
- time and effort retraining the team.
- moving away from framework others in the company already also uses.

So its pretty easy to decided to wait on doing the migration to `vue 3` and `vuetify 3` once its ready.

## New Goal - Vite and Composition API with vue 2

Thinking about the problem I realized that also of the migration and benefits of the migration to `vue 3` was the improvement of the tooling. [Vite](https://vitejs.dev/guide/why.html) is so fast you have to see to believe. I follow [Evan You](https://twitter.com/youyuxi) and [Anthony Fu](https://twitter.com/antfu7) on twitter so have been watching it come to life.

So I decided to try to migrate to `vite` and allow the `composition-api` with `vue 2`. This would also make it easier to upgrade to `vue 3` once its ready.

So the new goal looks like this.

- keep `vue 2` and `vuetify 2.X.X`
- remove `@vue/cli-service`
- remove `webpack`
- remove `babel`
- add `vite`
- add `composition-api`

There are some other features that I want but these are the MVP ones and they provide some really be and will be the core to allow migrating to `vue 3` and `vuetify 3` once its ready.

## Recreate a mock Repo with Vue 2 and Vuetify

To test out how hard the would be I recreated a simple mock repo with `vue 2` and `vuetify 2.X.X` with `@vue/cli-service`. and tested out the upgrade there.  If it works for a simple repo i can then try the more complex monorepo at work.

LINK_TO_REPO_Branch

Show a template of it example of build commands.

## To to migrate to vite and composition-api
