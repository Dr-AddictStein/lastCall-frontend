import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../../Shared/Loader';
import Select from "react-select";
import { AuthContext } from '../../../context/AuthContext';
import { useContext } from 'react';

const RestaurantBuilder = () => {

    const { user } = useContext(AuthContext);

    const [loader, setLoader] = useState(false);

    const [conditions, setConditions] = useState([]);
    const [regions, setRegions] = useState([]);
    const [cities, setCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [formData, setFormData] = useState({
        _id: '',
        name: '',
        region: '',
        city: '',
        phone: '',
        url: '',
        operatinghours: '',
        description: '',
        thumb: null,
        banner: null,
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        specialconditions: [],
        category: []
    });

    // Fetch restaurant data when the component mounts
    const fetchRestaurantData = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/restaurant/ownercall/${user?.user?.email}`);
            const data = response.data;

            // Populate formData and conditions
            setFormData({
                _id: data._id,
                name: data.name || '',
                region: data.region || '',
                city: data.city || '',
                phone: data.phone || '',
                url: data.url || '',
                operatinghours: data.operatinghours || '',
                description: data.description || '',
                thumb: data.thumb || null,
                banner: data.banner || null,
                image1: data.image1 || null,
                image2: data.image2 || null,
                image3: data.image3 || null,
                image4: data.image4 || null,
                specialconditions: data.specialconditions || [],
                category: data.category || []
            });

            // Populate conditions separately if it exists
            if (data.specialconditions) {
                setConditions(data.specialconditions.map((condition, index) => ({ id: index, text: condition })));
            }
            if (data.category) {
                const initialCategories = data.category.map(cat => ({
                    value: cat,
                    label: cat
                }));
                setSelectedCategories(initialCategories)
            }
        } catch (error) {
            console.error('Error fetching restaurant data:', error);
        }
    };
    useEffect(() => {

        // Fetch regions and cities
        const fetchRegionsAndCities = async () => {
            try {
                const [regionsResponse, citiesResponse] = await Promise.all([
                    axios.get('http://localhost:4000/api/region/'),
                    axios.get('http://localhost:4000/api/city/')
                ]);
                setRegions(regionsResponse.data);
                setCities(citiesResponse.data);
            } catch (error) {
                console.error('Error fetching regions and cities:', error);
            }
        };

        fetchRestaurantData();
        fetchRegionsAndCities();
    }, [user]);

    const addCondition = () => {
        setConditions([...conditions, { id: conditions.length, text: '' }]);
    };

    const handleConditionChange = (id, value) => {
        const updatedConditions = conditions.map(condition =>
            condition.id === id ? { ...condition, text: value } : condition
        );
        setConditions(updatedConditions);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Filter cities based on selected region
        if (name === 'region') {
            const selectedRegion = regions.find(region => region.name === value);
            const filteredCities = cities.filter(city => city.region === selectedRegion.name);
            setFilteredCities(filteredCities);
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };


    const uploadFile = async (file, id) => {
        console.log("HERE", file)
        const formData = new FormData();
        formData.append('file', file);
        try {
            const response = await axios.post(`http://localhost:4000/api/file/image/${id}`, formData);
            return response.data.data.url;
        } catch (error) {
            console.error('File upload failed:', error);
            throw error;
        }
    };

    const [thumb, setThumb] = useState(null);
    const [banner, setBanner] = useState(null);
    const [image1, setImage1] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoader(true);

        const jsonData = {
            name: formData.name,
            region: formData.region,
            city: formData.city,
            phone: formData.phone,
            url: formData.url,
            operatinghours: formData.operatinghours,
            description: formData.description,
            specialconditions: conditions.map(condition => condition.text),
            category: selectedCategories.map(option => option.value), // Extracting values from selected options
        };

        let finalData = jsonData;

        if (thumb) {
            const thumbImageUrl = await uploadFile(thumb, Date.now().toString());
            finalData["thumb"] = thumbImageUrl;
        }
        if (banner) {
            const bannerImageUrl = await uploadFile(banner, Date.now().toString());
            finalData["banner"] = bannerImageUrl;
        }
        if (image1) {
            const image1ImageUrl = await uploadFile(image1, Date.now().toString());
            finalData["image1"] = image1ImageUrl;
        }
        if (image2) {
            const image2ImageUrl = await uploadFile(image2, Date.now().toString());
            finalData["image2"] = image2ImageUrl;
        }
        if (image3) {
            const image3ImageUrl = await uploadFile(image3, Date.now().toString());
            finalData["image3"] = image3ImageUrl;
        }
        if (image4) {
            const image4ImageUrl = await uploadFile(image4, Date.now().toString());
            finalData["image4"] = image4ImageUrl;
        }

        console.log("GOTCHA.!.", finalData)

        try {
            // First send JSON data
            const responseJson = await fetch(`http://localhost:4000/api/restaurant/ownercall/${user?.user?.email}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(finalData),
            });

            if (!responseJson.ok) {
                throw new Error('Failed to save restaurant info.');
            }

            setLoader(false);
            fetchRestaurantData();
            toast.success('Restaurant Info Saved successfully!');
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while saving the restaurant.');
        }
    };


    const options = [
        { value: 'American', label: 'American' },
        { value: 'Asian', label: 'Asian' },
        { value: 'Barbeque', label: 'Barbeque' },
        { value: 'Brunch', label: 'Brunch' },
        { value: 'Burgers', label: 'Burgers' },
        { value: 'Cafe', label: 'Cafe' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Desserts', label: 'Desserts' },
        { value: 'European', label: 'European' },
        { value: 'Filipino', label: 'Filipino' },
        { value: 'Fine Dining', label: 'Fine Dining' },
        { value: 'French', label: 'French' },
        { value: 'Fusion', label: 'Fusion' },
        { value: 'Greek', label: 'Greek' },
        { value: 'Halal', label: 'Halal' },
        { value: 'Hotpot', label: 'Hotpot' },
        { value: 'Indian', label: 'Indian' },
        { value: 'Italian', label: 'Italian' },
        { value: 'Japanese', label: 'Japanese' },
        { value: 'Korean', label: 'Korean' },
        { value: 'Latin', label: 'Latin' },
        { value: 'Mediterranean', label: 'Mediterranean' },
        { value: 'Mexican', label: 'Mexican' },
        { value: 'Middle Eastern', label: 'Middle Eastern' },
        { value: 'Pizza', label: 'Pizza' },
        { value: 'Pub', label: 'Pub' },
        { value: 'Ramen', label: 'Ramen' },
        { value: 'Seafood', label: 'Seafood' },
        { value: 'Spanish', label: 'Spanish' },
        { value: 'Steakhouse', label: 'Steakhouse' },
        { value: 'Sushi', label: 'Sushi' },
        { value: 'Thai', label: 'Thai' },
        { value: 'Vegan', label: 'Vegan' },
        { value: 'Vegetarian', label: 'Vegetarian' },
        { value: 'Vietnamese', label: 'Vietnamese' }
    ];

    const handleChangeMulti = (selectedOptions) => {
        setSelectedCategories(selectedOptions);
    };




    if (loader) {
        return (
            <Loader />
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="p-16">
                        <h3 className="text-2xl font-semibold text-center py-5">Basic Info</h3>
                        <div className="grid grid-cols-2 gap-5 py-5">
                            <div>
                                <p>Name</p>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="p-2 mt-2 border border-white rounded-md w-full text-black"
                                />
                            </div>
                            <div>
                                <p>Region</p>
                                <select
                                    name="region"
                                    value={formData.region}
                                    onChange={handleChange}
                                    className="p-2 mt-2 text-black border border-white rounded-md w-full"
                                >
                                    <option value="">Select region</option>
                                    {regions.map(region => (
                                        <option key={region._id} value={region.name}>{region.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <p>City</p>
                                <select
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="p-2 mt-2 text-black border border-white rounded-md w-full"
                                >
                                    <option value="">Select city</option>
                                    {filteredCities.map(city => (
                                        <option key={city._id} value={city.name}>{city.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <p>Phone</p>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="p-2 mt-2 border border-white rounded-md w-full text-black"
                                />
                            </div>
                            <div>
                                <p>Website</p>
                                <input
                                    type="text"
                                    name="url"
                                    value={formData.url}
                                    onChange={handleChange}
                                    className="p-2 mt-2 border border-white rounded-md w-full text-black"
                                />
                            </div>
                            <div>
                                <p>Operating hours</p>
                                <input
                                    type="text"
                                    name="operatinghours"
                                    value={formData.operatinghours}
                                    onChange={handleChange}
                                    className="p-2 mt-2 border border-white rounded-md w-full text-black"
                                />
                            </div>
                            <div>
                                <p>Description</p>
                                <textarea
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="p-2 mt-2 border border-white rounded-md w-full text-black"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <h3 className="text-2xl font-semibold text-center py-5">Media</h3>
                        <div className="flex gap-5 p-16">
                            <div className='w-1/2'>
                                <p className="text-center my-3 font-semibold text-xl">Thumbnail</p>
                                {formData.thumb && <img src={formData.thumb} alt="Thumbnail" className="mb-2" />}
                                <input
                                    type="file"
                                    name="thumb"
                                    onChange={(e) => {
                                        setThumb(e.target.files[0]);
                                    }}
                                    className="file-input file-input-bordered text-black mt-2 w-full max-w-xs"
                                />
                            </div>
                            <div className='w-1/2'>
                                <p className="text-center my-3 font-semibold text-xl">Banner</p>
                                {formData.banner && <img src={formData.banner} alt="Banner" className="mb-2" />}
                                <input
                                    type="file"
                                    name="banner"
                                    onChange={(e) => {
                                        setBanner(e.target.files[0]);
                                    }}
                                    className="file-input file-input-bordered text-black mt-2 w-full max-w-xs"
                                />
                            </div>
                        </div>
                        <div className="flex gap-5 pb-5 px-16">
                            <div className='w-1/2'>
                                <p className="text-center my-3 font-semibold text-xl">Image 1</p>
                                {formData.image1 && <img src={formData.image1} alt="Image 1" className="mb-2" />}
                                <input
                                    type="file"
                                    name="image1"
                                    onChange={(e) => {
                                        setImage1(e.target.files[0]);
                                    }}
                                    className="file-input file-input-bordered text-black mt-2 w-full max-w-xs"
                                />
                            </div>
                            <div className='w-1/2'>
                                <p className="text-center my-3 font-semibold text-xl">Image 2</p>
                                {formData.image2 && <img src={formData.image2} alt="Image 2" className="mb-2" />}
                                <input
                                    type="file"
                                    name="image2"
                                    onChange={(e) => {
                                        setImage2(e.target.files[0]);
                                    }}
                                    className="file-input file-input-bordered text-black mt-2 w-full max-w-xs"
                                />
                            </div>
                            <div className='w-1/2'>
                                <p className="text-center my-3 font-semibold text-xl">Image 3</p>
                                {formData.image3 && <img src={formData.image3} alt="Image 3" className="mb-2" />}
                                <input
                                    type="file"
                                    name="image3"
                                    onChange={(e) => {
                                        setImage3(e.target.files[0]);
                                    }}
                                    className="file-input file-input-bordered text-black mt-2 w-full max-w-xs"
                                />
                            </div>
                            <div className='w-1/2'>
                                <p className="text-center my-3 font-semibold text-xl">Image 4</p>
                                {formData.image4 && <img src={formData.image4} alt="Image 4" className="mb-2" />}
                                <input
                                    type="file"
                                    name="image4"
                                    onChange={(e) => {
                                        setImage4(e.target.files[0]);
                                    }}
                                    className="file-input file-input-bordered text-black mt-2 w-full max-w-xs"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-16">
                        <h3 className="text-2xl font-semibold text-center">Tags</h3>
                        <Select
                            value={selectedCategories}
                            onChange={handleChangeMulti}
                            options={options}
                            placeholder="Category"
                            isMulti
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    height: "55px",
                                }),
                            }}
                            className='mt-3 text-black'
                        />
                    </div>
                    <div className="p-16">
                        <h3 className="text-2xl font-semibold text-center">Special Conditions</h3>
                        <button
                            type="button"
                            onClick={addCondition}
                            className="mt-4 border border-white text-black bg-white py-2 px-4 rounded-lg"
                        >
                            Add Special Condition
                        </button>
                        <div className="grid grid-cols-2 gap-5 py-5">
                            {conditions.map(condition => (
                                <div key={condition.id}>
                                    <p>Condition {condition.id + 1}</p>
                                    <input
                                        type="text"
                                        value={condition.text}
                                        onChange={e => handleConditionChange(condition.id, e.target.value)}
                                        className="p-2 mt-2 border border-white rounded-md w-full text-black"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='text-center pb-5'>
                        <button type="submit" className="mt-4 border border-white text-black bg-white py-2 px-4 rounded-lg">
                            Save Restaurant Info
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default RestaurantBuilder;
