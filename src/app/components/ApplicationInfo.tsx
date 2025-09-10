"use client";

import Image from "next/image";
import { useState } from "react";
import { ALeft, ARIght, Plus } from "../../../public/images/images";

function ApplicationInfo() {
  const steps = [
    { key: "personal", label: "Personal Information" },
    { key: "skill", label: "Skills & Interests" },
    { key: "teamwork", label: "Teamwork & Collaboration" },
  ];

  const [activeStep, setActiveStep] = useState("personal");

  // form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    department: "",
    skills: "",
    response: "",
    currentSkills: "",
    teamworkExperience: "",
    teamworkContribution: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const goNext = () => {
    const currentIndex = steps.findIndex((s) => s.key === activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1].key);
    }
  };

  const goPrevious = () => {
    const currentIndex = steps.findIndex((s) => s.key === activeStep);
    if (currentIndex > 0) {
      setActiveStep(steps[currentIndex - 1].key);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setMessage(null);

      const res = await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Submission failed");

      setMessage("✅ Submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        whatsapp: "",
        department: "",
        skills: "",
        response: "",
        currentSkills: "",
        teamworkExperience: "",
        teamworkContribution: "",
      });
      setActiveStep("personal");
    } catch (error: any) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full  h-[50%] flex items-center justify-center black/40 z-[100] md:top-[30%] shadow-sm">
      <div className="w-[80%] md:w-[50%] h-[80%] md:h-[500px] max-w-g bg-background-disabled rounded-[16px] text-center shadow-lg flex flex-col">
        {/* Header */}
        <div className="bg-background-card p-4 md:px-[48px]  rounded-t-[16px] flex flex-col items-center justify-center gap-2">
          <div className="w-full flex items-center justify-between mb-1.5">
            <p className="font-medium md:text-[30px]">Become a Part of Something Bigger</p>
            {/* <Image
              src={Plus}
              width={25}
              height={25}
              alt="close"
              className="p-1 cursor-pointer rotate-45 bg-red-300 rounded-full flex items-center justify-center"
            /> */}
          </div>

          <div className="overflow-x-auto no-scrollbar flex items-center justify-start w-full gap-2">
            {steps.map((step) => (
              <button
                key={step.key}
                onClick={() => setActiveStep(step.key)}
                className={`flex-shrink-0 cursor-pointer px-4 py-2 text-[14px] rounded-[300px] whitespace-nowrap transition-all
                  ${
                    activeStep === step.key
                      ? "bg-highlight text-primary-blue"
                      : "bg-background-disabled text-text-secondary"
                  }`}
              >
                {step.label}
              </button>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-4 py-3 md:py-[24px] text-left no-scrollbar md:px-[96px]">
          {activeStep === "personal" && (
            <form className="flex flex-col gap-2">
              <span className="flex flex-col">
                <small className="text-[16px] text-text-primary">
                  {" "}
                  Full name{" "}
                </small>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-[16px] md:rounded-[16px] border md:p-[20px] border-border p-2 bg-white outline-none text-[14px]"
                />
              </span>
              <span className="flex flex-col">
                <small className="text-[16px] text-text-primary"> Email </small>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-[16px] border md:p-[20px] border-border p-2 bg-white outline-none text-[14px]"
                />
              </span>
              <span className="flex flex-col">
                <small className="text-[16px] text-text-primary">
                  WhatsApp Number
                </small>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full rounded-[16px] border md:p-[20px] border-border p-2 bg-white outline-none text-[14px]"
                />
              </span>
              <span className="flex flex-col">
                <small className="text-[16px] text-text-primary">
                  Department
                </small>
                <input
                  type="text"
                  name="department"
                  required
                  placeholder="Department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full rounded-[16px] border md:p-[20px] border-border p-2 bg-white outline-none text-[14px]"
                />
              </span>
            </form>
          )}

          {activeStep === "skill" && (
            <form className="flex flex-col gap-2">
              <span className="flex flex-col">
                <small className="text-[16px] text-text-primary">
                  Do you have any skills currently? Yes / No
                </small>
                <input
                  type="text"
                  name="currentSkills"
                  required
                  placeholder="Do you have any skills currently? Yes / No"
                  value={formData.currentSkills}
                  onChange={handleChange}
                  className="w-full rounded-[16px] border md:p-[20px] border-border p-2 bg-white outline-none text-[14px]"
                />
              </span>
              <span className="flex flex-col">
                <small className="text-[16px] text-text-primary">
                  If yes, please specify
                </small>
                <input
                  type="text"
                  name="response"
                  required
                  placeholder="If yes..."
                  value={formData.response}
                  onChange={handleChange}
                  className="w-full rounded-[16px] border md:p-[20px] border-border p-2 bg-white outline-none text-[14px]"
                />
              </span>
              <span className="flex flex-col">
                <small className="text-[16px] text-text-primary">
                  What skill(s) do you have? (e.g., coding, design, marketing)
                </small>
                <input
                  type="text"
                  name="skills"
                  required
                  placeholder="Skill 1, Skill 2"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full rounded-[16px] border md:p-[20px] border-border p-2 bg-white outline-none text-[14px]"
                />
              </span>
            </form>
          )}

          {activeStep === "teamwork" && (
            <form className="flex flex-col gap-2">
              <span className="flex flex-col">
                <small className="text-[16px] text-text-primary">
                  Tell us about a time you collaborated in a team
                </small>
                <textarea
                  rows={3}
                  required
                  name="teamworkExperience"
                  placeholder="Tell us about a time you collaborated in a team"
                  value={formData.teamworkExperience}
                  onChange={handleChange}
                  className="resize-none w-full rounded-[16px] border md:p-[20px] border-border p-2 bg-white outline-none text-[14px]"
                />
              </span>
              <span className="flex flex-col">
                <small className="text-[16px] text-text-primary">
                  How do you usually contribute to teamwork?
                </small>
                <textarea
                  rows={3}
                  required
                  name="teamworkContribution"
                  placeholder="How do you usually contribute to teamwork?"
                  value={formData.teamworkContribution}
                  onChange={handleChange}
                  className="resize-none w-full rounded-[16px] border md:p-[20px] border-border p-2 bg-white outline-none text-[14px]"
                />
              </span>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="bg-background-card p-4 mt-4 rounded-b-[16px] flex items-center justify-between">
          <button
            onClick={goPrevious}
            disabled={activeStep === "personal"}
            className="cursor-pointer flex items-center gap-1.5 px-4 py-2 rounded-full bg-background-disabled text-text-secondary disabled:opacity-50"
          >
            <Image src={ALeft} width={15} height={15} alt="prev" />
            <small>Previous</small>
          </button>

          {activeStep === "teamwork" ? (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="cursor-pointer flex items-center gap-1.5 px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-all disabled:opacity-50"
            >
              <small>{loading ? "Submitting..." : "Submit"}</small>
            </button>
          ) : (
            <button
              onClick={goNext}
              className="cursor-pointer flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-blue text-white hover:bg-primary-blue-hover transition-all"
            >
              <small>Next</small>
              <Image src={ARIght} width={15} height={15} alt="next" />
            </button>
          )}
        </div>

        {/* {message && (
          <div className="p-2 text-sm text-center">
            <p>{message}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default ApplicationInfo;
