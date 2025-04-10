import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box, Card, CardContent, Input } from "@mui/joy";
import { LocationOn } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "./notification.css";

const cardsData = [
  { label: "Buy AgriProducts", link: "./crops" },
  { label: "Rent Or Buy", link: "./cart" },
  { label: "Know Your Crop", link: "./advisory" },
];

const HomePage = () => {
  const [location, setLocation] = useState("");

  // useEffect(() => {
  //   // Show the notification when the component mounts
  //   toast.info(
  //     "🌾 Last time you bought Wheat for ₹100. 🎉 Now we have a special discount for you at just ₹20! 🤑 Don't miss out! ✨",
  //     {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       className: "custom-toast",
  //     }
  //   );
  // }, []);

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
        () => {
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
      <Box height={500} width="100%">
        <Box
          sx={{
            textAlign: "center",
            padding: 4,
            backgroundColor: "#F3F0E9",
            height: "350px",
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
                width: "250px",
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
          <Typography level="h1" sx={{ color: "#1c4440", mt: 8 }}>
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
        {cardsData.map((card, idx) => (
          <Card
            key={idx}
            sx={{ width: 320, textAlign: "center", mb: 4, mt: -2 }}
          >
            <CardContent>
              <img
                src={`../../public/image${idx + 1}.png`}
                alt={`Image ${idx + 1}`}
                style={{
                  width: "300px",
                  height: "300px",
                  margin: "0 auto",
                  marginBottom: "16px",
                }}
              />
              <Button
                component={Link}
                to={card.link}
                sx={{
                  mt: 2,
                  backgroundColor: "#1c4440",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#166e60",
                  },
                }}
              >
                {card.label}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default HomePage;
