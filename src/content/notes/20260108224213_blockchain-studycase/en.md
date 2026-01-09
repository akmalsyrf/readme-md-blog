---
title: 'Architecture of Trust: Dissecting the Anatomy from Genesis Block to DeFi'
description: 'Exploring blockchain technology through technical case studies from my studycase repository'
pubDate: 2026-01-08
author: 'Akmal'
tags: ['blockchain', 'web3', 'smart-contract']
---

Hello everyone! Still with me here. This time, I want to dive deeper into another old project I created on GitHub. This repository contains _study cases_ in the Blockchain field that can be accessed [here](https://github.com/akmalsyrf/blockchain-studycase).

In this article, we will dissect the technical aspects within that repository. This is a technical narrative about how we move "trust" from human institutions into mathematical calculations.

Let's break it down one by one.

### 1. The Consensus Layer: Why Does Bitcoin "Consume" Electricity?

_(Dissecting Sub project: [1-basic-concept](https://github.com/akmalsyrf/blockchain-studycase/tree/main/1-basic-concept))_

We start from the roots with **Python**. Here, we don't use fancy libraries that work out of the box. We build _blockchain_ from scratch to understand one vital concept: **State Machine Replication**.

From this basic implementation, we learn that blockchain is essentially just a very skeptical _Linked List_. Each block has a "fingerprint" (Hash) that references the previous block. However, the core of its strength lies in **Proof of Work (PoW)**.

**Hash and Linked List Mechanism:**
Each block contains transaction data, timestamp, and hash from the previous block. Hash function (usually SHA-256) converts all this data into a 64-character hexadecimal string. Mathematically: $\text{Hash}(\text{Block } N) = \text{SHA256}(\text{Data} \oplus \text{PreviousHash} \oplus \text{Nonce})$. If one bit of data in block A changes, the hash output will change completely (avalanche effect), making the hash stored in block B invalid. This creates a **cryptographic chain** that cannot be broken without changing all subsequent blocks.

- **Immutability:** When data in block A changes, its Hash changes. Because block B stores block A's Hash, the entire chain after it will be considered invalid. Technically, validation is done by comparing $H_i = \text{SHA256}(D_i \oplus H_{i-1} \oplus N_i)$ where $H_i$ is the hash of block $i$, $D_i$ is the data of block $i$, $H_{i-1}$ is the hash of the previous block, and $N_i$ is the nonce. If it doesn't match, the entire chain is considered corrupted.

- **Proof of Work (PoW):** I implemented a simple mining mechanism. Here, machines are forced to solve mathematical puzzles (finding nonce) to produce a Hash with a specific number of leading zeros. Technically, the algorithm works with brute-force: increment nonce from 0 until finding a hash that satisfies `hash.startswith("0000")` (or more zeros depending on difficulty). The probability of finding a valid hash is $\frac{1}{16^{n}}$, where $n$ is the target number of zeros, so on average it needs $16^{n}$ iterations. This is why blockchain is very difficult to manipulate: you need massive computational power to rewrite history.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108224213_blockchain-studycase/chained-collection.webp" type="image/webp">
    <img 
      src="/notes/20260108224213_blockchain-studycase/chained-collection.png" 
      alt="How nonce and hash work in the Proof of Work mechanism" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>How nonce and hash work in the Proof of Work mechanism</em>
  </p>
</div>

You might ask, "Why bother with _mining_?"
The answer is **Game Theory**. In the `proof_of_work` code, we force computers to work hard finding a specific _nonce_. This isn't volunteer work; this is **"Cost of Forgery"** (the cost of forgery).

**Game Theory and Nash Equilibrium:**
The PoW system creates a **Nash Equilibrium** where the best strategy for all miners is to play honestly. Mathematically, if an attacker wants to change a block at position $N$, they must:

1. Re-mine block $N$ with cost $C_n$
2. Re-mine block $N+1$ with cost $C_{n+1}$
3. ... and so on until the latest block

Total cost = $\sum_{i=N}^{B} C_i$ where $B$ is the latest block. Meanwhile, honest miners only need to mine 1 new block with cost $C_{\text{new}}$. Because the network keeps growing, attackers must defeat the entire network hashrate (51% attack), which is economically not feasible. **Expected cost of attack** far exceeds **expected reward**, so the optimal strategy is to remain honest.

If someone wants to cheat and change data in the past, they must perform _re-mining_ of that block and all subsequent blocks. This Python code proves that blockchain security isn't just about encryption, but about **economic cost**. We make the cost of being a criminal far more expensive than the profit gained.

### 2. The Logic Layer: Smart Machines That Cannot Be Bribed

_(Dissecting Sub project: [2-simple-contract](https://github.com/akmalsyrf/blockchain-studycase/tree/main/2-simple-contract), [3-e-voting](https://github.com/akmalsyrf/blockchain-studycase/tree/main/3-e-voting-studycase), [6-vending-machine](https://github.com/akmalsyrf/blockchain-studycase/tree/main/6-vending-machine-truffle-studycase))_

Once we enter the realm of **Solidity**, we start playing with **EVM (Ethereum Virtual Machine)**. Here, the focus shifts from merely "storing data" to "running automatic logic".

- **EVM: Stack-Based Virtual Machine:**
  EVM is a **quasi-Turing complete** virtual machine that uses **stack-based architecture** (not register-based). Each operation manipulates the stack with PUSH, POP, DUP, SWAP operations. Solidity code is compiled into **bytecode** that is executed deterministically by thousands of nodes. Each node runs the same code with the same input, producing identical output - this is **consensus through computation**.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108224213_blockchain-studycase/evm.webp" type="image/webp">
    <img 
      src="/notes/20260108224213_blockchain-studycase/evm.png" 
      alt="How Ethereum Virtual Machine (EVM) works" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>How Ethereum Virtual Machine (EVM) works</em>
  </p>
</div>

- **Deterministic Execution:**
  The _Vending Machine_ and _E-Voting_ case studies demonstrate what **Deterministic Execution** is. In traditional servers, an admin could enter the _database_ and change numbers secretly. In blockchain, code that has been _deployed_ is an unchangeable law of nature. Technically, each transaction has a unique **transaction hash**, and code execution produces the same **state root hash** on all nodes. If a node produces a different state, the transaction is considered invalid and rejected by the network.

* **State vs Local Variables:** We learn that storing data on blockchain is expensive (_Gas fee_). Technically, EVM has 3 storage areas:
  - **Storage**: Persistent data on blockchain (20,000 gas for first write, 5,000 gas for update). Data is stored in **32-byte slots** with deterministic layout based on variable declaration order.
  - **Memory**: Temporary data during execution (3 gas per word for write, free for read). Reset after transaction completes.
  - **Stack**: Operand stack for EVM opcodes (free, but limited to 1024 items).

  Why expensive? Because storage data must be copied to thousands of computers worldwide simultaneously and stored permanently. Every SSTORE opcode triggers data replication across the entire network.

* **Trustlessness:** In the _E-Voting_ case, vote counting logic is locked tight. There's no room for time manipulation or human error. We fire the "central committee" and replace it with a `vote()` function. Technically, each vote is an immutable transaction, and the calculation results can be verified by anyone by re-running all vote transactions from the genesis block.

There I experimented with:

- **State Variables & Visibility**: How data is stored permanently in Ethereum storage. Technically, state variables are stored in storage slots based on declaration order. A `uint256` variable takes 1 slot (32 bytes), `uint128` can be packed 2 per slot. Visibility modifiers (`public`, `private`, `internal`, `external`) control access at the compiler level - `public` auto-generates getter function, `private` can only be accessed within the same contract, `external` can only be called from outside the contract. However, it's important to remember: **all data on blockchain is public** - visibility only controls access through Solidity, but data can still be read directly from storage with tools like `web3.eth.getStorageAt()`.

- **Modifiers & Access Control**: Ensuring only contract owners can execute crucial functions (like withdrawing funds). Modifiers are code injected before/after function body. Example `onlyOwner` modifier uses pattern `require(msg.sender == owner, "Not owner")` which is compiled into `EQ` and `REVERT` opcodes if false. Access control on blockchain differs from traditional auth - there's no session or JWT, only cryptographic proof that the caller has the private key for a specific address. Each transaction is signed with an ECDSA signature that verifies `msg.sender`.

- **Payable Functions**: The contract's ability to receive and send Ether automatically. This is the foundation of programmable economics. Technically, functions with the `payable` modifier can receive Ether through `msg.value` (in wei). Contract balance is stored in `address(this).balance` and can be transferred with `transfer()`, `send()`, or `call()`. Main difference: `transfer()` and `send()` have a gas limit of 2300 (only enough for log events), while `call()` forwards all gas and returns a success boolean. This is important for reentrancy protection - `transfer()` is safer because it limits gas that can be used by the recipient.

### 3. The Interoperability Layer: Breaking Through the Blockchain Wall

_(Dissecting Sub project: [7-lottery-chainlink](https://github.com/akmalsyrf/blockchain-studycase/tree/main/7-lottery-chainlink-studycase))_

There's one unique fact: Blockchain is like a computer in a bunker without internet. It's secure, but "blind". It doesn't know asset prices out there or football match results. Why? Because if blockchain freely fetches data from the internet, the results won't be uniform for everyone, and consensus could break.

**The Oracle Problem:**
The problem is the **trust boundary**. Blockchain is a deterministic system that needs external data (off-chain), but cannot trust a single data source. If a smart contract directly calls an external API, different nodes could get different responses (network delay, API down, etc.), thus breaking consensus. The solution requires **cryptographic proof** that the provided data is valid.

The solution lies in the _Lottery Chainlink_ case study through the concept of **The Oracle Problem**. We use **Verifiable Random Function (VRF)**.

**VRF: Cryptographic Proof of Randomness:**
VRF is a cryptographic function that produces verifiable random output. Technically:

1. Chainlink node has a VRF **private key**
2. Smart contract calls `requestRandomness()` with `seed` (usually blockhash + user input)
3. Chainlink node calculates: $r = \text{VRF}(k_{\text{priv}}, s)$ and $p = \text{Proof}(k_{\text{priv}}, s)$ where $k_{\text{priv}}$ is the private key, $s$ is the seed, $r$ is the randomness, and $p$ is the proof
4. Smart contract receives `randomness` and `proof`
5. Contract verifies: $\text{Verify}(k_{\text{pub}}, s, r, p) = \text{true}$ where $k_{\text{pub}}$ is the public key

If the proof is valid, we know the randomness is:

- **Unpredictable**: Cannot be predicted before generation
- **Tamper-proof**: Cannot be manipulated by the Chainlink node itself
- **Verifiable**: Anyone can verify the proof without needing to trust Chainlink

Instead of relying on self-made random numbers that are vulnerable to manipulation (like `block.timestamp % 100`), our _smart contract_ "orders" random numbers from Chainlink that come complete with mathematical proof that the number is genuine and not tampered with.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108224213_blockchain-studycase/vrf.webp" type="image/webp">
    <img 
      src="/notes/20260108224213_blockchain-studycase/vrf.png" 
      alt="How Verifiable Random Function (VRF) works" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>How Verifiable Random Function (VRF) works</em>
  </p>
</div>

### 4. The Asset Layer: When Numbers Become Valuable

_(Dissecting Sub project: [9-cryptobeetles-nft](https://github.com/akmalsyrf/blockchain-studycase/tree/main/9-cryptobeetles-nft-erc721-studycase), [13-erc20-token](https://github.com/akmalsyrf/blockchain-studycase/tree/main/13-erc-20-token-studycase))_

This is where we define what "value" is. In the ERC-20 and ERC-721 standards (_CryptoBeetles_), we learn that digital money is actually just a list of addresses and numbers (mapping) in code:
`mapping(address => uint256) balances;`

**Storage Layout and Mapping:**
Technically, mappings in Solidity don't store data linearly. EVM uses **keccak256 hash** to calculate storage slot: $\text{slot} = \text{keccak256}(\text{abi.encode}(k, s))$ where $k$ is the key and $s$ is the mapping slot. Each slot is 32 bytes. For `mapping(address => uint256)`, the address is hashed with the mapping slot to get a deterministic storage location. This means:

- No direct iteration (cannot loop all balances)
- Access is $O(1)$ with hash computation
- Storage is distributed pseudo-randomly across $2^{256}$ possible slots

In my studycase repository, the following ERC (_Ethereum Request for Comment_) Token standards are discussed:

- **ERC-20 (Fungible):** Like cash, 1 token you own has the same value as 1 token owned by someone else. This standard becomes the foundation for stablecoins, governance tokens, and most utility tokens in the Ethereum ecosystem.

- **ERC-721 (Non-Fungible):** Creates uniqueness. Token ID #1 has a different identity from ID #2. Each token has unique metadata that makes it non-interchangeable. This is the standard that drives the NFT market and digital collectibles.

Besides the standards discussed in my repository, there are actually many other standards such as:

- **ERC-1155 (Multi-Token):** A more efficient standard that combines the capabilities of ERC-20 and ERC-721 in one contract. With ERC-1155, you can create fungible tokens (like 1000 gold coins) and non-fungible tokens (like a rare sword) in the same contract. This significantly saves gas fees because you only need one transaction to transfer various types of tokens at once.

- **ERC-777 (Advanced Token):** Evolution from ERC-20 with hook features that allow smart contracts to "react" when tokens are received or sent. This enables more complex logic like auto-staking or auto-redirect without requiring additional approval.

- **ERC-165 (Interface Detection):** A standard that allows contracts to declare which interfaces they implement. This makes it easier for applications to check whether a contract supports certain features before interacting with it.

The most crucial point here is the **Approval & Allowance** mechanism. Before other applications can use your tokens, you must give explicit permission.

**Approval & Allowance Mechanism:**
Technically, ERC-20 has two mappings:

```solidity
mapping(address => uint256) balances;
mapping(address => mapping(address => uint256)) allowances;
```

The flow:

1. User calls `approve(spender, amount)` → set `allowances[owner][spender] = amount`
2. Spender (e.g.: DEX contract) calls `transferFrom(owner, recipient, amount)`
3. Contract checks: `allowances[owner][spender] >= amount` and `balances[owner] >= amount`
4. Update: `allowances[owner][spender] -= amount` and `balances[owner] -= amount`, `balances[recipient] += amount`

This is a major shift from the old banking system that held full control over our balances. In blockchain, **you are your own bank** - you control the private key, and approval is a way to give limited access without surrendering full control. Each ERC standard has a unique way of handling ownership, transfer, and interoperability, reflecting the evolution of blockchain ecosystem needs.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108224213_blockchain-studycase/erc.webp" type="image/webp">
    <img 
      src="/notes/20260108224213_blockchain-studycase/erc.png" 
      alt="Ethereum Request for Comment (ERC) Standards" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Ethereum Request for Comment (ERC) Standards</em>
  </p>
</div>

### 5. The Financial Layer: The Magic of Flash Loans

_(Dissecting Sub project: 14-flash-loan-arbitrage)_

This is the most interesting part. **Flash Loan** is a concept that doesn't exist in the regular financial world. Imagine you could borrow billions of rupiah without any collateral, as long as you return it within seconds in the same transaction.

**Flash Loan Mechanism:**
Flash loans work with a **callback pattern** in one atomic transaction. Technically:

1. User calls `flashLoan(amount)` on AAVE
2. AAVE transfers tokens to user contract (without collateral)
3. AAVE calls callback `executeOperation()` on user contract
4. Inside the callback, user performs arbitrage/swap/whatever
5. User must return `amount + fee` before callback completes
6. If return fails → entire transaction is reverted (atomicity)

The AAVE Flash Loan case study demonstrates **Atomicity**. In one block transaction, we can perform a chain of actions:

1. Borrow large capital.
2. Buy cheap in one place, sell expensive in another.
3. Pay debt plus interest.

**Atomicity in EVM:**
EVM guarantees that all operations in one transaction are **all-or-nothing**. If any opcode throws an exception (REVERT, OUT_OF_GAS, etc.), all state changes are rolled back. Technically, EVM uses a **state trie** that is only committed to final state if the transaction succeeds. If it fails, all SSTORE operations are discarded. This differs from traditional databases that need explicit transaction rollback.

If the last step fails (e.g.: profit isn't enough to pay debt), then the entire sequence is automatically considered never to have happened. There's no risk of loss for the lender. This is the magic of _programmable money_.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260108224213_blockchain-studycase/flash-loan.webp" type="image/webp">
    <img 
      src="/notes/20260108224213_blockchain-studycase/flash-loan.png" 
      alt="How Flash Loan works" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>How Flash Loan works</em>
  </p>
</div>

### 6. The Security Layer: Vulnerabilities Behind the Code

_(Dissecting Sub project: 10-reentrancy-attacks)_

Through the _Reentrancy Attack_ case study, we learn to think like a hacker. This attack usually occurs because the program sends money before recording that the money has been sent.

**Reentrancy Attack Mechanism:**
Technically, reentrancy occurs because **external calls** can call back the same function before state is updated. Example vulnerable code:

```solidity
function withdraw() {
    require(balances[msg.sender] > 0);
    msg.sender.call{value: balances[msg.sender]}(""); // INTERACTION
    balances[msg.sender] = 0; // EFFECT (too late!)
}
```

Attacker contract:

```solidity
receive() external payable {
    if (victim.balance > 0) {
        victim.withdraw(); // Re-enter before balances is updated
    }
}
```

**Call Stack and Execution Context:**
EVM allows **nested calls** - one contract can call another contract, which can call another contract again. Each call adds **call depth** (max 1024). Reentrancy exploits the fact that state hasn't been updated when external call occurs, so attackers can "repeat" the operation with the same state.

**Checks-Effects-Interactions Pattern:**
This principle ensures safe execution order:

1. **Checks**: Validate all conditions (require, assert)
2. **Effects**: Update state variables (balances, flags, etc.)
3. **Interactions**: External calls (transfer, call, etc.)

Safe code:

```solidity
function withdraw() {
    require(balances[msg.sender] > 0); // CHECK
    uint256 amount = balances[msg.sender];
    balances[msg.sender] = 0; // EFFECT (update first!)
    msg.sender.call{value: amount}(""); // INTERACTION (then transfer)
}
```

It's like withdrawing money from a broken ATM, where the balance doesn't decrease even though money has come out, so you can withdraw it continuously until the machine is empty. This teaches us the main principle of Web3 security: **Checks-Effects-Interactions**. Validate first, update records, then send the money.

---

### Conclusion

Blockchain is a journey of transition. From simple data structures, to democratic smart contracts, to highly complex financial instruments.

For us engineers, understanding this isn't just about learning a new programming language. It's about understanding a new paradigm where code is no longer just a servant of applications, but an **honest and impartial judge and executor**.

Happy exploring Web3!
