import { Box } from "@mui/system"
import Container from '@mui/material/Container'
import { LayoutContainerProps } from "./types"



export const LayoutContainer = ({children}: LayoutContainerProps) => {
  return (
    <Box sx={{ width: '100%', height: '100vh'}}> 
        <Container >
            {children}
        </Container>
    </Box>
  )
}