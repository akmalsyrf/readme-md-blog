---
title: 'Leaving Postman Cloud: A Migration Story to Bruno and the Efficiency of Git-Native Workflow'
description: 'Fed up with Postman getting heavier and more complicated? Read on for my migration to Bruno, a Git-native, lightweight, and free API client for collaborative teams.'
pubDate: 2026-01-08
author: 'Akmal'
tags: ['backend', 'api', 'bruno', 'automation', 'git', 'software-engineering']
---

Lately, I’ve felt that Postman is becoming increasingly _cloud-centric_, packed with additional features that, frankly, I don't need in an _API Client_. The main issue arises when team collaboration becomes cumbersome due to workspace limitations or member caps on the Postman _free tier_. As an engineer who worships efficiency, I yearned for something that fits into our existing ecosystem: **Git**.

Then, I discovered **[Bruno](https://www.usebruno.com/)**.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
<picture style="display: block;">
<source srcset="/notes/20260108191821_bruno-api-collection/bruno.webp" type="image/webp">
<img
src="/notes/20260108191821_bruno-api-collection/bruno.png"
alt="Bruno interface overview"
width="500"
loading="lazy"
decoding="async"
style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
>
</picture>
<p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
<em>Bruno Interface Overview</em>
</p>
</div>

## One Request, One File

The first thing that impressed me about Bruno is its philosophy: **Offline-first and Plain Text.**

Unlike Postman, which stores collections in a single monolithic _collection.json_ (requiring re-imports whenever changes occur) or within their cloud which limits members on the free tier, Bruno saves every request as a file with a `.bru` extension. Imagine: one request is one simple text file.

Because it is file-and-folder based, I no longer need a paid cloud subscription just to share API collections with teammates. I simply include the collection folder in the project's Git repository. Want to share the latest API updates? Just `git push`. Teammates want to grab them? Just `git pull`.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
<picture style="display: block;">
<source srcset="/notes/20260108191821_bruno-api-collection/file-structure.webp" type="image/webp">
<img
src="/notes/20260108191821_bruno-api-collection/file-structure.png"
alt="Example of Bruno folder and file structure"
width="500"
loading="lazy"
decoding="async"
style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
>
</picture>
<p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
<em>Example of Bruno folder and file structure</em>
</p>
</div>

## Implementing a Single Source of Truth: OpenAPI to Bruno

This is the most technically satisfying part. As a backend engineer, I often use OpenAPI Specs (centered in a file named `api.yml`) as the primary documentation. The classic problem is: **The YAML documentation has changed, but the API Client collection is still on an old version.**

I decided to build an automation system using the Bruno CLI. I created a **Centralized API Collection repository** with the following workflow:

1. **Centralized Repo:** All Bruno collections for various services are stored here.
2. **Automated Trigger:** Within this repo, a GitHub Actions workflow monitors changes to the `api.yml` file (OpenAPI Spec).
3. **Bruno Build:** Every time the API specification changes, the workflow runs the Bruno CLI to automatically generate or update the collection.

> "No more manual updates. If the API contract changes in the YAML file, our team's Bruno collection will update automatically after the CI/CD process completes."

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
<picture style="display: block;">
<source srcset="/notes/20260108191821_bruno-api-collection/import-collection.webp" type="image/webp">
<img
src="/notes/20260108191821_bruno-api-collection/import-collection.png"
alt="Bruno import feature. Supports various formats including Postman, OpenAPI Spec, Insomnia, etc."
width="500"
loading="lazy"
decoding="async"
style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
>
</picture>
<p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
<em>Bruno import feature. Supports various formats including Postman, OpenAPI Spec, Insomnia, etc.</em>
</p>
</div>

## Why Bruno Feels "Right" for Developers

After migrating, here are a few reasons why this transition felt so natural:

- **Truly Git-Friendly:** Since the format is plain text, I can clearly see what changed in an API (e.g., header changes or new parameters) directly through a _diff_ on GitHub/GitLab during code reviews.
- **Lightweight:** Bruno doesn’t try to be everything. It focuses on being a fast API Client without the bloatware.
- **Collaboration at No Extra Cost:** As long as your team uses Git, you already have "cloud" collaboration for free.
- **Flexible Scripting:** Support for JavaScript in _pre-request_ and _post-response_ scripts is still there, making the transition from Postman feel very familiar.

## Closing: Back to Basics

The journey of moving to Bruno taught me that sometimes, the best solution isn't the tool with the most features, but the one that integrates best with our workflow. By putting API collection control back into the hands of Git, I’ve not only saved on operational costs but also ensured that our API knowledge base is always in sync with the source code.

For those looking to try a Git-friendly approach to managing APIs, Bruno is an exciting option to explore. Full documentation can be accessed [here](https://docs.usebruno.com/).
