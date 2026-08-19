import Image from "next/image";
import wave from './assets/wave.png';

export default function Home() {
  return (
    null
  );
}


export const Footbar = () => {
  return (
    <footer>
      <div className="waves">
        <Image className="wave" id="wave1" src={wave} alt="Wave 1" />
        <Image className="wave" id="wave2" src={wave} alt="Wave 2" />
        <Image className="wave" id="wave3" src={wave} alt="Wave 3" />
        <Image className="wave" id="wave4" src={wave} alt="Wave 4" />
      </div>
      <ul className="social">
        <li><a href="https://wa.me/3921075985"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
        <li><a href="https://www.linkedin.com/in/emiliano-avvisato-4a9a001b1/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
        <li><a href="https://github.com/Emi-02"><ion-icon name="logo-github"></ion-icon></a></li>
      </ul>
      <ul className="menu-footer">
        <li><a href="#home">Home</a></li>
        <li><a href="#am">About</a></li>
        <li><a href="#proj">Projects</a></li>
        <li><a href="#cont">Contact</a></li>
      </ul>
    </footer>
  )
}

export const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li className="nav-link"><a className="ac"href="#home">
        <ion-icon name="home-outline" class="nav-icons"></ion-icon>
          <p className="nav-texts">| Home</p></a></li>
        <li className="nav-link"><a href="#am">
        <ion-icon name="accessibility-outline" class="nav-icons"></ion-icon>
          <p className="nav-texts">| About me</p></a></li>
        <li className="nav-link"><a href="#proj">
        <ion-icon name="terminal-outline" class="nav-icons"></ion-icon>
          <p className="nav-texts">| Projects</p></a></li>
        <li className="nav-link"><a href="#cont">
        <ion-icon name="paper-plane-outline" class="nav-icons"></ion-icon>
          <p className="nav-texts">| Contact me</p></a></li>
      </ul>
    </nav>
  )
}