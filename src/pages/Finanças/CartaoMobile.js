import { motion } from 'framer-motion';
import './style.css'
import { useEffect, useRef, useState } from 'react';
import Cartao from './cartao';
import AdicionarCartao from './adicionarCartao';
// ----------------------------------------------------------------------
export default function Cartaomobile({ DataApiFireBase, openTrue }) {
    const carrousel = useRef()
    const [widthAbout, setWidthAbout] = useState(0)
    const cartoes = DataApiFireBase != null && DataApiFireBase;
    useEffect(() => {
        setWidthAbout(carrousel.current?.scrollWidth - carrousel.current?.offsetWidth + 150)
    }, []);

    console.log(cartoes)
    return (
        <>
            <div className='ContainerAbout'>
                <motion.div className='carrosel' ref={carrousel} style={{ paddingRight: '300px' }}>
                    <motion.div
                        className='innerMobile'
                        drag='x'
                        dragConstraints={{ right: 0, left: -widthAbout }}>


                        <motion.div style={{
                            width: '100%',
                            padding: 0,
                            margin: 2,
                            minWidth: '170px',
                            height:!cartoes ? '100px':'200px'
                        }}>
                            <AdicionarCartao sx={{height:'175px', minWidth: '170px',}} />
                        </motion.div>
                        {cartoes &&
                            cartoes.map(index => (
                                <motion.div className='ItemAbout2' key={index.cardID} style={{ margin: 2, }}>
                                    <Cartao id={index.id} title={index.cardNumber} total={index.limit} rotate={index.rotate} color={index.color} adicionar={openTrue} />
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}