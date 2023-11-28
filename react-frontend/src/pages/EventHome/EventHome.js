import React, { useEffect, useState } from "react";
import './HorizontalSlider.css';
import EventBox from "./EventBox";
import Header from "../Header/Header";
import {useNavigate} from"react-router-dom";
import axios from 'axios';

function EventHome() {
    const navigate = useNavigate();

    const apiRoute = "http://localhost:8080/api/v1/homepage";

    function testRoute() {
        return axios.get(apiRoute).then(res => {console.log(res);});
    }
    
    /*
    // JavaScript Function to Create <EventBox> dynamically by traversing the SQL Database.
    const [data, setData] = useState([]); // State to hold fetched data
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        // Fetch data from SQL database using Axios
        const fetchData = async () => {
        try {
            // Simulate fetching data (replace this with your actual API endpoint)
            const response = await axios.get(apiRoute);
            setData(response.data); // Update state with fetched data
            setIsLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false); // Set loading to false in case of an error
        }
        };

        fetchData(); // Call the fetch function
    }, []); // Empty dependency array to fetch data only once on component mount
    */

    return (
        <div>
            <Header/>
            <br/>
            
            <div className="horizontal-slider">
                <EventBox image="party1.jpg"/>
                <EventBox image="party2.jpeg"/>
                <EventBox image="party3.jpg"/>
                <EventBox image="party3.jpg"/>
                <EventBox image="party3.jpg"/>
                <EventBox image="party3.jpg"/>
            </div>
        </div>
    );

    /*
    return (
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            // Map through the data and generate components
            data.map((item) => (
              <YourComponent image={item.image} message={item.message} />
              // Pass each item's data as props to YourComponent
              // You might adjust the key depending on your data structure
            ))
          )}
        </div>
    );
    */
}

export default EventHome;