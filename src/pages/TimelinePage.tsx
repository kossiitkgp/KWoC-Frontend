import Timeline from "../components/Home/Timeline";
import "../styles/Home/timeline-page.css";

/** Dedicated timeline tab; the homepage remains focused on the date-driven hero. */
export default function TimelinePage() {
  return (
    <main className="timeline-page">
      <header className="timeline-page__intro">
        <span className="timeline-page__eyebrow">KHARAGPUR WINTER OF CODE</span>
        <h1>Program timeline</h1>
        <p>Travel through the season and explore the important milestones.</p>
      </header>
      <Timeline />
    </main>
  );
}
