import * as React from 'react';
import { Button, Checkbox, Container, Grid, Typography, TextField, Box, Modal } from "@mui/material";
import FdsCard01 from "./components/dfsCard.jsx";
import Navbar from './components/navbar/Navbar.jsx';

const modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#33383F',
    border: '2px solid #1A1D1F',
    borderRadius: '10px 20px 10px 20px',
    boxShadow: 24,
    p: 4,
  };

export default function App() {
    const labelCheckBox = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container>
            <Navbar/>
        


        {/* H1, H2, H3, H4, H5, H6 */}
        <Grid container>
            <Grid item lg={12}><Typography variant="h1" color="primary">Headline 1</Typography></Grid>  
            <Grid item lg={12}>
            <pre>
                <code>
                {'variant="h1" color="primary"'}
                </code>
            </pre>
            </Grid>

            <Grid item lg={12}><Typography variant="h2">Headline 2</Typography></Grid>
            <Grid item lg={12}>
            <pre>
                <code>
                {'variant="h2"'}
                </code>
            </pre>
            </Grid>

            <Grid item lg={12}><Typography variant="h3">Headline 3</Typography></Grid>
            <Grid item lg={12}>
            <pre>
                <code>
                {'variant="h3"'}
                </code>
            </pre>
            </Grid>

            <Grid item lg={12}><Typography variant="h4">Headline 4</Typography></Grid>
            <Grid item lg={12}>
            <pre>
                <code>
                {'variant="h4"'}
                </code>
            </pre>
            </Grid>

            <Grid item lg={12}><Typography variant="h5">Headline 5</Typography></Grid>
            <Grid item lg={12}>
            <pre>
                <code>
                {'variant="h5"'}
                </code>
            </pre>
            </Grid>

            <Grid item lg={12}><Typography variant="h6">Headline 6</Typography></Grid>
            <Grid item lg={12}>
            <pre>
                <code>
                {'variant="h6"'}
                </code>
            </pre>
            </Grid>
        </Grid>
        
        {/* Buttons */}
        <Grid container>
            <Grid item lg={4}>
                <Button variant="contained" color="primary">Btn Contained Primary</Button>
                <pre>
                <code>
                {'variant="contained" color="primary"'}
                </code>
                </pre>
            </Grid>

            <Grid item lg={4}>
                <Button variant="contained" color="secondary">Btn Contained Seconday</Button>
                <pre>
                <code>
                {'variant="contained" color="secondary"'}
                </code>
                </pre>
            </Grid>
            
            <Grid item lg={4}>
                <Button variant="contained" color="info">Btn Contained Info</Button>
                <pre>
                <code>
                {'variant="contained" color="info"'}
                </code>
                </pre>
            </Grid>

            <Grid item lg={4}>
            <Button variant="outlined" color="primary">Btn outlined Primary</Button>
                <pre>
                <code>
                {'variant="outlined" color="primary"'}
                </code>
                </pre>
            </Grid>

            <Grid item lg={4}>
            <Button variant="outlined" color="secondary">Btn outlined Secondary</Button>
                <pre>
                <code>
                {'variant="outlined" color="secondary"'}
                </code>
                </pre>
            </Grid>

            <Grid item lg={4}>
            <Button variant="outlined" color="info">Btn outlined Info</Button>
                <pre>
                <code>
                {'variant="outlined" color="info"'}
                </code>
                </pre>
            </Grid>

            <Grid item lg={4}>
            <Button variant="contained" color="success">Btn Contained Success</Button>
                <pre>
                <code>
                {'variant="contained" color="success"'}
                </code>
                </pre>
            </Grid>

            <Grid item lg={4}>
            <Button variant="contained" color="error">Btn Contained Error</Button>
                <pre>
                <code>
                {'variant="contained" color="error"'}
                </code>
                </pre>
            </Grid>

            <Grid item lg={4}>
            <Button variant="contained" color="warning">Btn Contained warning</Button>
                <pre>
                <code>
                {'variant="contained" color="warning"'}
                </code>
                </pre>
            </Grid>

            <Grid item lg={4}>
            <Button variant="outlined" color="success">Btn outlined Success</Button>
                <pre>
                <code>
                {'variant="outlined" color="success"'}
                </code>
                </pre>
            </Grid>

            <Grid item lg={4}>
            <Button variant="outlined" color="error">Btn outlined Error</Button>
                <pre>
                <code>
                {'variant="outlined" color="error"'}
                </code>
                </pre>
            </Grid>

            <Grid item lg={4}>
            <Button variant="outlined" color="warning">Btn outlined C:warning</Button>
                <pre>
                <code>
                {'variant="outlined" color="warning"'}
                </code>
                </pre>
            </Grid>

        {/* Checkbox */}
        <Grid container>
        <Grid item lg={4}>
            <div>
            <Checkbox {...labelCheckBox} defaultChecked />
            <Checkbox {...labelCheckBox} defaultChecked color="secondary" />
            <Checkbox {...labelCheckBox} defaultChecked color="success" />
            <Checkbox {...labelCheckBox} defaultChecked color="default" />
            </div>
        </Grid>
        </Grid>

        {/* TextField */}
        <Grid container>
        <Grid item lg={4}>
        <TextField label="Name" variant="outlined" color="primary" />
                <pre>
                <code>
                {'variant="outlined" color="primary"'}
                </code>
                </pre>
        </Grid>

        <Grid item lg={4}>
        <TextField label="Name" variant="outlined" color="secondary" />
                <pre>
                <code>
                {'variant="outlined" color="secondary"'}
                </code>
                </pre>
        </Grid>

        <Grid item lg={4}>
        <TextField label="Name" variant="outlined" color="info" />
                <pre>
                <code>
                {'variant="outlined" color="info"'}
                </code>
                </pre>
        </Grid>

        <Grid item lg={4}>
        <TextField label="Name" variant="filled" color="primary" />
                <pre>
                <code>
                {'variant="filled" color="primary"'}
                </code>
                </pre>
        </Grid>

        <Grid item lg={4}>
        <TextField label="Name" variant="filled" color="secondary" />
                <pre>
                <code>
                {'variant="filled" color="secondary"'}
                </code>
                </pre>
        </Grid>

        <Grid item lg={4}>
        <TextField label="Name" variant="filled" color="info" />
                <pre>
                <code>
                {'variant="filled" color="info"'}
                </code>
                </pre>
        </Grid>

        </Grid>

        {/* Modal */}
        <Grid container>
        <Grid item lg={12}>
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box sx={modalstyle}>
                <Typography id="modal-modal-title" variant="h4" color="primary">
                Title of the Modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Ferrum Network is an interoperable L1 network, powered by a multichain messaging engine designed to communicate and connect with every blockchain, enabling a frictionless environment for developers to deploy multichain DApps and for users to engage in a fully interoperable Web 3.0.
            </Typography>
            </Box>
            </Modal>
        </div>
        </Grid>
        </Grid>

        {/* Modal */}
        <Grid container>
        <Grid item lg={6}>
        <FdsCard01/>
        </Grid>
        </Grid>

        </Grid>
        </Container>
    )
}