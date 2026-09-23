import { reviews } from "./site-data";

export function TestimonialsSection() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <div>
            <p className="eyebrow">شهادات نفخر بها</p>
            <h2>آراء عملائنا</h2>
            <p>تجارب حقيقية من عملائنا وشركائنا معنا.</p>
          </div>
        </div>
        <div className="reviews">
          {reviews.map(([quote, name, role]) => (
            <div className="review" key={name}>
              <div className="stars">★★★★★</div>
              <p>{quote}</p>
              <b>
                {name} <small>{role}</small>
              </b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
