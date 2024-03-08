import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import ByChapter from "../components/Overview/ByChapter";
import ByDiscussionist from "../components/Overview/ByDiscussionist";
import BySection from "../components/Overview/BySection";

export default function Home() {
  const [view, setView] = useState("chapter");

  return (
    <div data-testid="home">
      <div className="bg-black">
        <div className="Landing-Page-Banner-PC text-center lg:pt-40 pt-40 px-2">
          <div className="lg:text-7xl md:text-6xl sm:text-4xl text-3xl font-bold text-orange-500">
            บันทึกการประชุม
          </div>
          <div className="lg:text-6xl md:text-5xl sm:text-4xl text-xl font-bold text-white pt-2">
            คณะกรรมการร่างรัฐธรรมนูญ ปี 2560
          </div>

          <div className="text-lg text-white pt-8 hidden lg:block">
            ตอบทุกความสงสัยกว่าจะมาเป็นรัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2560<br></br>
            เรียนรู้เส้นทางการร่างรัฐธรรมนูญ และเปรียบเทียบบทบัญญัติของรัฐธรรมนูญแห่งราชอาณาจักรไทย<br></br>
            พุทธศักราช 2560 กับร่างรัฐธรรมนูญที่มีการเสนอและแก้ไขเพิ่มเติมจากบันทึกการประชุม
          </div>
          <div className="text-lg text-white px-2 pt-8 block lg:hidden">
            เรียนรู้ และเปรียบเทียบรัฐธรรมนูญฉบับปี 2560 <br></br>
            พวกเค้าทำงานกันอย่างไร กฎหมายฉบับนี้ <br></br>
            ออกมาเพื่อใคร หาคำตอบไปด้วยกัน
          </div>

          <Link to="/search">
          <div className="py-10 px-2 flex justify-center">
            <div className="lg:w-2/5 md:w-3/5 sm:w-4/5 xs:w-4/5">
              <div className="text-2xl text-black px-6 bg-white flex content-center py-2 items-center rounded-full">
                <Icon icon="bx:bx-search-alt-2" className="text-black" />
                <div className="px-2"></div>
                <input
                  type="text"
                  id="search-input"
                  name="search-input"
                  className="flex-auto focus:outline-none"
                ></input>
              </div>
            </div>
          </div>
          </Link>
          

          <div className="text-neutral-400 text-center lg:py-8 py-40">
            <div className="flex justify-center">
              <Icon icon="mingcute:up-line" className="text-4xl" />
            </div>
            <div>
              เลื่อนเพื่อดูภาพรวม <br></br>
              ของการร่างรัฐธรรมนูญ 60
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white flex justify-center">
        <div className="text-3xl font-bold pt-4 w-3/4">ภาพรวม</div>
      </div>

      <div className="bg-black text-white flex justify-center py-5">
        <div className="bg-[#131313] lg:w-3/6 w-5/6 rounded-full font-bold">
          <button
            className={
              view === "chapter"
                ? "bg-white rounded-full text-black py-2 w-1/3"
                : "py-2 w-1/3 text-[#9f9f9f]"
            }
            onClick={() => setView("chapter")}
          >
            ตามหมวด
          </button>
          <button
            className={
              view === "discussionist"
                ? "bg-white rounded-full text-black py-2 w-1/3"
                : "py-2 w-1/3 text-[#9f9f9f]"
            }
            onClick={() => setView("discussionist")}
          >
            ตามผู้อภิปราย
          </button>
          <button
            className={
              view === "section"
                ? "bg-white rounded-full text-black py-2 w-1/3"
                : "py-2 w-1/3 text-[#9f9f9f]"
            }
            onClick={() => setView("section")}
          >
            ตามมาตรา
          </button>
        </div>
      </div>

      <div className="bg-[#1a1a1a] py-4 md:py-8 text-white">
        {view === "chapter" && (<ByChapter />)}
        {view === "discussionist" && (<ByDiscussionist />)}
        {view === "section" && (<BySection />)}
      </div>
    </div>
  );
}
