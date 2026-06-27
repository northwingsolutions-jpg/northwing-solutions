import {
  Laptop,
  Building2,
  Search,
  BriefcaseBusiness,
  Users,
  UserCheck,
} from "lucide-react";

const services = [
  {
    id: "it-recruitment",
    icon: Laptop,
    title: "IT Recruitment",
    shortDescription:
      "Helping organizations hire software developers, cloud engineers and AI professionals.",
    description:
      "NorthWing Solutions specializes in sourcing highly skilled IT professionals including Software Developers, Cloud Engineers, DevOps Engineers, Cybersecurity Specialists, AI Engineers, Data Engineers, QA Engineers and IT Support experts. We help organizations reduce hiring time while ensuring quality talent acquisition.",
    features: [
      "Software Development",
      "Cloud & DevOps",
      "Cyber Security",
      "Artificial Intelligence",
      "Data Engineering",
      "IT Infrastructure",
    ],
  },

  {
    id: "engineering",
    icon: Building2,
    title: "Engineering Recruitment",
    shortDescription:
      "Specialized hiring for manufacturing, construction and industrial organizations.",
    description:
      "We recruit Mechanical, Civil, Electrical, Electronics, Production and Industrial Engineering professionals across multiple sectors.",
    features: [
      "Mechanical",
      "Electrical",
      "Civil",
      "Automotive",
      "Manufacturing",
      "Industrial",
    ],
  },

  {
    id: "executive-search",
    icon: Search,
    title: "Executive Search",
    shortDescription:
      "Leadership hiring for senior management and executive positions.",
    description:
      "We identify experienced leaders and senior executives capable of driving business transformation.",
    features: [
      "CXO Hiring",
      "Leadership",
      "Director Hiring",
      "VP Hiring",
    ],
  },

  {
    id: "permanent-staffing",
    icon: BriefcaseBusiness,
    title: "Permanent Staffing",
    shortDescription:
      "Long-term hiring solutions aligned with your business goals.",
    description:
      "Permanent staffing solutions designed to build high-performing teams.",
    features: [
      "Permanent Hiring",
      "Culture Fit",
      "Skill Assessment",
    ],
  },

  {
    id: "contract-staffing",
    icon: Users,
    title: "Contract Staffing",
    shortDescription:
      "Flexible workforce solutions for project-based hiring.",
    description:
      "Hire skilled professionals for short-term projects or seasonal demand.",
    features: [
      "Contract Hiring",
      "Temporary Staffing",
      "Project Hiring",
    ],
  },

  {
    id: "rpo",
    icon: UserCheck,
    title: "Recruitment Process Outsourcing",
    shortDescription:
      "Complete recruitment lifecycle management.",
    description:
      "End-to-end recruitment services from sourcing to onboarding.",
    features: [
      "Sourcing",
      "Screening",
      "Interview Coordination",
      "Offer Management",
    ],
  },
];

export default services;