import style from "./responsibility.module.css";



const Responsibility = () => {
  return (
    <div className={style.Responsibility}>
      <div className={style.ResponsibilityContainer}>
        <div className={style.ResponPhotoHolder}>
            <h3>مسئولیت های اجتماعی شرکت گلستان</h3>
            <div className={style.ResponTitle}>
                <span>Social Responsibility</span>
                <span>Golestan</span>
            </div>
            <h4>Mahdi Hospital</h4>
            <img src="https://www.golestan.com/wp-content/uploads/2023/01/csr-pic1.jpg" alt="Mahdi-Hospital" />
        </div>
        <div className={style.ResponDes}>
            <h2>مسئولیت های اجتماعی گلستان</h2>
            <p>كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند. <span>گلستان </span>در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را در دستوركار خود قرار داده است.</p>
            <button>اطلاعات بیشتر</button>
        </div>
      </div>
    </div>
  );
};

export default Responsibility;
