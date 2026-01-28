import './globals.css'
import ClientProviders from './ClientProviders';

export const metadata = {
  title: 'ALPHA ZENTH | Premium Supply Bundler & Precision Sniping Bot',
  description: 'ALPHA ZENTH - Advanced cryptocurrency trading automation platform featuring precision sniping algorithms and sophisticated supply bundling technology for optimal market execution.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}