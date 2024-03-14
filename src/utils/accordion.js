export default function accordionToggle(id) {
  
  const navActive = document.querySelector('.nav-active');
  const navActiveID = navActive.dataset.id;
  
  if (navActiveID == id) return;
  
  const accordionActive = document.getElementById('accordion-'+navActiveID);
  const accordionExpand = document.getElementById('accordion-'+id);
  accordionActive.classList.add('accordion-collapsed');
  accordionExpand.classList.remove('accordion-collapsed');
  
  const navExpand = document.getElementById('nav-'+id);
  navActive.className = 'nav py-2 px-5 font-bold text-left w-full md:w-64 text-[#9F9F9F]';
  navExpand.className = 'nav nav-active py-2 px-5 font-bold text-left w-full md:w-64 bg-white rounded-lg text-[#131313]';
  
  accordionExpand.scrollIntoView({ behavior: 'smooth' });
  
  return;
  
}
