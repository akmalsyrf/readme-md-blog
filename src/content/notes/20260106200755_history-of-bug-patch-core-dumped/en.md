---
title: 'Physical Traces Behind the Code: Why Do We Call It That?'
description: 'Tracing the history behind popular programming terms like Bug, Print, and Patch'
pubDate: 2026-01-06
author: 'Akmal'
tags: ['software-engineering', 'history', 'fun-facts', 'computer']
---

Building modern software often makes us forget that the language we use every day—terms like _print_, _bug_, and _patch_—is actually a "legacy" inherited from piles of iron, cables, and paper from the past.

Recently, I watched an incredible video from the YouTube channel **Core Dumped** titled _"How History Shaped the Programming Terms We Still Use Today"_. This video truly opened my eyes to how the physical history of computers shaped the software engineering jargon we use now. Let me share some of the most interesting findings.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
<picture style="display: block;">
<source srcset="/notes/20260106200755_history-of-bug-patch-core-dumped/core-dumped.webp" type="image/webp">
<img
src="/notes/20260106200755_history-of-bug-patch-core-dumped/core-dumped.png"
alt="Core Dumped"
width="500"
loading="lazy"
decoding="async"
style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
>
</picture>
<p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
<em>Core Dumped</em>
</p>
</div>

---

### 1. The Horror Message "Core Dumped"

If your program crashes in a Linux environment, you might have seen the message `segmentation fault (core dumped)`. Did you know that "Core" here refers to a real physical object?

Back then, computer memory (RAM) was made of thousands of tiny magnetic rings called **magnetic core memory** [[01:11](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=71)]. Each ring represented one bit (0 or 1). When a computer died or crashed, engineers needed to inspect the contents of these "rings" to find out what went wrong. The process of copying the entire contents of physical memory into a file was called "dumping the core." So, even though our RAM is now made of silicon transistors, we are still "dumping the core" every time a fatal error occurs [[04:24](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=264)].

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
<picture style="display: block;">
<source srcset="/notes/20260106200755_history-of-bug-patch-core-dumped/magnetic-core-memory.webp" type="image/webp">
<img
src="/notes/20260106200755_history-of-bug-patch-core-dumped/magnetic-core-memory.png"
alt="Magnetic Core Memory"
width="500"
loading="lazy"
decoding="async"
style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
>
</picture>
<p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
<em>Magnetic Core Memory</em>
</p>
</div>

### 2. The Mystery of the `print()` Function (Despite No Paper)

Have you ever felt it was strange to type `print("Hello World")` only to see text appear on a monitor instead of from a printer?

The reason is that in the 1950s, monitors were not yet common. The primary output device was the **teletype**—a kind of typewriter connected to the computer [[10:44](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=644)]. Every time the computer wanted to provide an answer, it literally **printed** that answer on paper. When monitors (terminals) began to replace paper, programmers at the time were reluctant to change the function name because it was too risky and exhausting to manually replace thousands of lines of code without the help of modern IDEs [[16:14](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=974)].

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
<picture style="display: block;">
<source srcset="/notes/20260106200755_history-of-bug-patch-core-dumped/teletype.webp" type="image/webp">
<img
src="/notes/20260106200755_history-of-bug-patch-core-dumped/teletype.png"
alt="Teletype"
width="500"
loading="lazy"
decoding="async"
style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
>
</picture>
<p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
<em>Teletype</em>
</p>
</div>

### 3. The Origins of "Bug" and "Debugging"

This story is perhaps the most popular, but there is an interesting detail within it. In 1947, Rear Admiral Grace Hopper found a moth trapped inside a **relay** (mechanical switch) of her Mark II computer, which caused a system failure [[07:04](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=424)].

The moth was then taped into the logbook with the note: _"First actual case of bug being found."_ Interestingly, the term "bug" itself had actually been used by engineers (including Thomas Edison) since the 19th century to describe technical flaws, but this moth incident immortalized the term in the computing world [[06:44](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=404)].

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
<picture style="display: block;">
<source srcset="/notes/20260106200755_history-of-bug-patch-core-dumped/bug.webp" type="image/webp">
<img
src="/notes/20260106200755_history-of-bug-patch-core-dumped/bug.png"
alt="Bug inside a Relay"
width="500"
loading="lazy"
decoding="async"
style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
>
</picture>
<p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
<em>Bug inside a Relay</em>
</p>
</div>

### 4. Mending Code with a "Patch"

Why is a software update called a _patch_? In the past, data was entered via **punch cards** or paper tape. If there was an error in a single bit, you couldn't "erase" a hole that had already been punched. The clever solution? Engineers applied **tape or a patch** over the wrong hole so the computer would read it as a zero [[09:23](http://www.youtube.com/watch?v=qgwrt7vYY4U&t=563)]. That is why, to this day, fixing code is referred to as "patching."

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
<picture style="display: block;">
<source srcset="/notes/20260106200755_history-of-bug-patch-core-dumped/punch-card.webp" type="image/webp">
<img
src="/notes/20260106200755_history-of-bug-patch-core-dumped/punch-card.png"
alt="Punch Card"
width="500"
loading="lazy"
decoding="async"
style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
>
</picture>
<p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
<em>Punch Card</em>
</p>
</div>

---

## Appreciation for @CoreDumped: The Art of Explaining Complex Things

In between these stories, I want to give a special shout-out to the YouTube channel **[Core Dumped](https://www.youtube.com/@CoreDumpped)**. It is rare to find a tech channel capable of giving such **deep** explanations while remaining engaging.

There are two things I greatly admire about George's work on this channel:

1. **Structured Narrative:** The explanations aren't just technical; they have a strong historical flow. We aren't just taught "what," but also "why."
2. **Eye-Catching Animation:** @CoreDumped uses very smooth and clever visual animations to illustrate how technical concepts work in the world of software engineering. Surprisingly, George admits he creates his slides using only _Microsoft PowerPoint_.

If you are an engineer who wants to understand the roots of what you do every day, this video is a must-watch.

---

## Conclusion: Learning from the Past

Remembering this history makes me realize that software engineering is not a field that suddenly appeared out of a vacuum. It is an accumulation of physical solutions to the limitations of the past. Sometimes, to become better engineers in the future, we need to look back for a moment and understand the "old iron" that underlies it all.

What do you think? Are there other terms you're curious about regarding their origins?

---
