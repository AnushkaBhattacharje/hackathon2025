import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, Typography, Button, Modal } from "@mui/joy";

const rentalItems = [
  {
    name: "Wheat Thresher",
    description: "Efficiently separate grain from chaff.",
    image: "../../public/threasher.png",
    link: "https://www.amazon.in/AMNLIRONG-Electricity-Threshing-Efficiency-Agricultural/dp/B08NCFZSFL/ref=sr_1_1?crid=19OTHZ2IB5BTX&dib=eyJ2IjoiMSJ9.X8P6WHe5YEEMrMbo2DPHNw.dn00DzqhQhRQzziWhRsrhjiPfSTfpud_hAMPBkjr2ck&dib_tag=se&keywords=wheat+thresher+machine&qid=1744294251&sprefix=wheat+thre%2Caps%2C230&sr=8-1",
    buttondesc: "Rent Now",
  },
  {
    name: "Wheat Dryer",
    description: "Ensure optimal moisture for storage.",
    image: "../../public/dryer.png",
    link: "https://www.amazon.in/AMNLIRONG-Electricity-Threshing-Efficiency-Agricultural/dp/B08NCFZSFL/ref=sr_1_1?crid=19OTHZ2IB5BTX&dib=eyJ2IjoiMSJ9.X8P6WHe5YEEMrMbo2DPHNw.dn00DzqhQhRQzziWhRsrhjiPfSTfpud_hAMPBkjr2ck&dib_tag=se&keywords=wheat+thresher+machine&qid=1744294251&sprefix=wheat+thre%2Caps%2C230&sr=8-1",
    buttondesc: "Buy Now",
  },
  {
    name: "Storage Silos",
    description: "Safeguard your harvest with advanced storage solutions.",
    image: "../../silos (6).png",
    link: "https://www.amazon.in/AMNLIRONG-Electricity-Threshing-Efficiency-Agricultural/dp/B08NCFZSFL/ref=sr_1_1?crid=19OTHZ2IB5BTX&dib=eyJ2IjoiMSJ9.X8P6WHe5YEEMrMbo2DPHNw.dn00DzqhQhRQzziWhRsrhjiPfSTfpud_hAMPBkjr2ck&dib_tag=se&keywords=wheat+thresher+machine&qid=1744294251&sprefix=wheat+thre%2Caps%2C230&sr=8-1",
    buttondesc: "Connect FarMart Storage Associate",
  },
];
// const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     // Open the popup when the component mounts
//     setIsPopupOpen(true);
//   }, []);

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };

// const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     // Open the popup when the component mounts
//     setIsPopupOpen(true);
//   }, []);

//   const handleClosePopup = () => {
//     setIsPopupOpen(false);
//   };
const CropAdvisoryWheat = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Open the popup when the component mounts
    setIsPopupOpen(true);
  }, []);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <Modal
        open={isPopupOpen}
        onClose={handleClosePopup}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            //   boxShadow: 3,
          }}
        >
          <Typography level="h4" textColor={"#1C4440"} sx={{ marginBottom: 2 }}>
            🌾 Welcome Back, Friend of the Fields! 🌽
          </Typography>
          <Box width={300}>
            <Typography textColor={"#1C4440"}>
              Last time, you visited us for Maize Crop Advisory and rented a 🌟
              Wheat Dryer 🌟. This time, we’re offering it at ✨ HALF PRICE ✨
              just for you! Don’t miss this golden opportunity! 💸
            </Typography>
          </Box>
          <Button
            sx={{ marginTop: 2, backgroundColor: "#1c4440" }}
            onClick={handleClosePopup}
          >
            Close
          </Button>
        </Box>
      </Modal>

      {/* Hero Section */}
      {/* <Box
      sx={{
        backgroundImage: 'url("../../public/wheat-field-banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FFFFFF",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography level="h1" sx={{ fontWeight: "bold", mb: 2 }}>
        Wheat Crop Advisory
      </Typography>
      <Typography level="h5" textColor={"warning.solidHoverBg"}>
        Expert tips and resources for a successful wheat post-harvest process.
      </Typography>
    </Box> */}

      {/* Post-Harvest Information */}
      {/* Post-Harvest Information */}
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#F3F0E9",
        }}
      >
        <Typography
          level="h2"
          sx={{
            color: "#1C4440",
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
          }}
        >
          Essential Post-Harvest Tips for Wheat
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 4,
          }}
        >
          {[
            {
              title: "Drying",
              icon: "🌞",
              description:
                "Dry wheat to a moisture level below 14% to avoid mold growth and ensure long-term storage. Use mechanical dryers or natural sunlight drying, but ensure proper ventilation during the process.",
              tip: "Avoid over-drying, which can lead to grain cracking and reduced quality.",
            },
            {
              title: "Storage",
              icon: "🏠",
              description:
                "Store wheat in airtight silos or bins to protect it from pests and environmental factors. Ensure the storage area is dry, clean, and treated with appropriate fumigants if needed.",
              tip: "Use temperature monitoring tools to prevent overheating in large storage facilities.",
            },
            {
              title: "Processing",
              icon: "⚙️",
              description:
                "Milling wheat into flour requires high-quality processing equipment. Remove impurities before milling and regularly maintain equipment for optimal performance.",
              tip: "Clean and grade the wheat before processing to enhance flour quality and consistency.",
            },
            {
              title: "Transportation",
              icon: "🚛",
              description:
                "Transport wheat in clean, covered vehicles to prevent contamination and exposure to moisture. Use pallets or lined containers for bulk quantities.",
              tip: "Schedule transport during dry weather conditions to avoid unexpected moisture exposure.",
            },
            //   {
            //     title: "Quality Testing",
            //     icon: "🔬",
            //     description:
            //       "Test wheat for moisture content, protein levels, and impurities to ensure quality standards are met before selling or processing.",
            //     tip: "Use portable moisture meters and send samples for laboratory analysis for more precise results.",
            //   },
            //   {
            //     title: "Value Addition",
            //     icon: "💡",
            //     description:
            //       "Explore opportunities for value addition, such as producing specialty flours, wheat-based snacks, or animal feed. This can help increase profitability.",
            //     tip: "Focus on niche markets like organic wheat products for higher returns.",
            //   },
          ].map((step, idx) => (
            <Card
              key={idx}
              sx={{
                padding: 2,
                textAlign: "center",
                border: "1px solid #E0E0E0",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography level="h3" sx={{ fontSize: "36px", marginBottom: 2 }}>
                {step.icon}
              </Typography>
              <Typography
                level="h3"
                sx={{ color: "#1C4440", fontWeight: "bold" }}
              >
                {step.title}
              </Typography>
              <Typography
                sx={{ fontSize: "14px", color: "#6B7280", marginTop: 1 }}
              >
                {step.description}
              </Typography>
              <Typography
                sx={{
                  marginTop: 2,
                  fontWeight: "bold",
                  color: "#1C4440",
                  fontStyle: "italic",
                }}
              >
                Tip: {step.tip}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Rental Equipment Section */}
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography
          level="h2"
          sx={{
            color: "#1C4440",
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
          }}
        >
          Rent Equipment for Post-Harvest of Wheat
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap",
          }}
        >
          {rentalItems.map((item, idx) => (
            <Card key={idx} sx={{ width: 400, textAlign: "center" }}>
              <CardContent>
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                {/* Rental Details */}
                <Typography level="h3" sx={{ mt: 2, color: "#1C4440" }}>
                  {item.name}
                </Typography>
                <Typography>{item.description}</Typography>
                {/* Rent Now Button */}
                <Button
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mt: 4,
                    backgroundColor: "#1C4440",
                    color: "#FFFFFF",
                    padding: "8px 16px",
                  }}
                >
                  {item.buttondesc}
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "#1C4440",
          color: "#FFFFFF",
          padding: 4,
          textAlign: "center",
        }}
      >
        <Typography textColor={"warning.softHoverBg"}>
          © 2025 Wheat Advisory. All rights reserved. Contact us for more
          assistance!
        </Typography>
      </Box>
    </>
  );
};

export default CropAdvisoryWheat;
