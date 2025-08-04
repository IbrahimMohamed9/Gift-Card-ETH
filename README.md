# Gift Card ETH

A decentralized gift card platform built on Ethereum blockchain, featuring a modern Next.js frontend and Solidity smart contracts. The platform enables users to purchase, manage, and redeem digital gift cards with cryptocurrency, providing a secure and transparent gift card ecosystem with admin controls and user management.

The frontend is powered by Next.js 15 with React 19, Material-UI components, and Tailwind CSS for a responsive and modern user interface. Blockchain interactions are handled through ethers.js and web3.js libraries, ensuring seamless Web3 integration. The smart contract backend manages gift card lifecycle, user authentication via wallet addresses, and role-based access control.

## Tech Stack

### Frontend

- **Next.js 15.1.3** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **Material-UI (MUI)** - Component library for consistent UI
- **Tailwind CSS** - Utility-first CSS framework
- **Bootstrap 5.3.3** - Additional styling components
- **ethers.js 6.13.4** - Ethereum library for blockchain interaction
- **web3.js 4.16.0** - Alternative Web3 provider
- **Styled Components** - CSS-in-JS styling solution

### Backend

- **Solidity 0.8.26** - Smart contract development
- **Ethereum Blockchain** - Decentralized platform
- **Smart Contract Architecture** - Gift card management system

## Key Features

### 🎁 Gift Card Management

- **Purchase Gift Cards** - Buy digital gift cards with ETH
- **Redeem System** - Secure gift card redemption process
- **Status Tracking** - Monitor gift card validity and expiration
- **Code Generation** - Unique gift card codes for each purchase

### 👥 User Management

- **Wallet Authentication** - Connect via MetaMask or Web3 wallets
- **Role-Based Access** - Admin and normal user permissions
- **Profile System** - User profiles with gender and type tracking
- **Address Management** - Ethereum address-based user identification

### 🔐 Security & Transparency

- **Smart Contract Security** - Immutable business logic on blockchain
- **Transparent Transactions** - All operations recorded on Ethereum
- **Admin Controls** - Administrative functions for platform management
- **Balance Tracking** - Real-time balance and transaction monitoring

### 🎨 Modern UI/UX

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Material Design** - Consistent UI components with MUI
- **Interactive Elements** - Smooth user interactions and feedback
- **Web3 Integration** - Seamless blockchain connectivity

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MetaMask or compatible Web3 wallet
- Ethereum testnet ETH for testing

### Installation

1. Clone the repository:

```bash
git clone https://github.com/IbrahimMohamed9/Gift-Card-ETH.git
cd Gift-Card-ETH
```

2. Install frontend dependencies:

```bash
cd client
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Smart Contract Deployment

1. Navigate to the blockchain directory:

```bash
cd blockChain
```

2. Deploy the smart contract to your preferred Ethereum network
3. Update the contract address in the frontend configuration

## Project Structure

```
Gift-Card-ETH/
├── client/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/           # Next.js App Router pages
│   │   ├── components/    # Reusable UI components
│   │   ├── store/         # State management
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── blockChain/            # Smart contract backend
│   ├── contracts/         # Solidity smart contracts
│   │   └── GiftCardETH.sol # Main gift card contract
│   └── .prettierrc.json   # Code formatting
└── README.md              # Project documentation
```
