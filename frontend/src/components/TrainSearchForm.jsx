import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import axios from 'axios';
import { useSelector } from 'react-redux';
import "tailwindcss/tailwind.css";

// Train options
const trainOptions = [
  { value: "12019", label: "Howrah - Ranchi Shatabdi Express", state: "West Bengal" },
  { value: "12041", label: "Howrah - New Jalpaiguri Shatabdi Express", state: "West Bengal" },
  { value: "12073", label: "Howrah - Bhubaneswar Jan Shatabdi Express", state: "West Bengal" },
  //... add other train options here
];

// Validation schema
const validationSchema = Yup.object({
  train: Yup.object().required("Please select a train"),
  pnr: Yup.string().required("Please enter PNR number")
});

const TrainSearchForm = () => {
  const [pnrData, setPnrData] = useState(null);
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const handleSubmit = async (values) => {
    const searchOptions = {
      method: 'POST',
      url: 'https://trains.p.rapidapi.com/v1/railways/trains/india',
      headers: {
        'x-rapidapi-key': '59ae919614mshe25a262aad4bbd2p1de089jsn0de1f1fce76e',
        'x-rapidapi-host': 'trains.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        search: values.train.label // Use the label of the selected train
      }
    };

    try {
      const response = await axios.request(searchOptions);
      console.log('Train API Response:', response.data);
      alert(`Train data: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error('Train API Error:', error);
      alert(`Train API Error: ${error.message}`);
    }
  };

  const handlePnrSubmit = async (pnr) => {
    const pnrOptions = {
      method: 'GET',
      url: `https://real-time-pnr-status-api-for-indian-railways.p.rapidapi.com/name/${pnr}`,
      headers: {
        'x-rapidapi-key': '59ae919614mshe25a262aad4bbd2p1de089jsn0de1f1fce76e',
        'x-rapidapi-host': 'real-time-pnr-status-api-for-indian-railways.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(pnrOptions);
      setPnrData(response.data);
    } catch (error) {
      console.error('PNR API Error:', error);
      alert(`PNR API Error: ${error.message}`);
    }
  };

  return (
    <Formik
      initialValues={{ train: null, pnr: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm(); // Optionally reset the form after submission
      }}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form className={`max-w-2xl mx-auto p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}>
          <div className="mb-6">
            <label htmlFor="train" className="block text-sm font-medium mb-2">
              Select Train
            </label>
            <Field name="train">
              {({ field }) => (
                <Select
                  options={trainOptions}
                  onChange={(option) => setFieldValue("train", option)}
                  className={`w-full ${touched.train && errors.train ? "border-red-500" : ""}`}
                  placeholder="Search for a train..."
                />
              )}
            </Field>
            {touched.train && errors.train ? (
              <div className="text-red-500 text-sm mt-1">{errors.train}</div>
            ) : null}
          </div>
          <div className="mb-6">
            <label htmlFor="pnr" className="block text-sm font-medium mb-2">
              Enter PNR Number
            </label>
            <Field
              name="pnr"
              type="text"
              className={`w-full p-2 border rounded ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300'}`}
              placeholder="Enter PNR number..."
            />
            {touched.pnr && errors.pnr ? (
              <div className="text-red-500 text-sm mt-1">{errors.pnr}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 rounded transition ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
          >
            Search Train
          </button>
          <button
            type="button"
            onClick={() => {
              const pnr = document.querySelector('input[name="pnr"]').value;
              if (pnr) handlePnrSubmit(pnr);
            }}
            className={`w-full py-2 px-4 rounded mt-4 transition ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white`}
          >
            Check PNR Status
          </button>
          
          {/* PNR Result Table */}
          {pnrData && (
            <div className={`mt-6 p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">PNR Details</h2>
              <table className={`w-full border-collapse ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                <thead>
                  <tr className={darkMode ? 'bg-gray-800' : 'bg-gray-200'}>
                    <th className="border px-4 py-2 text-left">Field</th>
                    <th className="border px-4 py-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-bold">PNR Number</td>
                    <td className="border px-4 py-2">{pnrData.pnrNo}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Departure Date</td>
                    <td className="border px-4 py-2">{pnrData.departureDate}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Arrival Date</td>
                    <td className="border px-4 py-2">{pnrData.arrivalDate}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Train Number</td>
                    <td className="border px-4 py-2">{pnrData.trainNum}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Train Name</td>
                    <td className="border px-4 py-2">{pnrData.trainName}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Station From</td>
                    <td className="border px-4 py-2">{pnrData.stationFrom}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Station To</td>
                    <td className="border px-4 py-2">{pnrData.stationTo}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Reservation Up To</td>
                    <td className="border px-4 py-2">{pnrData.reservationUpTo}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Boarding Point</td>
                    <td className="border px-4 py-2">{pnrData.boardingPoint}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Journey Class</td>
                    <td className="border px-4 py-2">{pnrData.journeyClass}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">No. of Passengers</td>
                    <td className="border px-4 py-2">{pnrData.noOfPassenger}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Chart Status</td>
                    <td className="border px-4 py-2">{pnrData.chartStts}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Check-in Dates</td>
                    <td className="border px-4 py-2">{pnrData.checkInDateInfo.join(", ")}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Check-out Dates</td>
                    <td className="border px-4 py-2">{pnrData.checkOutDateInfo.join(", ")}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">CRIS Enabled Source Station</td>
                    <td className="border px-4 py-2">{pnrData.isCrisEnabledSrc}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-bold">CRIS Enabled Destination Station</td>
                    <td className="border px-4 py-2">{pnrData.isCrisEnabledDest}</td>
                  </tr>
                </tbody>
              </table>

              {/* Passenger Details Table */}
              <h2 className="text-xl font-semibold mt-6 mb-4 border-b pb-2">Passenger Details</h2>
              <table className={`w-full border-collapse ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                <thead>
                  <tr className={darkMode ? 'bg-gray-800' : 'bg-gray-200'}>
                    <th className="border px-4 py-2 text-left">Serial No.</th>
                    <th className="border px-4 py-2 text-left">Name</th>
                    <th className="border px-4 py-2 text-left">Age</th>
                    <th className="border px-4 py-2 text-left">Gender</th>
                    <th className="border px-4 py-2 text-left">Seat Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pnrData.passengerDetailsDTO.map((passenger) => (
                    <tr key={passenger.serialNo}>
                      <td className="border px-4 py-2">{passenger.serialNo}</td>
                      <td className="border px-4 py-2">{passenger.displayName}</td>
                      <td className="border px-4 py-2">{passenger.age}</td>
                      <td className="border px-4 py-2">{passenger.gender}</td>
                      <td className="border px-4 py-2">{passenger.seatStts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default TrainSearchForm;
