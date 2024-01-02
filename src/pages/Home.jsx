import { Icon } from '@iconify/react';
import '../styles/Home.css';

export default function Home() {
  return (
    <div data-testid="home">
      <div className='bg-black'>
        <div className='Landing-Page-Banner-PC text-center lg:pt-40 pt-40 px-2'>
          <div className="lg:text-7xl md:text-6xl sm:text-4xl text-3xl font-bold text-orange-500">
            บันทึกการประชุม
          </div>
          <div className="lg:text-6xl md:text-5xl sm:text-4xl text-xl font-bold text-white pt-2">
            คณะกรรมการยกร่างรัฐธรรมนูญ ปี 2560
          </div>

          <div className='text-lg text-white pt-8 hidden lg:block'>
            เรียนรู้ และเปรียบเทียบรัฐธรรมนูญฉบับปี 2560 ฉบับที่เป็นปัญหามากที่สุดในประวัติศาสตร์ของ<br></br>
            ประเทศไทย พวกเค้าทำงานกันอย่างไร กฎหมายหมายนี้ออกมาเพื่อใคร หาคำตอบไปด้วยกัน
          </div>
          <div className='text-lg text-white px-2 pt-8 block lg:hidden'>
            เรียนรู้ และเปรียบเทียบรัฐธรรมนูญฉบับปี 2560 <br></br>
            พวกเค้าทำงานกันอย่างไร กฎหมายฉบับนี้ <br></br>
            ออกมาเพื่อใคร หาคำตอบไปด้วยกัน
          </div>

          <div className='py-10 px-2 flex justify-center'>
            <div className='lg:w-2/5 md:w-3/5 sm:w-4/5 xs:w-4/5'>
              <div className="text-2xl text-black px-6 bg-white flex content-center py-2 items-center rounded-full">
                <Icon icon="bx:bx-search-alt-2" className="text-black" />
                <div className='px-2'></div>
                <input type="text" id="search-input" name="search-input" className='flex-auto focus:outline-none' ></input>
              </div>
            </div>
          </div>

          <div className='text-neutral-400 text-center lg:py-8 py-40'>
            <div className='flex justify-center'>
              <Icon icon="mingcute:up-line" className="text-4xl" />
            </div>
            <div>
              เลื่อนเพื่อดูภาพรวม <br></br>
              ของการร่างรัฐธรรมนูญ 60
            </div>
          </div>
        </div>
      </div>


      <div className='bg-black text-white flex justify-center'>
        <div className='text-3xl font-bold pt-4 w-3/4'>ภาพรวม</div>
      </div>

      <div className='bg-black text-white flex justify-center py-4'>
        <div className='bg-neutral-700 lg:w-3/6 w-5/6 rounded-full'>
          <button className='py-4 w-1/3 bg-white rounded-full text-black'>ตามหมวด</button>
          <button className='py-4 w-1/3'>ตามผู้อภิปราย</button>
          <button className='py-4 w-1/3'>ตามมาตรา</button>
        </div>
      </div>

      <div className='bg-neutral-700 py-4 text-white'>
        <div className='flex justify-center items-center'>
          <div className='w-3/4 flex flex-row justify-between'>
            <div className='text-3xl font-bold'>ทุกหมวด</div>
            <div className=''>
              <div className='bg-neutral-900 rounded-full ml-4 py-2 px-2'>
                <select name="mainsorts" id="mainsorts" className='bg-neutral-900 rounded-full'>
                  <option value="ascendingedit">เรียงตามมาตราที่แก้ไขมาก-น้อย</option>
                  <option value="decendingedit">เรียงตามมาตราที่แก้ไขน้อย-มาก</option>
                  <option value="ascendingdiscuss">เรียงตามผู้อภิปรายมาก-น้อย</option>
                  <option value="decendingdiscuss">เรียงตามผู้อภิปรายน้อย-มาก</option>
                </select>
              </div>
            </div>
          </div>



        </div>


        <div className='flex flex-col justify-center items-center pt-8 '>
          <div className='flex flex-row bg-neutral-500 rounded-2xl w-3/4 text-xl font-bold px-4 py-4 justify-between'>
            <div>
              บทเฉพาะกาล
            </div>
            <div>
              100 ครั้ง
            </div>
          </div>
          
        </div>

      </div>

    </div>
  );
}
