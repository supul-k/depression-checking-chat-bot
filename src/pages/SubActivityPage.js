import React from 'react'
import SubActivityComponent from "../Components/SubActivityComponent";
import { useParams } from 'react-router-dom';
import { Box } from "@mui/material";

const SubActivityPage = () => {
  const { index } = useParams();
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent:"space-around",
          height: "100%",
        }}
      >
        <SubActivityComponent dataIndex={index}/>
      </Box>
    </div>
  )
}

export default SubActivityPage
