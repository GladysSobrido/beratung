import HubspotContactForm from "../Components/HubspotContactForm";
import "./Kontakt.css";
export function Kontakt() {
  return (
    <>
      <header className="kontaktHeader">
        <div className="greybar"></div>
      </header>

      <div className="section1">
        <p className="title1">Kontaktieren Sie uns</p>
        <h3>
          Schreiben sie uns ein Nachricht und wir werden wie schnell wie möglich
          beantworten.
        </h3>
      </div>
      <main className="kontakt">
        <HubspotContactForm />
      </main>
    </>
  );
}
export default Kontakt;
