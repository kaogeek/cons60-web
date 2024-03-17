export default function accordionToggle(id) {
  
  const navActive = document.querySelector('.nav-active');
  const accordionExpand = document.getElementById('accordion-'+id);
  const accordionActive = document.querySelector('.accordion-active');
  const accordionActiveID = accordionActive?.dataset.accordionId;
  
  accordionActive?.classList.remove('accordion-active');
  accordionActive?.classList.add('accordion-collapsed');
  if (accordionActiveID != id) {
    accordionExpand.classList.remove('accordion-collapsed');
    accordionExpand.classList.add('accordion-active');
    accordionExpand.scrollIntoView({ behavior: 'smooth' });
  }
  
  const navExpand = document.getElementById('nav-'+id);
  navActive.className = 'nav py-2 px-5 font-bold text-left w-full md:w-64 text-[#9F9F9F]';
  navExpand.className = 'nav nav-active py-2 px-5 font-bold text-left w-full md:w-64 bg-white rounded-lg text-[#131313]';
    
  return;
  
}
