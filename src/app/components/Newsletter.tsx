import HighlightHead from "../UI/props/HighlightHead";

function Newsletter() {
  return (
    <div className="py-[24px] px-[2rem] overflow-hidden">
      <div className="w-full bg-sare-gradient rounded-[24px] p-[24px] flex flex-col gap-[24px] items-center text-center">
        <HighlightHead title="SARE Newsletter" />
        <h1 className="text-[36px] text-white leading-[120%] font-medium w-[334px]">
          Be the First to know about updates from SARE
        </h1>
        <form
          action=""
          className="overflow-hidden w-full flex  gap-[16px] rounded-full border border-border ring-0 bg-white justify-between"
        >
          <input
            type="text"
            placeholder="Ask us anything…"
            className="p-[12px] outline-none rounded-full"
          />
          <button className="cursor-pointer bg-primary-blue text-white py-[12px] px-[16px] rounded-full">
            Get Involved
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
