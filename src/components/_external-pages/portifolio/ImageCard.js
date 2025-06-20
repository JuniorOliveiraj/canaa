

import { Box } from "@mui/material";
import { motion } from "framer-motion";


export default function ImageCard({ image }) {
    return (
        <Box
            component={motion.div}
            sx={{
                width: "100%",
                maxWidth: "100%",
                position: "relative",
                opacity: 1,
            }}
        >
            {/* Card com efeito Glassmorphism */}
            <Box
                sx={{
                    backdropFilter: "blur(2px)",
                    backgroundColor: "rgba(8,8,8,0.8)",
                    borderRadius: "30px",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        borderRadius: "20px",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            borderRadius: "19px",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            component="img"
                            src={image || "https://plus.unsplash.com/premium_photo-1749723954289-8c8434ff5274?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            alt="Woman Using Laptop"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                                borderRadius: "inherit",
                                display: "block",
                            }}
                        />
                    </Box>
                </Box>

            </Box>

            {/* Glow (Brilho) */}
            <Box
                component={motion.div}
                initial={{ opacity: 0.8, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                sx={{
                    position: "absolute",
                    width: "200px",
                    height: "200px",
                    backgroundColor: "rgb(0, 85, 255)",
                    filter: "blur(40px)",
                    borderRadius: "50%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1,
                }}
            />

            {/* Linha azul no meio */}
            <Box
                sx={{

                    left: 0,
                    right: 0,
                    height: "2px",
                    transform:"scale(1.2)",
                    background:
                        "linear-gradient(90deg, rgba(0, 85, 255, 0) 0%, rgb(0, 85, 255) 50%, rgba(0, 85, 255, 0) 100%)",
                    transform: "translateY(-50%)",
                }}
            />
        </Box>
    );
}