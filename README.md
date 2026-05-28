# 🚀 Veda AI — AI-Powered Assignment & Question Paper Generator

Veda AI is a full-stack AI SaaS platform that generates structured academic question papers from uploaded syllabus PDFs using Gemini AI, BullMQ workers, realtime Socket.IO updates, and a modern Next.js frontend.

The platform enables teachers to:

* Upload syllabus PDFs
* Configure question paper patterns
* Generate AI-based CBSE-style assignments
* Receive realtime AI progress updates
* Download printable PDFs
* Regenerate entire papers or individual sections

---

# ✨ Features

## 🤖 AI Question Paper Generation

* Upload syllabus/content PDFs
* Extract clean text from PDFs
* Generate structured question papers using Gemini AI

### Supported Question Types

* MCQs
* Subjective Questions
* Numerical Problems
* Diagram/Graph-Based Questions

---

## ⚡ Realtime AI Processing

* BullMQ worker architecture
* Live progress updates using Socket.IO

### AI Generation Stages

* Queued
* Processing
* Extracting PDF
* Generating Questions
* Structuring Paper
* Completed

---

## 📄 Structured Question Paper Rendering

* Rendered from validated JSON
* Section grouping
* Marks alignment
* Difficulty badges
* School-style printable layout

---

## 📥 PDF Export

* Professional PDF generation using Puppeteer
* Printable academic paper format
* Backend-rendered PDFs

---

## 🔄 Regeneration System

* Regenerate full paper
* Regenerate individual sections
* AI-powered partial recomputation

---

## 🎨 Modern SaaS Frontend

* Responsive dashboard
* Glassmorphism UI
* Live progress system
* Animated interactions
* Dark-mode-inspired premium layout

---

# 🧠 System Architecture

```txt
Frontend (Next.js)
        ↓
Backend API (Express)
        ↓
BullMQ Queue
        ↓
AI Worker
        ↓
PDF Extraction
        ↓
Gemini AI Generation
        ↓
JSON Repair + Validation
        ↓
MongoDB Storage
        ↓
Socket.IO Events
        ↓
Realtime Frontend Updates
```

---

# 🏗️ Project Structure

```txt
veda-ai/
│
├── apps/
│   ├── api/       → Express Backend
│   ├── web/       → Next.js Frontend
│   └── worker/    → BullMQ AI Worker
│
├── packages/
│   ├── shared/    → Shared Zod Schemas
│   └── prompts/   → AI Prompt Builders
│
├── uploads/
├── generated-pdfs/
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

---

# 🖥️ Frontend Architecture

```txt
apps/web/src/
│
├── app/                → Next.js App Router Pages
├── components/         → Shared UI Components
├── features/           → Feature Modules
├── stores/             → Zustand Stores
├── services/           → API Layer
├── hooks/              → Custom Hooks
├── types/              → Shared Types
└── styles/             → Global Styling
```

---

# ⚙️ Backend Architecture

```txt
apps/api/src/
│
├── routes/             → Express Routes
├── controllers/        → API Controllers
├── models/             → MongoDB Models
├── queues/             → BullMQ Queues
├── socket/             → Socket.IO Emitters
├── pdf/                → PDF Generation System
└── config/             → DB/Redis Configs
```

---

# 🤖 Worker Architecture

```txt
apps/worker/src/
│
├── workers/            → BullMQ Workers
├── services/           → AI/PDF Services
├── parsers/            → JSON Parsers
├── generators/         → AI Generation Logic
├── utils/              → Helpers
└── config/             → Redis Config
```

---

# 🚀 AI Generation Pipeline

## Step 1 — Teacher Creates Assignment

Teacher uploads:

* syllabus PDF
* instructions
* question types

---

## Step 2 — Assignment Queued

Backend:

* stores assignment in MongoDB
* adds BullMQ job to Redis queue

---

## Step 3 — Worker Processing

BullMQ worker:

* fetches assignment
* extracts PDF text
* builds AI prompt
* calls Gemini AI

---

## Step 4 — AI Validation

AI response:

* repaired if malformed
* parsed as JSON
* validated using Zod schemas

---

## Step 5 — Save Generated Paper

Validated paper stored in MongoDB:

```json
{
  "title": "Physics Assignment",
  "sections": [],
  "totalMarks": 80
}
```

---

## Step 6 — Realtime Frontend Updates

Worker emits:

* assignment:progress
* assignment:completed
* assignment:failed

Frontend receives updates instantly using Socket.IO.

---

# 📡 Realtime Event System

## Socket Rooms

```txt
assignment:<assignmentId>
```

## Events

```txt
assignment:progress
assignment:completed
assignment:failed
```

---

# 🧩 Tech Stack

## Frontend

* Next.js 15
* TypeScript
* Tailwind CSS
* Zustand
* React Hook Form
* Zod
* Socket.IO Client

---

## Backend

* Express.js
* MongoDB
* Mongoose
* BullMQ
* Redis
* Multer
* Socket.IO

---

## AI & Workers

* Gemini 2.5 Flash
* BullMQ Workers
* PDF.js
* Zod Validation

---

## PDF System

* Puppeteer

---

# 🔥 Key Engineering Highlights

## Enterprise-Grade AI Validation

```txt
AI Response
    ↓
JSON Repair
    ↓
Schema Validation
    ↓
Retry Logic
```

---

## Scalable Prompt Architecture

Reusable prompt builders:

```txt
packages/prompts
```

---

## Modular Worker Pipeline

Separate systems for:

* PDF extraction
* AI generation
* parsing
* validation
* regeneration

---

## Realtime AI UX

Users receive:

* live AI logs
* progress indicators
* instant UI updates

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/aadityaa29/veda-ai.git
```

---

## Install Dependencies

```bash
pnpm install
```

---

# ⚙️ Environment Variables

## API

```env
MONGODB_URI=
REDIS_HOST=
REDIS_PORT=
PORT=8000
```

---

## Worker

```env
MONGODB_URI=
REDIS_HOST=
REDIS_PORT=
GEMINI_API_KEY=
```

---

## Frontend

```env
NEXT_PUBLIC_API_URL=
```

---

# 🚀 Running Locally

## Frontend

```bash
cd apps/web
pnpm dev
```

---

## API Server

```bash
cd apps/api
npx tsx src/index.ts
```

---

## Worker

```bash
cd apps/worker
npx tsx src/workers/assignment.worker.ts
```

---


# 📸 Core Workflow

```txt
Teacher Uploads PDF
        ↓
Backend Queues Job
        ↓
Worker Extracts Text
        ↓
Gemini Generates Questions
        ↓
JSON Validated
        ↓
MongoDB Updated
        ↓
Socket Event Emitted
        ↓
Frontend Receives Live Updates
        ↓
Question Paper Rendered
        ↓
PDF Download Available
```

---

# 🧠 Future Improvements

* Multi-language support
* AI difficulty balancing
* Teacher analytics dashboard
* Classroom integration
* Collaborative paper editing
* AI answer explanation generation
* OCR support for scanned PDFs

---

# 👨‍💻 Author

Built by Aditya Pachouri

---
