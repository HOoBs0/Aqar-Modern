import { stats } from "./site-data";

export function StatsSection() {
  return (
    <div className="container stats">
      {stats.map(([value, label]) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
