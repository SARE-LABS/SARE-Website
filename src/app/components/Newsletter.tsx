"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import HighlightHead from "../UI/props/HighlightHead";

function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
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

      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (err: any) {
      setMessage(` ${err.message}`);
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
          className="text-[36px] text-white leading-[120%] font-medium w-[334px] md:w-[80%]"
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
            className="md:w-[60%] w-full cursor-pointer border border-border text-[14px] bg-primary-blue hover:bg-primary-blue-hover transition-all ease-in-out duration-300 text-white py-[12px] px-[16px] rounded-full mr-[1px] disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Get Involved"}
          </button>
        </motion.form>

        {message && <p className="text-sm text-white mt-2">{message}</p>}
      </motion.div>
    </div>
  );
}

export default Newsletter;
