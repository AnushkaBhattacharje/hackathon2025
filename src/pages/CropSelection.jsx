import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Autocomplete,
} from "@mui/joy";
import { Search } from "@mui/icons-material";
const autocompleteOptions = ["Wheat", "Rice", "Corn", "Soybean", "Barley"];
const crops = [
  {
    name: "Wheat",
    season: "Winter/Spring",
    description: "Wheat Seeds for Farming & Agriculture",
    image: "../../public/cart1.png", // Path to the image
  },
  {
    name: "Mustard",
    season: "Summer",
    description: "Mustard Seeds for Farming & Agriculture",
    image: "../../public/cart2.png", // Path to the image
  },
  {
    name: "Apple",
    season: "Autumn",
    description: "Apple Seeds for Farming & Agriculture",
    image: "../../public/cart3.png", // Path to the image
  },
  {
    name: "Papaya",
    season: "Autumn",
    description: "Papaya Seeds for Farming & Agriculture",
    image: "../../public/cart4.png", // Path to the image
  },
  {
    name: "Avocardo",
    season: "Autumn",
    description: "Avocardo Seeds for Farming & Agriculture",
    image: "../../public/cart5.png", // Path to the image
  },
  {
    name: "Rice",
    season: "Autumn",
    description: "Rice Seeds for Farming & Agriculture",
    image: "../../public/cart6.png", // Path to the image
  },

  // Add more crops with their respective images here...
];

const CropSelection = () => (
  // <Box>
  <>
    <Box
      sx={{
        backgroundColor: "#1C4440",
        color: "#FFFFFF",
        padding: 2,
        display: "flex",
        justifyContent: "space-between", // Space between logo and headers
        alignItems: "center",
      }}
    >
      {/* Logo */}
      <img
        src="../../public/image.png" // Replace with your logo's path
        alt="Logo"
        style={{ height: "60px", width: "180px", cursor: "pointer" }} // Adjust height as needed
      />

      {/* Navigation Links */}
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
        backgroundColor: "#F3F0E9", // Background color
        minHeight: "100vh", // Full viewport height
        padding: 4, // Padding around the content
      }}
    >
      {/* <Box
      sx={{
        backgroundColor: "#1C4440",
        color: "#FFFFFF",
        padding: 2,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
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
        to="/buy"
        style={{
          color: "#FFFFFF",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Buy
      </Link>
      <Link
        to="/rent"
        style={{
          color: "#FFFFFF",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Rent
      </Link>
      <Link
        to="/know-your-crops"
        style={{
          color: "#FFFFFF",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Know Your Crops
      </Link>
    </Box> */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          paddingX: 4,
          mt: 5,
        }}
      >
        <Typography level="h2" sx={{ color: "#1C4440", fontWeight: "bold" }}>
          Buy Your Agri Products
        </Typography>
        <Autocomplete
          placeholder="Search Your Products"
          // startDecorator={Search}
          freeSolo
          options={[]}
          sx={{
            width: 400,
            height: 50,
            backgroundColor: "#FFFFFF",
            "& .MuiInputBase-input": {
              color: "#1C4440", // Text color inside the input
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Crops"
              InputProps={{
                ...params.InputProps,
                // startAdornment: (
                //   // <SearchIcon
                //   //   sx={{
                //   //     color: "#1C4440",
                //   //     marginRight: 1,
                //   //   }}
                //   // />
                // ),
              }}
              sx={{
                "& .MuiFormLabel-root": {
                  color: "#1C4440", // Label color
                },
              }}
            />
          )}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          padding: 4,
        }}
      >
        {crops.map((crop, idx) => (
          <Card key={idx} sx={{ width: 400, mt: 10 }}>
            <CardContent>
              {/* Image */}
              <img
                src={crop.image}
                alt={crop.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              />

              {/* Crop Details */}
              <Typography level="h6">{crop.name}</Typography>
              <Typography>{crop.description}</Typography>
              <Typography level="body2" sx={{ mt: 1 }}>
                Season: {crop.season}
              </Typography>

              {/* View Details Button */}
              <Button
                component="a"
                href="https://amzn.to/43P26dQ"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Ensures security
                sx={{
                  mt: 2,
                  backgroundColor: "#1c4440",
                  padding: "16px 16px",
                  color: "#FFFFFF",
                }}
              >
                Buy Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    {/* </Box> */}
  </>
);

export default CropSelection;
