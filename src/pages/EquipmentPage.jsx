import React, { useState } from "react";
import { Box, Typography, Button, Input, Select, Option } from "@mui/joy";
import { Link } from "react-router-dom";
import axios from "axios";

const CropSelection = () => {
  const position = [51.505, -0.09];

  const [formValues, setFormValues] = useState({
    from: "",
    destination: "",
    vehicleType: "",
    materialWeight: "",
  });
  const [imageVisible, setImageVisible] = useState(false);
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (
  //     formValues.from &&
  //     formValues.destination &&
  //     formValues.vehicleType &&
  //     formValues.materialWeight
  //   ) {
  //     setImageVisible(true);
  //     setNotification(
  //       <p>
  //         🚫 <strong>High chance of rain 🌧️</strong> in the truck's destination
  //         area. Please take necessary precautions. 🚛✨
  //       </p>
  //     );
  //   } else {
  //     alert("Please fill in all fields before submission.");
  //     setImageVisible(false);
  //     setNotification("");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formValues.from &&
      formValues.destination &&
      formValues.vehicleType &&
      formValues.materialWeight
    ) {
      try {
        // Replace with your OpenWeatherMap API key
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        console.log(import.meta.env.VITE_WEATHER_API_KEY);
        const destinationCity = formValues.destination;

        // Fetch weather data for the destination
        console.log(
          `b1b15e88fa797225412429c1c50c122a1">api.openweathermap.org/data/2.5/forecast?id&appid=19bc350270b0123eb118d9ffd89b917f`
        );

        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: destinationCity,
              appid: apiKey,
            },
          }
        );
        console.log(destinationCity, "hii");
        const weatherData = response.data;
        const description =
          weatherData.weather && weatherData.weather[0]?.description;

        if (description) {
          if (description.toLowerCase().includes("rain")) {
            setImageVisible(true);
            setNotification(
              <p>
                🚫 <strong>High chance of rain 🌧️</strong> ({description}) in
                the truck's destination area. Please take necessary precautions.
                🚛✨
              </p>
            );
          } else if (description.toLowerCase().includes("clouds")) {
            setNotification(
              <p>
                ☁️ <strong>Cloudy weather</strong> ({description}). Drive
                safely! 🚛
              </p>
            );
            setImageVisible(true);
          } else {
            setNotification(
              <p>
                ✅ <strong>Clear weather</strong> ({description}) at the
                destination. Safe to proceed! 🚛
              </p>
            );
            setImageVisible(true);
          }
        } else {
          setNotification(
            <p>
              ⚠️ <strong>Weather data unavailable</strong>. Please check again
              later. 🚛
            </p>
          );
          setImageVisible(false);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Could not fetch weather data. Please try again.");
        setImageVisible(false);
        setNotification("");
      }
    } else {
      alert("Please fill in all fields before submission.");
      setImageVisible(false);
      setNotification("");
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#1C4440",
          color: "#FFFFFF",
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src="../../public/image.png"
          alt="Logo"
          style={{ height: "60px", width: "180px", cursor: "pointer" }}
        />

        <Box sx={{ display: "flex", gap: 4 }}>
          <Link
            to="/home"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
          <Link
            to="/home/crops"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Buy Products
          </Link>
          <Link
            to="/home/cart"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Rent Machine
          </Link>
          <Link
            to="/home/advisory"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Know Your Harvest
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F3F0E9",
          minHeight: "100vh",
          padding: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            padding: 4,
            marginTop: -30,
            height: "550px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            level="h2"
            sx={{
              mb: 2,
              color: "#1C4440",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Plan Your Route
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <label htmlFor="from">
              <Typography level="body1" sx={{ mb: 1, color: "#1C4440" }}>
                Starting Location
              </Typography>
            </label>
            <Input
              id="from"
              name="from"
              placeholder="Enter starting location (e.g., Delhi)"
              value={formValues.from}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />

            <label htmlFor="destination">
              <Typography level="body1" sx={{ mb: 1, color: "#1C4440" }}>
                Destination
              </Typography>
            </label>
            <Input
              id="destination"
              name="destination"
              placeholder="Enter destination (e.g., Manali)"
              value={formValues.destination}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />

            <label htmlFor="vehicleType">
              <Typography level="body1" sx={{ mb: 1, color: "#1C4440" }}>
                Vehicle Type
              </Typography>
            </label>
            <Select
              id="vehicleType"
              name="vehicleType"
              value={formValues.vehicleType}
              onChange={(e, newValue) =>
                setFormValues((prev) => ({ ...prev, vehicleType: newValue }))
              }
              placeholder="Select Vehicle Type"
              sx={{ mb: 2 }}
            >
              <Option value="open-truck">Open Truck</Option>
              <Option value="container">Container</Option>
              <Option value="small-pickup">Small Pickup Truck</Option>
            </Select>

            <label htmlFor="materialWeight">
              <Typography level="body1" sx={{ mb: 1, color: "#1C4440" }}>
                Material Weight (in kg)
              </Typography>
            </label>
            <Input
              id="materialWeight"
              name="materialWeight"
              placeholder="Enter material weight (in kg)"
              value={formValues.materialWeight}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />

            <Button
              type="submit"
              sx={{
                backgroundColor: "#1C4440",
                color: "#FFFFFF",
                width: "100%",
                padding: "12px",
                marginTop: 2,
              }}
            >
              Submit
            </Button>

            {notification && (
              <Box
                sx={{
                  mt: 2,
                  padding: 2,
                  backgroundColor: "#e1ecf2",
                  color: "#1C4440",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {notification}
              </Box>
            )}
          </form>
        </Box>

        <Box
          sx={{
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            height: "360px",
            marginTop: -30,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {imageVisible ? (
            <Box
              sx={{
                width: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                height: "360px",
                marginTop: -30,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1761584.3973232787!2d75.55332905322288!3d30.419244021112675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!3m2!1d28.613929799999998!2d77.2088282!4m5!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!3m2!1d32.2431872!2d77.1891761!5e0!3m2!1sen!2sin!4v1744344489370!5m2!1sen!2sin"
                width="800"
                height="620"
                style={{
                  border: "0",
                  borderRadius: "8px",
                  marginTop: "240px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          ) : (
            <img
              src="../../public/farteam.png"
              alt="Route Visualization"
              style={{
                width: "900px",
                height: "620px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default CropSelection;
