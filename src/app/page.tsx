import Header from "@/components/layout/header";
import Image from "next/image";
import PeavaultSlash from "@/assets/images/peavault-slash.svg";
import AboutPeavault from "@/assets/images/about-peavault.png";
import HowItWorks from "@/assets/images/how-it-works.svg";
import Footer from "@/components/layout/footer";
import { FeaturesData, HowItWorksData } from "@/constants/overviewData";

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
      <section
        style={{
          boxShadow: "0px 0px 8px 23px rgba(143, 255, 0, 0.2);",
        }}
        className="flex flex-col items-center justify-center bg-peavault-primary w-full rounded-3xl aspect-video"
      ></section>
      <section className="flex flex-row px-8 my-20 w-full aspect-video">
        <div className="w-1/2 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1 text-peavault-primary">
              <p className="text-base font-circular-std">About Peavault</p>
              <p className="text-5xl font-oatmeal-sans">Buy & Sell With Us</p>
            </div>
            <div className="flex flex-col gap-2 text-xl font-circular-std font-light">
              <p>
                Our platform is designed to provide a seamless and intuitive
                user experience, so you can easily set the terms of a
                transaction, track its progress, and receive notifications when
                it is complete. Peavault is built on a robust and scalable
                infrastructure, so you can transact with confidence even as our
                platform grows in popularity.
              </p>
              <p>
                At Peavault, we believe in the power of trust to drive commerce
                and build relationships. That&apos;s why our platform is built
                on trust, so you can transact securely and confidently without
                the need for intermediaries or third-party services.
              </p>
              <p>
                Whether you&apos;re buying or selling digital assets, goods, or
                services, Peavault provides a secure and efficient platform for
                your transactions. With our platform, you can focus on what
                matters most – building your business and achieving your goals.
              </p>
              <p>
                Join the Peavault community today and experience the future of
                secure and trustworthy transactions.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <button className="h-12 w-32 font-circular-std rounded-lg border-2 border-peavault-primary text-peavault-primary">
                Start for free
              </button>
              <button className="h-12 w-40 rounded-xl bg-peavault-primary text-black">
                How it Works
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-1/2">
          <div className="absolute bottom-0 left-0 w-full h-full">
            <Image
              className="h-full"
              src={AboutPeavault}
              alt="about-peavault"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col my-20 gap-16 w-full">
        <div className="flex flex-col items-center gap-2 justify-center font-circular-std text-peavault-primary">
          <p>Features</p>
          <p className="text-5xl font-oatmeal-sans">
            These features makes us the best in the market
          </p>
          <p className="text-[#CACACA] text-center max-w-[900px]">
            Our platform is built on trust and designed to provide a seamless
            and intuitive user experience, so you can easily transact with
            confidence. Here are some of the key features of Peavault:
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-evenly w-full">
          {FeaturesData.map((feature, i) => (
            <div
              key={`feature-${i}`}
              className="w-72 h-[420px] flex flex-col gap-4 p-6 rounded-2xl border border-peavault-primary"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-[10px] bg-peavault-primary">
                <Image src={feature.icon} alt={feature.title} />
              </div>
              <p className="font-circular-std text-xl text-peavault-primary">
                {feature.title}
              </p>
              <p className="text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col my-20 px-4 gap-28 w-full">
        <div className="flex justify-center w-full">
          <p className="text-5xl font-oatmeal-sans text-center text-peavault-primary">
            How It Works
          </p>
        </div>
        <div className="flex flex-row items-center h-[500px] w-full">
          <div className="h-full w-1/2">
            <Image src={HowItWorks} alt="how-it-works" />
          </div>
          <div className="h-full w-1/2 flex flex-col justify-between">
            {HowItWorksData.map((data, i) => (
              <div key={`hiw-${i}`} className="flex flex-col gap-2">
                <p className="text-xl font-circular-std text-peavault-primary">
                  {data.title}
                </p>
                <p>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
