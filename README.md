# Application côté client 2__4TWIN5 Workshop

A modern Event Management SPA built with **React**, **TypeScript**, **Axios**, and **Shadcn/UI**. This project uses **Bun** as the JavaScript runtime and package manager for high-performance development.

## Prerequisites

This project requires **Bun** to be installed on your machine.

* [Install Bun](https://bun.sh/docs/installation) (`curl -fsSL https://bun.sh/install | bash`)

---

## Getting Started

### 1. Clone the project

```bash
git clone <your-repo-url>
cd <project-folder>

```

### 2. Install Dependencies

**Important:** Do not use `npm install`. Use Bun to ensure the lockfile stays consistent.

```bash
bun install

```

### 3. Start the Backend (Mock API)

The project uses `json-server` to manage the events database. In a new terminal tab, run:

```bash
bun run json-server ./src/pages/atelier3/db.json
```

*The API will be available at: `http://localhost:3000/events*`

### 4. Start the Frontend

In your main terminal tab, run:

```bash
bun dev

```

*The app will be available at: `http://localhost:5173*`

---

### Why Bun?

I chose **Bun** for this project because:

1. **Speed:** Faster installation of dependencies.
2. **Native TypeScript Support:** No extra configuration needed for execution.
3. **Modern Tooling:** A unified experience for running scripts and managing packages.

---
