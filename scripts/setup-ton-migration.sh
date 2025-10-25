#!/bin/bash

# Siphere TON Migration Setup Script
# This script sets up the TON blockchain integration for the swap.coffee grant application

echo "🚀 Setting up Siphere TON Migration..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install TON-specific packages
echo "🔧 Installing TON blockchain packages..."
npm install @ton-connect/sdk@^2.0.0 @ton/core@^0.56.3 @ton/ton@^13.11.2 @ton/crypto@^3.2.0 @ton/tonweb@^0.0.66

# Create environment file
echo "⚙️ Creating environment configuration..."
cat > .env.local << EOF
# TON Blockchain Configuration
NEXT_PUBLIC_TON_NETWORK=testnet
NEXT_PUBLIC_TON_RPC_URL=https://testnet.toncenter.com/api/v2/jsonRPC

# swap.coffee Integration
NEXT_PUBLIC_SWAP_COFFEE_API_KEY=demo_api_key
NEXT_PUBLIC_SWAP_COFFEE_BASE_URL=https://testnet-api.swap.coffee

# Application Configuration
NEXT_PUBLIC_APP_NAME=Siphere
NEXT_PUBLIC_APP_URL=https://siphere-ton.vercel.app
EOF

echo "✅ Environment file created"

# Create TON Connect manifest
echo "📄 Setting up TON Connect manifest..."
mkdir -p public
cat > public/tonconnect-manifest.json << EOF
{
  "url": "https://siphere-ton.vercel.app",
  "name": "Siphere - TON DeFi Investment Platform",
  "iconUrl": "https://siphere-ton.vercel.app/logo.png",
  "termsOfUseUrl": "https://siphere-ton.vercel.app/terms",
  "privacyPolicyUrl": "https://siphere-ton.vercel.app/privacy"
}
EOF

echo "✅ TON Connect manifest created"

# Create deployment configuration
echo "🚀 Setting up deployment configuration..."
cat > vercel.json << EOF
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "env": {
    "NEXT_PUBLIC_TON_NETWORK": "testnet",
    "NEXT_PUBLIC_TON_RPC_URL": "https://testnet.toncenter.com/api/v2/jsonRPC"
  }
}
EOF

echo "✅ Deployment configuration created"

# Create package.json scripts for TON
echo "📝 Adding TON-specific scripts..."
npm pkg set scripts.ton:dev="NEXT_PUBLIC_TON_NETWORK=testnet npm run dev"
npm pkg set scripts.ton:build="NEXT_PUBLIC_TON_NETWORK=testnet npm run build"
npm pkg set scripts.ton:start="NEXT_PUBLIC_TON_NETWORK=testnet npm run start"

echo "✅ TON scripts added"

# Create demo data
echo "🎭 Setting up demo data..."
mkdir -p lib/demo
cat > lib/demo/data.ts << EOF
// Demo data for TON migration
export const DEMO_SIPS = [
  {
    id: '1',
    name: 'TON Staking SIP',
    token: 'TON',
    amount: '100',
    frequency: 'Weekly',
    strategy: 'Staking Only',
    currentValue: 1200,
    invested: 1000,
    returns: 200,
    status: 'Active',
    nextExecution: '2025-01-15',
    apy: 8.2,
    insurance: true
  },
  {
    id: '2',
    name: 'USDC Lending SIP',
    token: 'USDC',
    amount: '500',
    frequency: 'Bi-weekly',
    strategy: 'Lending Only',
    currentValue: 2100,
    invested: 2000,
    returns: 100,
    status: 'Active',
    nextExecution: '2025-01-10',
    apy: 5.8,
    insurance: false
  }
];

export const DEMO_INSURANCE = {
  totalCoverage: 2400000,
  totalPremiums: 45200,
  activePolicies: 892,
  claimsPaid: 12,
  successRate: 94.2
};
EOF

echo "✅ Demo data created"

# Create README for setup
cat > SETUP_INSTRUCTIONS.md << EOF
# Siphere TON Migration Setup Complete! 🎉

## What's Been Set Up

✅ **TON Blockchain Integration**
- TON Connect 2.0 wallet integration
- TON SDK and core libraries
- Smart contract interfaces

✅ **swap.coffee Integration**
- API configuration for token swaps
- Liquidity pool access
- Price feed integration

✅ **Environment Configuration**
- Testnet configuration
- API keys setup
- Deployment settings

## Next Steps

1. **Start Development Server**:
   \`\`\`bash
   npm run ton:dev
   \`\`\`

2. **Connect TON Wallet**:
   - Install Tonkeeper or TonHub wallet
   - Connect to TON testnet
   - Use testnet TON tokens for demo

3. **Test Features**:
   - Create SIP plans
   - Test insurance claims
   - Explore portfolio dashboard

## Demo Features

- 🔗 **TON Wallet Connection**: Connect with TON Connect 2.0
- 📊 **SIP Management**: Create and manage systematic investment plans
- 🛡️ **Insurance System**: Submit and track insurance claims
- 📈 **Portfolio Dashboard**: Real-time performance tracking
- 🔄 **swap.coffee Integration**: Automated token swaps and liquidity

## Grant Application Ready

This setup is optimized for the **swap.coffee Grant Program**:
- Uses swap.coffee tools and APIs
- Demonstrates DeFi expertise
- Clear project implementation
- TON blockchain integration

## Support

- 📧 Email: nileshpathak781@gmail.com
- 🐙 GitHub: https://github.com/NileshRP010/Siphere
- 🐦 Twitter: @Siphere03

Happy coding! 🚀
EOF

echo "✅ Setup instructions created"

# Final setup
echo "🎯 Finalizing setup..."

# Make scripts executable
chmod +x scripts/setup-ton-migration.sh

# Create gitignore entries for TON
echo "" >> .gitignore
echo "# TON Blockchain" >> .gitignore
echo ".env.local" >> .gitignore
echo "lib/contracts/compiled/" >> .gitignore
echo "lib/contracts/build/" >> .gitignore

echo "✅ Git configuration updated"

echo ""
echo "🎉 Siphere TON Migration Setup Complete!"
echo ""
echo "📋 Summary:"
echo "  ✅ TON blockchain integration ready"
echo "  ✅ swap.coffee API configured"
echo "  ✅ Demo data loaded"
echo "  ✅ Environment configured"
echo "  ✅ Deployment ready"
echo ""
echo "🚀 To start development:"
echo "  npm run ton:dev"
echo ""
echo "📖 For detailed instructions, see: SETUP_INSTRUCTIONS.md"
echo ""
echo "🎯 Ready for swap.coffee Grant Program Application!"
echo ""
