import { PeavaultHelp } from "@/constants/LegalDocs";

export default function Help() {
  return (
    <>
      <section className="flex flex-col gap-4 w-full lg:w-4/5">
        <h3 className="font-oatmeal-sans text-3xl lg:text-5xl uppercase">
          Help
        </h3>
        <p className="font-circular-std text-base lg:text-xl font-light lg:leading-[46px]">
          {PeavaultHelp.split("\n\n").map((paragraph, index) => (
            <span key={index}>
              <span className="font-normal">
                {paragraph.split(":")[0]}
                {index > 0 && paragraph.split(":")[1] && ":"}
              </span>
              {paragraph.split(":")[1]}
              <br />
              <br />
            </span>
          ))}
        </p>
      </section>
    </>
  );
}
