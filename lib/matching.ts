import { Customer } from "@/types/customer";

export function getMatches(
  customer: Customer,
  profiles: Customer[]
) {
  return profiles
    .filter((profile) => {
      if (customer.gender === "Male") {
        return (
          profile.gender === "Female" &&
          profile.age < customer.age &&
          profile.wantKids === customer.wantKids
        );
      }

      return (
        profile.gender === "Male" &&
        profile.openToRelocate ===
          customer.openToRelocate
      );
    })
    .map((profile) => ({
      ...profile,
      matchScore: 80 + (profile.id % 20),
    }))
    .slice(0, 10);
}