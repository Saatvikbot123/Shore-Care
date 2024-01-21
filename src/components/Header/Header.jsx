import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css"

//const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

// function genRandomInt(max) {
//   return Math.floor(Math.random() * (max + 1));
// }

export default function Header() {

    //const description = reactDescriptions[genRandomInt(2)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>Shore-Care</h1>
        <p>
          Let's Work Together to Contribute to the Welfare of Our Water Bodies
        </p>
      </header>
    );
  }