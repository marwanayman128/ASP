/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Container, Stack, TextField, Typography, Button } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import CircularProgress from '@mui/material/CircularProgress';

export default function footer({ setEmailSent }) {
    const form = useRef();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm('service_fekmd37', 'template_1hxebdu', form.current, 'VTPJ1cPU5pKvOY9yD')
            .then((result) => {
                console.log(result.text);

                if (result.text === 'OK') {
                    setEmailSent(true);
                    navigate('/Success');
                }
            })
            .catch((error) => {
                console.log(error.text);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };


    const phoneNumber = '+0416141221';

    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    return (
        <>
            {isLoading && (
                <div className="fullscreen-overlay">
                    <CircularProgress
                        size={68}
                        sx={{
                            color: '#ed5521',
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            zIndex: 1000000,
                            transform: 'translate(-50%, -50%)', // Center the CircularProgress
                        }}
                    />
                </div>
            )}



            <footer className="footer clearfix">
                <Container sx={{ pb: 5 }}>
                    {/* First footer */}
                    <div className="first-footer">
                        <Stack mb={5}>
                            <Stack gap={2} direction={"row"}>
                                <Typography color={"#fff"} pb={2} variant="h4" >GET IN </Typography>
                                <Typography variant="h4" color={"#ed5521"}>TOUCH</Typography>

                            </Stack>
                            <Typography width={"50%"}>We are very approachable and would love to speak to you. Feel free to call, send us an email, Tweet us or simply complete the enquiry form.</Typography>

                        </Stack>
                    </div>


                    {/* Second footer */}
                    <Stack pt={5} direction={{ xs: "column", sm: "column", md: "row", lg: "row", xl: "row" }} justifyContent={"space-between"} alignItems={"start"}>
                        {/* about & social icons */}
                        <Box pb={{ xs: 5, sm: 5, md: 0, lg: 0, xl: 0 }} width={{ xs: "100%", sm: "100%", md: "40%", lg: "40%", xl: "40%" }}>
                            <Stack gap={4} direction={"column"}>

                                <Stack alignItems={"center"} direction={"row"} gap={2} color={"white"}>
                                    <Box sx={{
                                        width: "50px", height: "50px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ed5521"
                                    }}><LocationOnIcon />
                                    </Box>
                                    <Typography>6 winbourne st west Ryde 2114</Typography>

                                </Stack>

                                <Stack alignItems={"center"} direction={"row"} gap={2} color={"white"}>
                                    <Box sx={{
                                        width: "50px", height: "50px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ed5521"
                                    }}><EmailIcon />
                                    </Box>
                                    <Typography>info@aspbuilding.com.au</Typography>

                                </Stack>
                                <Stack onClick={handleCallClick} alignItems={"center"} direction={"row"} gap={2} color={"white"}>
                                    <Box sx={{
                                        width: "50px", height: "50px", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#ed5521"
                                    }}><LocalPhoneIcon />
                                    </Box>
                                    <Typography>0416 141 221</Typography>

                                </Stack>


                            </Stack>
                        </Box>
                        <form style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} ref={form} onSubmit={sendEmail}>
                            <Stack width={{ xs: "100%", sm: "100%", md: "90%", lg: "90%", xl: "90%" }} gap={2} direction={"row"}>
                                <Stack width={"100%"} gap={2} direction={"column"} color={"white"}>
                                    <TextField style={{ width: "100%", border: "1px solid #ed5521", color: "white" }} InputProps={{ style: { color: 'white', '&::placeholder': { color: 'white' }, }, }} placeholder="Name" type=""  ></TextField>
                                    <TextField style={{ width: "100%", border: "1px solid #ed5521", color: "white" }} InputProps={{ style: { color: 'white', '&::placeholder': { color: 'white' }, }, }} placeholder="Number" type=""  ></TextField>
                                    <TextField style={{ width: "100%", border: "1px solid #ed5521", color: "white" }} InputProps={{ style: { color: 'white', '&::placeholder': { color: 'white' }, }, }} placeholder="Email" type=""  ></TextField>
                                    <Button type="submit" style={{ backgroundColor: "#ed5521", outline: "none", color: "white", border: "none", padding: "12px 0", display: "flex", justifyContent: "center", alignItems: "center" }}>SUBMIT</Button>

                                </Stack>
                                <Stack width={"100%"}>
                                    <TextField multiline rows={7} columns={4} style={{ width: "100%", border: "1px solid #ed5521", color: "white" }} InputProps={{ style: { color: 'white', '&::placeholder': { color: 'white' }, }, }} placeholder="Message here..." type=""  ></TextField>
                                </Stack>

                            </Stack>
                        </form>

                    </Stack>
                    {/* Bottom footer */}
                    <div className="bottom-footer-text">
                        <div className="row copyright">
                            <div className="col-md-12">
                                <p className="mb-0">©2023 <a href="#">ASP Building Services</a>. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>



        </>
    )
}
