import { IoCamera } from "react-icons/io5";
import { useRef, useState, useContext, useEffect } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../../context/AuthContext";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const fileInputRef = useRef(null);
    const [loader, setLoader] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        confPassword: '',
        image: null,
        imageFile: null,
    });

    useEffect(() => {
        if (!user) {
            navigate('/');
        } else {
            fetchUserData();
        }
    }, [user]);

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/user/userByEmail/${user.user.email}`);
            if (response.status === 200) {
                const userData = response.data;
                setFormData({
                    firstName: userData.firstname || '',
                    lastname: userData.lastname || '',
                    email: userData.email || '',
                    phone: userData.phone || '',
                    password: '',
                    confPassword: '',
                    image: userData.image || null,
                    imageFile: null,
                });
            } else {
                throw new Error('Failed to fetch user data.');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            toast.error('Failed to fetch user data.');
        }
    };

    const handleCameraClick = () => {
        fileInputRef.current.click();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            image: URL.createObjectURL(file),
            imageFile: file,
        }));
    };

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await axios.post(`http://localhost:4000/api/file/image/${user.user._id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data.data.url;
        } catch (error) {
            console.error('File upload failed:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        const updatedData = {
            firstName: formData.firstName,
            lastname: formData.lastname,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            confPassword: formData.confPassword,
        };

        if (formData.imageFile) {
            try {
                const imageUrl = await uploadFile(formData.imageFile);
                updatedData.image = imageUrl;
            } catch (error) {
                toast.error('An error occurred while uploading the profile picture.');
                setLoader(false);
                return;
            }
        }

        try {
            const response = await axios.patch(`http://localhost:4000/api/user/${user.user._id}`, updatedData);
            if (response.status === 200) {
                fetchUserData();
                toast.success('Profile updated successfully!');
            } else {
                throw new Error('Failed to update profile.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            toast.error('An error occurred while updating the profile.');
        } finally {
            setLoader(false);
        }
    };

    if (loader) {
        return (
            <div className="z-50">
                <div className="text-center text-white text-3xl">
                    Saving Your Profile Info. Please Wait...
                </div>
                <div className='w-full h-[70vh] flex justify-center items-center'>
                    <ClimbingBoxLoader
                        color='white'
                        size={70}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="border-l pl-8 py-8">
            <h1 className="text-4xl text-[#265582] font-semibold">Profile</h1>
            <p>Profile / Profile</p>
            <form onSubmit={handleSubmit} className="pt-5">
                <div>
                    <div className="avatar py-2 relative">
                        <div className="w-32 rounded-full border border-black">
                            <img src={formData.image} alt="Profile photo" />
                        </div>
                        <IoCamera
                            className="cursor-pointer absolute right-2 bottom-2 bg-slate-400 text-white text-4xl p-2 rounded-full"
                            onClick={handleCameraClick}
                        />
                        <input
                            type="file"
                            name="image"
                            id="image"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="py-2">
                        <p>First Name</p>
                        <input
                            type="text"
                            name="firstName"
                            className="border p-2 border-black w-full"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="py-2">
                        <p>Surname</p>
                        <input
                            type="text"
                            name="lastname"
                            className="border p-2 border-black w-full"
                            value={formData.lastname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="py-2">
                        <p>Email</p>
                        <input
                            type="text"
                            name="email"
                            className="border p-2 border-black w-full"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="py-2">
                        <p>Phone</p>
                        <input
                            type="text"
                            name="phone"
                            className="border p-2 border-black w-full"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl text-[#265582] font-semibold pt-10">Update Password</h3>
                    <div>
                        <div className="py-2">
                            <p>New Password</p>
                            <input
                                type="password"
                                name="password"
                                className="border p-2 border-black w-full"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="py-2">
                            <p>Confirm New Password</p>
                            <input
                                type="password"
                                name="confPassword"
                                className="border p-2 border-black w-full"
                                value={formData.confPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="text-center pt-4">
                        <input className="bg-[#ff675c] cursor-pointer text-xl py-4 px-8 text-white" type="submit" value="Update" />
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;
