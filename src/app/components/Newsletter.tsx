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
          className="w-full flex items-center gap-[16px] rounded-full border border-border ring-0 bg-white justify-between"
        >
          <input
            type="email"
            name="email"
            placeholder="Ask us anything…"
            className="p-[12px] outline-none rounded-full "
          />
          <button className="self-ed cursor-pointer text-[14px] bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 text-white py-[12px] px-[16px] rounded-full mr-[1px]">
            Get Involved
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
