"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHouse,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "./site-data";

export function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState(projects);
  useEffect(() => {
    const handleSearch = (event: Event) => {
      const { type, area, budget } = (event as CustomEvent).detail;
      setVisibleProjects(
        projects.filter(
          (project) =>
            (type === "كل العقارات" || project.type === type) &&
            (area === "كل المناطق" ||
              project.location.includes(area.split("،")[0])) &&
            (budget === "كل الأسعار" ||
              (budget === "أقل من 2 مليون" &&
                project.price.includes("1,950,000")) ||
              (budget === "أكثر من 5 مليون" &&
                project.price.includes("6,800,000")) ||
              (budget === "من 2 إلى 5 مليون" &&
                project.price.includes("2,500,000"))),
        ),
      );
    };
    window.addEventListener("property-search", handleSearch);
    return () => window.removeEventListener("property-search", handleSearch);
  }, []);
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <div>
            <p className="eyebrow">اختياراتنا المميزة</p>
            <h2>أحدث المشاريع المميزة</h2>
            <p>
              مجموعة مختارة من الوحدات الفاخرة وأفضل الاستثمارات في أفضل
              المواقع.
            </p>
          </div>
          <a className="text-link" href="#contact">
            كل المشاريع <FontAwesomeIcon icon={faArrowLeft} />
          </a>
        </div>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            700: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
          className="projects-slider"
        >
          {visibleProjects.map((p, i) => (
            <SwiperSlide key={p.title}>
              <article
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className={`project-image ${p.accent}`}>
                  <span>{p.tag}</span>
                  <div className="mini-city">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <div className="project-body">
                  <small>{p.location}</small>
                  <h3>{p.title}</h3>
                  <div className="details">
                    <span>
                      <FontAwesomeIcon icon={faRulerCombined} /> {p.size}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faHouse} /> {p.type}
                    </span>
                    <span>{p.rooms}</span>
                  </div>
                  <strong className="price">يبدأ من {p.price}</strong>
                  <a className="card-link" href="#contact">
                    تفاصيل العقار <FontAwesomeIcon icon={faArrowLeft} />
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
