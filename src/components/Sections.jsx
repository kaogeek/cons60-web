import React, { useState, useEffect } from 'react';
import accordionToggle from '../utils/accordion.js';
import highlight from '../utils/highlight.js';
import toggleIssue from '../utils/toggleIssue.js';
import "../styles/Section.css";
import pdf from "../images/PDF_file_icon.svg";
import "../styles/Normal.css";

export default function Sections({ sections, search = null }) {

  const convertDate = dateStr => {
    const dateArr = dateStr.split('/');
    const date = new Date(dateArr[2] - 543, dateArr[1] - 1, dateArr[0]);
    return date.toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  };

  const sectionArr = sections.map((section, index) => (
    <div id={'accordion-' + (index + 1)} data-accordion-id={index + 1} className="accordion accordion-collapsed flex flex-col w-full gap-x-1">
      <div className="w-full sm:rounded-xl bg-white bg-opacity-5">
        <button onClick={() => {
          accordionToggle(index + 1);
        }} className="w-full p-5 grid grid-cols-3 justify-between">
          <div className="block col-span-2 text-left">
            <h1 className="text-2xl md:text-3xl text-header">ประชุมครั้งที่ {section.ประชุมครั้งที่}</h1>
            <h5 className="text-sm pt-3 text-subheader">{convertDate(section.date)} / หน้า {section.หน้า}</h5>
          </div>
          <div className="flex justify-end items-center gap-2">
            <svg className="accordion-icon w-[36px] h-[36px] md:w-[48px] md:h-[48px]" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>Toggle button</title>
              <circle cx="24.7529" cy="24.1987" r="24" fill="#240c00" />
              <rect width="32" height="32" transform="translate(40.7529 40.1987) rotate(-180)" fill="#240c00" />
              <path fill="white" d="M32.7659 29.3947L24.7747 21.7988L16.7505 29.4278C16.5224 29.6415 16.2204 29.7585 15.9079 29.7543C15.5953 29.75 15.2966 29.6249 15.0744 29.4051C14.9708 29.302 14.889 29.1792 14.8338 29.0439C14.7786 28.9086 14.7511 28.7636 14.753 28.6175C14.755 28.4714 14.7862 28.3271 14.845 28.1934C14.9038 28.0596 14.9888 27.939 15.0951 27.8387L23.1111 20.2158L24.7665 18.6433L26.4218 20.2241L34.4337 27.8325C34.5368 27.9355 34.6181 28.0581 34.673 28.1931C34.7278 28.3281 34.7549 28.4727 34.7528 28.6184C34.7507 28.7641 34.7193 28.9079 34.6606 29.0412C34.6019 29.1746 34.517 29.2948 34.4109 29.3947C34.1885 29.6047 33.8943 29.7217 33.5884 29.7217C33.2826 29.7217 32.9883 29.6047 32.7659 29.3947Z" />
            </svg>
          </div>
        </button>
        <div className="accordion-collapsable">
          <div className="section-button ml-5 mb-5">
            <a href={section.link} onClick={evt => {
              evt.stopPropagation();
            }} target="_blank" rel="noreferrer">
              บันทึกการประชุม
            </a>
            { section.ประเด็นการพิจารณา.length ? (
              <a href={section.link} onClick={evt => {
                evt.stopPropagation();
                evt.preventDefault();
                toggleIssue(index + 1);
              }}>
               ประเด็นการพิจารณา
              </a>
            ) : false }
          </div>
          <hr className="opacity-20 mt-10" />
          <div id="section-info" className="p-5">
            {section.ร่างมาตรา ? (
              <div className="py-3">
                <h3 className="text-sm text-header">ร่างมาตรา</h3>
                <h2 className="text-lg md:text-xl pt-3 text-subheader">{section.ร่างมาตรา}</h2>
              </div>
            ) : ''}
            <div className="py-3">
              <h3 className="text-sm text-header">ผู้อภิปราย</h3>
              <h2 className="discussionist text-lg md:text-xl pt-3 text-subheader">
                {section.ผู้อภิปราย.length
                  ? section.ผู้อภิปราย
                    .map(s => (
                      <>
                        <span className="inline-block">{s}</span>
                        <span className="comma">, </span>
                      </>
                    ))
                  : 'ไม่มีผู้อภิปราย'}
              </h2>
            </div>
            {section.หมายเหตุ ? (
              <div className="py-3">
                <h3 className="text-sm text-header">หมายเหตุ</h3>
                <h2 className="pt-3 text-subheader">{section.หมายเหตุ}</h2>
              </div>
            ) : ''}
            {section.มติที่ประชุม ? (
              <div className="py-3">
                <h3 className="text-sm text-header">มติที่ประชุม</h3>
                <div className="pt-3 text-subheader"
                  dangerouslySetInnerHTML={{ __html: section.มติที่ประชุม }}
                ></div>
              </div>
            ) : ''}
          </div>
          {section.ร่างบทบัญญัติ.length ? (
            <>
              <div className="w-full px-2 py-5 sm:rounded-t-lg bg-[#ddd]">
                <div className="flex items-center gap-3 sm:gap-10 px-2">
                  <div className="flex gap-2 ml-3 items-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#12ad75]" />
                    <h4 className="text-sm underline text-[#12ad75]">ข้อความที่เพิ่มใหม่</h4>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#ff5151]" />
                    <h4 className="text-sm line-through text-[#ff5151]">ข้อความเดิมที่ลบออก</h4>
                  </div>
                </div>
              </div>
              <div className="w-full p-5 sm:rounded-b-xl bg-[#eee]">
                <div className="provision md:pt-3 md:px-5 text-[#222] text-sm text-left"
                  dangerouslySetInnerHTML={{ __html: highlight(section.ร่างบทบัญญัติ, search) }}
                ></div>
              </div>
            </>
          ) : ''}
          {section.ประเด็นการพิจารณา.length ? (
            <div id={'issue-' + (index + 1)} className="hidden fixed top-0 left-0 z-50 v-screen h-screen w-[100vw] overflow-scroll sm:py-8 min-h-screen bg-[#eee] text-[#111]">
              <div className="m-auto lg:w-[70%] md:w-[80%] sm:w-[90%] w-[95%]">
                <h3 className="text-2xl mt-8 sm:mt-0">
                  <button value="back" onClick={() => toggleIssue(index + 1) } className="inline-block h-16 pr-2">
                    <svg className="inline" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <title>Back button</title>
                      <path fill="#000" d="M21.7858 8.79072L14.1899 16.7819L21.8189 24.8062C22.0326 25.0343 22.1496 25.3363 22.1454 25.6488C22.1412 25.9613 22.016 26.26 21.7962 26.4822C21.6931 26.5858 21.5703 26.6677 21.435 26.7229C21.2997 26.7781 21.1547 26.8055 21.0086 26.8036C20.8625 26.8017 20.7183 26.7704 20.5845 26.7116C20.4507 26.6529 20.3301 26.5678 20.2298 26.4615L12.6069 18.4455L11.0344 16.7902L12.6152 15.1348L20.2236 7.12296C20.3266 7.01987 20.4492 6.9385 20.5842 6.88368C20.7192 6.82886 20.8638 6.8017 21.0095 6.80383C21.1552 6.80595 21.299 6.8373 21.4324 6.89603C21.5657 6.95476 21.6859 7.03967 21.7858 7.14572C21.9958 7.36811 22.1128 7.66237 22.1128 7.96822C22.1128 8.27407 21.9958 8.56834 21.7858 8.79072Z" />
                    </svg>
                    ประชุมครั้งที่ {section.ประชุมครั้งที่}
                  </button>
                </h3>
                <h4 className="mt-5 mx-3 text-xl">ประเด็นการพิจารณา</h4>
                <div className="provision m-3 text-sm text-left"
                  dangerouslySetInnerHTML={{ __html: highlight(section.ประเด็นการพิจารณา, search) }}
                />
                <h3 className="text-2xl mb-8 sm:mb-0">
                  <button value="back" onClick={() => toggleIssue(index + 1) } className="inline-block h-16 pr-2">
                    <svg className="inline" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <title>Back button</title>
                      <path fill="#000" d="M21.7858 8.79072L14.1899 16.7819L21.8189 24.8062C22.0326 25.0343 22.1496 25.3363 22.1454 25.6488C22.1412 25.9613 22.016 26.26 21.7962 26.4822C21.6931 26.5858 21.5703 26.6677 21.435 26.7229C21.2997 26.7781 21.1547 26.8055 21.0086 26.8036C20.8625 26.8017 20.7183 26.7704 20.5845 26.7116C20.4507 26.6529 20.3301 26.5678 20.2298 26.4615L12.6069 18.4455L11.0344 16.7902L12.6152 15.1348L20.2236 7.12296C20.3266 7.01987 20.4492 6.9385 20.5842 6.88368C20.7192 6.82886 20.8638 6.8017 21.0095 6.80383C21.1552 6.80595 21.299 6.8373 21.4324 6.89603C21.5657 6.95476 21.6859 7.03967 21.7858 7.14572C21.9958 7.36811 22.1128 7.66237 22.1128 7.96822C22.1128 8.27407 21.9958 8.56834 21.7858 8.79072Z" />
                    </svg>
                    ประชุมครั้งที่ {section.ประชุมครั้งที่}
                  </button>
                </h3>
              </div>
            </div>
          ) : ''}
          <button className="visually-hidden" onClick={() => accordionToggle(index-1)} >ก่อนหน้า</button> 
        </div>
      </div>
    </div>
  ));

  return sectionArr;

}

