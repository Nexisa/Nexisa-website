import { useState, useEffect } from 'react';
import axios from '../../api/axios';

const AccountInfo = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    // employeeId: '',
    phone: '',
    email: '',
    password: '',
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(''); // Store the uploaded image URL here
  const [showModal, setShowModal] = useState(false); // Modal for updating details
  const [showImageModal, setShowImageModal] = useState(false); // Modal for image upload

  // Fetch user data by ID when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {

      try {
        const response = await axios.get('/employee/user-details', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you have token stored in localStorage
          },
        });
        console.log("yha tk chl rha")
        const userData = response.data.user;
        console.log(response.data);
        setUserDetails({
          name: userData.name,
          // employeeId: userData.employeeId,
          phone: userData.phone,
          email: userData.email,// Leave password field empty
        });
        setImageURL(userData.profilePicture); // Set the initial profile picture if available
        console.log(userDetails);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const uploadPicture = async () => {
    if (!selectedImage) return;
    const formData = new FormData();
    formData.append('profilePicture', selectedImage);
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put('/employee/profile-picture', formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request header
        },
      });
      setImageURL(response.data.url); // Assuming Cloudinary returns the URL of the uploaded image
      console.log('Image uploaded:', response.data.url);
      setShowImageModal(false); // Close modal after upload
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const updateUserDetails = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put('/employee/profile', userDetails,  {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request header
        },
      });
      console.log('User details updated:', response.data);
      setShowModal(false); // Close modal after successful update
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Account Information</h2>

        <div className="flex flex-col items-center">
          {/* Image Upload Section */}
          <div className="mb-4 text-center">
            {imageURL ? (
              <img src={imageURL} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                <span>No Image</span>
              </div>
            )}
            <button onClick={() => setShowImageModal(true)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              Change
            </button>
          </div>

          {/* Display User Details */}
          <div className="space-y-4">
            <p className="text-lg"><strong>Name:</strong> {userDetails.name}</p>
            {/* <p className="text-lg"><strong>Employee ID:</strong> {userDetails.employeeId}</p> */}
            <p className="text-lg"><strong>Phone Number:</strong> {userDetails.phone}</p>
            <p className="text-lg"><strong>Email:</strong> {userDetails.email}</p>
          </div>

          {/* Update Button */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update
          </button>

          {/* Modal for Updating Details */}
          {showModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Update Account Information</h2>

                {/* Update Form in Modal */}
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={userDetails.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Name"
                  />
                  {/* <input
                    type="text"
                    name="employeeId"
                    value={userDetails.employeeId}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Employee ID"
                  /> */}
                  <input
                    type="text"
                    name="phone"
                    value={userDetails.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Phone Number"
                  />
                  <input
                    type="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    name="password"
                    value={userDetails.password}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Password"
                  />
                </div>

                {/* Confirm and Cancel Buttons */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setShowModal(false)}
                    className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={updateUserDetails}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Modal for Image Upload */}
          {showImageModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Upload Profile Picture</h2>

                {/* Image Upload Form */}
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />

                {/* Confirm and Cancel Buttons */}
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => setShowImageModal(false)}
                    className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={uploadPicture}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
