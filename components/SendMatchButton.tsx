"use client";

import { useState } from "react";

export default function SendMatchButton() {
  const [sent, setSent] = useState(false);

  return (
    <button
      onClick={() => setSent(true)}
      className={`mt-2 rounded px-3 py-2 text-white ${
        sent ? "bg-green-600" : "bg-blue-600"
      }`}
    >
      {sent ? "✓ Match Sent" : "Send Match"}
    </button>
  );
}