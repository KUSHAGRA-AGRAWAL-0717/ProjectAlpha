import outrankpilotImg from "@/assets/project-outrankpilot.jpg";
import autopitchImg from "@/assets/project-autopitch.jpg";
import eldermateImg from "@/assets/project-eldermate.jpg";
import mailmasterImg from "@/assets/project-mailmaster.jpg";
import defiImg from "@/assets/project-defi.jpg";
import weatherImg from "@/assets/project-weather.jpg";
import schedulifyImg from "@/assets/project-schedulify.jpg";
import mvpcxImg from "@/assets/project-mvpcx.jpg";
import tomatoImg from "@/assets/project-tomato.jpg";
import faceImg from "@/assets/project-face.jpg";
import schedulify from "@/assets/schedulify.png";
export type Project = {
  title: string;
  category: string;
  tag: string;
  year: string;
  description: string;
  tech: string[];
  impact: string;
  image: string;
  video?: string;
  github?: string;
  link?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "OutrankPilot",
    category: "SaaS",
    tag: "AI SEO Automation",
    year: "2026",
    description:
      "AI-powered SEO content automation platform that helps businesses research keywords, generate optimized content, and automatically publish articles.",
    tech: ["Vite", "TypeScript", "Supabase", "Redis", "LLMs"],
    impact:
      "Processes 500+ queries per day, reduced content production time by 70%",
    image: outrankpilotImg,
    video:
      "https://drive.google.com/file/d/1JD1yWL4VUuyVV1GSMjsSwgsIHDCcWNnO/preview",
    github: "https://github.com/KUSHAGRA-AGRAWAL-0717/outrankPilot",
    link: "https://outrankpilot.com",
    featured: true,
  },
  {
    title: "MP3 Converter Microservices Platform",
    category: "Backend",
    tag: "Event-Driven System",
    year: "2026",
    description:
      "Production-style event-driven microservices platform converting video files to MP3 using an asynchronous pipeline. Features JWT auth, API Gateway routing, and MongoDB GridFS file handling.",
    tech: ["Python", "FastAPI", "RabbitMQ", "Docker", "Kubernetes", "MongoDB", "NGINX"],
    impact:
      "End-to-end scalable workflow supporting upload → convert → notify → download",
    image: mvpcxImg, // Placeholder, can be swapped with a real screenshot
    github: "https://github.com/KUSHAGRA-AGRAWAL-0717/kubernetes-rabbitMq",
    featured: true,
  },
  {
    title: "Production-Grade Scalable Backend System",
    category: "Backend",
    tag: "Microservices",
    year: "2026",
    description:
      "Architected a microservices-based backend platform simulating a ride management system with independent User, Captain, and Ride services.",
    tech: ["Node.js", "Express", "MongoDB", "RabbitMQ", "Docker", "NGINX"],
    impact:
      "Event-driven architecture with centralized API Gateway and long-polling for real-time status",
    image: defiImg, // Placeholder
    github: "https://github.com/KUSHAGRA-AGRAWAL-0717/microservices",
    featured: true,
  },
  {
    title: "AutoPitch",
    category: "AI",
    tag: "Cold Email AI",
    year: "2024",
    description:
      "AI system that automatically generates personalized cold emails for job applications and business outreach using vector-based personalization.",
    tech: ["LangChain", "LLaMA-3", "Vector Database", "Python"],
    impact:
      "Reduced manual research time by 80%, improved matching accuracy to 90%",
    image: autopitchImg,
    video:
      "https://drive.google.com/file/d/1FvCzYOnBLPV8ftF8MTOQI4g_T2a_oFie/preview",
    github: "https://github.com/KUSHAGRA-AGRAWAL-0717/AutoPitch",
    featured: true,
  },
  {
    title: "ElderMate",
    category: "SaaS",
    tag: "AI Healthcare",
    year: "2025",
    description:
      "Multi-agent AI elderly care system — a smart companion app for seniors with health monitoring, fall detection, reminders, and social engagement.",
    tech: ["React", "TypeScript", "Node.js", "FastAPI", "Supabase"],
    impact: "AI orchestrates personalized care for seniors living alone",
    image: eldermateImg,
    video:
      "https://drive.google.com/file/d/1XqxJ8HNcYjBs7XMbeRo_5oeI0zfbRIky/preview",
    link: "https://eldermate.netlify.app",
    featured: true,
  },
  {
    title: "Mail Master",
    category: "Web App",
    tag: "Productivity",
    year: "2024",
    description:
      "Intelligent multi-account Gmail management platform for professionals managing multiple email accounts.",
    tech: ["MERN", "Gmail API", "Gemini AI"],
    impact: "Reduced account switching time by 30%",
    image: mailmasterImg,
    video:
      "https://drive.google.com/file/d/1WzV2CpvYKz19sm-b69HtTQ7dn4cUksXa/preview",
    github: "https://github.com/KUSHAGRA-AGRAWAL-0717/mailMaster",
  },
  {
    title: "CryptoScribe",
    category: "AI",
    tag: "DeFi Telegram Bot",
    year: "2025",
    description:
      "LLM-powered Telegram bot for DeFi content, alerts, news summaries with Web3/real-time data. Automates crypto insights delivery.",
    tech: ["Python", "LangChain", "Web3", "Telegram API"],
    impact: "Automates crypto news for traders",
    image: defiImg,
    video:
      "https://drive.google.com/file/d/1BQMKHSLhI7MXZolnB98RSWB8nRokM_Yl/preview",
  },
  {
    title: "Schedulify",
    category: "AI",
    tag: "Adaptive AI Scheduler",
    year: "2025",
    description:
      "AI app generating personalized, adaptive schedules based on needs/preferences. Demonstrates LLM planning and dynamic UI.",
    tech: ["React", "LLMs", "TypeScript"],
    impact: "Builds custom daily schedules using AI",
    image: schedulify,
  },
  {
    title: "MVPCX",
    category: "Web App",
    tag: "B2B Survey Platform",
    year: "2025",
    description:
      "Frontend MVP for CX/EX surveys: chat/classic formats, NPS/CSAT builders, analytics dashboard, AI insights.",
    tech: ["React", "TypeScript", "Tailwind", "AI"],
    impact: "Enterprise SaaS UI, mobile-responsive",
    image: mvpcxImg,
  },
  {
    title: "Weather App",
    category: "Web App",
    tag: "Weather API",
    year: "2024",
    description:
      "Live weather for any city: current temps, 5-day forecasts, wind, humidity, air quality, sunrise/sunset in a clean design.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    impact: "Real-time data with responsive UI",
    image: weatherImg,
    link: "https://weatherapplicatis.netlify.app/",
  },
  {
    title: "Tomato Disease Classifier",
    category: "AI",
    tag: "ML Agriculture",
    year: "2025",
    description:
      "ML system that detects tomato plant diseases from leaf images. Trained on 20K+ images supporting 10+ diseases.",
    tech: ["TensorFlow", "CNN", "FastAPI"],
    impact: "96.88% accuracy",
    image: tomatoImg,
    github: "https://github.com/KUSHAGRA-AGRAWAL-0717/Tomato-disease-detector",
  },
  {
    title: "Face Recognition System",
    category: "AI",
    tag: "Computer Vision",
    year: "2025",
    description:
      "Real-time face recognition and liveness detection system for identity verification with spoof detection.",
    tech: ["OpenCV", "Python", "ML"],
    impact: "15% increase in security precision",
    image: faceImg,
    github: "https://github.com/KUSHAGRA-AGRAWAL-0717/Face_recognition_system",
  },
];

export const CATEGORIES = ["All", "SaaS", "AI", "Web App", "Backend"];
