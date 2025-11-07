import { FaGithub, FaLinkedinIn, FaBehance, FaCodepen } from 'react-icons/fa';
import { GiColombia } from "react-icons/gi";

export default function Footer() {
    return (
        <div className="relative">
            <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 fixed w-full p-3 sm:p-6 bg-transparent backdrop-blur-md text-white bottom-0 z-50 border-opacity-10">
                <div className="flex flex-col items-center sm:items-start space-y-1 text-center sm:text-left">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm sm:text-lg whitespace-nowrap">Bogotá, Colombia</span>
                        <span className="text-lg sm:text-2xl text-amber-400"><GiColombia /></span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400">© 2025 All Rights Reserved</p>
                </div>
                <div className="flex space-x-3 sm:space-x-6 text-lg sm:text-xl">
                    <a href="https://github.com/danbernal999" target='_blank' rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/danielbernallopez/" target='_blank' rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><FaLinkedinIn/></a>
                    <a href="https://www.behance.net/danielbernal45" target='_blank' rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><FaBehance/></a>
                    <a href="https://codepen.io/danielbernal90" target='_blank' rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300"><FaCodepen/></a>
                </div>
            </footer>
        </div>
    );
}