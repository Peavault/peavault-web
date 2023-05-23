import Header from "@/components/layout/header";
import Image from "next/image";
import PeavaultSlash from "@/assets/images/peavault-slash.svg";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-black w-full min-h-screen px-28 text-white">
      <Header />
      <section className="flex flex-col items-center justify-center gap-1 my-24 w-4/5">
        <h1 className="text-5xl font-oatmeal-sans text-center">
          Never Buy Or Sell Online Without Using
        </h1>
        <div className="flex flex-col gap-2">
          <p className="text-7xl font-oatmeal-sans text-center text-peavault-primary">
            Peavault
          </p>
          <Image src={PeavaultSlash} alt="peavault-slash" />
        </div>
        <p className="text-xl font-oatmeal-sans text-center">
          Peavault is a cutting-edge platform that enables secure and
          trustworthy transactions between parties.
        </p>
        <p className="text-xl font-oatmeal-sans text-center">
          With Peavault, you can transact with confidence, knowing that your
          transactions are executed automatically once all the terms of the
          transaction have been fulfilled by both parties.
        </p>
        <div className="my-14">
          <button className="text-base text-black font-circular-std rounded-xl bg-peavault-primary w-36 h-14">
            Start For Free
          </button>
        </div>
      </section>
      <div
        style={{
          boxShadow: "0px 0px 8px 23px rgba(143, 255, 0, 0.2);",
        }}
        className="flex flex-col mb-24 items-center justify-center bg-peavault-primary w-full rounded-3xl aspect-video"
      >
        lol
      </div>
      <Footer />
    </main>
  );
}
