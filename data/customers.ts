import { Customer } from "@/types/customer";

export const customers: Customer[] = [
  {
    id: 1,
    firstName: "Rahul",
    lastName: "Sharma",
    gender: "Male",

    age: 28,
    city: "Mumbai",
    country: "India",

    email: "rahul@example.com",
    phone: "9876543210",

    height: 175,
    income: 1200000,

    college: "IIT Bombay",
    degree: "B.Tech",

    company: "Google",
    designation: "Software Engineer",

    maritalStatus: "Single",

    religion: "Hindu",
    caste: "Brahmin",

    languages: ["Hindi", "English"],

    siblings: 1,

    wantKids: "Yes",
    openToRelocate: "Yes",
    openToPets: "Maybe",
  },

  {
    id: 2,
    firstName: "Priya",
    lastName: "Verma",
    gender: "Female",

    age: 25,
    city: "Delhi",
    country: "India",

    email: "priya@example.com",
    phone: "9876543211",

    height: 165,
    income: 800000,

    college: "Delhi University",
    degree: "MBA",

    company: "Amazon",
    designation: "Product Manager",

    maritalStatus: "Single",

    religion: "Hindu",
    caste: "Kayastha",

    languages: ["Hindi", "English"],

    siblings: 2,

    wantKids: "Yes",
    openToRelocate: "Yes",
    openToPets: "Yes",
  },

  {
    id: 3,
    firstName: "Ankit",
    lastName: "Gupta",
    gender: "Male",

    age: 30,
    city: "Bangalore",
    country: "India",

    email: "ankit@example.com",
    phone: "9876543212",

    height: 178,
    income: 1500000,

    college: "NIT Trichy",
    degree: "B.Tech",

    company: "Microsoft",
    designation: "Senior Developer",

    maritalStatus: "Single",

    religion: "Hindu",
    caste: "Bania",

    languages: ["Hindi", "English"],

    siblings: 1,

    wantKids: "Maybe",
    openToRelocate: "No",
    openToPets: "Maybe",
  },
];