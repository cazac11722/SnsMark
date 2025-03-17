import React, { useState } from "react";

import Header from '../../components/PageLayout/Header';
import Sidebar from '../../components/PageLayout/Sideber';
import Footer from '../../components/PageLayout/Footer';

import { useSidebar } from "../../contexts/hooks/useSidebar";

import Icon1 from "../../assets/images/icon1.png"
import Icon2 from "../../assets/images/icon2.png"
import Icon3 from "../../assets/images/icon3.png"
import Icon4 from "../../assets/images/icon4.png"
import Icon5 from "../../assets/images/icon5.png"
import Icon6 from "../../assets/images/icon6.png"
import Icon7 from "../../assets/images/icon7.png"
import IconWidget from "../../components/Widget/icon_widget";

const Home = () => {
  const { sidebarOpen, toggleSidebarOpen } = useSidebar();

  const [serviceList, setServiceList] = useState([
    {
      id: 1, title: '이벤트', img: Icon1,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 2, title: '인스터그램', img: Icon2,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 3, title: '유튜브', img: Icon3,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 4, title: '페이스북', img: Icon4,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 5, title: '틱톡', img: Icon5,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 6, title: '스레드', img: Icon6,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 7, title: 'X', img: Icon7,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 8, title: '이벤트', img: Icon1,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 9, title: '인스터그램', img: Icon2,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 10, title: '유튜브', img: Icon3,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 11, title: '페이스북', img: Icon4,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 12, title: '틱톡', img: Icon5,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 13, title: '스레드', img: Icon6,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 14, title: 'X', img: Icon7,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 15, title: '이벤트', img: Icon1,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 16, title: '인스터그램', img: Icon2,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 17, title: '유튜브', img: Icon3,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
    {
      id: 18, title: '페이스북', img: Icon4,
      workList: [{ id: 1, title: "❤️인기 게시물 '2주 관리' 서비스 🔥상위노출🔥- 15만원 [2주]" }, { id: 2, title: "❤️인스타 좋아요 늘리기" }, { id: 3, title: "❤️인스타 댓글 늘리기" }, { id: 4, title: "❤️인스타 릴스 조회수" }],
      optionList: [{ id: 1, title: "30일 최적화 계정관리 [스탠다드]", amount: 99000, count: 1 }]
    },
  ]);

  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      <main className="flex pt-[4.5em] overflow-hidden min-h-screen">
        <Sidebar isOpen={sidebarOpen} toggleOpen={toggleSidebarOpen} />
        <div id="main-content" className={`relative w-full h-full overflow-y-auto transition-width duration-200 ${sidebarOpen ? "lg:ml-14" : "lg:ml-64"}`}>
          <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-5 px-5">
            <section className="lg:col-span-1 ">
              <div className="bg-white rounded-2xl p-5 mb-5">
                <h3 className="font-bold">
                  <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">1</span>
                  원하는 서비스를 선택해주세요.
                </h3>
                <ul className=" grid grid-cols-6 gap-3 mt-5">
                  {
                    serviceList?.map((e) => (
                      <li key={e.id} className="flex flex-col items-center justify-center py-4 border col-span-1 rounded-lg transition-all opacity-60 hover:opacity-100 hover:border-main-900 cursor-pointer">
                        <img src={e.img} className="w-8" />
                        <span className="text-sm mt-2">{e.title}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-5 mb-5">
                <h3 className="font-bold">
                  <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">2</span>
                  원하는 작업을 선택해주세요.
                </h3>
                <ul className="mt-5">
                  {
                    serviceList[0]?.workList.map((e) => (
                      <li key={e.id} className="border rounded-lg px-4 py-4 mb-4 opacity-60 transition-all hover:opacity-100 hover:border-main-900 cursor-pointer">
                        <p className="text-sm mb-2 ">{e.title}</p>
                        <p className="text-sm text-gray-500">{serviceList[0].title}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-5 mb-5">
                <h3 className="font-bold">
                  <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">3</span>
                  원하는 옵션을 선택해 주세요.
                </h3>
                <select className="w-full border mt-5 px-4 py-3 rounded-lg text-sm">
                  {
                    serviceList[0]?.optionList.map((e) => (
                      <option key={e.id} value={e.id}>{e.title}</option>
                    ))
                  }
                </select>
              </div>
              <div className="bg-white rounded-2xl p-5 mb-5">
                <h3 className="font-bold">
                  <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">4</span>
                  해당 작업(옵션)에 대한 상세 설명입니다.
                  <span className="bg-red-500 text-[0.7rem] text-white px-2 py-1 rounded-lg ml-2">필독</span>
                </h3>
                <div className="bg-gray-200 p-4 mt-5 rounded-lg">
                  <p className="text-sm">{
                    `📣 서비스 특징
                  광고주의 게시물을 ㈜스마일드래곤의 제휴사 및 자사 플랫폼 등을 적절히 활용하여 실제 유저들에게 홍보해 계정의 '진짜 성장'을 도와드립니다.
                  노출 효과를 극대화해 퍼포먼스 마케팅은 물론 브랜드 마케팅까지 고루할 수 있는 유일한 마케팅 서비스입니다.
                  인스타그램을 처음 접하는 인스타 초보분들을 위해 만들어진 서비스로 게시물 올리는 법, 프로필 수정방법, 해시태그에 대한 설명 등 아주 기초적인 컨설팅이 들어가 있는 패키지 상품 입니다. 인스타그램을 막 시작하는 분들에게 추천 드립니다.
                  📋 서비스 설명
                  30일간 매일 첫 번째로 올려주시는 게시물을 실제 한국인 유저들에게 홍보하여 자연스럽게 팔로워, 좋아요, 조회수, 도달 등이 증가되는 올인원 형태의 상품으로, 인기게시물 및 추천 탭에 노출이 잘 되는 최적화 계정을 만들어드리는 서비스입니다.
                  * 하루 한 개의 게시물을, 한 달 기준 최대 30개까지 홍보해 드립니다.
                  * 해당 날짜에 첫 번째로 업로드한 게시물에만 홍보가 진행됩니다. * 매일 하루 1장씩 꾸준히 게시물을 올려주시면 광고 효과가 더 좋습니다. ※상품가격※ 99,000원(30일) 
                  📩문의 방법📩
                  1. 주문 링크에 카카오톡이 연결된 휴대폰 번호 기입.
                  2. 주문 수량란에 숫자 1 입력 후 주문하기 버튼 클릭.
                  3. 담당자가 영업일 기준 3일내 카카오톡으로 연락드립니다.
                  SNS샵의 전문가들이 당신의 성장을 도와드리겠습니다.`
                  }</p>
                </div>
                <h3 className="font-bold mt-5">
                  <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">5</span>
                  인스타그램 게시물 휴대폰번호를 입력해주세요.
                </h3>
                <input type="text" className="mt-5 bg-gray-100 w-full px-4 py-3 rounded-lg border text-sm" placeholder="예) 010-1234-1234" />
                <h3 className="font-bold mt-5">
                  <span className="bg-main-900 text-white px-3 py-1 rounded-lg mr-2">6</span>
                  구매하실 수량을 입력해주세요.
                </h3>
                <input type="number" className="mt-5 bg-gray-100 w-full px-4 py-3 rounded-lg border text-sm" placeholder="예) 100" />
                <h3 className="font-bold mt-5">
                  결제 예상 금액 (구매수량 입력시 자동으로 계산됩니다.)
                </h3>
                <input type="text" className="mt-5 bg-gray-100 w-full px-4 py-3 rounded-lg border text-sm font-bold" value={"10,000원"} readOnly />
                <button type="button" className="flex items-center justify-center bg-main-900 px-4 py-3 w-full rounded-lg mt-5">
                  <IconWidget icon="Shop" className=" fill-white mr-2" />
                  <span className="text-sm text-white font-bold">주문하기</span>
                </button>
              </div>
            </section>
            <section className="lg:col-span-1">

              <div className="bg-white rounded-2xl p-5 mb-5">
                <h3 className="font-bold">
                  실시간 주문 리스트
                </h3>
                <ul className="mt-5">
                  {
                    serviceList[0]?.workList.map((e) => (
                      <li key={e.id} className="border rounded-lg px-4 py-4 mb-4 opacity-60 transition-all hover:opacity-100 hover:border-main-900 cursor-pointer">
                        <p className="text-sm mb-2 ">{e.title}</p>
                        <p className="text-sm text-gray-500">{serviceList[0].title}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-5 mb-5">
                <h3 className="font-bold">
                  주문방법 - 링크 입력 가이드
                </h3>
                <ul className="mt-5">
                  {
                    serviceList[0]?.workList.map((e) => (
                      <li key={e.id} className="border rounded-lg px-4 py-4 mb-4 opacity-60 transition-all hover:opacity-100 hover:border-main-900 cursor-pointer">
                        <p className="text-sm mb-2 ">{e.title}</p>
                        <p className="text-sm text-gray-500">{serviceList[0].title}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>

            </section>
          </main>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Home;
