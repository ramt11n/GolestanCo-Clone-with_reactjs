import style from "./footer.module.css";

// Define the permanent brand colors
const BRAND_COLORS = {
  GL: "#00A859",      // Green
  Aparat: "#E6007E",  // Pink
  Telegram: "#0088CC", // Blue
  Instagram: "#990000", // Dark Red
  LinkedIn: "#0077B5", // Light Blue
  Facebook: "#1877F2", // Dark Blue
};

// NOTE: SVGs use 'currentColor' to pick up the color set on the parent anchor tag

const GLIcon = () => (
  // Placeholder for GL Icon (Custom Green circle with GL text)
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="20" strokeWidth="2.5"></circle>
    <text x="12" y="32" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="currentColor">GL</text>
  </svg>
);

const AparatIcon = () => (
  // Aparat/Video Icon (Circle with Play button)
  <svg width="48" height="48" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zm-54.8 359.7V152.3c0-10.7 11.2-16.7 20.3-11.2L348.4 245c8.7 5.3 8.7 17.1 0 22.4L221.5 370.9c-9.1 5.5-20.3-.4-20.3-11.2z"/>
  </svg>
);

const TelegramIcon = () => (
  // Accurate Telegram Icon (Sharp, outlined paper plane)
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 12 2 9.5 22 2zM11 12l9 7L15 12z"/>
  </svg>
);

const InstagramIcon = () => (
  // Accurate Instagram Icon (Outlined square camera)
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = () => (
  // Accurate LinkedIn Icon (Outlined)
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FacebookIcon = () => (
  // Accurate Facebook Icon (Outlined 'f')
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);


const socialLinks = [
  // Brand colors are now stored in the object for use as data attributes
  { href: "https://www.golestan.com/", Icon: GLIcon, name: "Golestan", color: BRAND_COLORS.GL },
  { href: "https://www.aparat.com/golestan", Icon: AparatIcon, name: "Aparat", color: BRAND_COLORS.Aparat },
  { href: "https://t.me/golestanco", Icon: TelegramIcon, name: "Telegram", color: BRAND_COLORS.Telegram },
  { href: "https://www.instagram.com/golestanco/", Icon: InstagramIcon, name: "Instagram", color: BRAND_COLORS.Instagram },
  { href: "https://www.linkedin.com/company/golestan-co/", Icon: LinkedinIcon, name: "LinkedIn", color: BRAND_COLORS.LinkedIn },
  { href: "https://www.facebook.com/golestanco", Icon: FacebookIcon, name: "Facebook", color: BRAND_COLORS.Facebook },
];


const productData = [
  // ... (productData remains the same)
  {
    image:
      "https://www.golestan.com/wp-content/uploads/2023/01/footer-icon1.png",
    name: "چای گلستان",
    Cat: {
      CatOption: [
        "چای ممتاز هندوستان",
        "چای ممتاز ارل گری",
        "چای سییلان عطری",
        "چای ممتاز سبلان",
        "چای صبحانه گلستان",
      ],
    },
  },
  {
    image:
      "https://www.golestan.com/wp-content/uploads/2023/01/footer-icon4.png",
    name: "تی بگ گلستان",
    Cat: {
      CatOption: [
        "تی بگ بلک لان",
        "تی بگ ارل گری",
        "دمنوش نعناع",
        "دمنوش بابونه",
        "دمنوش جای سبز",
      ],
    },
  },
  {
    image:
      "https://www.golestan.com/wp-content/uploads/2023/01/footer-icon3.png",
    name: "ادویه گلستان",
    Cat: {
      CatOption: [
        "زعفران ممتاز خراسان",
        "ادویه کاری",
        "ادویه ماست و خیار",
        "فلفل سیاه خالص",
        "زرد چوبه ممتاز",
      ],
    },
  },
  {
    image:
      "https://www.golestan.com/wp-content/uploads/2023/01/footer-icon2.png",
    name: "حبوبات گلستان",
    Cat: {
      CatOption: [
        "لوبیا قرمز ممتاز",
        "لوبیا چیتی گلستان",
        "عدس کانادایی",
        "نخود زودپز کرمانشاه",
        "لوبیا سفید گلستان",
      ],
    },
  },
];

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.FooterContainer}>
        <div className={style.FooterSocial}>
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.name}
              className={style.SocialLink}
              // CRITICAL FIX: Set brand color as a data attribute for CSS targeting
              data-brand-color={link.color}
            >
              <link.Icon />
            </a>
          ))}
        </div>

        <div className={style.FooterOptions}>
          <div className={style.FooterCategory}>
            {productData.map((product, index) => (
              <div key={index} className={style.FooterCat}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <div className={style.SubContent}>
                  {product.Cat.CatOption.map((option, i) => (
                    <h5 key={i}>{option}</h5>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={style.DesigendBy}>
            <h2>All Right Reserved Golestan Company 2022-2025</h2>
            <h3>Design By: Ramtin Neshatvar</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;