"use client";

import Select from 'react-select';
import { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';


const ShippingDetails = () => {
    const [mounted, setMounted] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);


    useEffect(() => {
        setMounted(true);
    }, []);

    const countryOptions = Country.getAllCountries().map(country => ({
        label: country.name,
        value: country.isoCode,
    }));

    // Handle country selection and load states
    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        setSelectedState(null);
        setSelectedCity(null);

        const stateOptions = State.getStatesOfCountry(selectedOption.value).map(state => ({
        label: state.name,
        value: state.isoCode,
        }));
        setStates(stateOptions);
        setCities([]); // Clear cities when country changes
    };

    // Handle state selection and load cities
    const handleStateChange = (selectedOption) => {
        setSelectedState(selectedOption);
        setSelectedCity(null);

        const cityOptions = City.getCitiesOfState(selectedCountry.value, selectedOption.value).map(city => ({
        label: city.name,
        value: city.name,
        }));
        setCities(cityOptions);
    };

  return (
    <section aria-labelledby="shipping-info">
        <h2 id="shipping-info" className="text-lg font-semibold text-gray-800 mb-4">Shipping Information</h2>
        <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#FA9090]" placeholder="John" />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#FA9090]" placeholder="Doe" />
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#FA9090]" placeholder="123 Street Name" />
        </div>

        {/* Country, State, and City Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Country Dropdown */}
            <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
           
            {mounted && (
                <Select
                options={countryOptions}
                onChange={handleCountryChange}
                placeholder="Select Country"
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        borderColor: state.isFocused ? '#FA9090' : provided.borderColor,
                        boxShadow: state.isFocused ? 'none' : provided.boxShadow,
                        '&:hover': {
                            borderColor: '#FA9090',
                        },
                    }),
                }}
                />
            )}
            </div>

            {/* State Dropdown */}
            <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
           
            {mounted && (
                <Select
                options={states}
                value={selectedState}
                onChange={handleStateChange}
                placeholder="Select State"
                isDisabled={!selectedCountry}
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        borderColor: state.isFocused ? '#FA9090' : provided.borderColor,
                        boxShadow: state.isFocused ? 'none' : provided.boxShadow,
                        '&:hover': {
                            borderColor: '#FA9090',
                        },
                    }),
                }}
                />
            )}
            </div>

            {/* City Dropdown */}
            <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
           
            {mounted && (
                <Select
                options={cities}
                value={selectedCity}
                onChange={setSelectedCity}
                placeholder="Select City"
                isDisabled={!selectedState}
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        borderColor: state.isFocused ? '#FA9090' : provided.borderColor,
                        boxShadow: state.isFocused ? 'none' : provided.boxShadow,
                        '&:hover': {
                            borderColor: '#FA9090',
                        },
                    }),
                }}
                />
            )}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">ZIP Code</label>
                <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#FA9090]" placeholder="ZIP Code" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#FA9090]" placeholder="Email Address" />
            </div>
        </div>
        </form>
    </section>
  )
}

export default ShippingDetails