"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/privacy",
    label: "Privacy",
  },
  {
    href: "/terms-and-conditions",
    label: "Terms & Conditions",
  },
  {
    href: "/legal",
    label: "Legal",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <aside className="w-full lg:w-[280px] flex flex-row lg:flex-col justify-center lg:justify-start gap-1 font-circular-std pb-8 lg:pt-20">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <div
                className={`h-11 w-full rounded-md flex items-center px-4 ${
                  pathname === link.href
                    ? "bg-peavault-primary text-black"
                    : "text-[#667085]"
                }`}
              >
                {link.label}
              </div>
            </Link>
          ))}
        </aside>
        {children}
      </div>
    </>
  );
}
