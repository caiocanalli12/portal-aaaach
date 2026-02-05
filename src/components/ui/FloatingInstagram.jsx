import React from 'react';
import { motion } from 'framer-motion';
import instagramIcon from '../../assets/icons/instagram.png';

const FloatingInstagram = () => {
    return (
        <motion.a
            href="https://www.instagram.com/atleticaarthurchiodii/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-28 md:bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-college-green rounded-full shadow-[4px_4px_0px_#000] border-2 border-black hover:bg-college-gold transition-colors"
        >
            <img
                src={instagramIcon}
                alt="Instagram"
                className="w-8 h-8 object-contain"
            />
        </motion.a>
    );
};

export default FloatingInstagram;
