import accordionToggle from "../utils/accordion.js";
import "../styles/Normal.css";

export default function Constitution({constitution, search = null}) {
  
  return (
    <div id="accordion-0" data-accordion-id="0" className="accordion accordion-active flex flex-col w-full gap-x-1">
      <div className="w-full sm:rounded-xl bg-white bg-opacity-5">
        <button id="constitution" onClick={() => accordionToggle(0)} className="w-full grid grid-cols-5 justify-between p-5">
          <div className="block col-span-4">
            <h1 className="text-2xl md:text-3xl pt-1 text-header text-left">รัฐธรรมนูญ 2560</h1>
          </div>
          <div className="flex justify-end items-center gap-2">
            <svg className="accordion-icon w-[36px] h-[36px] md:w-[48px] md:h-[48px]" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24.7529" cy="24.1987" r="24" fill="#240c00" />
              <rect width="32" height="32" transform="translate(40.7529 40.1987) rotate(-180)" fill="#240c00" />
              <path fill="white" d="M32.7659 29.3947L24.7747 21.7988L16.7505 29.4278C16.5224 29.6415 16.2204 29.7585 15.9079 29.7543C15.5953 29.75 15.2966 29.6249 15.0744 29.4051C14.9708 29.302 14.889 29.1792 14.8338 29.0439C14.7786 28.9086 14.7511 28.7636 14.753 28.6175C14.755 28.4714 14.7862 28.3271 14.845 28.1934C14.9038 28.0596 14.9888 27.939 15.0951 27.8387L23.1111 20.2158L24.7665 18.6433L26.4218 20.2241L34.4337 27.8325C34.5368 27.9355 34.6181 28.0581 34.673 28.1931C34.7278 28.3281 34.7549 28.4727 34.7528 28.6184C34.7507 28.7641 34.7193 28.9079 34.6606 29.0412C34.6019 29.1746 34.517 29.2948 34.4109 29.3947C34.1885 29.6047 33.8943 29.7217 33.5884 29.7217C33.2826 29.7217 32.9883 29.6047 32.7659 29.3947Z" />
            </svg>
          </div>
        </button>
      </div>
      <div className="accordion-collapsable">
        <div className="w-full p-5 sm:rounded-b-xl bg-[#eee]">
          <div className="provision md:pt-3 md:px-5 text-[#222] text-bold text-sm text-left"
            dangerouslySetInnerHTML={{__html: constitution.replace(new RegExp(search, 'gi'), `<span class="highlight">${search}</span>`)}}
          ></div>
        </div>
        <button className="visually-hidden">ก่อนหน้า</button>
        <button className="visually-hidden">ต่อไป</button>
      </div>
    </div>
  )
  
}


