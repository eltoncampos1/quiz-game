import { Button, Typography } from "@mui/material"
import { Box  } from "@mui/system";

export const StartOrCancel = () => {

  return (
      <Box
        sx={{
            width: "100%",
            flexDirection: "column",
            height: '100vh',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
        }}
      >
          <Typography marginBottom="3rem" maxWidth="60%" variant="h4">If you want to continue click on "Start", if you want to choose the number of questions again click on "Cancel". </Typography>
           <Box>
           <Button size="large" variant="contained" color="success" sx={{ marginRight: '2rem', padding: '.6rem 2rem'}} > &nbsp;Start &nbsp;</Button>
           <Button size="large"  color="error" variant="contained" sx={{  padding: '.6rem 2rem'}}>Cancel</Button>
           </Box>
      </Box>
  )
}