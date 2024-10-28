import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, Grid, Button, Box, Stack } from '@mui/material';
import { keyframes } from '@emotion/react';
import SendIcon from '@mui/icons-material/Send';

// Keyframes for animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Homepage = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            {/* Header Section with Profile */}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
                <Box
                    component={Card}
                    sx={{
                        width: 250,
                        height: 250,
                        overflow: 'hidden',
                        borderRadius: '50%',
                        animation: `${fadeInUp} 1.5s ease`,
                        boxShadow: 3,
                    }}
                >
                    <CardMedia
                        component="img"
                        image="/avatar.jpg" // Profile picture from public folder
                        alt="Profile"
                        sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s',
                            '&:hover': {
                                transform: 'scale(1.1)',
                            },
                        }}
                    />
                </Box>
                <Box sx={{ animation: `${fadeInUp} 1.5s ease 0.5s`, maxWidth: '60%' }}>
                    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Vishal Gusaiwal
                    </Typography>
                    <Typography variant="h5" color="text.secondary" paragraph>
                        Software Engineer | Full-Stack Developer
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Enthusiastic developer with expertise in .NET, C#, Node.js, React, and more. Passionate about building
                        innovative, scalable web applications and adding value to every project.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<SendIcon />}
                        href="mailto:vishalgusaiwal58@example.com?subject=Exciting%20Opportunity&body=Hello%20Vishal,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20impressed%20by%20your%20work.%20I%20would%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%20Please%20let%20me%20know%20your%20availability%20for%20a%20call.%0D%0A%0D%0AThanks%20and%20Best%20Regards,%0D%0A[Your%20Name]"
                        sx={{ mt: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' } }}
                    >
                        Contact Me
                    </Button>

                </Box>
            </Stack>

            {/* Portfolio Projects Section */}
            <Box sx={{ mt: 10, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', animation: `${fadeInUp} 1.5s ease 1s` }}>
                    Big Projects
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 5, animation: `${fadeInUp} 1.5s ease 1.2s` }}>
                    Explore some of my key projects that showcase my skills and expertise.
                </Typography>

                <Grid container spacing={4}>
                    {/* Project Card Example - Expense Tracker */}
                    <Grid item xs={12} sm={6} md={4} sx={{ animation: `${fadeInUp} 1.5s ease 1.4s` }}>
                        <Card sx={{ boxShadow: 5, transition: 'transform 0.4s', '&:hover': { transform: 'translateY(-10px)' } }}>
                            <CardMedia
                                component="img"
                                height="180"
                                image="/images/expense-tracker-thumbnail.jpg" // Thumbnail from public folder
                                alt="Expense Tracker"
                            />
                            <CardContent>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    Expense Tracker Application
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    A comprehensive application for tracking daily expenses with real-time analytics, built using React and Node.js.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    href="https://your-expense-tracker-domain.com"
                                    sx={{ mt: 2, width: '100%', transition: 'color 0.3s', '&:hover': { color: 'primary.dark' } }}
                                >
                                    View Project
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Add more project cards here as needed */}
                </Grid>
            </Box>
        </Container>
    );
};

export default Homepage;
