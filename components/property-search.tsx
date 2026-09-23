"use client";

import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { projects } from "./site-data";

const options = {
  type: ["كل العقارات", "شقة", "فيلا"],
  area: [
    "كل المناطق",
    "التجمع الخامس",
    "الشيخ زايد",
    "العاصمة الإدارية الجديدة",
  ],
  budget: [
    "كل الأسعار",
    "أقل من 2 مليون",
    "من 2 إلى 5 مليون",
    "أكثر من 5 مليون",
  ],
};

export function PropertySearch() {
  const [type, setType] = useState("كل العقارات");
  const [area, setArea] = useState("كل المناطق");
  const [budget, setBudget] = useState("كل الأسعار");
  const [submitted, setSubmitted] = useState(false);
  const resultCount = useMemo(
    () =>
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
      ).length,
    [type, area, budget],
  );
  const submit = () => {
    setSubmitted(true);
    window.dispatchEvent(
      new CustomEvent("property-search", { detail: { type, area, budget } }),
    );
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="container search-box interactive-search" data-aos="fade-up">
      <div className="search-heading">
        <FontAwesomeIcon icon={faSliders} />
        <span>ابحث عن وحدتك المثالية</span>
        <small>فلتر النتائج حسب احتياجك</small>
      </div>
      <label>
        <span>نوع العقار</span>
        <div className="select-wrap">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            aria-label="نوع العقار"
          >
            {options.type.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </label>
      <label>
        <span>المنطقة</span>
        <div className="select-wrap">
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            aria-label="المنطقة"
          >
            {options.area.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </label>
      <label>
        <span>نطاق السعر</span>
        <div className="select-wrap">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            aria-label="نطاق السعر"
          >
            {options.budget.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </label>
      <button className="gold-btn search-submit" onClick={submit}>
        <FontAwesomeIcon icon={faSearch} /> إبحث الآن
      </button>
      {submitted && (
        <p className="search-result">
          تم العثور على {resultCount} مشاريع مناسبة لاختياراتك
        </p>
      )}
    </div>
  );
}
