import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import useDropdown from "../../contexts/hooks/useDropdown";
import { useAuth } from "../../contexts/AuthContext";
import IconWidget from "../Widget/icon_widget";

const Header = () => {
    const { isOpen, toggleDropdown, dropdownRef } = useDropdown();
    const { logout, user } = useAuth();

    return (
        <nav className="fixed z-30 w-full">
            <div className="px-3 py-4 relative">
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <div className="flex items-center justify-start w-64">
                            <Logo />
                        </div>
                        <div className="flex items-center justify-start px-3">
                            <h3 className="font-bold text-xl">HOME</h3>
                            <IconWidget icon="Vector" className={'mx-4'} />
                            <span className="text-gray-500">주문하기</span>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ml-3 ">
                            <div>
                                <button type="button" className="flex items-center border border-gray-400 py-2 px-3 rounded-lg">
                                    <IconWidget icon="Pubilc" className={''} />
                                    <span className="text-sm text-gray-500 mx-3">한국어</span>
                                    <IconWidget icon="Vector" className={' stroke-gray-500 rotate-90'} />
                                </button>
                            </div>
                            <div className="ml-2">
                                <button type="button" className="flex items-center text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={toggleDropdown}>
                                    <img className="w-8 h-8 rounded-lg" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user" />
                                    <div className="flex flex-col text-left ml-2">
                                        <span>닉네임</span>
                                        <span>lias@naver.com</span>
                                    </div>
                                    <div className="ml-4"></div>
                                </button>
                            </div>
                            <div ref={dropdownRef} className={`w-40 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 block absolute top-14 right-5 ${isOpen ? 'block' : 'hidden'}`} >
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                        안녕하세요.
                                    </p>
                                </div>
                                <ul className="py-1" >
                                    <li>
                                        <Link to={`/WorkVisual`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">대시보드</Link>
                                    </li>
                                    <li>
                                        <Link to={`/WorkVisual/guide/`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">이용 가이드</Link>
                                    </li>
                                    <li>
                                        <div onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">로그아웃</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;