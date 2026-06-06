"use client";

import { useState } from "react";
import { customers } from "@/data/customers";
import { profiles } from "@/data/profiles";
import Link from "next/link";

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const allCustomers = [...customers, ...profiles];

  const filteredCustomers = allCustomers.filter((customer) => {
    const matchesSearch = `${customer.firstName} ${customer.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGender =
      genderFilter === "" ||
      customer.gender === genderFilter;

    const matchesCity =
      cityFilter === "" ||
      customer.city === cityFilter;

    return (
      matchesSearch &&
      matchesGender &&
      matchesCity
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Matchmaker Dashboard
      </h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full rounded-lg border p-3"
      />

      <div className="mb-6 flex gap-4">
        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
          className="rounded-lg border p-3"
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
          className="rounded-lg border p-3"
        >
          <option value="">All Cities</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
          <option value="Chennai">Chennai</option>
        </select>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-blue-500 p-6 text-white shadow">
          <h2 className="text-lg font-semibold">
            Total Customers
          </h2>
          <p className="text-3xl font-bold">
            {allCustomers.length}
          </p>
        </div>

        <div className="rounded-xl bg-green-500 p-6 text-white shadow">
          <h2 className="text-lg font-semibold">
            Verified Profiles
          </h2>
          <p className="text-3xl font-bold">
            {allCustomers.length}
          </p>
        </div>

        <div className="rounded-xl bg-purple-500 p-6 text-white shadow">
          <h2 className="text-lg font-semibold">
            Active Matches
          </h2>
          <p className="text-3xl font-bold">
            10
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Age</th>
              <th className="p-3 text-left">City</th>
              <th className="p-3 text-left">
                Marital Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-t hover:bg-gray-50"
              >
                <td className="p-3">
                  <Link
                    href={`/customer/${customer.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {customer.firstName}{" "}
                    {customer.lastName}
                  </Link>
                </td>

                <td className="p-3">
                  {customer.age}
                </td>

                <td className="p-3">
                  {customer.city}
                </td>

                <td className="p-3">
                  {customer.maritalStatus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}