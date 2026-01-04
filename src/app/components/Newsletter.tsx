"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import HighlightHead from "../UI/props/HighlightHead";
import { useToast } from "../UI/ToastContext";

function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      showToast("success", "Thank you for subscribing!");
      setEmail("");
    } catch (err: any) {
      showToast("error", err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-[24px] md:py-[48px] md:px-[96px] px-[2rem] w-full overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-sare-gradient rounded-[24px] p-[24px] md:py-[48px] md:px-[96px] flex flex-col gap-[24px] md:gap-[48px] items-center text-center"
      >
        <HighlightHead title="SARE Newsletter" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-[24px] md:text-[36px] text-white leading-[120%] font-medium w-[334px] md:w-[80%]"
        >
          Be the First to know about updates from SARE
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full md:w-[508px] flex flex-col md:flex-row items-center gap-[6px] justify-between"
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="p-[12px] w-full outline-none rounded-full border border-border ring-0 bg-white"
          />
          <button
            type="submit"
            disabled={loading}
            className="md:w-[50%] w-full flex items-center gap-2 cursor-pointer border border-border text-[14px] bg-white text-[#1F2937] font-bold h-[48px] px-[16px] rounded-full mr-[1px] disabled:opacity-50"
          >
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.91985 8.99996H7.99985C10.209 8.99996 11.9998 7.2091 11.9998 4.99996V3.42996C11.9972 2.53269 11.6369 1.67352 10.9987 1.04282C10.3605 0.412115 9.49708 0.0619666 8.59985 0.0699581H7.27985C5.42645 0.0754496 3.92534 1.57656 3.91985 3.42996V4.99996C3.91985 7.2091 5.71071 8.99996 7.91985 8.99996Z" fill="#1F2937"/>
<path d="M16.4999 8.24996C18.1567 8.24996 19.4998 6.90681 19.4998 5.24996V4.09996C19.4999 2.71597 18.3838 1.59094 16.9998 1.57996H15.9999C14.6159 1.59094 13.4998 2.71597 13.4999 4.09996V5.24996C13.4999 6.90681 14.843 8.24996 16.4999 8.24996Z" fill="#1F2937"/>
<path d="M21.3898 12.42L21.2298 11.63C21.0407 10.5455 20.1007 9.75299 18.9998 9.74996H12.8998C12.1544 9.75154 11.4595 10.1272 11.0498 10.75H3.99984C3.29252 10.7505 2.6124 11.0225 2.09984 11.51C1.65948 11.9135 1.34958 12.4392 1.20984 13.02C1.20984 13.07 1.20984 13.12 1.20984 13.16V13.42L0.999844 14.22C0.785958 15.0952 0.97676 16.0202 1.51952 16.7394C2.06228 17.4585 2.89951 17.8956 3.79984 17.93H12.0798C12.2923 17.9292 12.5039 17.9024 12.7098 17.85H12.8398C12.9901 17.8071 13.1372 17.7537 13.2798 17.69L13.4398 17.6C13.5592 17.5326 13.6729 17.4557 13.7798 17.37L13.9398 17.24C14.0382 17.1483 14.1317 17.0515 14.2198 16.95C14.2198 16.9 14.3098 16.86 14.3498 16.8C14.4616 16.6531 14.5587 16.4957 14.6398 16.33C14.6825 16.2391 14.7192 16.1456 14.7498 16.05C14.7892 15.9589 14.8226 15.8653 14.8498 15.77C14.8498 15.67 14.8998 15.57 14.9198 15.47V15.32H19.1998C19.906 15.2991 20.5645 14.9589 20.9903 14.3951C21.416 13.8314 21.563 13.1049 21.3898 12.42Z" fill="#1F2937"/>
</svg>

            {loading ? "Submitting..." : "Get Involved"}
          </button>
        </motion.form>

        {message && <p className="text-sm text-white mt-2">{message}</p>}
      </motion.div>
    </div>
  );
}

export default Newsletter;
