import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Box, Card, CardContent, Input } from "@mui/joy";
import { LocationOn, ChatBubbleOutline } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "./notification.css";
import axios from "axios";

const cardsData = [
  { label: "Buy AgriProducts", link: "./crops" },
  { label: "Rent Or Buy", link: "./cart" },
  { label: "Know Your Crop", link: "./advisory" },
];
const specificInfo = `
   1. Farmart Marketplace is one stop solution for purchasing, renting and knowing about agriculture
   2.you can purchase any agri commodities easily also rent any agriculture equipments and also know more about your harvest
   3.if you want to rent please go under the home tab and click on the rent no=w cart and next choose weather you want to rent machinery or truck it also gives free weather predictions so that you can always be careful
   4.if you want to know more about your crops go to th eknow your crop section which gives you the best practises for ypur crop
   

  `;

const HomePage = () => {
  const [location, setLocation] = useState("");
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const handleSendMessage = async () => {
    if (chatInput.trim()) {
      // Add user message to the chat
      setChatMessages([...chatMessages, { sender: "user", text: chatInput }]);
      const userMessage = chatInput;
      setChatInput("");

      try {
        // Call the chatbot API
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content: `You are an expert assistant and should answer questions based only on the following information:\n\n${specificInfo}`,
              },
              { role: "user", content: userMessage },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Add chatbot response to the chat
        const botMessage = response.data.choices[0].message.content;
        setChatMessages((prev) => [
          ...prev,
          { sender: "bot", text: botMessage },
        ]);
      } catch (error) {
        console.error("Error fetching chatbot response:", error);
        setChatMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Sorry, I couldn't process your request." },
        ]);
      }
      console.log("API Key:", `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`);
    }
  };
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
            "gurgaon"
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
        <Button
          variant="soft"
          startDecorator={<ChatBubbleOutline />}
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            minWidth: "auto",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#166e60",
            color: "white",
            "&:hover": { backgroundColor: "#124d48" },
          }}
          onClick={() => setIsChatboxOpen(!isChatboxOpen)}
        />
        {isChatboxOpen && (
          <Box
            sx={{
              position: "absolute",
              bottom: "90px",
              right: "20px",
              width: "300px",
              height: "400px",
              backgroundColor: "#F3F0E9",
              boxShadow: "0px 14px 28px rgba(0, 0, 0, 0.2)",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              zIndex: 1000,
            }}
          >
            <Box sx={{ background: "#1c4440", height: 30 }}>
              <Typography textAlign={"center"} textColor={"white"}>
                Your Assistant
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                padding: "8px",
                borderBottom: "1px solid #ddd",
              }}
            >
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: message.sender === "user" ? "right" : "left",
                    margin: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      padding: "10px",
                      borderRadius: "10px",
                      backgroundColor:
                        message.sender === "user" ? "#DFF5F0" : "#FFFFFF",
                      color: "#333",
                    }}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "8px",
                borderTop: "1px solid #ddd",
              }}
            >
              <Input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your message..."
                sx={{ flexGrow: 1, marginRight: "8px" }}
              />
              <Button
                onClick={handleSendMessage}
                sx={{
                  backgroundColor: "#1c4440",
                  color: "white",
                  "&:hover": { backgroundColor: "#166e60" },
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default HomePage;
