import { Link } from "react-router-dom";
import "../../global.css";
export function PrivatePage() {
  return (
    <>
      <header className="leistungenHeader">
        <div className="greybar"></div>
      </header>
      <div className="section1">
        <div>This is the page for registered users</div>
        <Link to={"./invoices"}>See your invoices here</Link>
      </div>
    </>
  );
}
export default PrivatePage;
