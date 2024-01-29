import React from "react";
import {
  Box,
  Card,
  CardActions,
  Button,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
// import { ChatActivityApi } from "../api/Axios";
import { useNavigate } from "react-router-dom";
import physical from "../Assets/Images/physical.webp";
import relax from "../Assets/Images/relax.webp";
import routines from "../Assets/Images/routines.webp";
import yoga from "../Assets/Images/yoga.webp";

const viewportWidthInPx = window.innerWidth;

const cardData = [
  {
    index: 1,
    title: "Yoga Practice",
    description: "Unwind and reduce stress with guided meditation sessions.",
    image: yoga,
  },
  {
    index: 2,
    title: "Physical activities",
    description: "Escape to the calming sounds of nature and find peace.",
    image: physical,
  },
  {
    index: 3,
    title: "Maintain a routine",
    description:
      "Learn mindfulness techniques to alleviate stress and anxiety.",
    image: routines,
  },
  {
    index: 4,
    title: "Relaxation techniques",
    description: "Boost your mood and self-esteem with daily affirmations.",
    image: relax,
  },
];

const ActivityComponent = ({ open }) => {
  const navigate = useNavigate();
  
  // const [isbotResponding, setIsbotResponding] = useState(true);

  const handleActivityChat = (title) => {
    navigate("/activitychat");
    // setIsbotResponding(false);
    // const topic = {
    //   title: title,
    // };
    // console.log("title", topic);
    // ChatActivityApi(topic)
    //   .then((response) => {
    //     console.log("response", response.data.message);
    //     console.log("status", response.data.status);
    //     if (response.data.status === true) {
    //       setIsbotResponding(true);
    //       navigate("/activitychat");
    //     } else {
    //       setIsbotResponding(true);
    //       console.log("Response failed");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error", error.response.data.message);
    //   });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(45deg, #03045e 30%, #0077b6 90%)",
          height: "100vh",
          paddingTop: "100px",
          width: open
            ? `calc(${viewportWidthInPx}px - 240px)`
            : `calc(${viewportWidthInPx}px - 65px)`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {cardData.map((data, index) => (
            <Card
              key={index}
              sx={{ flex: "0 0 50%", maxWidth: "345px", margin: "20px" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="80"
                image={data.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() => handleActivityChat(data.title)}
                  size="small"
                  // disabled={!isbotResponding}
                >
                  Start guide
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default ActivityComponent;
