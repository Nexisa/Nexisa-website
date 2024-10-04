import { useState, useEffect } from "react";
import axios from "../../api/axios";
import EmployeeCard from "../../components/EmployeeCard"; // Assuming each card is a separate component
import {toast} from 'react-hot-toast';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });
  const [slipData, setSlipData] = useState({ file: null, month: "" });

  // Fetch all employees
    const fetchEmployees = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.get("/admin/employees", {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the request header
                },
            });
            console.log(res.data); // Log the entire response for debugging
            // Assuming the structure of the response is { success: true, employees: [...] }
            if (res.data.success) {
            setEmployees(res.data.employees); // Extracting employees array
            } else {
            console.error("Failed to fetch employees");
            }
        } catch (err) {
            console.error("Error fetching employees:", err);
        }
    };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Add Employee
  const addEmployee = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post("/admin/add-employee", newEmployee, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the request header
            },
        });
      toast.success("Employee added successfully");
      setShowAddModal(false);
      fetchEmployees();
    } catch (err) {
      toast.error("Something went wrong");
      console.error("Error adding employee:", err);
    }
  };

  // Upload Slip - yet to be done
  const uploadSlip = async () => {
    const formData = new FormData();
    formData.append("file", slipData.file);
    formData.append("month", slipData.month);

    try {
      await axios.post("/admin/add-salary-slip", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setShowUploadModal(false);
    } catch (err) {
      console.error("Error uploading slip:", err);
    }
  };

  // Delete Employee
  const deleteEmployee = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/admin/delete-employee/${selectedEmployee._id}`, {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the request header
            },
        });
      setShowDeleteModal(false);
      toast.success("Employee deleted successfully");
      fetchEmployees();
    } catch (err) {
      toast.error("Something went wrong");
      console.error("Error deleting employee:", err);
    }
  };

  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden min-h-screen">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#2C4964]">Account Information</h2>
        <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8'></div>
        <div className="flex justify-center">
          <button
            className="px-8 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4] mb-10"
            onClick={() => setShowAddModal(true)}
          >
            Add Employee
          </button>
        </div>
        <div className="md:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee._id}
              employee={employee}
              onUploadClick={() => {
                setSelectedEmployee(employee);
                setShowUploadModal(true);
              }}
              onDeleteClick={() => {
                setSelectedEmployee(employee);
                setShowDeleteModal(true);
              }}
            />
          ))}
        </div>

      {/* Add Employee Modal */}
      {showAddModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 w-80 h-80 rounded-lg shadow-lg flex flex-col justify-between">
            <h2 className="text-xl font-bold mb-2 text-center">Add Employee</h2>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                onChange={(e) => setNewEmployee({ ...newEmployee, password: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone"
                className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
              />
            </div>
            <div className="flex justify-between mt-4">
              <button className="px-8 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4]" onClick={addEmployee}>
                Add
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-8 rounded-full hover:bg-gray-600"
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Slip Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 w-80 h-80 rounded-lg shadow-lg flex flex-col justify-between">
            <h2 className="text-xl font-bold mb-2 text-center">Upload Slip</h2>
            <div className="space-y-2">
              <input
                type="file"
                className="border p-2 w-full rounded"
                onChange={(e) => setSlipData({ ...slipData, file: e.target.files[0] })}
              />
              <input
                type="text"
                placeholder="Month"
                className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                onChange={(e) => setSlipData({ ...slipData, month: e.target.value })}
              />
            </div>
            <div className="flex justify-between mt-4">
              <button className="px-8 py-2 bg-[#5846F9] text-white rounded-full hover:bg-[#422ef4]" onClick={uploadSlip}>
                Upload
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-8 rounded-full hover:bg-gray-600"
                onClick={() => setShowUploadModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 w-80 h-40 rounded-lg shadow-lg flex flex-col justify-between">
            <h2 className="text-xl font-bold mb-4 text-center">Are you sure?</h2>
            <div className="flex justify-between mt-4">
              <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={deleteEmployee}>
                Confirm Delete
              </button>
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee;
