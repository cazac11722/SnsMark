import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SidebarItem from "../Sidebar/Sideber_item";
import { useAuth } from "../../contexts/AuthContext";
import SidebarItemSub from "../Sidebar/Sideber_item_sub";

const Sidebar = ({ isOpen, toggleOpen }) => {
    const { user } = useAuth();

    return (
        <aside id="sidebar" className={`fixed top-0 left-0 z-20  flex flex-col flex-shrink-0 hidden  h-full pt-[4.5em] font-normal duration-75 lg:flex transition-width duration-200 ${isOpen ? 'w-16' : 'w-64'}`}>
            <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white rounded-lg">
                <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-1 px-3 divide-y divide-gray-200 ">
                        <ul className="pb-2">
                            <li>
                                <SidebarItem href="#" name="서비스 소개" icon="" iconClassName={"w-6 mr-2"} textClassName={`font-bold text-lg`} textShow={isOpen} />
                            </li>
                            <li>
                                <SidebarItem href={`/`} name="주문하기" icon="Home" iconClassName={"w-6 mr-2"} textClassName={`text-base`} textShow={isOpen} />
                            </li>
                            <li>
                                <SidebarItem href={`/`} name="상품안내 및 주문방법" icon="ContentPaste" iconClassName={"w-6 mr-2"} textClassName={`text-base`} textShow={isOpen} />
                            </li>
                            <li>
                                <SidebarItem href={`/`} name="자주 묻는 질문" icon="Help" iconClassName={"w-6 mr-2"} textClassName={`text-base`} textShow={isOpen} />
                            </li>
                            <li>
                                <SidebarItem href={`/`} name="추천인 이벤트" icon="Hat" iconClassName={"w-6 mr-2"} textClassName={`text-base`} textShow={isOpen} />
                            </li>
                            <li>
                                <SidebarItem href={`/`} name="충전하기" icon="ContentPaste" iconClassName={"w-6 mr-2"} textClassName={`text-base`} textShow={isOpen} />
                            </li>
                        </ul>
                        <ul className="pt-2">
                            <li>
                                <SidebarItem href="#" name="사용자 메뉴" icon="" iconClassName={"w-6 mr-2"} textClassName={`font-bold text-lg`} textShow={isOpen} />
                            </li>
                            <li>
                                <SidebarItem href={`/`} name="설정" icon="Setting" iconClassName={"w-6 mr-2"} textClassName={`text-base`} textShow={isOpen} />
                            </li>
                            <li>
                                <SidebarItem href={`/`} name="마이페이지" icon="Profile" iconClassName={"w-6 mr-2"} textClassName={`text-base`} textShow={isOpen} />
                            </li>
                            <li>
                                <SidebarItem href={`/`} name="로그아웃" icon="Login" iconClassName={"w-6 mr-2"} textClassName={`text-base`} textShow={isOpen} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 lg:flex">
                    <Link className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>ƒ
                    </Link>
                    <Link className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                    </Link>
                    <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;