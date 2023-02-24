import styled from "styled-components";
import { motion } from "framer-motion";




export const TitleContato = styled(motion.p)`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 40px;
/* identical to box height */

letter-spacing: -0.03em;


    @media (max-width: 1300px) {
        font-size:30px;
      
    }
`;


export const TextContato = styled(motion.p)`
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 20px;
max-width: 85%;
/* or 140% */

letter-spacing: -0.03em;
@media (max-width: 1300px) {
        font-size:17px;
        line-height: 20px;
    }

    @media (max-width: 600px) {
        font-size:13px;
        line-height: 17px;
    }
`

export const SubTitle1Contato = styled(motion.p)`
color: #43B1CB;
font-family: 'Work Sans';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
@media (max-width: 1300px) {
        font-size:17px
    }
@media (max-width: 600px) {
        font-size:11px;
        line-height: 15px;
    }
`;