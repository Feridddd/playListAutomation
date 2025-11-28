# Playlist App Automation Tests

---

## Setup

1.  **Clone the repository**

```bash
git clone <your-repo-url>
cd playListAutomation
```

2.  **Install dependencies**

```bash
npm install
```

3.  **Create `.env` file**

Add the application URL:

```ini
VITE_APP_URL=https://vite-react-alpha-lemon.vercel.app/
```

---

## ▶️ Running Tests

### Run all tests

```bash
npm test
```

### Run tests in headed mode (browser UI visible)

```bash
npm run test:headed
```

### Run a specific test

```bash
npm run test -- tests/search.spec.js
```

---
