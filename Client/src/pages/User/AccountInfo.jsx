import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import {toast} from 'react-hot-toast'

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

  const fetchUserData = async () => {

      try {
        const response = await axios.get('/employee/user-details', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you have token stored in localStorage
          },
        });
        const userData = response.data.user;
        console.log(response.data);
        setUserDetails({
          name: userData.name,
          employeeId: userData.employeeId,
          phone: userData.phone,
          email: userData.email,
          designation: userData.designation // Leave password field empty
        });
        setImageURL(userData.profilePicture); // Set the initial profile picture if available
        console.log(userDetails);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  // Fetch user data by ID when the component mounts
  useEffect(() => {

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
      fetchUserData();
      toast.success("Picture uploaded successfully");
      setShowImageModal(false); // Close modal after upload
    } catch (error) {
      toast.error("Error while updating picture");
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
      toast.success("Your details updated successfully");
      setShowModal(false); // Close modal after successful update
    } catch (error) {
      toast.error("Something went wrong");
      setShowModal(false);
      console.error('Error updating user details:', error);
    }
  };

  return (
    <div className="max-w-screen container mx-auto p-4 overflow-x-hidden min-h-screen">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#2C4964]">Account Information</h2>
        <div className='bg-[#5846F9] w-[5%] h-0.5 mx-auto mb-8'></div>
        <div className="w-11/12 mx-auto flex justify-center items-center">
            <div className="flex flex-col md:flex-row w-11/12 md:py-10 md:px-20 rounded-lg shadow-md justify-between items-center gap-2">
              {/* Image Upload Section */}
              <div className="md:w-1/2 mb-4 md:mt-6 text-center flex flex-col justify-center items-center">
                {imageURL ? (
                  <img src={imageURL} alt="Profile" className="md:w-52 h-60 rounded-2xl mb-4 object-cover" />
                ) : (
                  <div className="w-52 h-60 rounded-2xl bg-gray-200 mb-4 flex items-center justify-center">
                    <span className='text-xl'>No Image</span>
                  </div>
                )}
                <button onClick={() => setShowImageModal(true)} className="mt-2 bg-[#5846F9] text-white px-8 py-2 rounded-full">
                  Change
                </button>
              </div>

              {/* Display User Details */}
              <div className='md:w-1/2 flex justify-center items-center'>
                <div className="bg-[#CADFFF] py-6 rounded-xl  flex flex-col gap-6 items-center px-4">
                  <div className="space-y-4">
                    <p className="text-lg bg-[#E4E9F1] px-5 rounded-lg py-2"><strong>Name:</strong> {userDetails.name}</p>
                    <p className="text-lg bg-[#E4E9F1] px-5 rounded-lg py-2"><strong>Role:</strong> {userDetails.designation}</p>
                    <p className="text-lg bg-[#E4E9F1] px-5 rounded-lg py-2"><strong>Employee ID:</strong> {userDetails.employeeId}</p>
                    <p className="text-lg bg-[#E4E9F1] px-5 rounded-lg py-2"><strong>Phone Number:</strong> {userDetails.phone}</p>
                    <p className="text-lg bg-[#E4E9F1] px-5 rounded-lg py-2"><strong>Email:</strong> {userDetails.email}</p>
                  </div>
                  {/* Update Button */}
                  <button
                    onClick={() => setShowModal(true)}
                    className="mt-4 bg-[#5846F9] text-white px-8 py-2 rounded-full"
                  >
                    Update
                  </button>
                </div>

              </div>

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
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        name="phone"
                        value={userDetails.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                        placeholder="Phone Number"
                      />
                      <input
                        type="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                        placeholder="Email"
                      />
                      <input
                        type="password"
                        name="password"
                        value={userDetails.password}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5846F9]"
                        placeholder="Password"
                      />
                    </div>

                    {/* Confirm and Cancel Buttons */}
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => setShowModal(false)}
                        className="mr-2 bg-gray-500 text-white px-8 py-2 rounded-full"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={updateUserDetails}
                        className="bg-[#5846F9] text-white px-8 py-2 rounded-full"
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
                        className="mr-2 bg-gray-500 text-white px-8 py-2 rounded-full"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={uploadPicture}
                        className="bg-[#5846F9] text-white px-8 py-2 rounded-full"
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
