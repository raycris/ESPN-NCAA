import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <head />
      <body className="mt-80">{children}</body>
    </html>
  );
}
