import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./CreateRoomPage.css"; // Import CSS file

export default function CreateRoomPage() {
    return (
        <Grid container spacing={3} className="create-room-container">
            <Grid item xs={12} align="center">
                <Typography variant="h4" className="title">
                    Create a Room
                </Typography>
            </Grid>
            
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText className="form-helper">
                        <div align='center'>
                            Guest Control Settings
                        </div>
                        
                    </FormHelperText>
                    <RadioGroup row defaultValue="true">
                        <FormControlLabel
                            value="true"
                            control={<Radio color="primary" />}
                            label="Play/Pause Allowed"
                        />
                        <FormControlLabel
                            value="false"
                            control={<Radio color="secondary" />}
                            label="Play/Pause Restricted"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Grid item xs={12} align="center">
                <TextField
                    required
                    type="number"
                    defaultValue={2}
                    label="Votes Required to Skip"
                    className="input-field"
                />
            </Grid>

            <Grid item xs={12} align="center">
                <Button variant="contained" color="primary" className="create-btn">
                    Create Room
                </Button>
            </Grid>

            <Grid item xs={12} align="center">
                <Button variant="outlined" color="secondary" to="/" component={Link} className="back-btn">
                    Back to Home
                </Button>
            </Grid>
        </Grid>
    );
}
