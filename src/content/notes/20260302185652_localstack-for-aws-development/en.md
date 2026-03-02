---
title: 'Introducing LocalStack: A Practical Way to Develop AWS Applications Locally'
description: 'Develop and test AWS-based applications without always hitting the real cloud. LocalStack lets you run AWS services on your laptop—saving cost, speeding up feedback, and keeping dev and test safe.'
pubDate: 2026-03-02
author: 'Akmal'
tags: ['aws', 'cloud', 'localstack', 'docker', 'development', 'devops', 'software-engineering']
---

In the age of cloud computing, many developers build applications that rely on **Amazon Web Services (AWS)**—whether it’s S3 for storage, Lambda for serverless functions, or DynamoDB for databases. Integrating with AWS is commonplace.

However, developing and testing directly in the cloud often means higher cost, dependence on a stable internet connection, and longer deploy cycles.

Every small change can require a push to AWS, a wait, and then another check. Add to that the risk of misconfiguration or surprise bills from resources left running.

**LocalStack** is one solution worth considering.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260302185652_localstack-for-aws-development/logo.webp" type="image/webp">
    <img 
      src="/notes/20260302185652_localstack-for-aws-development/logo.png" 
      alt="Localstack logo" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Localstack logo</em>
  </p>
</div>

---

## What Is LocalStack?

**LocalStack** is an open-source platform that lets developers run and simulate **Amazon Web Services** locally on their own machine—without using a real AWS account.

In practice, you get a “fake” AWS environment on your laptop. The endpoints your app normally calls (e.g. for S3 or Lambda) are redirected to a process running locally, so your application “thinks” it’s talking to AWS while everything stays on your machine. That makes it useful for:

- **Development** — building new features without deploying to the cloud every time.
- **Testing** — running unit and integration tests that need S3, SQS, or other services, without opening a connection to real AWS.
- **CI/CD pipelines** — GitHub Actions, GitLab CI, or Jenkins can use LocalStack as a consistent test environment without touching production (or even a shared dev) account.
- **Proof of Concept (POC)** — trying out new architectures or services without spending money or touching shared AWS resources.

With LocalStack, you can avoid accidental changes to real accounts and keep working even when the internet is flaky.

<div style="display: flex; flex-direction: column; align-items: center; margin: 2rem 0;">
  <picture style="display: block;">
    <source srcset="/notes/20260302185652_localstack-for-aws-development/localstack-and-docker.webp" type="image/webp">
    <img 
      src="/notes/20260302185652_localstack-for-aws-development/localstack-and-docker.png" 
      alt="Localstack running on Docker" 
      width="500"
      loading="lazy"
      decoding="async"
      style="display: block; margin: 0 auto; max-width: 100%; height: auto;"
    >
  </picture>
  <p style="text-align: center; margin-top: 0.5rem; margin-bottom: 0;">
    <em>Localstack running on Docker</em>
  </p>
</div>

---

## Supported AWS Services

LocalStack supports many popular AWS services. Some that show up often in day-to-day development include:

- **Amazon S3** — object storage (buckets, upload/download).
- **AWS Lambda** — serverless functions (run code without managing servers).
- **Amazon DynamoDB** — NoSQL database (tables, items, queries).
- **Amazon SQS** — message queues.
- **Amazon SNS** — notifications (pub/sub).
- **Amazon API Gateway** — API management (endpoints, integration with Lambda or other backends).

There are many more (e.g. Kinesis, Step Functions, CloudFormation). The full list and level of support are in the [official LocalStack docs](https://docs.localstack.cloud/user-guide/aws/).

Keep in mind: not every AWS feature is implemented 100% like in the real cloud. Some edge cases or very new features may not be simulated yet. For typical development and testing, what’s available is usually enough and works with the same SDKs and AWS CLI you already use.

---

## Why Use LocalStack?

### 1. Save Money

You don’t pay for AWS resources during development or testing. No charges for Lambda invocations, S3 requests, or DynamoDB read/write when they run locally—handy for small teams or tight budgets.

### 2. Faster Feedback

You can test code changes against “AWS” on your machine without deploying to the cloud. Short feedback loop: change code → run tests or the app → see results. No waiting on uploads, deploys, or provisioning in a real region.

### 3. Offline Development

You can work without an internet connection. Useful on flights, in places with poor connectivity, or when you just want to reduce dependence on external services while coding.

### 4. Safe and Isolated

You don’t need to use a production (or even a shared dev) AWS account for testing. Everything stays on your machine, so the risk of accidentally deleting data or changing cloud configuration is much lower.

---

## How to Install and Run LocalStack

The most practical way to run LocalStack is with **Docker**, so all dependencies are packaged in one image.

### 1. Install Docker

Make sure **Docker** (and **Docker Compose** if you use it) is installed. If not, get it from [docker.com](https://www.docker.com/products/docker-desktop/) for your OS.

### 2. Run LocalStack with Docker Compose

Create a `docker-compose.yml` in your project (or a dedicated tooling folder), for example:

```yaml
version: '3.8'
services:
  localstack:
    image: localstack/localstack
    container_name: localstack
    ports:
      - '4566:4566'
    environment:
      - SERVICES=s3,lambda,dynamodb
      - DEBUG=1
    volumes:
      - './localstack:/var/lib/localstack'
      - '/var/run/docker.sock:/var/run/docker.sock'
```

Quick breakdown:

- **Port 4566** — all LocalStack “AWS” services (S3, Lambda, DynamoDB, etc.) are exposed at `http://localhost:4566`.
- **SERVICES** — comma-separated list of services to enable (e.g. add `sqs,sns` if you need them).
- **Volumes** — the first keeps LocalStack data on disk; the Docker socket is needed if you want LocalStack to run Lambda inside Docker.

Run:

```bash
docker-compose up
```

Once the container is up, LocalStack is ready at **http://localhost:4566**. Point your app or AWS CLI at this endpoint instead of the default AWS endpoint.

---

## Example: Creating an S3 Bucket

With LocalStack running, use the **AWS CLI** (or your SDK in code) and set the endpoint to LocalStack.

Create a bucket:

```bash
aws --endpoint-url=http://localhost:4566 s3 mb s3://test-bucket
```

The bucket is created locally, not in your real AWS account. In your app or scripts, set the endpoint (via config or environment) to `http://localhost:4566` for local/dev, and use the default AWS endpoint for production. The same code can then target real AWS or LocalStack depending on the environment.

---

## LocalStack Community vs Pro

LocalStack comes in two variants:

### Community (Free)

- Open-source, no cost.
- Good for basic development and testing on your machine or in CI.
- Fewer services and features than Pro.

### Pro (Paid)

- More services and behavior closer to real AWS.
- Web UI to inspect resources (buckets, tables, queues, etc.) without the CLI.
- Advanced testing and more complex scenarios.
- Enterprise support for teams and organizations.

For getting started and most development use cases, the Community edition is usually enough. If your team needs more services or the UI, Pro is worth considering.

---

## When to Use LocalStack

Use LocalStack when:

- You’re developing features that integrate with S3, Lambda, DynamoDB, SQS, and the like, and want fast iteration without deploying to the cloud.
- You’re writing integration tests that depend on AWS services; with LocalStack, tests can run in CI without a real AWS account or with minimal credentials.
- You want to cut AWS cost by moving as much development and testing as possible to local runs.
- You need a local environment that resembles AWS so that onboarding or reproducing bugs is easier.

Still run final checks (e.g. staging or pre-production) on real AWS before production. LocalStack simplifies your workflow; it doesn’t replace validating behavior in the actual cloud.

---

## Wrapping Up

**LocalStack** is a powerful tool for anyone who regularly works with AWS. By simulating AWS services locally, you can save cost, speed up development, and reduce the risk of mistakes in production. If you use S3, Lambda, DynamoDB, or other AWS services day to day, LocalStack is worth trying and integrating into your development and CI/CD workflow.

Full documentation and the list of supported services are at [docs.localstack.cloud](https://docs.localstack.cloud/).
