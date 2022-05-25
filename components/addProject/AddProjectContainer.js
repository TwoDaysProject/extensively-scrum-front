import styles from './AddProject.module.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { buttonBaseClasses } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00204A',
      dark: '#00204A',
    },

  },
});


const AddProjectContainer = () => {

    const [formValues, setFormValues] = useState({name: "",description: ""})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };
    

    const titleProps = { 
        fontSize: 24,
        lineHeight: "150%",
        color: "#00204A",
        fontFamily: "'Potta One', cursive",
        fontWeight: 600,
        textAlign: "center",
        paddingTop: 5,
        textShadow: "2px 2px 12px rgba(0,0,0,0.7)"
    }

    const cardDescProps = { 
        fontSize: 20,
        lineHeight: "150%",
        color: "#00204A",
        fontFamily: "'Nunito', cursive",
        fontWeight: 200,
        textAlign: "center",
        padding: 5
    }

    const nameFieldProps = {
        width: "50%",
        position: "absolute",
        right: "25%",
    }

    const descriptionFieldProps = {
        width: "50%",
        position: "absolute",
        right: "25%",
        top: "56%"
    }


    return (
        <Card 
            className='bigCenteredCard'>
                <CardContent>
                    <Typography sx={titleProps}>
                        Create a new scrum project
                    </Typography>

                    <Typography sx={cardDescProps}>
                        Once a project is created, you will be able to manage your project and team, and view all the scrum artifacts in your project.<br/>
                        you will also be able to trace the development of the project through the board and burndown chart.
                    </Typography>
                    <Grid container alignItems="center" justify="center" direction="column">
                        <Grid item>
                            <TextField
                                sx={nameFieldProps}
                                id="name-input"
                                name="name"
                                label="Name"
                                type="text"
                                value={formValues.name}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                sx={descriptionFieldProps}
                                id="description-input"
                                name="description"
                                label="Description"
                                type="text"
                                multiline
                                minRows={3}
                                value={formValues.description}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <Button 
                                className={styles.submitButton}
                                variant="contained" color="primary">
                                Next
                            </Button>
                        </Grid>
                    </Grid>

                </CardContent>
        </Card>)
}

export default AddProjectContainer;