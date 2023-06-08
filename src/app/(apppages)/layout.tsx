export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col w-full h-screen text-white">{children}</main>
  );
}
