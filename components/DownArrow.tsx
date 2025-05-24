"use client";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const DownArrow = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 120 }}
			animate={{ opacity: 1, y: 50 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 3,
				delay: 3,
				repeat: Infinity,
				bounce: 0.25,
				type: "spring",
			}}
			className="bg-white w-16 h-16 flex items-center justify-center rounded-full"
		>
			<ArrowUp size={50} />
		</motion.div>
	);
};

export default DownArrow;
