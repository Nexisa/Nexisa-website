import axios from "../../api/axios";
import { useEffect, useState } from "react";

const SalarySlip = () => {
  const [salarySlips, setSalarySlips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSalarySlips = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get("/employee/salary-slips", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);
        console.log("Response data:", response.data);

        if (!response.data.success) {
          throw new Error(response.data.message || "Unknown error occurred");
        }

        setSalarySlips(response.data.salarySlips);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(
          error.response?.data?.message ||
            error.message ||
            "An error occurred while fetching data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSalarySlips();
  }, []);

  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-4 text-[#2C4964]">
        Salary Slip
      </h2>
      <div className="bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8"></div>
      {loading ? (
        <div className="flex justify-center items-center mt-52 text-4xl">
          Loading...
        </div>
      ) : error ? (
        <div className="flex justify-center items-center mt-52 text-4xl">
          {error}
        </div>
      ) : salarySlips.length !== 0 ? (
        <div className="container mx-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-[#5846F9] text-white border-b-4 border-white">
              <tr>
                <th className="px-4 py-3">Month</th>
                <th className="px-4 py-3">View/Download</th>
              </tr>
            </thead>
            <tbody>
              {salarySlips.map((data, index) => (
                <tr
                  key={index}
                  className="bg-[#CADFFF] border-b-4 border-white"
                >
                  <td className="px-4 py-2 flex justify-center items-center">
                    <div className="text-2xl">{data.month}</div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex justify-center items-center">
                      <a
                        href={data.file} // Changed to `data.file` to match the API response
                        target="_blank" // Open in a new tab
                        rel="noopener noreferrer" // Security improvement
                        className="px-12 py-2 bg-[#5846F9] text-white rounded-lg hover:bg-[#402cf7] focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                        aria-label={`Download ${data.month} salary slip`}
                      >
                        View/Download
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-52 text-4xl">
          Nothing to show here
        </div>
      )}
    </div>
  );
};

export default SalarySlip;
