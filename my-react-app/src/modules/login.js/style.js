import { TextField } from "@mui/material";
import styled from "styled-components";


export const LoginContainer = styled('div')({
    width: '100%',
    height: '100vh', // Adjust the height to fill the entire viewport
    display: 'flex',
    flexDirection: 'column', // Align children vertically
    justifyContent: 'center', // Center children vertically
    alignItems: 'center', // Center children horizontally
  });
  
  export const LoginHeader = styled('div')({
    boxShadow: '0 2px 8px hsla(0,0%,79%,.2), inset 0 -1px 0 rgba(0,0,0,.05)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '65px',
    fontFamily: 'Plus Jakarta Sans',
    display: 'flex'
  })

  export const HeaderText = styled('div')({
    fontFamily: 'Plus Jakarta Sans',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 10px'
  })

  export const CustomTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        display: "none",
      },
      "& input": {
        padding: "10px",
        backgroundColor: "#f0f0f0",
        color: "#8396A8",
        borderRadius: "5px",
        "&:-webkit-autofill": {
          WebkitBoxShadow: `0 0 0 1000px '#f0f0f0' inset`,
          transition: "background-color 5000s ease-in-out 0s",
        },
      },
      backgroundColor: "#f0f0f0",
      borderRadius: "5px",
    },
  }));

  export const InputContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  })