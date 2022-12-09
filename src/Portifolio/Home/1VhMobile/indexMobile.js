import { motion } from "framer-motion"

import { styled } from "@mui/material";
import imgs from "../vewHeight/imagens"
import { useState, useEffect, useRef } from "react";
import './stylle.css'

const Boxcarrocel = styled('div')(({ theme }) => ({
    maxHeight: '900px',
    width: '100%',
    margin: 0,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'

}))
export default function PrimeiroMobile() {
    const carrossel = useRef();
    const [width, setWidth] = useState(null)
    useEffect(() => {
       console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
   
        setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
    }, []);
    return (
            <Boxcarrocel  >
                <motion.div className="CarroselMobile" ref={carrossel} whileTap={{cursor:'grabbing'}}>
                    <motion.div className="innerCarrosel"
                    drag='x'
                    dragConstraints={{right:0, left: -width}}
                    >
                        {
                            imgs.map(index =>(
                              
                                <motion.div className="itemImg">
                                    {/* <img src={index.perfil} alt={index.title} key={index.id}/> */}
                                    {index.Text}
                                </motion.div>
                             
                            ))
                        }
                    </motion.div>
                </motion.div>
            </Boxcarrocel>
    )
}