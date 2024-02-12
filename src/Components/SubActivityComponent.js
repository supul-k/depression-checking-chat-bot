import React, { useEffect } from "react";
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
import dancing from "../Assets/Images/physical/dancing.webp";
import jogging from "../Assets/Images/physical/jogging.webp";
import walking from "../Assets/Images/physical/walking.webp";
import yoga from "../Assets/Images/physical/yoga.webp";
import Mindfulness from "../Assets/Images/relax/Mindfulness.webp";
import Muscle from "../Assets/Images/relax/Muscle.webp";
import breathing from "../Assets/Images/relax/breathing.webp";
import Meditation from "../Assets/Images/routine/Meditation.webp";
import sleep from "../Assets/Images/routine/sleep.webp";

const physicalData = [
  {
    index: 1,
    title: "Walking",
    description: `"Walking" as a mental health activity is a simple yet powerful practice that can contribute significantly to overall well-being.`,
    image: walking,
  },
  {
    index: 2,
    title: "Jogging",
    description: `Jogging is a highly effective mental health activity that combines physical exercise with the benefits of aerobic activity.`,
    image: jogging,
  },
  {
    index: 3,
    title: "Yoga",
    description: `"Yoga" is a holistic practice that combines physical postures, breath control, meditation, and ethical principles to promote overall well-being, including mental health.`,
    image: yoga,
  },
  {
    index: 4,
    title: "Dancing",
    description: `"Dancing" as a mental health activity is a joyful and expressive way to promote emotional well-being, reduce stress, and boost overall mood.`,
    image: dancing,
  },
];

const relaxData = [
  {
    index: 7,
    title: "Mindfulness Meditation",
    description: `"Mindfulness Meditation" is a mental health activity that involves cultivating awareness and presence in the current moment.`,
    image: Mindfulness,
  },
  {
    index: 8,
    title: "Deep Breathing Exercises",
    description: `"Deep Breathing Exercises" are a powerful and accessible mental health activity that can help reduce stress, promote relaxation, and improve overall well-being.`,
    image: breathing,
  },
  {
    index: 9,
    title: "Muscle Relaxation",
    description: `"Muscle Relaxation" is a mental health activity that involves deliberately tensing and then releasing different muscle groups in the body to promote physical and mental relaxation.`,
    image: Muscle,
  },
];

const routineData = [
  {
    index: 5,
    title: "Sleep Patterns",
    description: `"Sleep Patterns" refer to the establishment of healthy and consistent sleep habits, which are crucial for mental health and overall well-being.`,
    image: Meditation,
  },
  {
    index: 6,
    title: "Meal Times",
    description: `"Meal Times" as a mental health activity involve establishing and maintaining a routine around when and how you eat.`,
    image: sleep,
  },
];

const cardData = [physicalData, routineData, relaxData,];

const SubActivityComponent = ({dataIndex}) => {
  const navigate = useNavigate();

  const handleActivityChat = () => {
    navigate("/activitychat");
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: "100vh",
          paddingTop: "100px",
          // marginLeft: "200px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            maxWidth: "100%",
          }}
        >
          {cardData[dataIndex].map((data, index) => (
            <Card
              key={index}
              sx={{ flex: "0 0 50%", maxWidth: "345px", margin: "20px" }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
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

export default SubActivityComponent;
