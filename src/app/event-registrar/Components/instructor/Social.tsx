
export const Social = () => {
   const socials = [
  {
    name: "Twitter",
    link: "https://x.com/obikoya_adebayo",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
        <defs>
          <linearGradient id="gradTwitter" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#67B5DC" />
            <stop offset="85%" stopColor="#0FCA9F" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradTwitter)"
          d="m214.75 211.71l-62.6-98.38l61.77-67.95a8 8 0 0 0-11.84-10.76l-58.84 64.72l-40.49-63.63A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37l-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72l40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29M164.39 208L62.57 48h29l101.86 160Z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/obycodez/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="gradInstagram" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#67B5DC" />
            <stop offset="85%" stopColor="#0FCA9F" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradInstagram)"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
        />
      </svg>
    ),
  },
    {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adebayo-obikoya-557b0626a/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512">
        <defs>
          <linearGradient id="gradLinkedIn" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#67B5DC" />
            <stop offset="85%" stopColor="#0FCA9F" />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradLinkedIn)"
          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"
        />
      </svg>
    ),
  },
];

  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a key={social.name} href={social.link} className="text-[#67B5DC] p-2 rounded-md bg-white">
          {social.icon}
        </a>
      ))}
    </div>
  )
}
