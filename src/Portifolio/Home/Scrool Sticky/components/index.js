import { Sticky } from "../styles/index"
import { motion, useTransform, useViewportScroll } from "framer-motion"

export default function FirstAndSecond() {
    const { scrollYProgress } = useViewportScroll()
    const frameOpaciy = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]); //useTransform recebe o valor do progresso do scrool e juno anda dois fatores o começo  do scrool e o fim depois na segundo comchetes  é oque eu devo animar 
    const frameScale = useTransform(scrollYProgress, [0.558, 6.627], [0.511, 0.8]);// todas esses decimal são porcentagem do scroll total 
    console.log(scrollYProgress)
    return (
        <Sticky className="second"  style={{position:'sticky'}}>
            <First/>
            <motion.div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: '100vh',
                borderRadius: '4px',
                border: "4px solid #ffffff",
                opacity: frameOpaciy,
                scale: frameScale
            }}>

            </motion.div>
        </Sticky>
    )
}
const First = () => {
    const { scrollYProgress } = useViewportScroll();
    const FirstScale = useTransform(scrollYProgress,
        [0.198, 0.264, 0.558, 0.627],
        [1, 0.511, 0.551, 1]
    )

    const FirstRadios = useTransform(scrollYProgress,
        [0.198, 0.264, 0.558, 0.627],
        [0, 10, 10, 0]
    )

    const leftSideHeght = useTransform(scrollYProgress,
        [0, 8.058],
        ['20vh' , '100vh']
    )
    return (
        <Sticky className="first"
            style={{
                scale: FirstScale,
                borderRadius: FirstRadios,
                position:'sticky'
            }}>
            <div className="a">
                <motion.div className="left-side"
                    style={{
                        height: leftSideHeght
                    }}
                />
            </div>
            <div className="b"></div>
            <div className="c"></div>
        </Sticky>
    )
} 