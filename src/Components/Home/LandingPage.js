import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "80%",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "4rem",
          textAlign: "center",
          marginTop: 2,
          width: "auto",
        }}
      >
        We are here for you!
      </Typography>
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* <Button
          sx={{
            backgroundColor: "#0C0404",
            marginBottom: 2,
            marginRight: 2,
            color: "white",
            "&:hover": {
              color: "#0C0404",
            },
          }}
          size="large"
          onClick={() => {
            navigate("/medihelp");
          }}
        >
          Medi Help
        </Button>
        <Button
          sx={{
            backgroundColor: "#0C0404",
            marginBottom: 2,
            color: "white",
            "&:hover": {
              color: "#0C0404",
            },
          }}
          size="large"
          onClick={() => {
            navigate("/activity");
          }}
        >
          Activities
        </Button> */}
        <Typography color="azure" sx={{textAlign:'center', margin:'0 100px 0 100px'}}>
          Mental health encompasses an individual's emotional, psychological,
          and social well-being, influencing how they think, feel, and act. It
          involves navigating daily challenges, building resilience, and
          maintaining positive relationships. Mental health is not just the
          absence of mental disorders but also the presence of cognitive
          abilities, effective coping mechanisms, and the capacity to enjoy
          life. It's a crucial aspect of overall well-being, emphasizing the
          importance of seeking support, fostering self-awareness, and reducing
          stigma around mental health issues. Taking care of mental health is
          integral to leading a fulfilling and balanced life, allowing
          individuals to face life's ups and downs with resilience and strength.
        </Typography>
      </div>
    </Box>
  );
}

export default LandingPage;
