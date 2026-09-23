import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { PropertySearch } from "./property-search";

export function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-art" data-aos="fade-left">
          <div className="art-sun" />
          <div className="art-grid" />
          <div className="art-building">
            <i />
            <i />
            <i />
            <i />
            <b />
          </div>
          <div className="art-line" />
        </div>
        <div className="hero-copy" data-aos="fade-right">
          <p className="eyebrow">
            القاهرة الجديدة · الشيخ زايد · العاصمة الإدارية
          </p>
          <h1>
            امتلك وحدتك
            <br />
            السكنية في أرقى
            <br />
            مواقع القاهرة
            <br />
            الجديدة
          </h1>
          <p className="hero-text">
            نقدم لك مفهومًا جديدًا وأسلوب حياة سداد، بمشاريع مصممة بأعلى معايير
            الجودة والرفاهية، مع أنظمة تقسيط تناسبك.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="gold-btn">
              تصفح المشاريع <FontAwesomeIcon icon={faArrowLeft} />
            </a>
            <a href="#contact" className="outline-btn">
              تحدث مع مستشار
            </a>
          </div>
        </div>

      </div>
      <PropertySearch />
    </section>
  );
}
