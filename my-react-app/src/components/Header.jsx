import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='border-b-2 py-1 px-2'>
            <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                <span className="px-1 py-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded text-white">
                    Mahek's
                </span> Blog
            </Link>
            <form>
                <TextInput 
                    type="text"
                    placeholder="Search..."
                    rightIcon={AiOutlineSearch}
                    className="hidden lg:inline"
                />
            </form>
            <Button className='w-10 h-10 lg:hidden' color='gray' pill>
                <AiOutlineSearch className="w-5 h-5"/>
            </Button>
            <div className="flex gap-2 items-center md:order-2 ">
                <Button className='w-10 h-10 hidden sm:flex items-center justify-center' color='gray' pill>
                    <FaMoon />
                </Button>
                <Link to="/sign-in">
                    <Button gradientDuoTone='purpleToBlue' outline>
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle/>
                
            </div>
            <Navbar.Collapse>
                    <Navbar.Link active={path === "/"} as={'div'} className="bg-white text-black">
                        <Link to="/">
                            Home
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === "/about"} as={'div'} className="bg-white text-black">
                        <Link to="/about">
                            About
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path === "/projects"} as={'div'} className="bg-white text-black">
                        <Link to="/projects">
                            Projects
                        </Link>
                    </Navbar.Link>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
