---
title: 'Unpacking "Weird" Code: Overview of Bitwise Operations in Low-Level Programming'
description: 'Unpacking the concept of bitwise operations in low-level programming, from how CPUs work to bit packing techniques for extreme memory efficiency'
pubDate: 2026-01-10
author: 'Akmal'
tags: ['bitwise-operation', 'software-engineering', 'low-level-programming']
---

Have you ever peeked at the Linux kernel source code, hardware _drivers_, or cryptography libraries and felt confused seeing symbols like `&`, `|`, `<<`, along with mysterious hexadecimal number sequences? For web application developers or _high-level_ developers, this code looks like an alien language. However, in the _low-level_ world, these are precision instruments for maximum efficiency.

This article will dissect the concept of **Bitwise Operations** based on an in-depth explanation from the _Core Dumped_ channel, from how CPUs work to _bit packing_ techniques.

<div class="my-8 flex justify-center">
  <div class="relative w-full max-w-3xl" style="padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe
      src="https://www.youtube.com/embed/z7wVUfnm7M0?si=8wFXB7xYk8r5BEuV"
      title="Why Some Low-Level Projects Are Full of Weird Code Like This - Core Dumped"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      class="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
    ></iframe>
  </div>
</div>

---

## 1. Hardware Foundation: Why Can't We Access Bits Directly?

Although we know computers work with binary (0 and 1), CPUs are not designed to process one bit at a time. CPUs operate in units called **Words** [[01:29](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=89)].

- **Word** is the processor's natural data unit (e.g., 16-bit, 32-bit, or 64-bit).
- **The Problem:** There is no special physical circuit in conventional CPUs that can directly read or write "bit 3" without touching other bits in a single _word_ [[01:40](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=100)]. Memory operations always work at a minimum level of one **Byte** (8 bits).

This is why we need _bitwise_ operations: to manipulate individual bits within the byte "package" provided by hardware.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260110094355_bitwise-operation/word.webp" type="image/webp">
    <img 
      src="/notes/20260110094355_bitwise-operation/word.png" 
      alt="Word Unit in CPU" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Word Unit in CPU</em>
  </p>
</div>

## 2. Main Bitwise Operations and Their Logic

Unlike regular arithmetic (like addition) where there is a _carry_ effect (digit carryover) that propagates to adjacent bits, _bitwise_ operations process each bit **independently** [[03:13](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=193)].

### A. Bitwise AND (`&`)

Output will be `1` only if both inputs are `1`. Technically, this is often used as a **filter** or **mask** to remove data.

- **Use Case:** _Clearing_ specific bits to `0`.

### B. Bitwise OR (`|`)

Output will be `1` if either or both inputs are `1`.

- **Use Case:** _Setting_ specific bits to `1` without changing other bits [[10:21](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=621)].

### C. Bitwise XOR (`^`)

_Exclusive OR_ produces `1` if the inputs differ. If the second input is `1`, the first input will be "flipped".

- **Use Case:** _Toggling_ bit status from 0 to 1 or vice versa [[12:56](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=776)].

### D. Bitwise NOT (`~`) and Bit Shifts (`<<`, `>>`)

- **NOT:** Flips all bits in a _word_.
- **Shifts:** Shifts the entire bit sequence left or right. Shifting left one position is equivalent to multiplying the number by 2, while shifting right is equivalent to dividing by 2 [[04:28](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=268)].

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260110094355_bitwise-operation/bitwise-operation.webp" type="image/webp">
    <img 
      src="/notes/20260110094355_bitwise-operation/bitwise-operation.png" 
      alt="Bitwise Operations" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Bitwise Operations</em>
  </p>
</div>

---

## 3. Bit Packing Technique: Extreme Space Efficiency

One of the most tangible applications of these operations is **Bit Packing**. Imagine you have 8 _toggle_ switches (On/Off) in an application.

Naively, we might use 8 `boolean` variables. However, since the smallest data type in memory is 1 Byte (8 bits), those 8 booleans will consume 8 Bytes of space [[07:43](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=463)]. In theory, those 8 On/Off statuses could fit in **just one Byte**.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260110094355_bitwise-operation/before-bit-packing.webp" type="image/webp">
    <img 
      src="/notes/20260110094355_bitwise-operation/before-bit-packing.png" 
      alt="Before using Bit Packing" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Before using Bit Packing</em>
  </p>
</div>

- **Retro Case Study:** In the _Super Mario Bros_ game on the NES which only had 2 KB of RAM, this technique was crucial. One byte was used to store many statuses at once: whether Mario was small, had fire power, was invincible (star), to his facing direction [[16:16](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=976)].
- **Modern Scale:** For applications with 50 million users, saving a few bits per user could save hundreds of megabytes of server storage [[08:18](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=498)].

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260110094355_bitwise-operation/bit-packing.webp" type="image/webp">
    <img 
      src="/notes/20260110094355_bitwise-operation/bit-packing.png" 
      alt="After using Bit Packing" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>After using Bit Packing</em>
  </p>
</div>

---

## 4. Technical Implementation: Set, Clear, Toggle, and Read

To manipulate bit _n_ within a byte, we use the **Mask** concept.

1. **Set Bit (To 1):** `word | (1 << n)`
   We shift the number `1` by `n` times to create a mask, then combine it with the `OR` operation [[11:23](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=683)].
2. **Clear Bit (To 0):** `word & ~(1 << n)`
   We create a mask with `1` at position `n`, flip it with `NOT`, then perform `AND`. This forces bit n to become `0` [[12:24](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=744)].
3. **Toggle Bit:** `word ^ (1 << n)`
   Using `XOR` with a mask that only has the number `1` at the target position [[13:19](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=799)].
4. **Read Bit:** `(word >> n) & 1`
   Shift the target bit to the rightmost position (LSB), then use mask `1` with the `AND` operation to get its pure value (0 or 1) [[14:24](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=864)].

---

## 5. Why So Many Hexadecimal Numbers?

In real code, developers rarely type long binary like `00001000`. This is very _error-prone_. Instead, they use **Hexadecimal** [[17:52](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=1072)].

One hexadecimal character (0-F) represents exactly 4 bits. This makes it easier to mentally map between code and bit structure in memory. So, if you see `0x80`, system developers know that's bit 7 active in one byte.

---

## Conclusion

_Bitwise_ operations are the bridge between software logic and the physical reality of hardware. Although rarely used in modern web development, understanding this concept is crucial for fields such as:

- **Embedded Systems:** Where memory is very limited [[15:05](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=905)].
- **Data Compression:** Algorithms that reduce video or image size heavily rely on bit manipulation [[16:44](http://www.youtube.com/watch?v=z7wVUfnm7M0&t=1004)].
- **Cryptography:** Modern cybersecurity is built on fast and efficient _bitwise_ operations.

Understanding this "weird" code means you're starting to understand the native language of the machines you use every day.
