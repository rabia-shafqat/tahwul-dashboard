# TAHWUL Dashboard

A modern, responsive dashboard built with **React**, **TypeScript**, and **Vite**. The app includes an overview dashboard and a detailed page for _Strategic Planning_.

---

## Live Demo:

https://tahwul-dashboard.web.app/

## Detail page

https://tahwul-dashboard.web.app/details/strategicPlanning

## 🚀 How to Run the Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/rabia-shafqat/tahwul-dashboard
   cd TAHWUL
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the app in your browser at:

   ```
   http://localhost:5173
   ```

---

## 🧱 How It’s Built

- **React + TypeScript + Vite** for fast, type-safe development.
- **Mantine UI** components for consistent design and responsive layout.
- **React Router DOM** for navigation between the Dashboard and Details page.
- **Custom hooks** (e.g., `useMockData`) for fetching and managing mock JSON data.
- **Component-based architecture** — reusable, modular sections like `StatsCard`, `OverviewCard`, `CommentsSection`, and `RecentActivities`.

Project structure:

```
src/
 ┣ assets/               # Static files and icons
 ┣ components/           # Reusable UI components
 ┣ constant/             # Static constants/config
 ┣ data/                 # Mock JSON data files
 ┣ features/             # Dashboard & Detail pages
 ┣ hooks/                # Custom hooks (e.g., data fetching)
 ┣ layout/               # Layout wrapper components
 ┣ styles/               # Global and theme styles
 ┣ App.tsx               # Routes setup
 ┗ main.tsx              # Entry point
```

---

## 🧩 Assumptions Made

- Data is fetched from **local JSON files** (`dashboard.json`, `details.json`) to simulate an API response.
- The project assumes **Mantine** components and styling context are available.
- Navigation between pages is handled through **React Router v6**.
- No backend integration or authentication is included in this version.

---

## 💡 Improvements with More Time

If given more time, I would:

- Integrate a real API instead of local mock data.
- Add global state management (e.g., Redux Toolkit or Zustand).
- Improve responsiveness for mobile layouts.
- Implement form validation and data interactions.
- Add unit and integration tests.
- Enhance performance through lazy loading and code splitting.

---

## 🖼 Preview

- `/` → Dashboard view (audit performance, stats, compliance, leaders, activities)
- `/details/strategicPlanning` → Strategic Planning detail page with tabs (Overview, Evidence)

---

**Author:** [Rabia Shafqat]
**Tech Stack:** React · TypeScript · Vite · Mantine · React Router
