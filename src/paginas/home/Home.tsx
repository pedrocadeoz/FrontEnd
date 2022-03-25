import react from 'react';
import { Paper, Box, Button, Grid, Typography } from '@material-ui/core';
import './Home.css';

function Home(){
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3f51b5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3f51b5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>                
                <Grid item xs={6}>
                  <img src="https://www.kbrtec.com.br/blog/wp-content/uploads/2021/06/por-que-ter-um-blog-em-santos-kbr-tec.jpg" alt="" width="500px" height="400px" />
                    
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

        </>
    ); 
}

export default Home;