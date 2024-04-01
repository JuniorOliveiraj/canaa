import styled from "styled-components";
import { motion } from "framer-motion";




export const TitleContato = styled(motion.p)`
font-style: normal;
font-weight: 500;
font-size: 40px;
/* identical to box height */
    @media (max-width: 1300px) {
        font-size:30px;
      
    }
`;


export const TextContato = styled(motion.p)`
font-style: normal;
font-weight: 500;
font-size: 20px;
max-width: 85%;
/* or 140% */

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
font-family: 'Satoshi';
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


export const CenterAll = styled(motion.p)`
    display: flex;
    top: 100%;
    width: 100%;
    align-items: center;
    text-align: center;
    display: flex;
    text-align: center;
    justify-content: center;

`;