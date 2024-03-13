import Footer from "../components/Footer";

export default function RelatedInfo() {
  return (
    <div data-testid="related-doc">
      <div className="bg-[#310]">
        <div className="max-w-screen-xl mx-auto min-h-screen">
          <h1 className="text-center lg:text-5xl md:text-6xl sm:text-4xl text-3xl font-bold text-header pt-40">
            ข้อมูลที่เกี่ยวข้อง
          </h1>
          <div className="text-center text-lg px-8 flex flex-col gap-8 py-20">
            <a
              href="./pdf/2562_ความมุ่งหมาย_คำอธิบาย_รธน_2560.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline underline-offset-4 visited:text-purple-600"
            >
              ความมุ่งหมายและคำอธิบายประกอบรายมาตราของรัฐธรรมนูญแห่งราชอาณาจักรไทย
              พุทธศักราช 2560
            </a>
            <a
              href="./pdf/2561_ความในใจของคณะกรรมการร่างรัฐธรรมนูญ2560_ส.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline underline-offset-4 visited:text-purple-600"
            >
              ความในใจของคณะกรรมการร่างรัฐธรรมนูญ 2560
            </a>
            <a
              href="./pdf/581005_105_240งพิเศษ.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline underline-offset-4 visited:text-purple-600"
            >
              คำสั่งหัวหน้าคณะรักษาความสงบแห่งชาติ ที่ ๓๔/๒๕๕๘ เรื่อง
              การอำนวยความสะดวกในการจัดทำร่างรัฐธรรมนูญ
            </a>
            <a
              href="./pdf/2054161.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:underline underline-offset-4 visited:text-purple-600"
            >
              ประกาศคณะรักษาความสงบแห่งชาติ เรื่อง
              แต่งตั้งคณะกรรมการร่างรัฐธรรมนูญ
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="pt-8 text-white hover:underline underline-offset-4 visited:text-purple-600"
            >
              แบบประเมินความพึงพอใจการใช้งานเว็บไซต์
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
