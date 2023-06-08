import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-between bg-black w-full min-h-screen px-4 lg:px-28 text-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
