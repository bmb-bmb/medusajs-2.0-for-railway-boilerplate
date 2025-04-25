# BMB Storefront

A modern, performant e-commerce storefront built with Next.js, Medusa, and shadcn/ui.

## Features

- Serverless architecture with Next.js
- Progressive loading with React Suspense
- Type-safe development with TypeScript
- Modern UI with Tailwind CSS and shadcn/ui
- URL-based state management with nuqs
- Efficient data fetching with React Query
- Dark mode support
- Responsive design

## Prerequisites

- Node.js 18.x or later
- pnpm 9.x or later
- A running Medusa backend instance

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd storefront-bmb
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
```

4. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
  ├── app/              # Next.js app directory
  ├── components/       # React components
  │   ├── ui/          # shadcn/ui components
  │   └── ...          # Other components
  ├── hooks/           # Custom React hooks
  ├── lib/             # Utility functions and configurations
  └── types/           # TypeScript type definitions
```

## Development

- The application uses Next.js 14 with the App Router
- Styling is done with Tailwind CSS
- UI components are built with shadcn/ui
- State management is handled through URL parameters with nuqs
- Data fetching is managed with React Query
- Type safety is ensured with TypeScript

## Building for Production

```bash
pnpm build
```

## License

MIT 