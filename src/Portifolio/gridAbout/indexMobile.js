
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Iconify from '../../components/Iconify';
import './style.css'

import { useEffect, useRef, useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#333639',
    cursor: 'pointer',
    margin: 10,
    width: 150,
    height: 150,
    fontSize: '14px',
    color: '#ffffff',
 
    fontWeight: 'bold',
    padding: '7%',
    paddingTop: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    borderRadius: 30,
    '&:hover': {
        display: 2,
        duration: '0.5s',
        transition: '0.3s ease-in ',// geral
        backgroundColor: '#ff6b21',
    },
}));
export default function CarrocelAboutMobile(params) {
    const carrousel = useRef()
    const teste = [1, 2, 3, 4, 5]
    const [widthAbout, setWidthAbout] = useState(0)

    const [hover, setHover] = useState(false);
    useEffect(() => {
        setWidthAbout(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth)
    }, []);
    return (
        <>
            <div className='ContainerAbout'>
                <motion.div className='carrosel' ref={carrousel}>
                    <motion.div
                        className='innerMobile'
                        drag='x'
                        dragConstraints={{ right: 0, left: -widthAbout }}>
                        {
                            teste.map(index => (
                                <motion.div className='ItemAbout' key={index.id}>
                                    <Item onMouseEnter={async () => { await setHover(!hover && true) }} onMouseLeave={async () => { await hover && setHover(false) }}>
                                        <motion.p
                                            style={{ display: 'flex' }}>Hey, I`m Junior
                                            <motion.p
                                                animate={{ rotate: 1, }}
                                                transition={{
                                                    duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96],
                                                    repeat: 5,
                                                    repeatType: "reverse",
                                                }}
                                                initial={{ rotate: 25, }}>👋</motion.p></motion.p>
                                        <motion.p style={{
                                            textAlign: 'left',
                                            fontSize: '12px',
                                            fontWeight: ' bold',
                                            display: 'block',
                                        }}>desenvolvedor React </motion.p>
                                        <Iconify style={{margin:15 , marginLeft: 50}} icon={'material-symbols:arrow-circle-right-outline-rounded'} width={22} height={22} />

                                    </Item>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}