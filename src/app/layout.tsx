import FONTS from "@/constants/fonts";
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
    <html
      lang="en"
      className={`${FONTS.oatmeal.variable} ${FONTS.circularStd.variable}`}
    >
      <body suppressHydrationWarning={true}>
        <main className="flex flex-col items-center justify-between bg-black w-full min-h-screen px-4 lg:px-28 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
