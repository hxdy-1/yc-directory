"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const DownArrow = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 80 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: 2,
				delay: 3,
				repeat: Infinity,
				bounce: 0.25,
				type: "spring",
			}}
			className="bg-white w-16 h-16 flex items-center justify-center rounded-full"
		>
			<ArrowDown size={50} />
			{/* <ArrowUp size={50} /> */}
		</motion.div>
	);
};

export default DownArrow;
