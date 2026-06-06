import { faker } from "@faker-js/faker";
import { Customer } from "@/types/customer";
faker.seed(123);

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Pune",
  "Chennai",
];

const religions = ["Hindu", "Muslim", "Sikh", "Christian"];

const castes = ["Brahmin", "Rajput", "Kayastha", "Bania"];

export const profiles: Customer[] = Array.from(
  { length: 100 },
  (_, index) => ({
    id: index + 100,

    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),

    gender: index % 2 === 0 ? "Male" : "Female",

    age: faker.number.int({ min: 22, max: 35 }),

    city: faker.helpers.arrayElement(cities),
    country: "India",

    email: faker.internet.email(),
    phone: faker.string.numeric(10),

    height: faker.number.int({ min: 150, max: 190 }),

    income: faker.number.int({
      min: 400000,
      max: 3000000,
    }),

    college: faker.company.name(),
    degree: faker.helpers.arrayElement([
      "B.Tech",
      "MBA",
      "M.Tech",
      "B.Com",
    ]),

    company: faker.company.name(),

    designation: faker.person.jobTitle(),

    maritalStatus: "Single",

    religion: faker.helpers.arrayElement(religions),

    caste: faker.helpers.arrayElement(castes),

    languages: ["English", "Hindi"],

    siblings: faker.number.int({
      min: 0,
      max: 3,
    }),

    wantKids: faker.helpers.arrayElement([
      "Yes",
      "No",
      "Maybe",
    ]),

    openToRelocate: faker.helpers.arrayElement([
      "Yes",
      "No",
      "Maybe",
    ]),

    openToPets: faker.helpers.arrayElement([
      "Yes",
      "No",
      "Maybe",
    ]),
  })
);