import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/system";



export const StyledPaper = styled(Paper, {
    name: "StyledPaper",
    slot: "Wrapper"
})({
    display: "flex",
    flexDirection: "column",
    padding: "30px 20px",
    width: 400,
    margin: "20px 10px"
});

export const StyledGrid = styled(Grid, {
    name: "StyledGrid",
    slot: "Wrapper"
})({
    margin: "20px 10px",
    justifyContent:'center',
    alignItems:'center'
});