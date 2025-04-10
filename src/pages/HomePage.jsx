import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box, Card, CardContent, Input } from "@mui/joy";
import { LocationOn } from "@mui/icons-material";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "./notification.css";

const buttonLabels = ["Buy AgriProducts", "Rent Or Buy", "Know Your Crop"];

const HomePage = () => {
  const [location, setLocation] = useState("");
  useEffect(() => {
    // Show the notification when the component mounts
    toast.info(
      "🌾 Last time you bought Wheat for ₹100. 🎉 Now we have a special discount for you at just ₹20! 🤑 Don't miss out! ✨",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "custom-toast",
      }
    );
  }, []);
  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(
            `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`
          );
          toast.success("📍 Location fetched successfully!");
        },
        (error) => {
          toast.error("❌ Unable to fetch location. Please allow access.");
        }
      );
    } else {
      toast.error("❌ Geolocation is not supported by your browser.");
    }
  };

  return (
    <>
      <ToastContainer />
      <Box height={700} width="100%">
        <Box
          sx={{
            textAlign: "center",
            padding: 4,
            backgroundColor: "#F3F0E9",
            height: "500px",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <img
              src="../../public/image.png"
              alt="Background"
              style={{
                width: "300px",
                height: "90px",
                display: "block",
              }}
            />
            <Input
              placeholder="Your location"
              startDecorator={
                <Button
                  variant="soft"
                  color="neutral"
                  startDecorator={<LocationOn />}
                  onClick={fetchLocation} // Fetch location on click
                >
                  Locate
                </Button>
              }
              sx={{
                height: "100%",
                mt: "38",
              }}
            />
          </Box>
          <Typography level="h1" sx={{ color: "#1c4440", mt: 15 }}>
            Your complete platform for agri purchase, farming guidance, and
            equipment rental
          </Typography>

          <Button
            size="lg"
            component={Link}
            to="/crops"
            sx={{
              mt: 4,
              backgroundColor: "#1c4440",
              padding: "16px 42px",
              color: "white",
              "&:hover": {
                backgroundColor: "#166e60",
              },
            }}
          >
            Let's Shop
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          height: "450px",
        }}
      >
        {[1, 2, 3].map((idx) => (
          <Card
            key={idx}
            sx={{ width: 350, textAlign: "center", mb: 4, mt: -9 }}
          >
            <CardContent>
              <img
                src={`../../public/image${idx}.png`}
                alt={`Image ${idx}`}
                style={{
                  width: "300px",
                  height: "350px",
                  margin: "0 auto",
                  marginBottom: "16px",
                }}
              />
              <Button
                component={Link}
                to="./cart"
                sx={{
                  mt: 2,
                  backgroundColor: "#1c4440",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#166e60",
                  },
                }}
              >
                {buttonLabels[idx - 1]}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default HomePage;
