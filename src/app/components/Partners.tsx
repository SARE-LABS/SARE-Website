import HighlightHead from "../UI/props/HighlightHead";

function Partners() {
  return (
    <section className="py-[24px] md:py-[48px]  w-full overflow-hidden">
      <div className="flex flex-col gap-[48px] items-center">
        <div className="w-[382px] px-[2rem] md:px-[96px] md:w-full flex flex-col gap-[16px] items-center text-center">
          <HighlightHead title="Our Partners" />
          <h1 className="text-[32px] font-medium text-text-primary leading-[120%]">
            Companies That Support The SARE Dream
          </h1>
          <p className="text-text-primary text-[16px] leading-[148%]">
            Meet the individual making the SARE dream possible
          </p>
        </div>

        <div>

        </div>
      </div>
    </section>
  );
}

export default Partners;
