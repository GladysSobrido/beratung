import "./Unternehme.css";
export function Unternehme() {
  return (
    <>
      <header className="unternehmeHeader">
        <div className="greybar"></div>
      </header>
      <div className="section1">
        <p className="title1">Unsere Team</p>
        <p>
          Vertrauen Sie auf das Know-how unseres BPO-Teams. Unsere Expertise
          liegt in der Energiewirtschaft – sie ist sozusagen unsere DNA. Bei der
          Umsetzung Ihrer Projekte nutzen wir unser umfangreiches Wissen aus
          verschiedenen Marktrollen, darunter Lieferanten, Netzbetreiber und
          Messstellenbetreiber. Wir sind mit den unterschiedlichsten
          Abrechnungssystemen vertraut und wenden dieses Wissen gezielt an, um
          für Ihre Projekte die besten Praktiken zu nutzen. Die vielfältige
          Altersstruktur in unserem Team ermöglicht es uns, Projekte aus
          verschiedenen Perspektiven zu betrachten und stets die optimale Lösung
          zu finden. Unser BPO-Team setzt sich aus Service-Agents,
          Projektleitern, Prozessmanagern, Fachteam-Managern, Produktmanagern
          und IT-Beratern zusammen.
        </p>
        <ul>
          <li>
            <h3>Projektleitung</h3>
            <p>
              Die Projektleitung sorgt für die Einhaltung der Service Level
              Agreements, koordiniert das Projekt und ist Ihr erster
              Ansprechpartner.{" "}
            </p>
          </li>
          <li>
            <h3>Prozessmanager</h3>
            <p>
              {" "}
              Der Prozessmanager hat eine Querschnittsfunktion und konzentriert
              sich auf die kontinuierliche Optimierung der Abläufe.{" "}
            </p>
          </li>

          <li>
            <h3> Fachteam-Manager</h3>
            <p>
              {" "}
              Der Fachteam-Manager leitet die Teams aus Sachbearbeitern und
              sorgt für reibungslose Abläufe.
            </p>
          </li>

          <li>
            <h3>Produktmanager</h3>
            <p>
              Der Produktmanager entwickelt unsere BPO-Lösungen ständig weiter,
              um Ihnen den bestmöglichen Service zu bieten.
            </p>
          </li>

          <li>
            <h3> IT-Berater</h3>
            <p>
              Die IT-Berater setzen digitale Optimierungen um und sorgen dafür,
              dass die technischen Lösungen nahtlos funktionieren.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
