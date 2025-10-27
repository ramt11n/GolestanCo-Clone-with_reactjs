import style from "./majale.module.css";

const MajalePhoto = [
  {
    image:
      "https://www.golestan.com/wp-content/uploads/2023/05/recipe-pic2.jpg",
    name: "ماکارونی با سبزیجات",
    Description:
      " ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود… ",
  },
  {
    image:
      "https://www.golestan.com/wp-content/uploads/2023/05/recipe-pic3.jpg",
    name: "سوپ مکزیکی",
    Description:
      " گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده… ",
  },
  {
    image:
      "https://www.golestan.com/wp-content/uploads/2023/06/recipe-pic-Chilakile-1401.jpg",
    name: "چیلاکیله",
    Description:
      "احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست",
  },
];

const MajaleVideo = [
  {
    type: "iframe",
    embed: `<div class="h_iframe_aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/cQ0yF/vt/frame?titleShow=true&muted=true&recom=self" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe></div>`,
    name: "سالاد نودل",
    Description: "نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.",
    Button: "ویدیوهای بیشتر",
  },
  {
    type: "iframe",
    embed: `<div class="h_iframe_aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/u551866/vt/frame?titleShow=true&muted=true&recom=self" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe></div>`,
    name: "اینستاگرام هاتی نودل",
    Description: "نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.",
    Button: "ادامه مطلب",
  },
  {
    type: "iframe",
    embed: `<div class="h_iframe_aparat_embed_frame"><span style="display: block;padding-top: 57%"></span><iframe src="https://www.aparat.com/video/video/embed/videohash/x4047ld/vt/frame?titleShow=true&muted=true&recom=self" allowFullScreen webkitallowfullscreen mozallowfullscreen></iframe></div>`,
    name: "برنج گلستان",
    Description: "عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.",
    Button: "مشاهده محصولات",
  },
];



const Majale = () => {
  return (
    <div className={style.Majale}>
      <div className={style.MajaleContainer}>
        <h2>مجله گلستان</h2>
        <div className={style.MajaleTop}>
            {MajalePhoto.map((Photo, index) => (
          <div key={index} className={style.Recipe}>
            <img src={Photo.image} alt={Photo.name} />
            <h2>{Photo.name}</h2>
            <p>{Photo.Description}</p>
            <button>ادامه مطلب</button>
          </div>
        ))}
        </div>
        <div className={style.MajaleBottom}>
            {MajaleVideo.map((Mvideo, index) => (
          <div key={index} className={style.ProductIntroduce}>
            {Mvideo.type === "iframe" ? (
              <div
                className={style.IframeWrapper}
                dangerouslySetInnerHTML={{ __html: Mvideo.embed }}
              />
            ) : (
              <video
                controls
                loop
                muted
                autoPlay
                src={Mvideo.src}
                className={style.VideoPlayer}
              />
            )}
            <h2>{Mvideo.name}</h2>
            <p>{Mvideo.Description}</p>
            <button>{Mvideo.Button}</button>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Majale;
