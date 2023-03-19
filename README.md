# ReefR Template

This is a bare-bones template repo for the "ReefR" WebR + Reef + d3 "framework" I'm hacking on. It is subject to wild changes. But, the main branch should always work out of the box.

I'll be adding helpers that are useful to me, which may be useful to others.

Check out the live example: <https://rud.is/w/reefr-template/>.

The GH Pages version works as well, just a bit slower: <https://hrbrmstr.github.io/reefr-template/index.html>.

### What is ReefR

It is a _lightweight_ alternative to Shiny and React that uses [Reef](https://reefjs.com/) and D3 + VanillaJS and WebR to help you make data-driven, reactive apps.

It also comes with a bare-bones syntax hilighter ([microlight](https://asvd.github.io/microlight/)).

One core feature I wanted was the ability to use markdown instead of just HTML, so the only thing `index.html` has is header stuff and a load of `main.js` which does all the work.

Part of that work is to render `index.md` into the DOM, which starts the app.

You edit in markdown, using HTML only when needed (i.e., where you want reactive inputs/outputs). It renders _superfast_, so have no fears about slowness.

I usually use my own install of WebR but this uses the r-wasm hosted WebR so it should work everywhere, provided you update `SW_URL` in `main.js`.

### What do I do next?

In all deployments you need to:

- fork this repo
- remove the git history
- start new git history
- modify `SW_URL` in `main.js` to point to the full path from `/` to the this directory
- remember to update the OG tags!

For GitHub:

- tell GitHub that `/` in your main branch is where you want GH pages to be served from
- you did update `SW_URL` in `main.js` right?

NOTE: If the indicator in the message is not a 🔵, then it is likely a 🌕 indicating it's not cross-origin isolated and some ops may be slower than ideal (this will likely happen in GH Pages deploys).

### Start hacking!

