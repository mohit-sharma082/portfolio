"use client"

import { motion } from "framer-motion";
import React from "react";

type FadeInContainerProps = {
    children: React.ReactNode;
    delay?: number;
};

const FadeInContainer: React.FC<FadeInContainerProps> = ({ children, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay  }}
            className="flex-1 w-full"
        >
            {children}
        </motion.div>
    );
};

export default FadeInContainer;
