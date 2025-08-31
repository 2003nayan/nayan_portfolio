import { Icons } from "@/components/icons";

export const PROJECTS = [
  {
    title: "Creator's Brain",
    href: "https://creatorsbrain.vercel.app/",
    dates: "Apr 2025",
    featured: true,
    description:
      "CreatorsBrain is a SaaS platform built with Next.js that empowers YouTube creators with AI-powered tools to enhance their video content and workflow. This application leverages various AI models and services to provide features like video analysis and title generation.",
    technologies: [
      "Next.js",
      "Clerk",
      "Convex DB",
      "Stripe",
      "YouTube API",
      "Claude 3.7",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/2003nayan/creatorsbrain",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Website",
        href: "https://creatorsbrain.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/creatorsbrain.png",
    video: "",
  },
  {
    title: "Collaborix",
    href: "https://www.collaborix.space/",
    dates: "Feb 2025",
    featured: true,
    description:
      "Collaborix is a real-time collaborative document editing application built with Next.js, Liveblocks, and Firebase. It provides a seamless and interactive user experience for creating and editing documents with others.",
    technologies: [
      "Next.js",
      "Clerk",
      "Cloudflare Workers",
      "Firestore",
      "LiveBlocks",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/2003nayan/Collaborix",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Website",
        href: "https://www.collaborix.space/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/collaborix-2.png",
    video: "",
  },
  {
    title: "MotionUI",
    href: "https://motion-ui-eight.vercel.app/",
    dates: "Jan 2025",
    featured: false,
    active: false,
    description:
      "MotionUI is a project that provides a collection of beautifully designed, animated, and accessible UI components built with Next.js, Tailwind CSS, and Framer Motion. It's designed to help developers quickly and easily build modern and visually appealing user interfaces.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "RazorPay Integration",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/2003nayan/MotionUI",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Website",
        href: "https://motion-ui-eight.vercel.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/motionui.png",
    video: "",
  },
];
