"use client";
import Image from "next/image";
import { useState } from "react";
import PricingTabs from "@/components/pricing/pricingTabs";
import GoodIcon from "@/assets/icons/good-icon.svg";
import BadIcon from "@/assets/icons/bad-icon.svg";
import PeavaultBanner from "@/components/peavaultBanner";

export default function Pricing() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-1 my-24">
        <div className="w-full flex flex-col py-24 gap-8 items-center">
          <h2 className="text-3xl lg:text-5xl font-oatmeal-sans">
            Pricing Plans
          </h2>
          <PricingTabs
            activeTab={selectedTab}
            onClick={(id) => setSelectedTab(id)}
          />
        </div>
        <div className="w-full flex flex-row gap-8 flex-wrap items-end">
          <div className="w-[350px] lg:w-[380px] h-[450px] flex flex-col items-center justify-between p-8 rounded-2xl border border-peavault-primary">
            <p className="text-5xl font-circular-std font-bold">$10/mth</p>
            <p className="text-xl font-bold text-peavault-primary">
              Starter Plan
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3">
                <Image src={GoodIcon} alt="good-icon" />
                <p>Up to 5 transactions per month</p>
              </div>
              <div className="flex flex-row gap-3">
                <Image src={GoodIcon} alt="good-icon" />
                <p>Basic transaction tracking</p>
              </div>
              <div className="flex flex-row gap-3">
                <Image src={BadIcon} alt="good-icon" />
                <p>Customer Support</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <button className="w-full h-12 rounded-lg bg-peavault-primary font-bold text-black">
                Get started
              </button>
              <button className="w-full h-12 rounded-lg bg-white text-black">
                Chat to sales
              </button>
            </div>
          </div>
          <div className="w-[350px] lg:w-[380px] h-[494px] flex flex-col items-center overflow-clip rounded-2xl border border-peavault-primary">
            <div className="h-11 w-full bg-peavault-primary flex items-center justify-center">
              <p className="text-black text-sm">Most popular plan</p>
            </div>
            <div className="h-full w-full flex flex-col items-center justify-between p-8">
              <p className="text-5xl font-circular-std font-bold">$20/mth</p>
              <p className="text-xl font-bold text-peavault-primary">
                Premium Plan
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-3">
                  <Image src={GoodIcon} alt="good-icon" />
                  <p>Up to 50 transactions per month</p>
                </div>
                <div className="flex flex-row gap-3">
                  <Image src={GoodIcon} alt="good-icon" />
                  <p>Advanced tracking and reporting</p>
                </div>
                <div className="flex flex-row gap-3">
                  <Image src={GoodIcon} alt="good-icon" />
                  <p>Personalized customer support</p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-3">
                <button className="w-full h-12 rounded-lg bg-peavault-primary font-bold text-black">
                  Get started
                </button>
                <button className="w-full h-12 rounded-lg bg-white text-black">
                  Chat to sales
                </button>
              </div>
            </div>
          </div>
          <div className="w-[350px] lg:w-[380px] h-[450px] flex flex-col items-center justify-between p-8 rounded-2xl border border-peavault-primary">
            <p className="text-5xl font-circular-std font-bold">$40/mth</p>
            <p className="text-xl font-bold text-peavault-primary">
              Unlimited Plan
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3">
                <Image src={GoodIcon} alt="good-icon" />
                <p>Unlimited transactions per month</p>
              </div>
              <div className="flex flex-row gap-3">
                <Image src={GoodIcon} alt="good-icon" />
                <p>Advanced tracking and reporting</p>
              </div>
              <div className="flex flex-row gap-3">
                <Image src={GoodIcon} alt="good-icon" />
                <p>Priority customer support</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3">
              <button className="w-full h-12 rounded-lg bg-peavault-primary font-bold text-black">
                Get started
              </button>
              <button className="w-full h-12 rounded-lg bg-white text-black">
                Chat to sales
              </button>
            </div>
          </div>
        </div>
      </section>
      <PeavaultBanner />
    </>
  );
}
