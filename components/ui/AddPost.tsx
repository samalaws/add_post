/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Form from "./Form"
import Input from "./Input"
import Button from "./Button"
import { create } from "@/utils/api"
import { useEffect, useState } from "react"
import { getCities, getCountries } from "@/utils/getCountryApi"
import { Dropdown } from "./dropdown"
import DropdownTransport from "./dropdownTransport"
import DropdownTravelingTypes from "./dropdownTravelingTypes"
import Textarea from "./Textarea"

const addPost = () => {


    const [countries, setCountry] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState<string>("");
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: any | undefined = await getCountries();
                setCountry(response.data.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: any | undefined = await getCities(selectedCountry);
                setCities(response.data.data);
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };
        fetchData();
    },[selectedCountry])


    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(event.currentTarget.value);
    }
    return (
        <>
            <div className="bg-white mt-5 rounded-lg shadow-md p-6 mb-4">
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Add new Post</h3>
                    <Form action={create} 
                    className="flex flex-col space-y-4"
                    >
                        <div className="flex flex-col">
                            <Dropdown name="country" label="Country" options={countries} customKey="name" onChange={handleCountryChange}/>
                            <Dropdown name= "city" label="City" options={cities}/>
                        </div>
                        <div className="flex flex-col">
                            <DropdownTransport name="transportation" label="Transportation" options={[]}></DropdownTransport>
                            <DropdownTravelingTypes name="companions" label="Traveling Type" options={[]}></DropdownTravelingTypes>
                        </div>
                        <div className='flex flex-col justify-between md:flex-row md:space-x-4 md:space-y-0'>
                            <Input
                                name="travelDatesFrom"
                                type="date"
                            />
                            <Input
                                name="travelDatesTo"
                                type="date"
                                placeholder="10.10.2010"
                            />
                        </div>
                        <Textarea
                            name="experience"
                            placeholder="your experience..."
                            rows={4}
                        />
                        <Input
                            name="visitedPlaces"
                            type="textarea"
                            placeholder="#places"
                        />
                        <Button
                            type="submit"
                            text="add post"
                        />                                    
                    </Form>
                </div>
            </div>    
        </>
    )
}
export default addPost