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
          <h1 className="titletext">lass uns dein Geschäft ausbauen</h1>
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
          <img src="/mittel_pexels-mart-production-7709208.jpg"></img>
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
              width="500px"
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
        {/* <section className="section3">
          <div className="section3column1"></div>
          <div className="section3text">
            <p className="title3">
              Vielfältige Ziele im Energievertrieb, ein Weg zum Erfolg{" "}
            </p>

            <p className="title2">Erfolgreiche und schnelle Markteinführung </p>
            <p>
              Als Vertriebsleiter eines Energieversorgers planen Sie die
              Einführung eines innovativen Bündelprodukts, wie etwa eines
              Energievertrags, kombiniert mit einem attraktiven DSL-Tarif? Um
              sicherzustellen, dass Ihre Produktidee erfolgreich und zügig am
              Markt platziert wird, benötigen Sie eine passende IT- und
              Vertriebsstruktur. Doch was tun, wenn Ihre aktuellen Strukturen
              nicht alle Anforderungen erfüllen und den Erfolg des neuen
              Produkts gefährden könnten? Lassen Sie sich davon nicht aufhalten
              – setzen Sie auf Business Process Outsourcing (BPO). Unsere
              Experten übernehmen die Abwicklung Ihrer Geschäftsprozesse und
              schaffen für Ihre Produktidee die nötigen IT- und
              Vertriebsstrukturen. So gelingt die Markteinführung reibungslos,
              ohne Ihre bestehende Organisation zu belasten. Zudem schonen Sie
              Ihre personellen Ressourcen und können das Auftragsvolumen
              flexibel an die Kundenzahl und Auftragslage anpassen.
            </p>
            {/* </section>
        <section className="section2"> 
            <p className="title2">Flexibel bleiben und Fixkosten minimieren </p>
            <p>
              Als Geschäftsführer möchten Sie sich auf schwankende Volumina
              vorbereiten und hohe Fixkosten vermeiden? Wir haben die Lösung für
              Sie!
            </p>
            <p className="title2">
              Outsourcing von Geschäftsprozessen und flexibler Ressourceneinsatz{" "}
            </p>

            <p>
              Unsere BPO-Lösung ermöglicht es Ihnen, komplette Geschäftsprozesse
              oder Teile davon auszulagern – ganz nach Ihrem Bedarf. Stellen Sie
              sich die Leistungen modular zusammen, passgenau auf Ihre
              Anforderungen zugeschnitten. Unser Team deckt das gesamte
              BEMD-Standardleistungsverzeichnis ab und sorgt dank umfassender
              Expertise und einer transparenten, agilen Arbeitsweise für eine
              verantwortungsvolle Projektbearbeitung. Die BPO-Kosten passen sich
              flexibel der Anzahl Ihrer Kunden an, da wir die benötigten
              Ressourcen bedarfsgerecht einsetzen können. So sparen Sie hohe
              Fixkosten und bleiben unabhängig von schwankendem Auftragsvolumen.
            </p>
          </div>
        </section> */}
      </div>
    </>
  );
}
