import React, { useState, useEffect } from 'react'
import NavigationBar from './NavigationBar'
import Location from '../assets/icon/location.png'
import Search from '../assets/icon/search.png'
import RideForm from './RideForm'
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Place_1 from '../assets/place_1.png'

const client = axios.create({
    baseURL: "http://localhost:3001/get_ride" 
  });

const Home = () => {
    const [rides, setRides] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        async function getRides() {
          const response = await client.get()
          .then((response) => {
              setRides(response.data);
              setError(null)
          })
          .catch(error => {
            setError(error.message)
            setRides(null);
          })
          .finally(() => {
            setLoading(false)
          })
        //   console.log(response.data)
        }
        getRides();
      }, []);

    // const getRides = async () => {
    //     await axios.get('http://localhost:3001/get_ride').then((response) => {
    //     setRides(response.data);
    //     console.log(rides)
    //   });
    // }

  return (
    <>
        <NavigationBar />
        <div className="banner">
            <h3 className="subtitle">All you need is Ride.it</h3>
            <h1 className="title">Make your ride simple</h1>

            <div className="search-container">
                <div className="search">
                    <div className="input-container">
                        <img src={Location} alt="" />
                        <input type="text" name="location" id="location" placeholder="Where do you want to go?" onChange={(e) => {setDestination(e.target.value)}} />
                    </div>
                    <button><img src={Search} alt="" /></button>
                </div>
            </div>


        </div>
            <div className="popular-search">
                <h3>Popular Search</h3>
                <ul>
                    <li>Pune</li>
                    <li>Mumbai</li>
                    <li>Jalgaon</li>
                    <li>Amravati</li>
                    <li>Hinghanghat</li>
                    <li>Alibagh</li>
                    <li>Dhule</li>
                    <li>Nagpure</li>
                </ul>
                <ul>
                    <li>Amravati</li>
                    <li>Alibagh</li>
                    <li>Dhule</li>
                    <li>Pune</li>
                    <li>Hinghanghat</li>
                    <li>Jalgaon</li>
                    <li>Nagpure</li>
                    <li>Lotus Temple</li>
                </ul>
            </div>
            <div className="destination_container">
            {loading && <div>A moment please...</div>}
            {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
            {rides &&
            rides.map(ride => {
                if(ride.customerDestination === destination){
                    return(
                        <div className='card' key={ride._id}>
                            <img src={Place_1} alt="destination" />
                            <h4 className="text">Destination: <span>{ride.customerDestination}</span></h4>
                            <h4 className="text">Seats: <span>{ride.customerAvailableSeats}</span></h4>
                            <Popup trigger={<button className="contact-btn">Contact</button>} position="right center">
                            <div>
                                <h4 className="text">Name: <span>{ride.customerName}</span></h4>
                                <h4 className="text">Mobile: <span>{ride.customerMobileNumber}</span></h4>
                                <h4 className="text">Destination: <span>{ride.customerDestination}</span></h4>
                                <h4 className="text">Seats: <span>{ride.customerAvailableSeats}</span></h4>
                                <h4 className="text">Address: <span>{ride.customerAdd}</span></h4>
                            </div>
                            </Popup>
                        </div>

                    )
                }
                else return
            })}
            </div>

            <RideForm />
    </>
  )
}

export default Home