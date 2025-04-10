import React, { useState } from "react";
import { Box, Typography, Button, Input, Select, Option } from "@mui/joy";
import { Link } from "react-router-dom";

const CropSelection = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formValues.from &&
      formValues.destination &&
      formValues.vehicleType &&
      formValues.materialWeight
    ) {
      setImageVisible(true);
      setNotification(
        <p>
          🚫 <strong>High chance of rain 🌧️</strong> in the truck's destination
          area. Please take necessary precautions. 🚛✨
        </p>
      );
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
            to="/"
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
            to="/crops"
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
            to="/cart"
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
            to="/advisory"
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
            width: "50%",
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
            <img
              src="../../public/map2.png"
              alt="Route Visualization"
              style={{
                width: "100%",
                maxWidth: "720px",
                height: "620px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          ) : (
            <img
              src="../../public/farteam.png"
              alt="Route Visualization"
              style={{
                width: "900px",
                height: "600px",
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
