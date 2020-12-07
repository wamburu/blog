---
title: Frontend budget checks with Github Actions Pt.1
author: Denzel Wamburu
date: "2020-12-01"
excerpt: A walkthrough to add performance budget checks to your build process.
hero: images/undraw_File_bundle_xl7g (1).png
---

The [performance](https://web.dev/why-speed-matters/) of a webapp is the lifeline of a digital business.
Let's look at a way of monitoring your webapp frontend budgets using Github actions.
The metrics we are going to be monitoring are:

-   [Size Checks](https://github.com/siddharthkp/bundlesize)
-   [Lighthouse Audits](https://web.dev/measure/)
-   [Web Accessibility](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference)
-   [Heap Snapshot](https://developers.google.com/web/tools/chrome-devtools/memory-problems)
-   [Unused Source](https://developers.google.com/web/tools/chrome-devtools/coverage)
-   [SEO](https://web.dev/lighthouse-seo/)

There are various ways of checking metrics, but we are going to hightlight two easy ones using Gimbal (Part one) and Lighthouse CI ([Part Two](https://wamburu.codes/frontend-budget-checks-with-github-actions-pt.2)). Both of this are done using Github Actions.

[Gimbal](https://github.com/ModusCreateOrg/gimbal) is built on top of Lighthouse and offers some added features.
Gimbal can be run using your prefered CI. Check examples of how to configure it using [Circle CI]().

Configuration is done using a `.gimbalrc.yml` file stored in the root of your project.

### Setup

**1. Github Actions**
Create a workflow file that will build your webapp and do performance testing using `ModusCreateOrg/gimbal/action` image on creating a pull request.

```
name: CI

on: [pull_request]

jobs:
  Test:
    runs-on: ubuntu-latest
    steps:
      - name: Check out the code
        uses: actions/checkout@v1
        with:
          fetch-depth: 1
      - name: Install node
        uses: actions/setup-node@v1
        with:
          node-version: '10.13'
      - name: Install npm dependencies
        run: npm i
      - name: Build
        run: npm run build
      - name: Performance Budgeting Regression Testing
        uses: ModusCreateOrg/gimbal/action@master
```

Create a workflow using the following configuration:

**2. Gimbal Config**
Gimbal comes with native audits: `size`, `lighthouse`, `heap-snapshot` & `unused-source`.

```
# Audit types to run
audits:
  - size
  - lighthouse
  - heap-snapshot
  - unused-source

configs:
  # Location of your build folder
  buildDir: build
```

Configs options:

-   Size - File & directory size settings. Configure individual files & directory threshold using regex.

```
size:
    - path: ./build/static/js/[0-9]*.chunk.js
      maxSize: 1 MB
    - path: ./build/index.html
      maxSize: 10 KB
    - path: ./build/favicon.ico
      maxSize: 10 KB
    - path: ./build/
      maxSize: 18 MB
```

-   Lighthouse - Config block for ligthouse preference

```
  lighthouse:
   # Audits options to skip from
    skipAudits:
      - uses-http2
      - redirects-http
      - uses-long-cache-ttl
      - uses-text-compression
    outputHtml: artifacts/lighthouse.html
    # Threshold values for audits, incase one audit value is below
the threshold, the test will fail.
    threshold:
      accessibility: 90
      best-practices: 92
      performance: 64
      pwa: 52
      seo: 100
```

-   Unused Source - Percentage of unused JS/CSS in a file.

```
    unused-source:
        threshold:
            - path: "**/!(private).*.chunk.css"
              maxSize: 60%
            - path: "**/*([0-9]).*.chunk.js"
              maxSize: 90%
```

-   Heap Snapshot - Analyze memory graphs, compare snapshots, and find memory leaks.

```
   heap-snapshot:
        threshold:
            Documents: 11
            Frames: 5
            JSHeapTotalSize: 13356000
            JSHeapUsedSize: 10068000
            Nodes: 800
            RecalcStyleCount: 15
            LayoutCount: 15
```

More audits can be added using plugins. Let's add `axe` (for accessibility benchmarks), `source-map-explorer` (for exploring individual files that make up the source).

```
....

plugins:
  - plugin: '@modus/gimbal-plugin-last-value'
    saveOnlyOnSuccess: false

  - plugin: '@modus/gimbal-plugin-axe'
    thresholds:
      aria-allowed-attr: critical
      color-contrast: serious
      landmark-one-main: moderate
      landmark-complementary-is-top-level: moderate
      meta-viewport: critical
      region: moderate
      page-has-heading-one: moderate
      scrollable-region-focusable: moderate

  - plugin: '@modus/gimbal-plugin-source-map-explorer'
    bundles:
      - path: '**/main.*.js'
        thresholds:
          App.js: 450 B
          index.js: 100 B
          logo.svg: 250 B
          serviceWorker.js: 300 B
          <unmapped>: 150 B
      - path: '**/2.*.js'
        thresholds:
          react/index.js: 50 B
          object-assign/index.js: 1 KB
          react-dom/index.js: 300 B
          react/cjs/react.production.min.js: 7 KB
          react-dom/cjs/react-dom.production.min.js: 110 KB
          scheduler/index.js: 50 B
          scheduler/cjs/scheduler.production.min.js: 5 KB
          webpack/buildin/global.js: 150 B
          <unmapped>: 150 B
      - '!precache-manifest*'
      - '!service-worker.js'

...

```

Source map explorer determines which file each byte in your minified code came from. You can set the threshold for each file entrypoint.
