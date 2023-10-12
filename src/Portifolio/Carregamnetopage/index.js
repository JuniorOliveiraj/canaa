import { motion } from "framer-motion";
//import styled, { keyframes } from 'styled-components';
import { useTheme } from '@mui/material/styles'
import Logo from "../../pages/components-overview/extra/animate/other/Logo";
//import { useMediaQuery } from "@mui/material";
// const draw = keyframes`
//   to {
//     fill:none;
//   }
// `;

// const fill = keyframes`
//   to {
//     fill:white;
//   }
// `;

// const Path = styled(motion.path)`
//   stroke: #ffffff;

//   animation: ${draw} 1.5s linear forwards, ${fill} 1s ease-in-out forwards 1.5s;

//   fillRule: evenodd;
//   clipRule: evenodd;
// `;


export default function LoadingScreen() {
    // const matches = useMediaQuery('(min-width:700px)');
    const theme = useTheme();
    const MODE = theme.palette.mode
    const PRIMARY_DARK = theme.palette.grey[900];
    return (

        <>

            <motion.div
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: MODE === 'light' ? '#FFF' : PRIMARY_DARK,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: 'hidden',
                    zIndex: 99999999999999999
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
            >

                <Logo />

            </motion.div>

        </>

        // LOGO ANTIGA 
        // <>
        //     <motion.div
        //         style={{
        //             width: "99vw",
        //             height: "100vh",
        //             backgroundColor: "black",
        //             display: "flex",
        //             justifyContent: "center",
        //             alignItems: "center",
        //             zIndex: 99999999999999999
        //         }}
        //         initial={{ opacity: 1 }}
        //         animate={{ opacity: 1 }}
        //         exit={{ opacity: 0 }}
        //         transition={{ duration: 0.1 }}
        //     >


        //         <motion.svg
        //             width={matches ? "403" : '201'}
        //             height={matches ? "763" : '381'}
        //             viewBox="0 0 403 763"
        //             fill="none"
        //             xmlns="http://www.w3.org/2000/svg"
        //             initial={{ opacity: 0 }}
        //             animate={{ opacity: 1 }}
        //             transition={{ duration: 0.3, delay: 0 }}
        //         >
        //             <Path
        //                 fillRule="evenodd"
        //                 clipRule="evenodd"
        //                 d="M207 236H117.14V593H154.88V479.78H207V447.65H154.88V268.64H207V236ZM277 445.907C299.531 442.806 317.474 435.567 330.83 424.19C349.53 408.55 358.88 386.62 358.88 358.4C358.88 329.84 349.53 307.74 330.83 292.1C317.474 280.723 299.531 273.484 277 270.383V237.348C296.335 239.425 313.598 243.906 328.79 250.79C350.55 260.31 367.21 274.25 378.77 292.61C390.67 310.63 396.62 332.56 396.62 358.4C396.62 383.56 390.67 405.32 378.77 423.68C367.21 441.7 350.55 455.64 328.79 465.5C324.391 467.425 319.818 469.155 315.072 470.69L402.23 593H360.92L279.564 478.198C278.714 478.296 277.859 478.39 277 478.479V474.58V463.46V445.907Z"
        //                 stroke="white"
        //                 strokeWidth="3"
        //                 strokeDasharray="1600"
        //                 strokeDashoffset="1600"
        //                 animate={{ strokeDashoffset: 0 }}
        //                 transition={{ duration: 2 }}
        //             />
        //             <Path
        //                 d="M6.58 394V345H29.54C35.42 345 39.9 346.167 42.98 348.5C46.06 350.787 47.6 353.867 47.6 357.74C47.6 360.353 46.9933 362.593 45.78 364.46C44.5667 366.28 42.9333 367.703 40.88 368.73C38.8733 369.71 36.68 370.2 34.3 370.2L35.56 367.68C38.3133 367.68 40.7867 368.193 42.98 369.22C45.1733 370.2 46.9 371.647 48.16 373.56C49.4667 375.473 50.12 377.853 50.12 380.7C50.12 384.9 48.51 388.167 45.29 390.5C42.07 392.833 37.2867 394 30.94 394H6.58ZM15.68 386.86H30.38C33.7867 386.86 36.4 386.3 38.22 385.18C40.04 384.06 40.95 382.263 40.95 379.79C40.95 377.363 40.04 375.59 38.22 374.47C36.4 373.303 33.7867 372.72 30.38 372.72H14.98V365.65H28.56C31.7333 365.65 34.16 365.09 35.84 363.97C37.5667 362.85 38.43 361.17 38.43 358.93C38.43 356.643 37.5667 354.94 35.84 353.82C34.16 352.7 31.7333 352.14 28.56 352.14H15.68V386.86Z"
        //                 stroke="white"
        //                 strokeWidth="3"
        //                 strokeDasharray="1600"
        //                 strokeDashoffset="1600"
        //                 animate={{ strokeDashoffset: 0 }}
        //                 transition={{ duration: 2 }}
        //             />
        //             <Path d="M129.63 653.02C103.277 653.02 78.4867 647.213 55.26 635.6C32.48 623.987 14.1667 607.46 0.32 586.02L29.13 552.52C42.0833 571.28 57.0467 585.573 74.02 595.4C90.9933 605.227 109.753 610.14 130.3 610.14C188.367 610.14 217.4 575.747 217.4 506.96V222.88H45.88V180H266.31V504.95C266.31 554.53 254.697 591.603 231.47 616.17C208.69 640.737 174.743 653.02 129.63 653.02Z"
        //                 stroke="white"
        //                 strokeWidth="3"
        //                 strokeDasharray="1600"
        //                 strokeDashoffset="1600"
        //                 animate={{ strokeDashoffset: 0, }}
        //                 transition={{ duration: 1.5 }}
        //             />
        //         </motion.svg>
        //     </motion.div>
        // </>
    )
}

