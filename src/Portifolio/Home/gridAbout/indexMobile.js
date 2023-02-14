
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Iconify from '../../../components/Iconify';
import './style.css'
import aboutMe from '../1VhMobile/aboltMeJson';

import { useEffect, useRef, useState } from 'react';


// ----------------------------------------------------------------------


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#37514D',
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
        backgroundColor: '#E38A59',
    },
}));
export default function CarrocelAboutMobile(params) {
    const carrousel = useRef()

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
                            aboutMe.map(index => (
                                <motion.div className='ItemAbout' key={index.id}>
                                    <a
                                        href={index.path}
                                        target={index.path === "/dashboard/app" ? "_self" : "_blank" }
                                        rel="noreferrer"
                                        style={{ color: '#ffffff', textDecoration:'none'  }}
                                    >
                                        <Item onMouseEnter={async () => { await setHover(!hover && true) }} onMouseLeave={async () => { await hover && setHover(false) }}>
                                            <motion.p
                                                style={{ display: 'flex' }}>{index.title}
                                                <motion.p style={{ paddingLeft: 8 }} >{index.tipoEmoji ? index.emoji : <Iconify icon={index.emoji} width={22} height={22} />}</motion.p></motion.p>
                                            <motion.p style={{
                                                textAlign: 'left',
                                                fontSize: '12px',
                                                fontWeight: ' bold',
                                                display: 'block',
                                            }}>{index.text} </motion.p>
                                            <Iconify style={{ margin: 15, marginLeft: 50 }} icon={'material-symbols:arrow-circle-right-outline-rounded'} width={22} height={22} />

                                        </Item>
                                    </a>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}