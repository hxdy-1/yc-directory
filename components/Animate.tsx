"use client";
import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface AnimationProps {
	children: ReactNode;
}

const Animate = ({ children }: AnimationProps) => {
	return (
		<motion.div
			key={JSON.stringify(children)} // Forces re-render on content change
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.8 }}
		>
			{children}
		</motion.div>
	);
};

export default Animate;
