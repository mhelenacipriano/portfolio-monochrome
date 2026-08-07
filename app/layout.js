import { Bodoni_Moda, Space_Mono } from 'next/font/google';
import './globals.scss';

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-serif',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Maria Helena — Senior Frontend Developer',
  description:
    "Portfolio of Maria Helena, a senior frontend developer shipping scalable React and TypeScript products for distributed teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bodoniModa.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
