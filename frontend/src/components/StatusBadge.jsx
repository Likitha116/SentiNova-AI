export default function StatusBadge({ status }) {
  const styles = {
    Healthy: "bg-green-100 text-green-700 border-green-200",
    Warning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Critical: "bg-red-100 text-red-700 border-red-200",
  };

  const badgeStyle = styles[status] || "bg-gray-100 text-gray-700 border-gray-200";

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${badgeStyle}`}>
      {status}
    </span>
  );
}