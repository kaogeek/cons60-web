export default function Footer() {
  return (
    <>
      <div className="text-center text-xl py-20 text-subheader">
        <span className="text-3xl text-header">ชอบเว็บของเราหรือไม่?</span><br />
        แสดงความคิดเห็นของท่านผ่าน <br className="sm:hidden" />
        <a className="underline text-header" href="https://form.parliament.go.th/questionnaire/SurveyUser/SurveyUserTakeNoLogin.php?survey_id=509796" target="_blank" rel="noreferrer">
          แบบประเมินความพึงพอใจ
        </a>
        &nbsp;ได้เลยนะคะ
      </div>
      <div className="px-5 py-3 text-[#bbb] text-center text-sm">
      <a href="https://achecks.org/checker/" target="_blank" title="แสดงผ่านมาตรฐาน WCAG 2.0 ระดับ AA">
          <img className="inline" src="https://achecks.org/images/icon_W2_aa.jpg" alt="WCAG 2.0 (Level AA)" title="แสดงผ่านมาตรฐาน WCAG 2.0 ระดับ AA" height="32" width="102" />
        </a><br /><br />
        เว็บไซต์นี้จัดทำเพื่ออำนวยความสะดวกในการสืบค้นข้อมูล <br className="sm:hidden" />โปรดตรวจสอบและอ้างอิงจากต้นฉบับเท่านั้น<br />
        สำนักงานเลขาธิการสภาผู้แทนราษฎรสงวนสิทธิ์<br className="sm:hidden" />ในความรับผิดชอบต่อความถูกต้องของข้อมูลบนเว็บไซต์นี้<br /><br />
        <span className="text-header">&copy; {(new Date()).getFullYear()} สำนักงานเลขาธิการสภาผู้แทนราษฎร</span>
      </div>
    </>
  );
}
