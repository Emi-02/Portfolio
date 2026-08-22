import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footbar } from "./page";
import { Navbar } from "./page";
import "./footbar.css";
import "./navbar.css";
import "./assets/wave.png";
import "ionicons";
import { projects } from "./script.js";
import Image from "next/image";
import imagec from './assets/c.png';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Navbar className="nav" />
    <main id="container">
      <section className="home" id="home">
          <div className="col-1">
            <h1 className="intro-text">Hi, {`I'`}m</h1>
            <h1 className="intro-title">Emiliano <span className="intro-accent">Avvisato</span></h1>
            <h1 className="intro-text">A <span className="intro-accent">Junior Full-stack developer</span></h1>
            <q>The computer was born to solve problems that did not exist before.<cite> (B. Gates)</cite></q>
            {/* <a className="d-button" href={cv} download>Download CV</a> */}
            <a href="#proj" className="intro-link">Projects</a>
          </div>
          <div className="col-2">
            <Image width="250" height="300" src={imagec}  alt="" className="my-photo" />
            <ul>
              <li className="skill-card">+ <p>Attent to detail</p></li>
              <li className="skill-card">+ <p>Team oriented</p></li>
              <li className="skill-card">+ <p>Responsive design</p></li>
            </ul>
          </div>
        </section>
      <section className="about-me" id="am">
        <p className="sub-title">My uniqueness</p>
        <h2 className="page-title">About me</h2>
        <div className="am-container">
          <div className="am-col-1">
            <p>Funny GIF</p>
          </div>
          <div className="am-col-2">
            <p className="bio"><span className="accent">Hi, {`I'`}m Emiliano</span>, an enthusiastic, curious, and ready to make an impact Junior Full-Stack Developer with a passion for cybersecurity. Fully aware that I am at the beginning of my career, I make up for my lack of extensive field experience with an extraordinary hunger to learn and a strong ability to adapt to new technologies. I am looking for a company that believes in the potential of junior profiles and wants to invest in my professional growth.</p>
            <div className="cont-skills">
            <ul><p>Skills</p>
              <li className="skills"><img src="https://img.icons8.com/?size=25&id=20909&format=png&color=000000" alt="Html" /> <img src="https://img.icons8.com/?size=25&id=21278&format=png&color=000000" alt="Css" /></li>
              <li className="skills"><img src="https://img.icons8.com/?size=25&id=108784&format=png&color=000000" alt="Javascript" /> <img src="https://img.icons8.com/?size=25&id=nCj4PvnCO0tZ&format=png&color=000000" alt="Typescrip"></img></li>
              <li className="skills"><img src="https://img.icons8.com/?size=25&id=40253&format=png&color=D1B307" alt="Jquery" /><img src="https://img.icons8.com/?size=25&id=hsPbhkOH4FMe&format=png&color=000000" alt="Node.js" /></li>
              <li className="skills"><img src="https://img.icons8.com/?size=25&id=123603&format=png&color=000000" alt="React" /><img src="https://img.icons8.com/?size=22&id=kg46nzoJrmTR&format=png&color=E9EDF1" className="express" alt="Express.js" /></li>
              <li className="skills"><img src="https://img.icons8.com/?size=25&id=bosfpvRzNOG8&format=png&color=000000" alt="Mongodb" /><img src="https://img.icons8.com/?size=25&id=62452&format=png&color=000000" alt="Firebase" /></li>
            </ul>
            <ul><p>Soft skills</p>
              <li className="s-skills">Comunication</li>
              <li className="s-skills">Detail oriented</li>
              <li className="s-skills">Team-work</li>
              <li className="s-skills">Creativity</li>
            </ul>
           </div>
          </div>
        </div>
      </section>
        <section className="proj" id="proj">
          <p className="sub-title">Work in progress...</p>
          <h2 className="page-title">Projects</h2>
          <ul className="proj-grid">
            {projects.map((t, idx) =>
                  <li key={t.title ?? idx} className="proj-card">
                    <Image src={t["img"]} alt="" className="proj-img"/>
                    <div className="proj-description">
                      <a className="proj-title" href={t["demo"]}>{t["title"]}</a>
                      <p className="proj-text">{t["text"]}</p>
                      <p className="proj-tags">{t["tags"].join(", ")}</p>
                      <a className="proj-button" href={t["code"]}>Code</a>
                    </div>
                  </li>
                )}
          </ul>
        </section>
        <section className="contact" id="cont">
          <p className="sub-title">Get in touch</p>
          <h2 className="page-title">Contact me</h2>
          <div id="con">
            <div className="buttons">
              <div className="button">
                <ion-icon name="mail-outline" className="icon"></ion-icon>
                <h3 className="title">Mail</h3>
                <p className="l-text">emiliano.avvisato@gmail.com</p>
                <a href="mailto:emiliano.avvisato@gmail.com">Send a message</a>
              </div>
              <div className="button">
                <ion-icon name="logo-whatsapp" className="icon"></ion-icon>
                <h3 className="title">Whatsapp</h3>
                <p className="l-text">emi-avvisato</p>
                <a href="https://wa.me/3921075985">Send a message</a>
              </div>
              <div className="button">
                <ion-icon name="logo-linkedin" className="icon"></ion-icon>
                <h3 className="title">Linkedin</h3>
                <p className="l-text">username</p>
                <a href="https://www.linkedin.com/in/emiliano-avvisato-4a9a001b1/" target="blank">Send a message</a>
              </div>
            </div>
            <div className="inputs-con">
              <form id="form" className="input" action="https://formsubmit.co/emiliano.avvisato@gmail.com" method="POST" onSubmit={null} data-netlify="true">
                <input id="name" type="text" placeholder="Your name" name="name" required/>
                <input id="mail" type="email" placeholder="Your mail" name="email" required/>
                <input id="message" type="text" placeholder="Message" name="msg" required/>
                <input type="hidden" name="_captcha" value="false"></input>
                <button className="send" id="send"type="submit">Send message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footbar />
      <script type="module" src="https://unpkg.com/ionicons@8.0.13/dist/ionicons/ionicons.esm.js" async></script>
      <script noModule src="https://unpkg.com/ionicons@8.0.13/dist/ionicons/ionicons.js" async></script>
      </body>
    </html>
  );
}
