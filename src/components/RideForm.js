import React, { useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RideForm = () => {
    const [post, setPost] = React.useState(null);
    const [customer, setCustomer] = useState({
        customerName: "",
        customerMobileNumber: "",
        customerRidePrice: "",
        customerDrivingNumber: "",
        customerAdd: ""
    })

    const handelInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setCustomer({...customer, [name]: value})
        console.log(customer)
    }

    const createCustomer = async () => {
        await axios
          .post('http://localhost:3001/add_ride', customer)
          .then((res) => {
            setPost(res.data);
            toast.success('🦄 Ride has been added successfully!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          });
    }


  return (
    <div className="ride-form-container">
        <h2>- Offer a ride</h2>
        <div className="form-container">
            <div className="input-container">
                <input type="text" onChange={handelInput} name="customerName" id="name" placeholder='Enter your name'/>
                <input type="number" onChange={handelInput} name="customerMobileNumber" id="number" placeholder='Enter your mobile number'/>
            </div>
            <div className="input-container">
                <input type="number" onChange={handelInput} name="customerRidePrice" id="price" placeholder='Enter your ride price'/>
                <input type="text" onChange={handelInput} name="customerDrivingNumber" id="dn" placeholder='Enter your driving liciense number'/>
            </div>
            <div className="input-container">
                <input type="text" onChange={handelInput} name="customerDestination" id="destination" placeholder='Enter your destination'/>
                <input type="number" onChange={handelInput} name="customerAvailableSeats" id="dn" placeholder='Enter number of seats available'/>
            </div>
            <div className="input-container">
                <textarea onChange={handelInput} name="customerAdd" id="add" cols="30" rows="10" placeholder='Enter your pickup address'></textarea>
            </div>
            <button className="submit-btn" onClick={createCustomer}>Submit</button>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    </div>
  )
}

export default RideForm