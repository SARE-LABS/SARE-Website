import HighlightHead from "../UI/props/HighlightHead";

function Newsletter() {
  return (
    <div className="py-[24px] px-[2rem] overflow-hidde w-full">
      <div className="w-full bg-sare-gradient rounded-[24px] p-[24px] flex flex-col gap-[24px] items-center text-center">
        <HighlightHead title="SARE Newsletter" />
        <h1 className="text-[36px] text-white leading-[120%] font-medium w-[334px]">
          Be the First to know about updates from SARE
        </h1>
        <form
          action=""
          className="w-full flex flex-col items-center gap-[6px] justify-between"
        >
          <input
            type="email"
            name="email"
            placeholder="Ask us anything…"
            className="p-[12px] w-full outline-none rounded-full  border border-border ring-0 bg-white "
          />
          <button className="self-ed w-full cursor-pointer border border-border text-[14px] bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 text-white py-[12px] px-[16px] rounded-full mr-[1px]">
            Get Involved
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
