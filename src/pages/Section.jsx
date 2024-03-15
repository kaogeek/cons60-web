import { Link, useParams, useLocation } from "react-router-dom";

import createDataObject from "../c60-data-query/data-object.js";
import data from "../c60-data-query/data.js";

import Constitution from "../components/Constitution";
import Sections from "../components/Sections";
import Footer from "../components/Footer";

import isNumeric from "../utils/isNumeric.js";
import accordionToggle from "../utils/accordion.js";


export default function Section() {

  const {state} = useLocation();
  const {id} = useParams();
  const query = () => {

    const dataObj = createDataObject(data).filter("มาตรา", id);
    const dataArr = dataObj.valueOf();
    const constitution = dataObj.getConstitution(id).valueOf()[0];
    const minutes = dataObj.getMinutes().valueOf();
    
    const rows = dataArr
      .filter(row => row.ร่างบทบัญญัติ.length)
      .map(row => {
        const minuteID = row.ประชุมครั้งที่;
        const minute = minutes.filter(mRow => mRow.id == minuteID)[0];
        return {...row, ...minute};
      });
      
    return { constitution, rows };

  };
  
  const section = query();
  const sectionNav = section.rows.map((row, index) => {
    return (
      <button id={'nav-'+(index+1)} data-id={index+1} onClick={() => accordionToggle(index+1)} className="nav py-2 px-5 font-bold text-left w-full md:w-64 text-[#9F9F9F]">
        ประชุมครั้งที่ {row.ประชุมครั้งที่}
      </button>
    )
  });

  return (
    <>
      <div className="bg-[#310]">
        <div className="max-w-screen-xl h-16 mx-auto px-4">
          <h1 className="text-header text-2xl sm:text-3xl truncate" style={{ lineHeight: '64px' }}>
            <Link to={state ? state.from : '/'} className="inline-block h-16 pr-2">
              <svg className="inline" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#cb6" d="M21.7858 8.79072L14.1899 16.7819L21.8189 24.8062C22.0326 25.0343 22.1496 25.3363 22.1454 25.6488C22.1412 25.9613 22.016 26.26 21.7962 26.4822C21.6931 26.5858 21.5703 26.6677 21.435 26.7229C21.2997 26.7781 21.1547 26.8055 21.0086 26.8036C20.8625 26.8017 20.7183 26.7704 20.5845 26.7116C20.4507 26.6529 20.3301 26.5678 20.2298 26.4615L12.6069 18.4455L11.0344 16.7902L12.6152 15.1348L20.2236 7.12296C20.3266 7.01987 20.4492 6.9385 20.5842 6.88368C20.7192 6.82886 20.8638 6.8017 21.0095 6.80383C21.1552 6.80595 21.299 6.8373 21.4324 6.89603C21.5657 6.95476 21.6859 7.03967 21.7858 7.14572C21.9958 7.36811 22.1128 7.66237 22.1128 7.96822C22.1128 8.27407 21.9958 8.56834 21.7858 8.79072Z" />
              </svg>
            </Link>
            {isNumeric(id) ? `มาตรา ${id}` : id}
          </h1>
        </div>
      </div>
      <div className="bg-[#310] sm:py-8 text-white min-h-screen">
        <div className="block sm:flex justify-center items-center ">
          <div className="flex flex-row w-full sm:w-11/12 md:w-5/6 lg:w-3/4 gap-4">
            <div className="p-4 rounded-2xl hidden flex-col gap-2 lg:flex block-darker">
              <div className="text-lg font-bold w-full text-subheader">ที่มาของมาตรา {id}</div>
              <button id="nav-0" data-accordion-id="0" onClick={() => accordionToggle(0)} className="nav nav-active py-2 px-5 font-bold text-left w-full md:w-64 bg-white rounded-lg text-[#131313]">
                รัฐธรรมนูญ 2560
              </button>
              {sectionNav}
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4">
                <Constitution constitution={section.constitution.บทบัญญัติ} />
                <Sections sections={section.rows} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
