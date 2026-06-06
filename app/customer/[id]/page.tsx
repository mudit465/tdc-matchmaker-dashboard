import { customers } from "@/data/customers";
import { profiles } from "@/data/profiles";
import { getMatches } from "@/lib/matching";
import Link from "next/link";
import SendMatchButton from "@/components/SendMatchButton";


export default async function CustomerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const customer = [...customers, ...profiles].find(
  (c) => c.id === Number(id)
);

  if (!customer) {
    return <div>Customer not found</div>;
  }

  const matches = getMatches(
    customer,
    profiles
  );

  return (
  <div className="min-h-screen p-8">

    <Link
      href="/dashboard"
      className="mb-4 inline-block rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
    >
      ← Back to Dashboard
    </Link>
      <h1 className="mb-6 text-3xl font-bold">
        Customer Profile
      </h1>

      <div className="space-y-8">

        {/* Personal Information */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-bold">
            Personal Information
          </h2>

          <p><strong>Name:</strong> {customer.firstName} {customer.lastName}</p>
          <p><strong>Gender:</strong> {customer.gender}</p>
          <p><strong>Age:</strong> {customer.age}</p>
          <p><strong>City:</strong> {customer.city}</p>
          <p><strong>Country:</strong> {customer.country}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          <p><strong>Height:</strong> {customer.height} cm</p>
        </div>

        {/* Professional Information */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-bold">
            Professional Information
          </h2>

          <p><strong>College:</strong> {customer.college}</p>
          <p><strong>Degree:</strong> {customer.degree}</p>
          <p><strong>Company:</strong> {customer.company}</p>
          <p><strong>Designation:</strong> {customer.designation}</p>

          <p>
            <strong>Income:</strong> ₹
            {customer.income.toLocaleString()}
          </p>
        </div>

        {/* Family Information */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-bold">
            Family Information
          </h2>

          <p><strong>Religion:</strong> {customer.religion}</p>
          <p><strong>Caste:</strong> {customer.caste}</p>
          <p><strong>Siblings:</strong> {customer.siblings}</p>

          <p>
            <strong>Languages:</strong>{" "}
            {customer.languages.join(", ")}
          </p>
        </div>

        {/* Preferences */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-bold">
            Preferences
          </h2>

          <p><strong>Want Kids:</strong> {customer.wantKids}</p>

          <p>
            <strong>Open To Relocate:</strong>{" "}
            {customer.openToRelocate}
          </p>

          <p>
            <strong>Open To Pets:</strong>{" "}
            {customer.openToPets}
          </p>

          <p>
            <strong>Marital Status:</strong>{" "}
            {customer.maritalStatus}
          </p>
        </div>

        {/* Matchmaker Notes */}
<div className="rounded-lg border p-6">
  <h2 className="mb-4 text-xl font-bold">
    Matchmaker Notes
  </h2>

  <textarea
    placeholder="Add notes from calls or meetings..."
    className="w-full rounded border p-3"
    rows={5}
  />
</div>

        {/* Suggested Matches */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-bold">
            Suggested Matches
          </h2>

          {matches.length === 0 ? (
            <p>No matches found.</p>
          ) : (
            matches.map((match) => (
              <div
  key={match.id}
  className="mb-3 rounded border p-3"
>
  <p>
    <strong>
      {match.firstName} {match.lastName}
    </strong>
  </p>

<p className="font-semibold text-green-600">
  Match Score: {match.matchScore ?? 90}%
</p>

<p className="mt-2 text-sm text-gray-600">
  ✓ Same kids preference
</p>

<p className="text-sm text-gray-600">
  ✓ Compatible age range
</p>

<p className="text-sm text-gray-600">
  ✓ Similar relocation preference
</p>

<p className="mt-2">
  Age: {match.age}
</p>

<p>
  City: {match.city}
</p>

<p>
  Income: ₹
  {match.income.toLocaleString()}
</p>

<SendMatchButton />
</div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}