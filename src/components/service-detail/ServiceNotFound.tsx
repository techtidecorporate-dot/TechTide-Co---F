import { useNavigate } from "react-router-dom";

export function ServiceNotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Service Not Found
        </h2>
        <button
          onClick={() => navigate("/services")}
          className="text-[#453abc] hover:underline"
        >
          Back to Services
        </button>
      </div>
    </div>
  );
}
