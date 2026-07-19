"use client";

import { ArrowLeft, ShieldCheck, UserCheck } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

function numberToWords(num: number) {
  if (num === 0) return "Zero Rupees Only";

  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function convert(n: number): string {
    if (n < 20) return ones[n];

    if (n < 100)
      return `${tens[Math.floor(n / 10)]} ${ones[n % 10]}`.trim();

    if (n < 1000)
      return `${ones[Math.floor(n / 100)]} Hundred ${convert(n % 100)}`.trim();

    if (n < 100000)
      return `${convert(Math.floor(n / 1000))} Thousand ${convert(
        n % 1000
      )}`.trim();

    if (n < 10000000)
      return `${convert(Math.floor(n / 100000))} Lakh ${convert(
        n % 100000
      )}`.trim();

    return `${convert(Math.floor(n / 10000000))} Crore ${convert(
      n % 10000000
    )}`.trim();
  }

  return `${convert(num)} Rupees Only`;
}

export default function SendMoneyPage() {
  const [amount, setAmount] = useState("");

  const amountInWords = useMemo(() => {
    if (!amount) return "";
    return numberToWords(Number(amount));
  }, [amount]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-gray-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={20} />
            Back
          </Link>

          <h1 className="text-xl font-bold text-blue-600">
            Send Money
          </h1>

          <div />
        </div>
      </header>

      <div className="flex justify-center px-4 py-12">
        <div className="w-full max-w-lg rounded-3xl border bg-white p-8 shadow-xl">
          {/* User */}
          <div className="flex flex-col items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white shadow-lg">
              S
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              Shreyansh Rai
            </h2>

            <p className="mt-1 text-gray-500">
              +91 9876543210
            </p>

            <div className="mt-3 flex items-center gap-2 rounded-full bg-green-100 px-4 py-1 text-green-700">
              <UserCheck size={16} />
              Verified User
            </div>
          </div>

          {/* Balance */}
          <div className="mt-8 rounded-2xl bg-blue-50 p-5">
            <p className="text-sm text-gray-500">
              Available Balance
            </p>

            <h3 className="mt-1 text-3xl font-bold text-blue-700">
              ₹12,540.00
            </h3>
          </div>

          {/* Amount */}
          <div className="mt-8">
            <label className="mb-2 block font-medium">
              Amount
            </label>

            <div className="flex items-center rounded-xl border bg-gray-50 px-4 focus-within:border-blue-600">
              <span className="text-2xl font-semibold text-gray-600">
                ₹
              </span>

              <input
                type="number"
                min={1}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="w-full bg-transparent px-3 py-4 text-3xl font-semibold outline-none"
              />
            </div>
          </div>

          {/* Amount in words */}
          {amount && (
            <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm text-gray-500">
                Amount in Words
              </p>

              <p className="mt-2 font-semibold text-blue-700">
                {amountInWords}
              </p>
            </div>
          )}

          {/* AI Fraud Alert */}
          <div className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-yellow-600" />

              <h3 className="font-semibold text-yellow-700">
                AI Fraud Analysis
              </h3>
            </div>

            <p className="mt-3 text-sm text-gray-600">
              This recipient is new. Please verify the phone
              number before sending money.
            </p>

            <div className="mt-3 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Risk Level: Low
            </div>
          </div>

          {/* Summary */}
          <div className="mt-8 rounded-2xl border bg-gray-50 p-5">
            <h3 className="mb-4 text-lg font-semibold">
              Payment Summary
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Recipient
                </span>

                <span className="font-medium">
                  Shreyansh Rai
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Amount
                </span>

                <span className="font-medium">
                  ₹{amount || "0"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Platform Fee
                </span>

                <span className="font-medium">
                  ₹0
                </span>
              </div>

              <hr />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>

                <span className="text-blue-600">
                  ₹{amount || "0"}
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Link
              href="/dashboard"
              className="flex-1 rounded-xl border py-3 text-center font-semibold transition hover:bg-gray-100"
            >
              Cancel
            </Link>

            <button
              disabled={!amount || Number(amount) <= 0}
              className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              Send Money
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}