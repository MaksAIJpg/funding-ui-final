
export const metadata = {
  title: 'Funding Arbitrage Dashboard',
  description: 'Сравнение фандинга между Gate и MEXC',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 20, background: 'black', color: 'white' }}>
        {children}
      </body>
    </html>
  )
}
