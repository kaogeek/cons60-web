import accordionToggle from "../utils/accordion.js";
import "../styles/Section.css";
import "../styles/Normal.css";

export default function Sections({sections, search = null}) {
  
  const convertDate = dateStr => {
    const dateArr = dateStr.split('/');
    const date = new Date(dateArr[2]-543, dateArr[1]-1, dateArr[0]);
    return date.toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  };
  
  const sectionArr = sections.map((section, index) => (
    <div id={'accordion-'+(index+1)} data-accordion-id={index+1} className="accordion accordion-collapsed flex flex-col w-full gap-x-1">
      <div className="w-full sm:rounded-xl bg-white bg-opacity-5">
        <button onClick={() => accordionToggle(index+1)} className="w-full p-5 grid grid-cols-3 justify-between">
          <div className="block col-span-2 text-left">
            <h1 className="text-2xl md:text-3xl text-header">ประชุมครั้งที่ {section.ประชุมครั้งที่}</h1>
            <h5 className="text-sm pt-3 text-subheader">{convertDate(section.date)} / หน้า {section.หน้า}</h5>
          </div>
          <div className="flex justify-end items-center gap-2">
            <a href={section.link} onClick={evt => {
              evt.stopPropagation();
              accordionToggle(index+1, true);
            }} target="_blank" rel="noreferrer">
              <svg className="w-[36px] h-[36px] md:w-[48px] md:h-[48px]" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24.7529" cy="24.1987" r="24" fill="#240c00" />
                <path fill-rule="evenodd" clip-rule="evenodd" fill="white" d="M25.518 15.7832C27.6306 13.6706 31.0559 13.6706 33.1685 15.7832C35.2811 17.8958 35.2811 21.321 33.1685 23.4337L30.8733 25.7288C30.4509 26.1514 29.7658 26.1514 29.3432 25.7288C28.9207 25.3063 28.9207 24.6212 29.3432 24.1987L31.6384 21.9036C32.906 20.636 32.906 18.5809 31.6384 17.3133C30.3708 16.0457 28.3157 16.0457 27.0481 17.3133L24.7529 19.6084C24.3304 20.031 23.6454 20.031 23.2228 19.6084C22.8003 19.1859 22.8003 18.5009 23.2228 18.0783L25.518 15.7832ZM20.9277 28.024C20.5052 27.6015 20.5052 26.9164 20.9277 26.4939L27.0481 20.3735C27.4706 19.951 28.1557 19.951 28.5782 20.3735C29.0007 20.796 29.0007 21.4811 28.5782 21.9036L22.4578 28.024C22.0353 28.4465 21.3502 28.4465 20.9277 28.024ZM16.3374 32.6143C14.2248 30.5017 14.2248 27.0764 16.3374 24.9638L18.6325 22.6686C19.0551 22.2461 19.7401 22.2461 20.1626 22.6686C20.5852 23.0912 20.5852 23.7762 20.1626 24.1987L17.8675 26.4939C16.5999 27.7615 16.5999 29.8166 17.8675 31.0842C19.1351 32.3518 21.1902 32.3518 22.4578 31.0842L24.7529 28.789C25.1754 28.3665 25.8605 28.3665 26.283 28.789C26.7056 29.2116 26.7056 29.8967 26.283 30.3191L23.9879 32.6143C21.8752 34.7269 18.45 34.7269 16.3374 32.6143Z" />
              </svg>
            </a>
            <svg className="accordion-icon w-[36px] h-[36px] md:w-[48px] md:h-[48px]" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24.7529" cy="24.1987" r="24" fill="#240c00" />
              <rect width="32" height="32" transform="translate(40.7529 40.1987) rotate(-180)" fill="#240c00" />
              <path fill="white" d="M32.7659 29.3947L24.7747 21.7988L16.7505 29.4278C16.5224 29.6415 16.2204 29.7585 15.9079 29.7543C15.5953 29.75 15.2966 29.6249 15.0744 29.4051C14.9708 29.302 14.889 29.1792 14.8338 29.0439C14.7786 28.9086 14.7511 28.7636 14.753 28.6175C14.755 28.4714 14.7862 28.3271 14.845 28.1934C14.9038 28.0596 14.9888 27.939 15.0951 27.8387L23.1111 20.2158L24.7665 18.6433L26.4218 20.2241L34.4337 27.8325C34.5368 27.9355 34.6181 28.0581 34.673 28.1931C34.7278 28.3281 34.7549 28.4727 34.7528 28.6184C34.7507 28.7641 34.7193 28.9079 34.6606 29.0412C34.6019 29.1746 34.517 29.2948 34.4109 29.3947C34.1885 29.6047 33.8943 29.7217 33.5884 29.7217C33.2826 29.7217 32.9883 29.6047 32.7659 29.3947Z" />
            </svg>
          </div>
        </button>
        <div className="accordion-collapsable">
          <hr className="opacity-20" />
          <div id="section-info" className="p-5">
            { section.ร่างมาตรา ? (
              <div className="py-3">
                <h3 className="text-sm text-header">ร่างมาตรา</h3>
                <h2 className="text-lg md:text-xl pt-3 text-subheader">{section.ร่างมาตรา}</h2>
              </div>
            ) : '' }
            <div className="py-3">
              <h3 className="text-sm text-header">ผู้อภิปราย</h3>
              <h2 className="discussionist text-lg md:text-xl pt-3 text-subheader">
                { section.ผู้อภิปราย.length
                    ? section.ผู้อภิปราย
                      .map(s => (
                        <>
                          <span className="inline-block">{s}</span>
                          <span className="comma">, </span>
                        </>
                      ))
                    : 'ไม่มีผู้อภิปราย' }
              </h2>
            </div>
            { section.หมายเหตุ ? (
              <div className="py-3">
                <h3 className="text-sm text-header">หมายเหตุ</h3>
                <h2 className="pt-3 text-subheader">{section.หมายเหตุ}</h2>
              </div>
            ) : '' }
            { section.มติที่ประชุม ? (
              <div className="py-3">
                <h3 className="text-sm text-header">มติที่ประชุม</h3>
                <div className="pt-3 text-subheader"
                  dangerouslySetInnerHTML={{__html: section.มติที่ประชุม}}
                ></div>
              </div>
            ) : '' }
          </div>
          { section.ร่างบทบัญญัติ.length ? (
            <>
              <div className="w-full px-2 py-5 sm:p-5 bg-[#ddd]">
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
                <div className="provision md:pt-3 md:px-5 text-[#222] text-bold text-sm text-left"
                  dangerouslySetInnerHTML={{__html: section.ร่างบทบัญญัติ.replace(new RegExp(search, 'gi'), `<span class="highlight">${search}</span>`)}}
                ></div>
              </div>
            </>
          ) : '' }
          <button className="visually-hidden">ก่อนหน้า</button>
          <button className="visually-hidden">ต่อไป</button>
        </div>
      </div>
    </div>
  ));
  
  return sectionArr;
  
}


