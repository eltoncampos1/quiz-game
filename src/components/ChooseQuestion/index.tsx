import { Input, Button, Typography } from '@mui/material';
import { Box  } from "@mui/system";

export const ChooseQuestion = () => {
  return (
    <Box sx={{ display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%', 
        height: '100vh'
    }}>
        <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        width: '40%', 
        }}>

            <Typography 
                variant="h6" 
                sx={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '1.5rem'
                }}>
                    Quantas perguntas você deseja responder?
            </Typography>

            <Box sx={{ width: '100%', display: 'flex' }}>
                <Input 
                    placeholder="Digite um valor" 
                    type="number"
                    sx={{ 
                        width: '90%', 
                        height: '50px',
                        border: 'none',
                    }}
                />
                <Button type="submit" variant="contained" sx={{ background: '#00bdbf', color: '#fff', marginLeft: '1rem' }}>
                    Avançar
                </Button>
            </Box>
        </Box>
    </Box>
  )
}