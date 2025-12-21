// import React, { useEffect } from 'react';
// import { Box, Container, Typography, Grid } from '@mui/material';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Projects = () => {
//   useEffect(() => {
//     AOS.refresh();
//   }, []);

//   const projects = [
//     { id: 1, img: 'project1.jpeg', title: 'Branding Case Study' },
//     { id: 2, img: 'project2.jpeg', title: 'Social Media Campaign' },
//     { id: 3, img: 'project3.jpeg', title: 'Web Redesign' },
//   ];

//   return (
//     <Box id="projects" sx={{ py: 8 }}>
//       <Container maxWidth="lg">
//         <Typography
//           variant="h2"
//           data-aos="fade-up"
//           sx={{ mb: 6, textAlign: 'center' }}
//         >
//           Our Recent Projects
//         </Typography>

//         <Grid container spacing={4} justifyContent="center">
//           {projects.map((project, index) => (
//             <Grid item xs={12} md={4} key={project.id}>
//               <Box
//                 data-aos="zoom-in"
//                 data-aos-delay={(index * 2 + 1) * 100}
//                 sx={{
//                   position: 'relative',
//                   overflow: 'hidden',
//                   borderRadius: 3,
//                   boxShadow: 3,
//                   height: '300px',
//                   cursor: 'pointer',
//                   '&:hover': {
//                     '& img': {
//                       transform: 'scale(1.1)',
//                     },
//                     '& .project-overlay': {
//                       opacity: 1,
//                     },
//                   },
//                 }}
//               >
//                 <img
//                   src={`/assets/${project.img}`}
//                   alt={project.title}
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     transition: 'transform 0.5s ease-in-out',
//                   }}
//                 />
//                 <Box
//                   className="project-overlay"
//                   sx={{
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     backgroundColor: 'rgba(255, 162, 0, 0.8)',
//                     color: 'white',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     opacity: 0,
//                     transition: 'opacity 0.3s ease-in-out',
//                   }}
//                 >
//                   <Typography
//                     variant="h5"
//                     sx={{
//                       fontWeight: 600,
//                       textTransform: 'uppercase',
//                       textAlign: 'center',
//                       p: 2,
//                     }}
//                   >
//                     {project.title}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Projects;

import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';

const Projects = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const projects = [
    { id: 1, img: project1, title: 'Branding Case Study' },
    { id: 2, img: project2, title: 'Social Media Campaign' },
    { id: 3, img: project3, title: 'Web Redesign' },
  ];

  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          data-aos="fade-up"
          sx={{ mb: 6, textAlign: 'center' }}
        >
          Our Recent Projects
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={project.id}>
              <Box
                data-aos="zoom-in"
                data-aos-delay={(index * 2 + 1) * 100}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 3,
                  boxShadow: 3,
                  height: '300px',
                  cursor: 'pointer',
                  '&:hover': {
                    '& img': {
                      transform: 'scale(1.1)',
                    },
                    '& .project-overlay': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease-in-out',
                  }}
                />
                <Box
                  className="project-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 162, 0, 0.8)',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      p: 2,
                    }}
                  >
                    {project.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;