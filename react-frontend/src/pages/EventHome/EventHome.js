import React, { useEffect, useState } from "react";
import './HorizontalSlider.css';
import EventBox from "./EventBox";
import Header from "../Header/Header";
import {useNavigate} from"react-router-dom";
import axios from 'axios';

const apiRoute = "http://localhost:8080/api/v1/homepage";

function EventHome() {
    

    const [data, setData] = useState([]);

    useEffect(() => { axios.get(apiRoute).then(response => {
            console.log(response.data);
            setData(response.data);
        }).catch(error => { console.log('Error fetching data:', error);});
    }, []);

    return (
        <div>
            <Header/>
            
            <div className="horizontal-slider">
                {data.map((item) => (
                    <EventBox image="party1.jpg" key = {item.id} id = {item.id} name = {item.eventName} location = {item.eventLocation} message = {item.eventDescription}/>
                ))}
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