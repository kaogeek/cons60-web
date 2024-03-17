import React from "react";
import "../components/ProfileImages.jsx";
import AnonymousSVG from "../components/AnonymousSVG.jsx";
import ProfileImages from "../components/ProfileImages.jsx";
import Footer from "../components/Footer";

export default function About() {
  return (
	
	<div>

    <div id="about" data-testid="about">
      <div className="bg-[#310] pb-20">
        <div className="w-11/12 md:w-5/6 lg:w-3/4 mx-auto min-h-screen">

          <h1 className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-subheader pt-40">
            เกี่ยวกับโครงการอาสาสมัครหอสมุดรัฐสภา
          </h1>
          <h1 className="text-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-header pt-10">
            กิจกรรม “Hack เจตนารมณ์รัฐธรรมนูญ 2560” 
          </h1>
          <h1 className="text-center lg:text-3xl md:text-2xl sm:text-xl text-l font-bold text-subheader pt-10">
            และจัดทำเว็บไซต์เปรียบเทียบบทบัญญัติ<br className="lg:hidden" />และเจตนารมณ์การร่างรัฐธรรมนูญ
          </h1>
	      
          <div className="text-white text-lg px-8">
            <p className="pt-20">
              รัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2560 ได้บัญญัติถึงสิทธิเสรีภาพของประชาชน และสนับสนุนให้เกิดการมีส่วนร่วมของประชาชน การส่งเสริมและคุ้มครองสิทธิเสรีภาพของประชาชน
              และการเปิดโอกาสให้ประชาชนได้เข้ามามีส่วนร่วมในการพัฒนาประเทศทั้งด้านเศรษฐกิจ สังคม การเมือง และสิ่งแวดล้อมอย่างเป็นรูปธรรมมากยิ่งขึ้น
              อันจะนำไปสู่การพัฒนาระบบการเมืองการปกครองในระบอบประชาธิปไตยอันมีพระมหากษัตริย์ทรงเป็นประมุขให้เป็นไปในทิศทางที่เหมาะสม
              การพัฒนาประเทศจะเกิดประสิทธิภาพประชาชนต้องเข้ามามีส่วนร่วมในทุกระดับ และสอดคล้องกับยุคดิจิทัลที่หน่วยงานต้องนำเทคโนโลยีสารสนเทศที่มีความทันสมัย
              และพัฒนาไปอย่างไม่หยุดยั้งมาสร้างบริการดิจิทัลที่ตรงกับความต้องการของผู้ใช้บริการ
            </p>
            <p>
              หอสมุดรัฐสภา สำนักวิชาการ ตระหนักถึงการเข้าถึงทรัพยากรสารสนเทศที่สะดวก รวดเร็วของสมาชิกรัฐสภาและผู้ใช้บริการในยุคดิจิทัล
              จึงมีแนวคิดยกระดับของการให้บริการสารสนเทศภายในหอสมุดรัฐสภาให้สามารถเข้าถึงทรัพยากรสารสนเทศเพื่อใช้ประโยชน์ในการพิจารณารัฐธรรมนูญ
              และร่างพระราชบัญญัติต่าง ๆ ซึ่งเป็นภารกิจโดยตรงของรัฐสภาในการทำหน้าที่ตรากฎหมายของประเทศ ให้มีความสะดวก รวดเร็ว ตรงต่อความต้องการ
              โดยสามารถเข้าถึงได้ทุกที่ ทุกเวลา และทุกอุปกรณ์
            </p>
            <p>
              หอสมุดรัฐสภาจึงได้ริเริ่มโครงการอาสาสมัครหอสมุดรัฐสภา โดยดำเนินการกิจกรรมที่ 1 คือ กิจกรรม “Hack เจตนารมณ์รัฐธรรมนูญ 2560”
              และจัดทำเว็บไซต์เปรียบเทียบบทบัญญัติและเจตนารมณ์การร่างรัฐธรรมนูญ เพื่อเหนี่ยวนำทุกภาคส่วนที่เกี่ยวข้อง (Stakeholders) มาร่วมกันออกแบบนวัตกรรมใหม่
              ที่ขจัดปัญหาอุปสรรคด้านเวลา สถานที่ และวิธีการในการเข้าถึงบันทึกการประชุมคณะกรรมการร่างรัฐธรรมนูญ 2560  โดยนำแนวคิด Hackathon เข้ามาใช้ เปิดโอกาสให้สมาชิกสภาผู้แทนราษฎร
              ภาคประชาชนและกลุ่มนักออกแบบที่สนใจเข้ามามีส่วนร่วมในการเสนอความต้องการ ร่วมออกแบบ ร่วมขับเคลื่อน และร่วมกันจัดทำเครื่องมือสืบค้น (Search Engine)
              ออกมาเป็นเว็บไซต์บันทึกการประชุมคณะกรรมการร่างรัฐธรรมนูญ 2560 ที่สามารถสืบค้นเปรียบเทียบตัวบทของรัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2560
              กับร่างรัฐธรรมนูญที่มีการเสนอและแก้ไขเพิ่มเติม ตั้งแต่เริ่มประชุมครั้งแรกจนเสร็จสิ้นการร่างรัฐธรรมนูญ จำนวน 279 มาตรา ซึ่งจะเป็นประโยชน์ต่อผู้ศึกษาได้เรียนรู้ความมุ่งหมายของผู้ร่างรัฐธรรมนูญ
              และเส้นทางของการร่างรัฐธรรมนูญแต่ละมาตรา อันจะนำไปสู่การสืบค้นเจตนารมณ์ของรัฐธรรมนูญด้วยตนเอง สมาชิกรัฐสภา ข้าราชการ และบุคคลในวงงานรัฐสภา
              สามารถนำไปใช้ประโยชน์ในการศึกษาเพื่อการปรับปรุงแก้ไขเพิ่มเติมรัฐธรรมนูญต่อไป
            </p>
            <p>
              โครงการอาสาสมัครหอสมุดรัฐสภา กิจกรรม Hack เจตนารมณ์รัฐธรรมนูญ 2560 ถือเป็นประวัติศาสตร์ครั้งแรกของหอสมุดรัฐสภา ที่ได้สร้างอาสาสมัคร รุ่นที่ 1
              ที่มีจิตสาธารณะ มีความตั้งใจเข้าร่วม Hack บันทึกการประชุมคณะกรรมการร่างรัฐธรรมนูญ 2560 จากตัวเล่มให้เป็นดิจิทัลทั้งหมด และจัดทำเครื่องมือช่วยค้นให้สามารถสืบค้นได้ทั้งจากมาตรา
              ชื่อผู้อภิปราย และจากถ้อยคำที่มีอยู่ในบันทึกการประชุม สามารถแสดงผลเชื่อมโยงมาตราที่เกี่ยวข้อง สามารถเปรียบเทียบการเปลี่ยนแปลงแก้ไขเพิ่มเติมแต่ละหมวด
              แต่ละมาตราตั้งแต่ครั้งแรกที่ประชุมจนออกมาเป็นร่างที่พร้อมจะประกาศเป็นกฎหมาย โดยใช้เวลาดำเนินการโครงการตั้งแต่วันที่ 25 กันยายน 2566 ถึงวันที่ 15 มีนาคม 2567 รวมทั้งสิ้น  173 วัน
            </p>
            <div className="text-center text-subheader mt-20 mb-10">
              หอสมุดรัฐสภาขอยกย่องในความมีจิตสาธารณะ ความตั้งใจ และความเสียสละ<br />
              ของอาสาสมัครหอสมุดรัฐสภา จำนวน 30 คน ดังรายนามต่อไปนี้
            </div>
            <ul>
              <li><ProfileImages name="นายกิตติ์ธเนศ ฤทธิพรพสิษฐ์" imageUrl="./volunteers/01.jpg" /></li>
              <li><AnonymousSVG name="นางสาวเมธิรา เกษมสันต์" /></li> 	
              <li><ProfileImages name="นายธนากรณ์ อินทร" imageUrl="./volunteers/02.jpg" /></li>		
              <li><ProfileImages name="นายกฤตภาส ธิติวิเชียรเลิศ" imageUrl="./volunteers/03.jpg" /></li>	
              <li><AnonymousSVG name="นายสถาพร วิญญุนาวรรณ" /></li>	
              <li><AnonymousSVG name="นายณัฐพจน์ อัฒนวานิช" /></li>	
              <li><ProfileImages name="นายธนกร กิจสาระภักดี" imageUrl="./volunteers/04.jpg" /></li>	
              <li><ProfileImages name="นางสาวยิหวา อาทรทีป" imageUrl="./volunteers/05.jpg" /></li>	
              <li><AnonymousSVG name="นายเอกภพ สิทธิวรรณธนะ" /></li>	
              <li><ProfileImages name="นายโชคชัย แจ้งจิต" imageUrl="./volunteers/06.jpg" /></li>		
              <li><AnonymousSVG name="นางอักษิกา จันทรวินิจ" /></li>
              <li><ProfileImages name="นางสาวเบญจรัตน์ สัจกุล" imageUrl="./volunteers/07.jpg" /></li>
              <li><ProfileImages name="นางสาวสุพัชชา แก้วไชยษา" imageUrl="./volunteers/08.jpg" /></li>
              <li><AnonymousSVG name="นางสาวสิริลักษณ์ บุตรศรีทัศน์" /></li>
              <li><AnonymousSVG name="นางสาวปาณิสรา ศรีประทุม" /></li>
              <li><AnonymousSVG name="นายนันทวัฒน์ ศักดิ์สกุลคุณากร" /></li>
              <li><AnonymousSVG name="นายธีรัตม์ พณิชอุดมพัชร์" /></li>
              <li><AnonymousSVG name="นายปภาวิชญ์ ศรีบริสุทธิ์" /></li>
              <li><AnonymousSVG name="นายทัตธนนันต์ นวลมณี" /></li>
              <li><ProfileImages name="นายอนุรัฐ เอี่ยมโภคลาภ" imageUrl="./volunteers/09.jpg" /></li>
              <li><AnonymousSVG name="นางสาวชนิตา หัวเขา" /></li>
              <li><AnonymousSVG name="นางสาวประภาวดี เอกวงศ์" /></li>
              <li><ProfileImages name="นางสาวจิรารัตน์ จันทรัตน์" imageUrl="./volunteers/10.jpg" /></li>
              <li><AnonymousSVG name="นายณรงศ์ศักย์ เหล่ารัตนเวช" /></li>
              <li><AnonymousSVG name="นางสาวเมธาวี ศิริตรัย" /></li>
              <li><AnonymousSVG name="นางสาวปารณีย์ จิรัสย์จินดา" /></li>
              <li><AnonymousSVG name="นางสาวฐิติพร สุดใจ" /></li>
              <li><AnonymousSVG name="นายภูริช สีนวลแล" /></li>
              <li><AnonymousSVG name="นายธนดล เดชประภากร" /></li>
              <li><ProfileImages name="นายธรรมทัศน์ ธรรมปัญญาวัฒน์" imageUrl="./volunteers/11.jpg" /></li>
            </ul>
            <p>
              หอสมุดรัฐสภา สำนักวิชาการ สำนักงานเลขาธิการสภาผู้แทนราษฎร ขอขอบคุณทุกภาคส่วนที่เกี่ยวข้อง สมาชิกสภาผู้แทนราษฎร ผู้บริหารสำนักงานเลขาธิการสภาผู้แทนราษฎร 
              ที่ได้ส่งเสริมการจัดโครงการ ตลอดจนเป็นที่ปรึกษาให้คำแนะนำตั้งแต่เริ่มต้นจนสิ้นสุดโครงการ
              ขอขอบคุณคณะทำงานตรวจสอบการนำเข้าข้อมูลเว็บไซต์เปรียบเทียบบทบัญญัติและเจตนารมณ์การร่างรัฐธรรมนูญ 2560
              ในโครงการอาสาสมัครหอสมุดรัฐสภากิจกรรม Hack เจตนารมณ์รัฐธรรมนูญ 2560
              ของสำนักวิชาการที่ได้กำหนดหลักเกณฑ์และร่วมกันตรวจสอบข้อมูลบันทึกการประชุมคณะกรรมการร่างรัฐธรรมนูญในเว็บไซต์ให้ถูกต้องตรงกับต้นฉบับ
              ขอขอบคุณมา ณ โอกาสนี้
            </p>
            <div className="text-right pt-10 pr-[15vw]">
              <div className="inline-block text-center">
                <div className="text-header">หอสมุดรัฐสภา</div>
                <div className="text-subheader">15 มีนาคม 2567</div>
              </div>
            </div>
            
       	  </div>
		
        </div>
      </div>
    </div>
    
    <Footer />
    
  </div>
  
  );
}
