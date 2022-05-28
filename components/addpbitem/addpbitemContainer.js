import styles from '/components/addpbitem/addpbitem.module.css';
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


const AddpbitemContainer = () => {

    const [formValues, setFormValues] = useState({name: "",description: "", type: "" })

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
        top: "35%",
        width: "50%",
        position: "absolute",
        right: "25%",
    }

    const descriptionFieldProps = {
        width: "50%",
        position: "absolute",
        right: "25%",
        top: "50%"
    }


    return (
        <Card 
            className='bigCenteredCard' id='bigcenteredcardaddpbi'>
                <CardContent>
                    <Typography sx={titleProps}>
                        Add a product backlog item
                    </Typography>

                    <Typography sx={cardDescProps}>
                        Note : A product backlog item can be either an epic, a bug or a user story ^^
                    </Typography>
                    <Grid container alignItems="center" justify="center" direction="column">
                        <Grid item className={styles.choices}>
                            <label className={styles.container}> Epic 
                                <input type="radio" checked="checked" name="radio" />
                                <span className={styles.checkmark}></span>
                            </label>
                            <label className={styles.container}> Bug
                                <input type="radio" name="radio" />
                                <span className={styles.checkmark}></span>
                            </label>
                            <label className={styles.container}> User Story
                                 <input type="radio" name="radio" />
                                 <span className={styles.checkmark}></span>
                            </label>
                        </Grid>
                        <Grid item>
                            <TextField
                                sx={nameFieldProps}
                                id="name-input"
                                name="name"
                                label="Title"
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
                                value={formValues.description}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item>
                            <Button 
                                className={styles.submitButton}
                                variant="contained" color="primary">
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
        </Card>)
}

export default AddpbitemContainer;