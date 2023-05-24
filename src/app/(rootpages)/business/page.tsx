import Image from "next/image";
import AboutPeavault from "@/assets/images/about-peavault.png";
import {
  BusinessFeaturesData,
  BusinessIndustriesData,
} from "@/constants/overviewData";
import PeavaultBanner from "@/components/peavaultBanner";
import cn from "classnames";
import Button from "@/components/buttons";

export default function Business() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-1 my-24 w-4/5">
        <h1 className="text-3xl lg:text-7xl text-peavault-primary mb-14 font-oatmeal-sans text-center">
          Welcome to Peavault
        </h1>

        <p className="text-sm lg:text-xl font-oatmeal-sans text-center">
          The trust-based transaction platform that makes doing business secure
          and effortless.
        </p>

        <div className="my-14">
          <Button>Start as a business</Button>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row px-8 my-20 lg:my-32 w-full aspect-video">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center lg:items-start gap-1 text-peavault-primary">
              <h3 className="text-3xl lg:text-5xl font-oatmeal-sans">
                How does Peavault help your business?
              </h3>
            </div>
            <div className="flex flex-col gap-4 text-center lg:text-start text-sm lg:text-xl font-circular-std font-light">
              <p>
                As a business, you know the importance of trust and security
                when it comes to transactions. That&apos;s why we&apos;ve
                developed Peavault - a platform that helps businesses of all
                sizes transact with confidence and ease.
              </p>
              <p>
                With Peavault, businesses can set the terms of a transaction and
                let our platform take care of the rest. Our advanced automation
                technology ensures that transactions are executed only when all
                the terms of the agreement have been met. This means that you
                can focus on your business while we take care of the transaction
                process.
              </p>
              <p>
                Peavault is suitable for businesses across various industries,
                including e-commerce, real estate, finance, and more. Our
                platform facilitates P2P crypto assets transactions, making it a
                valuable tool for businesses operating in the cryptocurrency
                space.
              </p>
            </div>
            <div className="flex flex-row lg:justify-start justify-center gap-2">
              <Button>See our business plans</Button>
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
      <section className="flex flex-col my-20 lg:my-32 gap-16 w-full">
        <div className="flex flex-col items-center gap-2 justify-center font-circular-std text-peavault-primary">
          <p>Features</p>
          <h3 className="text-3xl text-center lg:text-5xl font-oatmeal-sans">
            These features makes us the best in the market
          </h3>
          <p className="text-[#CACACA] text-center max-w-[900px]">
            Our platform is built on trust and designed to provide a seamless
            and intuitive user experience, so you can easily transact with
            confidence. Here are some of the key features of Peavault:
          </p>
        </div>
        <div className="flex flex-row flex-wrap gap-4 items-stretch justify-center w-full h-max">
          {BusinessFeaturesData.map((feature, i) => (
            <div
              key={`feature-${i}`}
              className="w-[360px] flex flex-col gap-4 p-6 rounded-2xl border border-peavault-primary"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-[10px] bg-peavault-primary">
                <Image src={feature.icon} alt={feature.title} />
              </div>
              <p className="font-circular-std text-xl text-peavault-primary">
                {feature.title}
              </p>
              <p className="text-base font-circular-std font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <Button>Start as a business</Button>
        </div>
      </section>

      <section className="flex flex-col items-center my-20 lg:my-32 px-4 lg:px-20 gap-20 w-full">
        <div className="flex flex-col items-center gap-2 justify-center font-circular-std text-peavault-primary">
          <h3 className="text-3xl text-center lg:text-5xl font-oatmeal-sans">
            Industries
          </h3>
          <p className="text-[#CACACA] text-center max-w-[900px]">
            Peavault can benefit a wide range of businesses across various
            industries, especially those that involve online transactions and
            payments. Here are a few examples:
          </p>
        </div>
        <div className="flex flex-col gap-32 w-full">
          {BusinessIndustriesData.map((industry, i) => (
            <div
              key={`b-industry-${i}`}
              className={cn(
                "flex flex-col items-center lg:gap-28 gap-8",
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse",
              )}
            >
              <div className="flex flex-col gap-4 font-circular-std lg:text-start text-center">
                <h6 className="text-3xl text-peavault-primary">
                  {industry.title}
                </h6>
                <p className="lg:text-xl font-light lg:leading-9">
                  {industry.description}
                </p>
                <div>
                  <Button>Start as a business</Button>
                </div>
              </div>
              <div className="w-full aspect-square overflow-clip lg:w-[480px] lg:h-[480px] shrink-0 rounded-3xl bg-slate-300">
                <Image
                  className="w-full h-full"
                  src={industry.image}
                  alt="industry"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <PeavaultBanner />
    </>
  );
}
