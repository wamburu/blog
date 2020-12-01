---
title: Frontend budget checks with Github Actions
author: Denzel Wamburu
date: '2020-12-01'
excerpt: A walkthrough to add performance budget checks to your build process.
hero: images/undraw_File_bundle_xl7g (1).png
---
The [performance](https://web.dev/why-speed-matters/) of a webapp is the lifeline of a digital business.
Let's look at a way of monitoring your webapp frontend budgets using github actions.
The metrics we are going to be monitoring are: 
- [Size Checks](https://github.com/siddharthkp/bundlesize)
- [Lighthouse Audits](https://web.dev/measure/)
- [Web Accessibility](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference)
- [Heap Snapshot](https://developers.google.com/web/tools/chrome-devtools/memory-problems)
- [Unused Source](https://developers.google.com/web/tools/chrome-devtools/coverage)
- [SEO](https://web.dev/lighthouse-seo/)

