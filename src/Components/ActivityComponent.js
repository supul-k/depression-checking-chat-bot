import React from "react";
import {
  Box,
  Card,
  CardActions,
  Button,
  CardContent,
  Typography,
} from "@mui/material";

const viewportWidthInPx = window.innerWidth;

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const cardData = [
  {
    title: "Relaxation Meditation",
    description: "Unwind and reduce stress with guided meditation sessions.",
  },
  {
    title: "Nature Sounds Therapy",
    description: "Escape to the calming sounds of nature and find peace.",
  },
  {
    title: "Mindfulness for Stress",
    description:
      "Learn mindfulness techniques to alleviate stress and anxiety.",
  },
  {
    title: "Positive Affirmations",
    description: "Boost your mood and self-esteem with daily affirmations.",
  },
  {
    title: "Yoga for Well-being",
    description: "Improve your mental and physical health with yoga practice.",
  },
  {
    title: "Calm and Serene Mind",
    description:
      "Achieve a calm and serene state of mind through guided exercises.",
  },
];

const ActivityComponent = ({ open }) => {

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
              variant="outlined"
              style={{ width: "25%", marginBottom: "16px", margin: "20px", }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {bull}
                </Typography>
                <Typography variant="body2">{data.description}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default ActivityComponent;
