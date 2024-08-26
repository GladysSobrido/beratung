import HubspotContactForm from "../Components/HubspotContactForm";
import "./Kontakt.css";
export function Kontakt() {
  return (
    <>
      <div className="kontaktHeader">
        <div className="headerText">
          <h1>Kontaktieren Sie uns</h1>
          <h3>
            Schreiben sie uns ein Nachricht und wir werden wie schnell wie
            möglich beantworten.
          </h3>
        </div>
      </div>
      <main className="kontakt">
        <HubspotContactForm />
      </main>
    </>
  );
}
export default Kontakt;
