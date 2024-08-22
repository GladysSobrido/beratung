import "./Home.css";
import { Card } from "../Components/Card";
import { content } from "../data/content";
export function Home() {
  return (
    <>
      <div className="headermain">
        <div className="title">
          <h1 className="titletext">lass uns deine Geschäft ausbauen</h1>
        </div>
        <div className="cardsDiv">
          {content.map((cardContent) => {
            return <Card key={cardContent.title} cardContent={cardContent} />;
          })}
        </div>
      </div>
      <div className="body">
        <section className="section1">
          <p className="title1">Business Process Services</p>
          <h3>
            Nutzen Sie neue Möglichkeiten und steigern Sie nicht nur die
            Effizienz, sondern auch den Erfolg Ihres Unternehmens.
          </h3>
          <img src="src/assets/klein_pexels-mart-production-7709208.jpg"></img>
          <h3>
            Stellen Sie sich vor, Ihre Mitarbeiter könnten sich voll und ganz
            auf das Wesentliche konzentrieren, während wir Ihnen den Rücken im
            operativen Tagesgeschäft freihalten.
          </h3>

          <p>
            Gemeinsam starten wir in den modernen Energievertrieb und bringen
            frischen Wind in Ihr Kerngeschäft. Und das Beste daran? Sie
            entscheiden selbst, wo und wie viel Unterstützung Sie brauchen.
            Unsere erfahrenen Branchenprofis springen dort ein, wo Sie uns
            brauchen, und sind sofort startklar. Dabei verlieren wir nie den
            Überblick und sorgen dafür, dass Ihr Energievertrieb auf das nächste
            Level kommt.
          </p>
          <h3>
            Zusätzlich kümmern wir uns um IT-Management, Prozessoptimierung und
            Projektsteuerung, sodass Sie sich auf Ihr Kerngeschäft konzentrieren
            können.
          </h3>
        </section>
      </div>
    </>
  );
}
