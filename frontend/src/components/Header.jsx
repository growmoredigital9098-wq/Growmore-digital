// // import React, { useState } from 'react';
// // import {
// //   AppBar,
// //   Toolbar,
// //   IconButton,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   Box,
// //   useMediaQuery,
// //   useTheme,
// //   Button,
// // } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import CloseIcon from '@mui/icons-material/Close';
// // import logo from "../assets/logo.jpeg";

// // const Header = () => {
// //   const [mobileOpen, setMobileOpen] = useState(false);
// //   const theme = useTheme();
// //   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

// //   const navItems = [
// //     { label: 'Home', href: '#home' },
// //     { label: 'About Us', href: '#about' },
// //     { label: 'Our Services', href: '#services' },
// //     { label: 'Our Clients', href: '#clients' },
// //     { label: 'Projects', href: '#projects' },
// //     { label: 'Contact Us', href: '#contact' },
// //   ];

// //   const handleDrawerToggle = () => {
// //     setMobileOpen(!mobileOpen);
// //   };

// //   const handleNavClick = (href) => {
// //     const element = document.querySelector(href);
// //     if (element) {
// //       element.scrollIntoView({ behavior: 'smooth' });
// //     }
// //     setMobileOpen(false);
// //   };

// //   const drawer = (
// //     <Box sx={{ width: 250 }} role="presentation">
// //       <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
// //         <IconButton onClick={handleDrawerToggle}>
// //           <CloseIcon />
// //         </IconButton>
// //       </Box>
// //       <List>
// //         {navItems.map((item) => (
// //           <ListItem
// //             key={item.label}
// //             onClick={() => handleNavClick(item.href)}
// //             sx={{
// //               cursor: 'pointer',
// //               '&:hover': {
// //                 backgroundColor: 'rgba(255, 162, 0, 0.1)',
// //               },
// //             }}
// //           >
// //             <ListItemText
// //               primary={item.label}
// //               primaryTypographyProps={{
// //                 fontWeight: 600,
// //                 color: 'text.primary',
// //               }}
// //             />
// //           </ListItem>
// //         ))}
// //         <ListItem sx={{ mt: 2 }}>
// //           <Button
// //             variant="contained"
// //             color="secondary"
// //             fullWidth
// //             onClick={() => handleNavClick('#consultation')}
// //             sx={{
// //               py: 1.5,
// //               borderRadius: 2,
// //             }}
// //           >
// //             Get Expert Call
// //           </Button>
// //         </ListItem>
// //       </List>
// //     </Box>
// //   );

// //   return (
// //     <>
// //       <AppBar
// //         position="sticky"
// //         sx={{
// //           backgroundColor: 'white',
// //           color: 'text.primary',
// //           boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
// //         }}
// //       >
// //         <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
// //           <Box sx={{ flex: 1 }}>
// //             <img
// //               src={logo}
// //               alt="GrowMore Digital Logo"
// //               style={{
// //                 height: '80px',
// //                 animation: 'logo-pop-in 0.8s ease-out forwards',
// //               }}
// //             />
// //           </Box>

// //           {!isMobile && (
// //             <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flex: 2, justifyContent: 'center' }}>
// //               {navItems.map((item) => (
// //                 <Button
// //                   key={item.label}
// //                   onClick={() => handleNavClick(item.href)}
// //                   sx={{
// //                     color: 'text.primary',
// //                     fontWeight: 600,
// //                     position: 'relative',
// //                     '&:after': {
// //                       content: '""',
// //                       position: 'absolute',
// //                       width: 0,
// //                       height: '3px',
// //                       bottom: -5,
// //                       left: 0,
// //                       backgroundColor: 'primary.main',
// //                       transition: 'width 0.3s ease',
// //                     },
// //                     '&:hover': {
// //                       color: 'primary.main',
// //                       backgroundColor: 'transparent',
// //                       '&:after': {
// //                         width: '100%',
// //                       },
// //                     },
// //                   }}
// //                 >
// //                   {item.label}
// //                 </Button>
// //               ))}
// //             </Box>
// //           )}

// //           {!isMobile && (
// //             <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
// //               <Button
// //                 variant="contained"
// //                 color="secondary"
// //                 onClick={() => handleNavClick('#consultation')}
// //                 sx={{
// //                   px: 3,
// //                   py: 1,
// //                   borderRadius: 2,
// //                 }}
// //               >
// //                 Get Expert Call
// //               </Button>
// //             </Box>
// //           )}

// //           {isMobile && (
// //             <IconButton
// //               color="inherit"
// //               aria-label="open drawer"
// //               edge="end"
// //               onClick={handleDrawerToggle}
// //               sx={{ ml: 2 }}
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //           )}
// //         </Toolbar>
// //       </AppBar>

// //       <Drawer
// //         anchor="right"
// //         open={mobileOpen}
// //         onClose={handleDrawerToggle}
// //         ModalProps={{
// //           keepMounted: true, // Better mobile performance
// //         }}
// //       >
// //         {drawer}
// //       </Drawer>
// //     </>
// //   );
// // };

// // export default Header;

// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   useMediaQuery,
//   useTheme,
//   Button,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import logo from '../assets/logo.jpeg'; // FIXED PATH

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const navItems = [
//     { label: 'Home', href: '#home' },
//     { label: 'About Us', href: '#about' },
//     { label: 'Our Services', href: '#services' },
//     { label: 'Our Clients', href: '#clients' },
//     { label: 'Projects', href: '#projects' },
//     { label: 'Contact Us', href: '#contact' },
//   ];

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleNavClick = (href) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setMobileOpen(false);
//   };

//   const drawer = (
//     <Box sx={{ width: 250 }} role="presentation">
//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
//         <IconButton onClick={handleDrawerToggle}>
//           <CloseIcon />
//         </IconButton>
//       </Box>
//       <List>
//         {navItems.map((item) => (
//           <ListItem
//             key={item.label}
//             onClick={() => handleNavClick(item.href)}
//             sx={{
//               cursor: 'pointer',
//               '&:hover': {
//                 backgroundColor: 'rgba(255, 162, 0, 0.1)',
//               },
//             }}
//           >
//             <ListItemText
//               primary={item.label}
//               primaryTypographyProps={{
//                 fontWeight: 600,
//                 color: 'text.primary',
//               }}
//             />
//           </ListItem>
//         ))}
//         <ListItem sx={{ mt: 2 }}>
//           <Button
//             variant="contained"
//             color="secondary"
//             fullWidth
//             onClick={() => handleNavClick('#consultation')}
//             sx={{
//               py: 1.5,
//               borderRadius: 2,
//             }}
//           >
//             Get Expert Call
//           </Button>
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar
//         position="sticky"
//         sx={{
//           backgroundColor: 'white',
//           color: 'text.primary',
//           boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//         }}
//       >
//         <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
//           <Box sx={{ flex: 1 }}>
//             <img
//               src={logo}
//               alt="GrowMore Digital Logo"
//               style={{
//                 height: '80px',
//                 animation: 'logo-pop-in 0.8s ease-out forwards',
//               }}
//             />
//           </Box>

//           {!isMobile && (
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flex: 2, justifyContent: 'center' }}>
//               {navItems.map((item) => (
//                 <Button
//                   key={item.label}
//                   onClick={() => handleNavClick(item.href)}
//                   sx={{
//                     color: 'text.primary',
//                     fontWeight: 600,
//                     position: 'relative',
//                     '&:after': {
//                       content: '""',
//                       position: 'absolute',
//                       width: 0,
//                       height: '3px',
//                       bottom: -5,
//                       left: 0,
//                       backgroundColor: 'primary.main',
//                       transition: 'width 0.3s ease',
//                     },
//                     '&:hover': {
//                       color: 'primary.main',
//                       backgroundColor: 'transparent',
//                       '&:after': {
//                         width: '100%',
//                       },
//                     },
//                   }}
//                 >
//                   {item.label}
//                 </Button>
//               ))}
//             </Box>
//           )}

//           {!isMobile && (
//             <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={() => handleNavClick('#consultation')}
//                 sx={{
//                   px: 3,
//                   py: 1,
//                   borderRadius: 2,
//                 }}
//               >
//                 Get Expert Call
//               </Button>
//             </Box>
//           )}

//           {isMobile && (
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="end"
//               onClick={handleDrawerToggle}
//               sx={{ ml: 2 }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         anchor="right"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Clients', href: '#clients' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 250, bgcolor: 'black', height: '100%' }} role="presentation">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => handleNavClick(item.href)}
            sx={{
              cursor: 'pointer',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 0, 0.1)',
                color: '#FFD700', // Yellow color on hover
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: 600,
                color: 'inherit',
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleNavClick('#consultation')}
            sx={{
              py: 1.5,
              borderRadius: 2,
              backgroundColor: '#FFD700',
              color: 'black',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#FFC107',
              }
            }}
          >
            Get Expert Call
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'black', // Black background
          color: 'white', // White text
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ flex: 1 }}>
            <img
              src={logo}
              alt="GrowMore Digital Logo"
              style={{
                height: '80px',
                animation: 'logo-pop-in 0.8s ease-out forwards',
              }}
            />
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flex: 2, justifyContent: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: 'white', // White text
                    fontWeight: 600,
                    position: 'relative',
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: 0,
                      height: '3px',
                      bottom: -5,
                      left: 0,
                      backgroundColor: '#FFD700', // Yellow underline
                      transition: 'width 0.3s ease',
                    },
                    '&:hover': {
                      color: '#FFD700', // Yellow text on hover
                      backgroundColor: 'transparent',
                      '&:after': {
                        width: '100%',
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                onClick={() => handleNavClick('#consultation')}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  backgroundColor: '#FFD700', // Yellow button
                  color: 'black', // Black text on button
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#FFC107', // Darker yellow on hover
                  }
                }}
              >
                Get Expert Call
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;