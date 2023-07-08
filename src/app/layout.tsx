import './index.scss';
import Header from "./components/header";

export const metadata = {
  title: 'David Camacho',
  description: 'FrontEnd web developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <section>
          {children}
        </section>
      </body>
    </html>
  )
}
