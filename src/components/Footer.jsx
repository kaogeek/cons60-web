export default function Footer() {
  return (
    <div className="px-5 py-3 text-[#bbb] text-center text-sm">
      เว็บไซต์นี้จัดทำขึ้นเพื่ออำนวยควาสะดวกในการสืบค้นข้อมูล <br className="lg:hidden" />การนำไปใช้อ้างอิงใดๆ โปรดตรวจสอบและอ้างอิงจากต้นฉบับเท่านั้น<br />
      สำนักงานเลขาธิการสภาผู้แทนราษฎรสงวนสิทธิ์<br className="lg:hidden" />ในความรับผิดชอบต่อความถูกต้องของข้อมูลเบนว็บไซต์นี้<br /><br />
      <span className="text-header">&copy; {(new Date()).getFullYear()} สำนักงานเลขาธิการสภาผู้แทนราษฎร</span>
    </div>
  );
}
