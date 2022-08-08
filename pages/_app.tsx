import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { AppWrapper } from '../context/useAppContext';
import Layout from '../components/Layout';


const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    // alchemyProvider({ alchemyId: process.env.NEXT_PUBLIC_ALCHMEY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains} 
        theme={darkTheme({
          borderRadius: "large",
          accentColor: "none",
          accentColorForeground: "white"
      })}>
        <Layout>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>        
  )
}

export default MyApp
