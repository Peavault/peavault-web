import FONTS from "@/constants/fonts";
import "./globals.css";

export const metadata = {
  title: "Peavault",
  description: "Later insert peavault description over here",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${FONTS.oatmeal.variable} ${FONTS.circularStd.variable}`}
    >
      {/* <head>
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      </head> */}
      <body suppressHydrationWarning={true}>
        <main className="flex flex-col items-center justify-between bg-black w-full min-h-screen px-4 lg:px-28 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
