// import React, { useEffect } from 'react';
// import { Box, Container, Typography, Grid } from '@mui/material';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Clients = () => {
//   useEffect(() => {
//     AOS.refresh();
//   }, []);

//   const clients = [
//     { id: 1, img: 'client1.jpeg', alt: 'Client Logo 1' },
//     { id: 2, img: 'client2.jpeg', alt: 'Client Logo 2' },
//     { id: 3, img: 'client3.jpeg', alt: 'Client Logo 3' },
//     { id: 4, img: 'client4.jpeg', alt: 'Client Logo 4' },
//   ];

//   return (
//     <Box id="clients" sx={{ py: 8, bgcolor: 'background.default' }}>
//       <Container maxWidth="lg">
//         <Typography
//           variant="h2"
//           data-aos="fade-up"
//           sx={{ mb: 6, textAlign: 'center' }}
//         >
//           Trusted By Our Clients
//         </Typography>

//         <Grid container spacing={4} justifyContent="center" alignItems="center">
//           {clients.map((client, index) => (
//             <Grid item xs={6} sm={3} key={client.id}>
//               <Box
//                 data-aos="flip-up"
//                 data-aos-delay={(index + 1) * 100}
//                 sx={{
//                   width: '100%',
//                   height: '150px',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   p: 3,
//                   backgroundColor: 'white',
//                   borderRadius: 2,
//                   transition: 'transform 0.5s ease-in-out',
//                   '&:hover': {
//                     transform: 'scale(1.1)',
//                     '& img': {
//                       filter: 'grayscale(0%)',
//                       opacity: 1,
//                     },
//                   },
//                 }}
//               >
//                 <img
//                   src={`/assets/${client.img}`}
//                   alt={client.alt}
//                   style={{
//                     maxWidth: '100%',
//                     maxHeight: '100%',
//                     filter: 'grayscale(100%)',
//                     opacity: 0.7,
//                     transition: 'all 0.3s ease',
//                   }}
//                 />
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Clients;

import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import client1 from '../assets/client1.jpeg';
import client2 from '../assets/client2.jpeg';
import client3 from '../assets/client3.jpeg';
import client4 from '../assets/client4.jpeg';

const Clients = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const clients = [
    { id: 1, img: client1, alt: 'Client Logo 1' },
    { id: 2, img: client2, alt: 'Client Logo 2' },
    { id: 3, img: client3, alt: 'Client Logo 3' },
    { id: 4, img: client4, alt: 'Client Logo 4' },
  ];

  return (
    <Box id="clients" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          data-aos="fade-up"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Trusted By Our Clients
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {clients.map((client, index) => (
            <Grid item xs={6} sm={3} key={client.id}>
              <Box
                data-aos="flip-up"
                data-aos-delay={(index + 1) * 100}
                sx={{
                  width: '100%',
                  height: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 3,
                  backgroundColor: 'white',
                  borderRadius: 2,
                  transition: 'transform 0.5s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    '& img': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                    },
                  },
                }}
              >
                <img
                  src={client.img}
                  alt={client.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    filter: 'grayscale(100%)',
                    opacity: 0.7,
                    transition: 'all 0.3s ease',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Clients;