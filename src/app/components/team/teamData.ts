import NadirImg from '@/assets/team/nadir (1).png'
import ShaminImg from '@/assets/team/shamin.png'
import MoazzamImg from '@/assets/team/moazzam.png'
import SajideenImg from '@/assets/team/sajideen.png'
import AmmarImg from '@/assets/team/ammar.png'
import MubashirImg from '@/assets/team/mubashir.png'
import AhmedImg from '@/assets/team/bilal.png'
import HammadImg from '@/assets/team/hammad.png'
import SyedaImg from '@/assets/team/areesha.png'
import SairaImg from '@/assets/team/saira.png'
import AmnaImg from '@/assets/team/amna.png'
import MahmoodImg from '@/assets/team/mahmood.png'
import AliImg from '@/assets/team/ali.png'
import AyeshaImg from '@/assets/team/ayesha.png'

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "CEO" | "COO" | "CFO" | "CTO" | "Head" | "Senior" | "Junior" | "Intern";
  department: string;
  image: string;
  skills: string[];
}

export const teamData: TeamMember[] = [
  {
    id: "69625bc4fda2c2b0e6345e6e",
    name: "Muhammad Nadir",
    role: "Founder & CEO",
    category: "CEO",
    department: "",
    image: NadirImg,
    skills: [],
  },
  {
    id: "69625d04fda2c2b0e6345e74",
    name: "Shamin Gull",
    role: "COO",
    category: "COO",
    department: "",
    image: ShaminImg,
    skills: [],
  },
  {
    id: "69625d26fda2c2b0e6345e78",
    name: "Muhammad Moazzam",
    role: "CFO",
    category: "CFO",
    department: "",
    image: MoazzamImg,
    skills: [],
  },
  {
    id: "69625d46fda2c2b0e6345e7c",
    name: "Sajideen Hassan",
    role: "CTO",
    category: "CTO",
    department: "",
    image: SajideenImg,
    skills: [],
  },
  {
    id: "69625d97fda2c2b0e6345e80",
    name: "Muhammad Ammar Haider",
    role: "Head of Digital Marketing",
    category: "Head",
    department: "Marketing",
    image: AmmarImg,
    skills: ["Digital Marketing"],
  },
  {
    id: "69625deafda2c2b0e6345e84",
    name: "Mubashir Ahmad Hamza",
    role: "Development Head",
    category: "Head",
    department: "Development",
    image: MubashirImg,
    skills: [
      "MERN Stack",
      "Firebase",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
    ],
  },
  {
    id: "69625ed4fda2c2b0e6345e88",
    name: "Ahmed Bilal",
    role: "Senior Software Developer",
    category: "Senior",
    department: "Development",
    image: AhmedImg,
    skills: [
      "MERN Stack",
      "Firebase",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Node.js",
      "TypeScript",
    ],
  },
  {
    id: "69625f11fda2c2b0e6345e8c",
    name: "Hammad Ali",
    role: "Senior Front-end Developer",
    category: "Senior",
    department: "Development",
    image: HammadImg,
    skills: ["React", "Tailwind CSS", "JavaScript", "Node.js", "TypeScript"],
  },
  {
    id: "69625f4efda2c2b0e6345e90",
    name: "Syeda Aresha",
    role: "Business Developer",
    category: "Senior",
    department: "Marketing",
    image: SyedaImg,
    skills: ["Business Development"],
  },
  {
    id: "69625fa6fda2c2b0e6345e94",
    name: "Saira Shaheen",
    role: "Digital Content Creator",
    category: "Junior",
    department: "Marketing",
    image: SairaImg,
    skills: ["Social Media Ads"],
  },
  // {
  //   id: "69625fd6fda2c2b0e6345e98",
  //   name: "Mashhood Shafqat",
  //   role: "Front-end Developer",
  //   category: "Junior",
  //   department: "Development",
  //   image: MashhoodImg,
  //   skills: ["HTML", "CSS", "JavaScript"],
  // },
  {
    id: "69626011fda2c2b0e6345e9c",
    name: "Amna Durrani",
    role: "Business Developer",
    category: "Junior",
    department: "Marketing",
    image: AmnaImg,
    skills: ["Business Development"],
  },
  {
    id: "69626067fda2c2b0e6345ea0",
    name: "Muhammad Mahmood Ali",
    role: "Junior Website Designer",
    category: "Junior",
    department: "Design",
    image: MahmoodImg,
    skills: ["Figma", "Photoshop", "Illustrator", "Canva"],
  },
  {
    id: "6962609bfda2c2b0e6345ea4",
    name: "Ali Javed",
    role: "Junior Wordpress Developer",
    category: "Junior",
    department: "Development",
    image: AliImg,
    skills: ["Elementor", "WooCommerce"],
  },
  {
    id: "696260cefda2c2b0e6345ea8",
    name: "Ayesha Durrani",
    role: "Front-end Developer",
    category: "Intern",
    department: "Development",
    image: AyeshaImg,
    skills: ["HTML", "CSS", "JavaScript"],
  },
];
