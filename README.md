# adMarketplace Frontend Assessment

This repository contains the frontend code for my AdMarketplace assessment, built using [Next.js](https://nextjs.org/). The project implements a "Postr" app platform for managing and displaying posts with a scalable, modular frontend architecture.

## Table of Contents

-   [Features](#features)
-   [Technologies](#technologies)
-   [Getting Started](#getting-started)
-   [Installation](#installation)
-   [Running the Application](#running-the-application)
-   [Folder Structure](#folder-structure)
-   [Development Practices](#development-practices)
-   [Future Improvements](#future-improvements)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   **Responsive Design:** Built with a mobile-first approach using SCSS modules for styling.
-   **Dynamic Content:** Utilizes `React Query` for efficient data fetching and caching of API calls.
-   **Type Safety:** Fully typed with TypeScript to ensure reliability and maintainability.
-   **Custom Hooks:** Includes custom hooks such as `useFormValidation` to handle custom form validations without library overhead.
-   **Form Validation:** Provides reusable `Input` and `Textarea` components with validation.
-   **Code Quality:** Implements ESLint/Prettier for linting and Husky for pre-commit hooks.

## Technologies

-   [Next.js 14](https://nextjs.org/) - React framework for server-rendered and static web applications.
-   [React Query](https://tanstack.com/query/latest) - Data fetching and synchronization.
-   [TypeScript](https://www.typescriptlang.org/) - Static type definitions.
-   [Radix UI](https://www.radix-ui.com/) - Open source component library optimized for fast development, easy maintenance, and accessibility.
-   [SCSS Modules](https://sass-lang.com/) - Modular styling with SCSS.
-   [ESLint](https://eslint.org/) - JavaScript and TypeScript linting.
-   [Husky](https://typicode.github.io/husky/) - Pre-commit hooks for enforcing code quality.
-   [Jest](https://jestjs.io) - JavaScript testing framework often used with React.

## Getting Started

To get started with this project, clone the repository and follow the instructions below to set up the project on your local machine.

### Prerequisites

-   Node.js (v18+)
-   npm or yarn package manager

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/r742davis/admarketplace-frontend.git
    cd admarketplace-frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

## Running the Application

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

For a production build, use:

```bash
npm run build
```

Then, to start the production server:

```bash
npm start
```

## Folder Structure

```bash
admarketplace-frontend/app/src
├── _components/         # Reusable components
├── _hooks/              # Custom React hooks
├── _lib/                # Utility functions
├── _provider/           # Provider wrappers
├── _styles/             # Global styles
├── _types/              # Reusable types
├── comments/            # Next Route: /comments
└── posts/               # Next Route: /posts
```

## Development Practices

-   **Aliased Imports:** Use folder import aliases (e.g., `@richie/components`) for better readability and consistency across the project.
-   **Commit Hooks:** The project uses Husky to run pre-commit hooks, ensuring code quality before each commit.
-   **ESLint:** Linting is configured to enforce coding standards. Please make sure your code passes linting before pushing.

## Future

-   **Redis:** Caching for API responses, user session persistence, rate-limiting user post frequency, and background task processing.
-   **Redux:** Increased complexity will require state management to share props and prevent excessive React component re-renders.
-   **PWAs:** Provide offline capability for the application so the user can add posts and comments offline until the network is available.
-   **CI/CD Pipeline:** Add GitHub Actions, build process optimizations, and performance testing for better dev-to-production speed and quality.
-   **Component Library:** Improves dev speed and project scalability with re-usable components and testing with Storybook.
-   **Virtualized Lists:** Add virual list components, along with API pagination and infinite scroll, to improve the rendering performance of large lists of posts.

## Contributing

Contributions are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.
