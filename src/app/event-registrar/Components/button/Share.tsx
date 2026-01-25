"use client"

import { useToast } from "../../context/ToastContext";

export const ShareButton = () => {
  const { showToast } = useToast();

  const handleShare = async () => {
    const urlToCopy = "https://event-registrar.vercel.app/";
    
    try {
      await navigator.clipboard.writeText(urlToCopy);
      showToast("Link copied to clipboard!", "success");
    } catch (error) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = urlToCopy;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        document.execCommand("copy");
        showToast("Link copied to clipboard!", "success");
      } catch (fallbackError) {
        showToast("Failed to copy link", "error");
      }
      
      document.body.removeChild(textArea);
    }
  };

  return (
    <div 
      onClick={handleShare}
      className="border-[#4B5563] border-[2px] text-[#4B5563] font-bold py-2 md:px-4 px-10 cursor-pointer rounded-full flex items-center gap-1 hover:bg-[#4B5563] hover:text-white transition-colors duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 1 1 0-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 1 0 5.367-2.684a3 3 0 0 0-5.367 2.684m0 9.316a3 3 0 1 0 5.368 2.684a3 3 0 0 0-5.368-2.684"/>
      </svg>
      <span className=" text-[14px] md:text-[15px] ">Share</span>
    </div>
  )
}
