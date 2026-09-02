# 🛡️ PayGuard --- AI-Powered Payment Fraud Detection Platform

> **A production-inspired payment platform built with Next.js, Express,
> Prisma, PostgreSQL, and a modular fraud detection engine.**

---

## ✨ Overview

PayGuard is a full-stack payment application focused on **secure
peer-to-peer money transfers** and **fraud prevention**.

Unlike a typical wallet clone, PayGuard is designed to demonstrate
production backend engineering concepts:

- Layered architecture
- Authentication with JWT + HTTP-only cookies
- Atomic money transfers
- Fraud detection rule engine
- Modular services
- Shared packages using Turborepo

---

# 🚀 Features

## Authentication

- JWT Authentication
- HTTP-only Cookies
- Password hashing with bcrypt
- Protected routes
- Cookie verification middleware

## Payments

- Secure P2P transfers
- Balance validation
- Atomic Prisma transactions
- Transaction history
- User search

## Fraud Detection

Current implementation:

- Large transaction rule
- New recipient rule
- Rapid transfer rule
- Low balance rule
- Configurable fraud scoring

Future:

- AI explanations
- ML fraud model
- Device fingerprinting
- Risk analytics

---

# 🏗 Architecture

```text
Next.js Frontend
        │
        ▼
Authentication APIs
        │
        ▼
HTTP-only Cookie (JWT)
        │
        ▼
Express Payment Engine
        │
        ▼
Auth Middleware
        │
        ▼
Fraud Verification Middleware
        │
        ▼
Transaction Controller
        │
        ▼
Transaction Service
        │
        ▼
Prisma ORM
        │
        ▼
PostgreSQL
```

---

# 📂 Project Structure

```text
apps/
├── user-app
    ├───app
    │   ├───api
    │   │   ├───balance
    │   │   ├───history
    │   │   ├───logout
    │   │   ├───signin
    │   │   ├───signup
    │   │   └───users
    │   ├───dashboard
    │   ├───send
    │   ├───signin
    │   └───signup
    ├───components
    │   └───ui
    ├───lib
        └───auth
└── express-server
        └───src
            ├───config
            ├───controllers
            ├───middleware
            ├───routes
            ├───rules
            ├───services
            ├───types
            └───utils

packages/
├── database
├── schemas
└── ui
```

---

# ⚙️ Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Backend

- Express
- Node.js
- Prisma
- PostgreSQL

## Authentication

- JOSE
- JWT
- HTTP-only Cookies
- bcrypt

## Validation

- Zod

---

# 🔐 Authentication Flow

```text
User Login
    │
    ▼
Validate Credentials
    │
    ▼
Generate JWT
    │
    ▼
Store HTTP-only Cookie
    │
    ▼
Protected Routes
```

---

# 💸 Payment Flow

```text
Client
   │
   ▼
Auth Middleware
   │
   ▼
Fraud Verifier
   │
   ▼
Transaction Controller
   │
   ▼
Transaction Service
   │
   ▼
Prisma Transaction
 ┌──────────────┐
 │ Debit Sender │
 │ Credit User  │
 │ Save History │
 └──────────────┘
```

---

# 🛡 Fraud Detection Engine

Each fraud rule is isolated into its own module.

Current Rules

- Large Amount
- New Recipient
- Multiple Transfers
- Night Transfers

The verifier aggregates every rule into:

```json
{
  "riskScore": 74,
  "riskLevel": "HIGH",
  "reasons": ["Large transaction", "Multiple transfers"]
}
```

---

# 🗄 Database

## User

- id
- name
- email
- password
- phone
- balance

## TransactionHistory

- id
- fromUserId
- toUserId
- amount
- createdAt

---

# 📡 API

## Auth

POST /api/signup

POST /api/signin

POST /api/logout

## Users

GET /api/users

GET /api/balance

## Transactions

POST /transaction/send

GET /api/history

---

# 🧪 Current Security

- Password hashing
- JWT verification
- HTTP-only cookies
- Protected routes
- Input validation
- Prisma transactions

---

# 🛣 Roadmap

## ✅ Completed

- Authentication
- JWT
- Cookies
- Prisma
- PostgreSQL
- Payment Engine
- Fraud Rule Engine

## 🚧 In Progress

- Better error handling
- Unit tests

## 📅 Planned

- Redis caching
- Rate limiting
- WebSockets
- Docker
- CI/CD
- AI explanations
- ML fraud model
- Monitoring

---

# 🌟 Why this project?

PayGuard is intentionally designed to demonstrate backend engineering
rather than only CRUD operations.

It showcases:

- Clean architecture
- Service-oriented design
- Secure authentication
- Financial transaction handling
- Fraud prevention
- Extensible infrastructure

---

# 🧠 Lessons Learned

- Designing layered backend architectures
- Working with Prisma transactions
- Authentication using HTTP-only cookies
- Middleware-driven request pipelines
- Building reusable validation with Zod
- Structuring scalable Express services

---

# 📜 License

MIT

---

## 👨‍💻 Author

**Shreyansh Rai**

B.Tech IT • Full Stack Developer • Building towards Backend + AI
Engineering

If you found this project interesting, consider giving it a ⭐ on
GitHub.
