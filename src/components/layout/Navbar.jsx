import { useSidebar } from "../../contexts/SidebarContext";
import Logo from "../NavbarElement/Logo";
import Searchbar from "../Searchbar";
import Button from "../Searchbar/Button";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {

    const { toggle } = useSidebar();

    return (
        <div className="py-2 px-6 flex items-center justify-between">
            <div className="flex items-center">
                <div className="rounded-full text-2xl p-2 hover:bg-slate-200">
                    <RxHamburgerMenu onClick={toggle} />
                </div>
                <Logo />
            </div>
            <div className="flex items-center w-[110rem] sm:w-7/12 lg:max-w-3xl">
                <Searchbar />
                <Button additionClass="ml-4 rounded-full p-2 border">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.293 1.707 1.707 7.293a1 1 0 0 0 0 1.414l5.586 5.586A1 1 0 0 0 9 13.586V2.414a1 1 0 0 0-1.707-.707Z"/>
                    </svg>
                </Button>
            </div>
            <div className="flex items-center">
                <Button additionClass="ml-4 rounded-full py-2 px-4 border">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.293 1.707 1.707 7.293a1 1 0 0 0 0 1.414l5.586 5.586A1 1 0 0 0 9 13.586V2.414a1 1 0 0 0-1.707-.707Z"/>
                    </svg>
                    <p className="ml-2">Create</p>
                </Button>
                <Button additionClass="ml-4 rounded-full p-2 bg-white">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.293 1.707 1.707 7.293a1 1 0 0 0 0 1.414l5.586 5.586A1 1 0 0 0 9 13.586V2.414a1 1 0 0 0-1.707-.707Z"/>
                    </svg>
                </Button>
                <Button additionClass="ml-4 rounded-full p-2 bg-white">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.293 1.707 1.707 7.293a1 1 0 0 0 0 1.414l5.586 5.586A1 1 0 0 0 9 13.586V2.414a1 1 0 0 0-1.707-.707Z"/>
                    </svg>
                </Button>
            </div>
        </div>
    );
}