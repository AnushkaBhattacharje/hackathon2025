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
          Buy Products
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
          Rent Machine
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
                href="https://www.amazon.in/Green-World-250-Gms-pack/dp/B0BBWF9G26/ref=sr_1_6?crid=BA7DHWF9FK9H&dib=eyJ2IjoiMSJ9.0kIN_XzuVMrpn_7rSNsp1Uj4Ol2LwjX-QqA613lXDsjliFjK_4xkLAc4se6Z9vecGzRquu8f-z4bkfNrCzOR3rY5rAm147VeQPtJD-0OfIWo-cymwyQwSYEe5XuLoZHhU2oh9pfI7fS-oU4u9FqTXUjiDTTIwFq1liC64K33xos3CwaBLWLw7Xj0I9b2GeraTaVNF7JjiFsfkJsW-GqYyS8Pplb0aHR9votm7prgkrlkJnce7taT9MS6ERLc26ZKdKv0bCQjoT4S5MzVsTn2C4jdpaQRGdX4Z1VfzFYVKCQ.f1O0yaLbQJXhm_S2dHn2Jrap-DVZNGeqc3HgkGwkM9g&dib_tag=se&keywords=wheat%2Bseeds&qid=1744280170&sprefix=wheat%2Bseeds%2Caps%2C253&sr=8-6&th=1"
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
