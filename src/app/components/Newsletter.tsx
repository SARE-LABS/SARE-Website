"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useToast } from "../UI/ToastContext";

function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [email, setEmail] = useState("");
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
    <div className="px-4 md:px-6  md:pt-[48px] w-full overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto mb-16"
      >
        <div className="w-full rounded-[40px] py-12 px-6 md:px-12 flex flex-col items-center text-center bg-gradient-to-r from-[#67B5DC] via-[#2DD4BF] to-[#10B981] text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-[#E0F2FE] backdrop-blur-md rounded-full px-4 py-2 text-sm text-[#67B5DC] font-medium mb-8 flex items-center gap-2"
          >
            <span className="text-xs" aria-hidden>
              <svg
                width="7"
                height="6"
                viewBox="0 0 7 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.86667 2.47921L3.53333 0.14588C3.4065 0.0196462 3.22196 -0.0293361 3.04923 0.0173844C2.87649 0.0641048 2.7418 0.19943 2.69589 0.372384C2.64999 0.545339 2.69984 0.729646 2.82667 0.85588L4.30333 2.32921H0.5C0.223858 2.32921 0 2.55307 0 2.82921C0 3.10536 0.223858 3.32921 0.5 3.32921H4.30333L2.82667 4.80255C2.68385 4.94554 2.64116 5.16044 2.71848 5.34716C2.79579 5.53388 2.97791 5.6557 3.18 5.65588C3.31418 5.65389 3.44177 5.59732 3.53333 5.49921L5.86667 3.16588C6.06164 2.97067 6.06164 2.65443 5.86667 2.45921V2.47921Z"
                  fill="#67B5DC"
                />
              </svg>
            </span>
            SARE NEWSLETTER
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[32px] md:text-[48px] font-medium mb-10 leading-tight tracking-tight"
          >
            Be the First to know about updates from SARE
          </motion.h1>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-4 w-full max-w-2xl"
          >
            <div className="relative w-full">
              <span
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#1F2937]"
                aria-hidden
              >
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7371 5.66933C16.3109 2.24469 12.9692 0.0100374 9.25949 0.000128852C5.26129 -0.0209255 1.70619 2.54006 0.459875 6.3391C-0.786444 10.1381 0.56073 14.3074 3.79441 16.6588C7.0281 19.0103 11.4096 19.0068 14.6395 16.6501L17.5195 19.5301C17.8123 19.8226 18.2867 19.8226 18.5795 19.5301C18.8719 19.2373 18.8719 18.7629 18.5795 18.4701L15.7895 15.6801C18.3956 13.04 19.1633 9.09396 17.7371 5.66933ZM16.3999 12.1691C15.2024 15.0547 12.3838 16.9342 9.25949 16.9301V16.8901C5.0192 16.8847 1.57695 13.4603 1.54949 9.22013C1.54544 6.09586 3.42488 3.27717 6.31055 2.0797C9.19622 0.882226 12.5192 1.54208 14.7283 3.75127C16.9375 5.96046 17.5974 9.2834 16.3999 12.1691Z" fill="#1F2937"/>
</svg>

              </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type in your email"
                required
                className="w-full pl-14 pr-6 py-4 rounded-full bg-[#F1F5F9] text-[#9CA3AF] focus:outline-none shadow-sm"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="whitespace-nowrap w-full  bg-white text-[#1E293B] font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-md disabled:opacity-50"
            >
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.91985 8.99996H7.99985C10.209 8.99996 11.9998 7.2091 11.9998 4.99996V3.42996C11.9972 2.53269 11.6369 1.67352 10.9987 1.04282C10.3605 0.412115 9.49708 0.0619666 8.59985 0.0699581H7.27985C5.42645 0.0754496 3.92534 1.57656 3.91985 3.42996V4.99996C3.91985 7.2091 5.71071 8.99996 7.91985 8.99996Z"
                  fill="#1F2937"
                />
                <path
                  d="M16.4999 8.24996C18.1567 8.24996 19.4998 6.90681 19.4998 5.24996V4.09996C19.4999 2.71597 18.3838 1.59094 16.9998 1.57996H15.9999C14.6159 1.59094 13.4998 2.71597 13.4999 4.09996V5.24996C13.4999 6.90681 14.843 8.24996 16.4999 8.24996Z"
                  fill="#1F2937"
                />
                <path
                  d="M21.3898 12.42L21.2298 11.63C21.0407 10.5455 20.1007 9.75299 18.9998 9.74996H12.8998C12.1544 9.75154 11.4595 10.1272 11.0498 10.75H3.99984C3.29252 10.7505 2.6124 11.0225 2.09984 11.51C1.65948 11.9135 1.34958 12.4392 1.20984 13.02C1.20984 13.07 1.20984 13.12 1.20984 13.16V13.42L0.999844 14.22C0.785958 15.0952 0.97676 16.0202 1.51952 16.7394C2.06228 17.4585 2.89951 17.8956 3.79984 17.93H12.0798C12.2923 17.9292 12.5039 17.9024 12.7098 17.85H12.8398C12.9901 17.8071 13.1372 17.7537 13.2798 17.69L13.4398 17.6C13.5592 17.5326 13.6729 17.4557 13.7798 17.37L13.9398 17.24C14.0382 17.1483 14.1317 17.0515 14.2198 16.95C14.2198 16.9 14.3098 16.86 14.3498 16.8C14.4616 16.6531 14.5587 16.4957 14.6398 16.33C14.6825 16.2391 14.7192 16.1456 14.7498 16.05C14.7892 15.9589 14.8226 15.8653 14.8498 15.77C14.8498 15.67 14.8998 15.57 14.9198 15.47V15.32H19.1998C19.906 15.2991 20.5645 14.9589 20.9903 14.3951C21.416 13.8314 21.563 13.1049 21.3898 12.42Z"
                  fill="#1F2937"
                />
              </svg>

              {loading ? "Submitting..." : "Get Involved"}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}

export default Newsletter;
