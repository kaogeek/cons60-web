export default function accordionToggle(id, forceOpen=false) {
  
  const navActive = document.querySelector('.nav-active');
  const accordionClick = document.getElementById('accordion-'+id);
  const accordionActive = document.querySelector('.accordion-active');
  const accordionActiveID = accordionActive?.dataset.accordionId;

  if (!forceOpen || accordionActiveID != id) {
    accordionActive?.classList.remove('accordion-active');
    accordionActive?.classList.add('accordion-collapsed');
  }
  
  if (accordionActiveID != id) {
    accordionClick.classList.remove('accordion-collapsed');
    accordionClick.classList.add('accordion-active');
    accordionClick.scrollIntoView({ behavior: 'smooth' });
  }

  const navExpanded = document.getElementById('nav-'+id);
  navActive.className = 'nav py-2 px-5 font-bold text-left w-full md:w-64 text-[#9F9F9F]';
  navExpanded.className = 'nav nav-active py-2 px-5 font-bold text-left w-full md:w-64 bg-white rounded-lg text-[#131313]';
  return;
  
}
