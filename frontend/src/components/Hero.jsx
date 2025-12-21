// import React, { useEffect } from 'react';
// import { Box, Container, Typography, Grid } from '@mui/material';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import illustration from "../assets/illustration.jpeg";

// const Hero = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <Box id="home" sx={{ minHeight: '90vh', display: 'flex', alignItems: 'center', pt: { xs: 10, md: 15 } }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Box data-aos="fade-right" data-aos-duration="1000">
//               <Typography
//                 variant="h1"
//                 sx={{
//                   color: 'primary.main',
//                   lineHeight: 1.2,
//                   mb: 3,
//                 }}
//               >
//                 GrowMore Digital - We Are Here To Grow Your Business Online
//               </Typography>
              
//               <Typography
//                 variant="h5"
//                 sx={{
//                   fontStyle: 'italic',
//                   mb: 4,
//                   color: 'text.secondary',
//                 }}
//                 data-aos="fade-right"
//                 data-aos-delay="300"
//               >
//                 Apne business ko next level tak le jaana ab hua aasan ✨
//               </Typography>

//               <Box
//                 data-aos="fade-up"
//                 data-aos-delay="600"
//                 sx={{
//                   p: 3,
//                   borderLeft: '4px solid',
//                   borderColor: 'secondary.main',
//                   backgroundColor: '#e9f7ef',
//                   borderRadius: 1,
//                   mt: 4,
//                 }}
//               >
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     color: 'secondary.main',
//                     mb: 2,
//                   }}
//                 >
//                   Unleash Your Online Potential
//                 </Typography>
//                 <Typography variant="body1">
//                   In today's competitive landscape, <strong>Digital Marketing</strong> is not an option—it's a necessity. We leverage <strong>SEO</strong>, <strong>Social Media</strong>, and <strong>Data-Driven Strategies</strong> to connect you with your ideal customers, ensuring measurable growth and a powerful online presence. Let us handle the digital world while you focus on what you do best.
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
          
//           <Grid item xs={12} md={6}>
//             <Box
//               data-aos="zoom-in"
//               data-aos-delay="800"
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//               }}
//             >
//               <img
//                 src={illustration}
//                 alt="Digital Marketing Illustration"
//                 style={{
//                   width: '100%',
//                   maxWidth: '500px',
//                   height: 'auto',
//                   animation: 'float 5s ease-in-out infinite',
//                 }}
//                 className="float-animation"
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Hero;


import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import illustration from '../assets/illustration.jpeg'; // FIXED PATH

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box id="home" sx={{ minHeight: '90vh', display: 'flex', alignItems: 'center', pt: { xs: 10, md: 15 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box data-aos="fade-right" data-aos-duration="1000">
              <Typography
                variant="h1"
                sx={{
                  color: 'primary.main',
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                GrowMore Digital - We Are Here To Grow Your Business Online
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  fontStyle: 'italic',
                  mb: 4,
                  color: 'text.secondary',
                }}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                Apne business ko next level tak le jaana ab hua aasan ✨
              </Typography>

              <Box
                data-aos="fade-up"
                data-aos-delay="600"
                sx={{
                  p: 3,
                  borderLeft: '4px solid',
                  borderColor: 'secondary.main',
                  backgroundColor: '#e9f7ef',
                  borderRadius: 1,
                  mt: 4,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'secondary.main',
                    mb: 2,
                  }}
                >
                  Unleash Your Online Potential
                </Typography>
                <Typography variant="body1">
                  In today's competitive landscape, <strong>Digital Marketing</strong> is not an option—it's a necessity. We leverage <strong>SEO</strong>, <strong>Social Media</strong>, and <strong>Data-Driven Strategies</strong> to connect you with your ideal customers, ensuring measurable growth and a powerful online presence. Let us handle the digital world while you focus on what you do best.
                </Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box
              data-aos="zoom-in"
              data-aos-delay="800"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={illustration}
                alt="Digital Marketing Illustration"
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  animation: 'float 5s ease-in-out infinite',
                }}
                className="float-animation"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;