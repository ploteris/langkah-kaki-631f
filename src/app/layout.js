import './globals.css';

export const metadata = {
  title: 'Langkah Kaki - Local Shoe Brand',
  description: 'Discover thoughtfully crafted footwear that combines minimalist design with everyday comfort. Langkah Kaki - Walk with intention.',
  keywords: 'shoes, footwear, minimalist, local brand, Indonesia',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}