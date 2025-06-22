# VIRECA

VIRECA is a modern web application built with Next.js, featuring a user-friendly interface, Stellar blockchain integration, and health data visualization modules. The project is developed by KOZA DAO.

## Features

- **Next.js 13+ App Router** architecture
- **Stellar Blockchain** wallet connection and network management
- Health modules such as **Blood Analysis** and **Radiology Viewer**
- Modern, themeable UI with **Tailwind CSS** and **@stellar/design-system**
- Light and dark theme support
- Global state management with notification and wallet providers

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/vireca-app.git
cd vireca-app
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

```
src/
  app/                # Pages and layouts
    blood-analysis/   # Blood analysis module
    radiography/      # Radiology viewer
    components/       # Shared components (SidebarMenu, ConnectAccount, etc.)
  contracts/          # Stellar-related helpers and types
  hooks/              # React custom hooks
public/               # Static files and images
```

## Key Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@stellar/design-system](https://github.com/stellar/design-system)
- [zod](https://zod.dev/) (for env and type validation)

## Stellar Integration

Stellar network and RPC settings are managed in [`src/contracts/util.ts`](src/contracts/util.ts). You can easily switch networks using environment variables.

## Customization

- **Theme:** Switch between light and dark mode using the toggle in the top right.
- **Sidebar:** Navigate between modules using the left sidebar.
- **Wallet:** Connect your Stellar wallet using the "ConnectAccount" button in the header.

## Deployment

You can easily deploy the project on Vercel:

[Deploy with Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

For more information, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing & License

Contributions are welcome! Please open an issue before submitting a pull request.

---

© {current year} VIRECA & KOZA DAO