import React from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, Typography, Button } from "@mui/joy";

const rentalItems = [
  {
    name: "Rent Truck",
    description: "From Field to Market — Rent a Truck Today!",
    image: "../../public/truck.png", // Public folder path
    link: "./equipment", // Replace with the actual link
  },
  {
    name: "Rent Machinery",
    description: "Rent a Machine, Harvest Without Hassle.",
    image: "../../public/machinery.png", // Public folder path
    link: "./equipment", // Replace with the actual link
  },
];

const CropSelection = () => (
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
      {/* Logo */}
      <img
        src="../../public/image.png"
        alt="Logo"
        style={{ height: "60px", width: "180px", cursor: "pointer" }}
      />

      {/* Navigation Links */}
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
          to="/equipment"
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
      }}
    >
      <Typography
        level="h2"
        sx={{ color: "#1C4440", fontWeight: "bold", mb: 4 }}
      >
        Rent Your Agricultural Needs
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
          <Card key={idx} sx={{ width: 400, height: 500 }}>
            <CardContent>
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "310px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  // marginBottom: "16px",
                }}
              />

              {/* Rental Details */}
              <Box sx={{ mt: 4 }}>
                <Typography level="h2" textColor={"#1c4440"}>
                  {item.name}
                </Typography>
                <Typography>{item.description}</Typography>
              </Box>
              {/* Rent Now Button */}
              <Button
                component="a"
                href={item.link}
                rel="noopener noreferrer"
                sx={{
                  mt: 4,
                  backgroundColor: "#1C4440",
                  color: "#FFFFFF",
                  padding: "8px 16px",
                }}
              >
                Rent Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  </>
);

export default CropSelection;
