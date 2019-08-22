## Nicole Sullivan
@stubbornella Twitter handle, holler with Chrome feedback
* Chrome is changing to be more welcoming to frameworks
* Used to have a framework within Chrome, but that was sunsetted because it was competing with other frameworks
  * Bad idea for Chrome to compete with other frameworks since folks need many good options on the web
* Ship less JavaScript. What does that mean?
  * First, a shared goal - Users want amazing features and great Performance
  * React is building great features; let's focus on performance
* Currently, experienced + sophisticated developers succeed, other folks don't
  * we right good apps for fast networks, but work poorly in emerging markets
* We need to reduce the time between first contentful paint (FCP) and time to interactive (TTI)
* meta-frameworks like next.js and nuxt.js are helping
* challenge: keeping the ui interactive
  * JS and taps share the same thread
  * we have 10-50ms to respond to ui interaction
  * React is trying to yield mid-render so interaction can happen more quickly
  * A lot of code is outside of the framework's control, so yielding may not help a bunch
  * React has a scheduler, Chrome is now working on an In-Browser Scheduler (shipped 2 weeks ago)
* the web has a few task queues, the "Default" queue ends up with the majority of the work
* one option is adding priorities to the default queue so we can schedule better
* We have good first-load metrics for SPA's, but we haven't had good metrics for subsequent page-loads
  * working on those metrics now
* How do we load code only as needed?
  * web has a lot of raw materials, hard to put stuff together in the right way
  * meta frameworks are a good option here. Can help centralize a build-chain in one place
* The Framework Fund
  * Google is giving money to projects that are making frameworks better

## Glen Maddern
@glenmaddern
* Frontend App Bundles (The Docker of the Frontend)
  * https://linc.sh <- actually not even sure why he mentioned this
  * https://fab.dev <- main topic for this talk
* A FAB is a compile target for a frontend app
* Any frontend project -> FAB -> run anywhere JS can run
* Docker was so successful because it competed with closed-source libraries by open-sourcing good ideas, not because it was the first container solution
  * Similar revolution should happen on the frontend
* Currently it's not easy to make the choice between building static & dynamic (server-side rendered) sites
* If you could host a dynamic site as easily as you can host a static site, it would change the way that frameworks evolve
* **COOL FREE STUFF** https://workers.cloudflare.com/