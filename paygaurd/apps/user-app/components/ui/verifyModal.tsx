"use client";

type VerifyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
  loading?: boolean;
  riskResult: {
    riskLevel: string;
    totalScore: number;
    triggeredRules: number;
    reasons: string[];
  } | null;
};

export default function VerifyModal({
  isOpen,
  onClose,
  onProceed,
  loading,
  riskResult,
}: VerifyModalProps) {
  if (!isOpen || !riskResult) return null;

  const riskColor =
    riskResult.riskLevel === "CRITICAL"
      ? "bg-red-100 text-red-700"
      : riskResult.riskLevel === "HIGH"
        ? "bg-orange-100 text-orange-700"
        : riskResult.riskLevel === "MEDIUM"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-green-100 text-green-700";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <h2 className="mb-4 text-2xl font-bold">AI Fraud Analysis</h2>

        <div
          className={`mb-4 inline-flex rounded-full px-3 py-1 text-sm font-medium ${riskColor}`}
        >
          Risk Level: {riskResult.riskLevel}
        </div>

        <div className="space-y-2">
          <p>
            <strong>Risk Score:</strong> {riskResult.totalScore}
          </p>

          <p>
            <strong>Triggered Rules:</strong> {riskResult.triggeredRules}
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">Reasons</h3>

          <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
            {riskResult.reasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex gap-3">
          <button onClick={onClose} className="flex-1 rounded-lg border py-2">
            Cancel
          </button>

          <button
            disabled={loading || riskResult.riskLevel === "CRITICAL"}
            onClick={onProceed}
            className="flex-1 rounded-lg bg-blue-600 py-2 text-white disabled:bg-gray-400"
          >
            {loading ? "Processing..." : "Proceed"}
          </button>
        </div>
      </div>
    </div>
  );
}
