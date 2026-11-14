'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: "Services", href: "#services" },    
    { name: 'Projects', href: '#work' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Detect page scrolling
    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Close mobile menu with Escape and prevent background scrolling
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('keydown', handleEscape)

        document.body.style.overflow = isMenuOpen ? 'hidden' : ''

        return () => {
            window.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [isMenuOpen])

    // Close menu when navigating
    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    // Toggle website theme
    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev)
    }

    return (
        <>
            {/* Decorative Background */}
            <div
                className="fixed top-0 right-0 w-11/12 -z-10 -translate-y-[80%] dark:hidden pointer-events-none"
                aria-hidden="true"
            >
                <Image
                    src={assets.header_bg_color}
                    alt=""
                    priority
                    className="w-full"
                />
            </div>

            {/* Main Navbar */}
            <nav
                aria-label="Primary navigation"
                className={`
                    fixed top-0 left-0 right-0 z-50
                    px-5 md:px-8 xl:px-[8%]
                    py-4
                    flex items-center justify-between
                    transition-all duration-300
                    ${
                        isScroll
                            ? 'bg-white/85 dark:bg-[#080D16]/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] dark:shadow-black/20 border-b border-gray-200/50 dark:border-white/10'
                            : 'bg-transparent'
                    }
                `}
            >

                {/* Logo */}
                <a
                    href="#top"
                    onClick={closeMenu}
                    aria-label="Mohmadhusen Khimani home"
                    className="flex items-center shrink-0 group"
                >
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Mohmadhusen
                        <span className="text-red-500 transition-colors group-hover:text-red-600">
                            .
                        </span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <ul
                    className={`
                        hidden md:flex items-center
                        gap-5 lg:gap-7
                        px-7 lg:px-9 py-3
                        rounded-full
                        transition-all duration-300
                        ${
                            isScroll
                                ? 'bg-transparent'
                                : 'bg-white/60 dark:bg-white/[0.04] backdrop-blur-md border border-gray-200/60 dark:border-white/10'
                        }
                    `}
                >
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="
                                    relative text-sm lg:text-[15px]
                                    font-medium
                                    text-gray-700 dark:text-gray-300
                                    hover:text-red-500 dark:hover:text-red-400
                                    transition-colors duration-200
                                    after:absolute after:left-0 after:-bottom-1
                                    after:h-[2px] after:w-0
                                    after:bg-red-500
                                    after:rounded-full
                                    after:transition-all after:duration-300
                                    hover:after:w-full
                                    focus-visible:outline-none
                                    focus-visible:text-red-500
                                "
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Actions */}
                <div className="flex items-center gap-3 sm:gap-4">

                    {/* Theme Toggle */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={
                            isDarkMode
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                        title={
                            isDarkMode
                                ? 'Switch to light mode'
                                : 'Switch to dark mode'
                        }
                        className="
                            w-10 h-10
                            flex items-center justify-center
                            rounded-full
                            border border-gray-200 dark:border-white/10
                            bg-white/70 dark:bg-white/5
                            hover:bg-red-50 dark:hover:bg-white/10
                            transition-all duration-300
                            hover:rotate-12
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-red-500
                        "
                    >
                        <Image
                            src={
                                isDarkMode
                                    ? assets.sun_icon
                                    : assets.moon_icon
                            }
                            alt=""
                            className="w-5 h-5"
                        />
                    </button>

                    {/* Desktop Contact Button */}
                    <a
                        href="#contact"
                        className="
                            hidden lg:flex items-center gap-2
                            px-6 py-2.5
                            rounded-full
                            bg-gray-900 text-white
                            dark:bg-white dark:text-gray-900
                            border border-transparent
                            hover:bg-red-500 hover:text-white
                            dark:hover:bg-red-500 dark:hover:text-white
                            transition-all duration-300
                            font-medium text-sm
                            shadow-sm hover:shadow-lg
                            hover:shadow-red-500/20
                        "
                    >
                        Let's Talk

                        <Image
                            src={
                                isDarkMode
                                    ? assets.arrow_icon
                                    : assets.arrow_icon_dark
                            }
                            alt=""
                            className="w-3"
                        />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open navigation menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        className="
                            md:hidden
                            w-10 h-10
                            flex items-center justify-center
                            rounded-full
                            border border-gray-200 dark:border-white/10
                            hover:bg-gray-100 dark:hover:bg-white/10
                            transition-colors
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-red-500
                        "
                    >
                        <Image
                            src={
                                isDarkMode
                                    ? assets.menu_white
                                    : assets.menu_black
                            }
                            alt=""
                            className="w-5 h-5"
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <button
                type="button"
                aria-label="Close navigation menu"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
                className={`
                    md:hidden fixed inset-0 z-[60]
                    bg-black/50 backdrop-blur-sm
                    transition-opacity duration-300
                    ${
                        isMenuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                    }
                `}
            />

            {/* Mobile Side Menu */}
            <div
                id="mobile-navigation"
                aria-label="Mobile navigation"
                aria-hidden={!isMenuOpen}
                className={`
                    md:hidden fixed top-0 right-0 bottom-0
                    z-[70] w-[min(320px,85vw)]
                    h-screen
                    bg-white dark:bg-[#0D1421]
                    border-l border-gray-200 dark:border-white/10
                    shadow-2xl
                    transition-transform duration-500 ease-in-out
                    ${
                        isMenuOpen
                            ? 'translate-x-0'
                            : 'translate-x-full'
                    }
                `}
            >

                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 dark:border-white/10">

                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                        Navigation
                        <span className="text-red-500">.</span>
                    </span>

                    <button
                        type="button"
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                        tabIndex={isMenuOpen ? 0 : -1}
                        className="
                            w-10 h-10
                            flex items-center justify-center
                            rounded-full
                            bg-gray-100 dark:bg-white/10
                            hover:bg-red-100 dark:hover:bg-red-500/20
                            transition-colors
                        "
                    >
                        <Image
                            src={
                                isDarkMode
                                    ? assets.close_white
                                    : assets.close_black
                            }
                            alt=""
                            className="w-4 h-4"
                        />
                    </button>
                </div>

                {/* Mobile Links */}
                <ul className="flex flex-col gap-2 px-6 py-8">

                    {navLinks.map((link, index) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={closeMenu}
                                tabIndex={isMenuOpen ? 0 : -1}
                                className="
                                    flex items-center justify-between
                                    px-4 py-3.5
                                    rounded-xl
                                    text-gray-700 dark:text-gray-200
                                    font-medium
                                    hover:bg-red-50 dark:hover:bg-red-500/10
                                    hover:text-red-500 dark:hover:text-red-400
                                    transition-all duration-200
                                    group
                                "
                            >
                                <span className="flex items-center gap-3">
                                    <span className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                                        0{index + 1}
                                    </span>

                                    {link.name}
                                </span>

                                <span className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    →
                                </span>
                            </a>
                        </li>
                    ))}

                </ul>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-white/10">

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        Let's build something together.
                    </p>

                    <a
                        href="#contact"
                        onClick={closeMenu}
                        tabIndex={isMenuOpen ? 0 : -1}
                        className="
                            flex items-center justify-center gap-2
                            w-full py-3
                            rounded-xl
                            bg-red-500 text-white
                            hover:bg-red-600
                            font-semibold
                            transition-colors duration-300
                        "
                    >
                        Contact Me
                        <span>↗</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar
