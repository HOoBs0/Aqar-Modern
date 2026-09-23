import React, { useRef, FormEvent } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';

export function SiteFooter() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_ijwjrbw', 'template_tzn18u9', form.current, {
        publicKey: 'nopq83HgRvVJPj6-n',
      })
      .then(
        () => {
          alert('تم إرسال الطلب بنجاح! سيتواصل معك أحد مستشارينا قريباً.');
          form.current?.reset();
        },
        (error) => {
          alert('حدث خطأ ما، يرجى المحاولة مرة أخرى: ' + error.text);
        },
      );
  };

  return (
    <footer id="contact">
      <div className="container footer-grid">
        <div className="footer-info">
          <a className="brand" href="#home">
            <span>Aqar Modern</span>
            <small>عقار عصري</small>
            <FontAwesomeIcon icon={faHouse} />
          </a>
          <p>
            نحن شريكك الموثوق في رحلتك نحو امتلاك عقارك. نختار لك أفضل المشاريع
            ونضمن لك تجربة آمنة ومريحة.
          </p>
          <div className="footer-links">
            <a href="#home">الرئيسية</a>
            <a href="#projects">المشاريع</a>
            <a href="#about">عن الشركة</a>
            <a href="#contact">اتصل بنا</a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2>اطلب معاينة لأقرب مشروع لك</h2>
          <p>اترك بياناتك وسيتواصل معك أحد مستشارينا خلال يوم عمل.</p>
          
          <div className="form-row">
            {/* الـ name هنا هو اللي بيبعت الاسم لـ EmailJS */}
            <input 
              type="text" 
              name="user_name" 
              aria-label="الاسم" 
              placeholder="الاسم" 
              required 
            />
            {/* الـ name هنا هو اللي بيبعت الإيميل لـ EmailJS */}
            <input 
              type="email" 
              name="user_email" 
              aria-label="البريد الإلكتروني" 
              placeholder="البريد الإلكتروني" 
              required 
            />
          </div>
          
          <textarea
            name="message"
            aria-label="رسالتك"
            placeholder="اكتب لنا استفسارك أو المشروع الذي تهتم به"
            rows={4}
            required
          />
          
          <button className="gold-btn" type="submit">
            اطلب معاينة الآن
          </button>
        </form>
      </div>

      <div className="container copyright">
        <span>© 2024 Aqar Modern. جميع الحقوق محفوظة.</span>
        <span>القاهرة، مصر</span>
      </div>
    </footer>
  );
}