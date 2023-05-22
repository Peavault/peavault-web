import "./globals.css";

export const metadata = {
  title: "Peavault",
  description: "Later insert peavault description over here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
