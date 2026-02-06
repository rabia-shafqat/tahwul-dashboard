tahwul/
├── public/ # Vite default (favicons, etc.)
├── src/
│ ├── assets/ # Images, icons if needed
│ ├── components/ # Reusable UI atoms/molecules (e.g., cards, badges)
│ │ ├── common/ # Shared across screens (e.g., ProgressBadge.tsx, StatusTag.tsx)
│ │ ├── dashboard/ # Dashboard-specific (e.g., TimelineSection.tsx)
│ │ ├── details/ # Details page-specific (e.g., EvidenceCard.tsx)
│ │ └── tracking/ # Tracking screen-specific (e.g., DataTableSection.tsx)
│ ├── data/ # Mocked JSON files
│ │ ├── dashboard.json # Data for dashboard (stats, progress, activities)
│ │ ├── details.json # Data for details page (strategic planning example)
│ │ └── tracking.json # Data for tracking screen
│ ├── features/ # Screen-level containers (logic + composition)
│ │ ├── Dashboard/ # Dashboard screen (index.tsx + hooks if needed)
│ │ ├── DetailsPage/ # Details page
│ │ └── TrackingScreen/ # Tracking screen
│ ├── hooks/ # Custom hooks (e.g., useMockData.ts)
│ ├── styles/ # Global CSS if needed (e.g., resets)
│ ├── theme.ts # Mantine theme overrides
│ ├── App.tsx # Routes setup (use react-router if multi-page)
│ ├── main.tsx # Entry point with MantineProvider
│ └── vite-env.d.ts # Vite types
├── .eslintrc.json # ESLint config (optional, for cleanliness)
├── tsconfig.json # TypeScript config
├── vite.config.ts # Vite config
├── package.json
└── README.md
