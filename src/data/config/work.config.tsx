import { ExternalLink, Link } from "lucide-react";

export const WORK = [
  {
    title: "AI4M Technology Pvt. Ltd.",
    image: "/ai4m_logo.png",
    location: "Pune, India",
    links: [
      {
        title: "Website",
        href: "https://ai4mtech.com/",
        icon: <Link className="size-3" />,
      },
    ],
    roles: [
      {
        role: "Full Stack Developer",
        dates: "May, 2025 - Present",
        description: [
          {
            text: "Built and maintained production-ready dashboards for B2B clients using Next.js and PostgreSQL.",
          },
          {
            text: "Set up scalable authentication with Clerk and optimized secure login flows.",
          },
          {
            text: "Improved performance across 2 apps with dynamic routing and server-side rendering.",
          },
          {
            text: "Led QA testing efforts and implemented performance monitoring with Sentry and Vercel.",
          },
        ],
      },
      {
        role: "Full Stack Trainee",
        dates: "Oct 2024 - May 2025",
        description: [
          {
            text: "Worked on both frontend and backend tasks, gaining experience in full-stack development.",
          },
          {
            text: "Assisted in the development of new features and bug fixes.",
          },
          {
            text: "Participated in code reviews and team meetings.",
          },
          {
            text: "Learned about the company's codebase and development processes.",
          },
        ],
      },
      {
        role: "Frontend Intern",
        dates: "June 2024 - Oct 2024",
        description: [
          {
            text: "Assisted in the development of the company's website and web applications.",
          },
          {
            text: "Worked with React and Next.js to create user-friendly interfaces.",
          },
          {
            text: "Collaborated with the design team to implement new features.",
          },
          {
            text: "Gained experience with version control systems like Git.",
          },
        ],
      },
    ],
  },
  {
    title: "BayzCrypt",
    role: "Frontend Lead",
    dates: "Jan, 2024 - June, 2024",
    location: "Remote",
    description: [
      {
        text: "Built and launched the MVP with a fully custom UI and reusable design system.",
      },
      {
        text: "Integrated Web3 wallet functionality using ethers.js, improving user onboarding.",
      },
      {
        text: "Reduced page load time by 40% using code splitting and image optimization.",
      },
      {
        text: "Managed team planning, code reviews, and coordination with smart contract developers.",
      },
    ],
    image: "/BayzCrypt_logo.jpg",
    links: [
      {
        title: "Website",
        href: "https://bayzcrypt-black.vercel.app/",
        icon: <Link className="size-3" />,
      },
    ],
  },
];
