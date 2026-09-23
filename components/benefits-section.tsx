import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { features } from "./site-data";

export function BenefitsSection() {
  return (
    <section id="about" className="section why-section">
      <div className="container">
        <div className="section-head centered" data-aos="fade-up">
          <p className="eyebrow">اختيارك الأفضل</p>
          <h2>لماذا تختارنا؟</h2>
          <p>لأننا نؤمن بأن كل عميل له احتياجاته الخاصة.</p>
        </div>
        <div className="features">
          {features.map(([icon, title, text], i) => (
            <div
              className="feature"
              key={title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <FontAwesomeIcon icon={icon} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
