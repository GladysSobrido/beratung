import "./Home.css";
import { Card } from "../Components/Card";
import { content } from "../data/content";
import { steps } from "../data/steps";
import { StepItem } from "../Components/StepItem";
//stepper
import { Stepper, useSteps } from "@chakra-ui/react";

export function Home() {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <>
      <header className="headermain">
        <div className="title">
          <h1 className="titletext">lass uns deine Geschäft ausbauen</h1>
        </div>
        <div className="cardsDiv">
          {content.map((cardContent) => {
            return <Card key={cardContent.title} cardContent={cardContent} />;
          })}
        </div>
      </header>
      <div className="body">
        <section className="section1">
          <p className="title1">Business Process Services</p>
          <h3>
            Nutzen Sie neue Möglichkeiten und steigern Sie nicht nur die
            Effizienz, sondern auch den Erfolg Ihres Unternehmens.
          </h3>
          <img src="/klein_pexels-mart-production-7709208.jpg"></img>
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
        <section className="section2">
          <h2 className="title2">
            In 5 Schritten zum Erfolg im Energievertrieb
          </h2>
          <p>
            Ein reibungsloser und transparenter Projektablauf ist entscheidend
            für den Erfolg Ihres Business Process Outsourcing. Haben Sie sich
            entschieden, mit uns den modernen Energievertrieb zu gestalten? Dann
            wird Ihr Projekt in fünf Schritten umgesetzt. Um die Effizienz zu
            maximieren, arbeiten wir agil und iterativ, was bedeutet, dass sich
            die Phasen 1 bis 3 überschneiden können. So stellen wir sicher, dass
            die Prozesse und Systeme alle Anforderungen erfüllen und einer
            erfolgreichen Projektumsetzung nichts im Wege steht.
          </p>

          <div className="stepper">
            <Stepper
              index={activeStep}
              orientation="vertical"
              height="500px"
              gap="0"
              colorScheme="facebook"
              size="lg"
            >
              {steps.map((step, index) => (
                <StepItem
                  key={index}
                  onClick={() => setActiveStep(index + 1)}
                  title={step.title}
                >
                  {step.description}
                </StepItem>
              ))}
            </Stepper>
          </div>
        </section>
      </div>
    </>
  );
}
