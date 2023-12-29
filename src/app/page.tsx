import Image from 'next/image';
import LinkedIn from "./assets/icon-linkedin.png";
import Github from "./assets/icon-github.png";
import Email from "./assets/icon-email.png";
import Now from "./assets/icon-now.png";
import Academy from "./assets/icon-academy.png";
import Globant from "./assets/icon-globant.png";
import DefaultBullet from "./assets/icon-bullet.png";
import Certifications from "./assets/icon-certifications.png";
import Aws from "./assets/icon-aws.png";
import Scrum from "./assets/icon-scrum.png";

export default function Me() {
  return (
    <div className="aboutMe">
      <p className="summary">
        +8 years of experience as <b>FrontEnd Developer</b> providing IT solutions for private and public
        organizations using JavaScript, ReactJS, React Native, NodeJS, AWS.
      </p>
      <div className="linksContainer">
        <div className="item">
          <Image
            src={LinkedIn}
            alt={'David Camacho - LinkedIn'}
            width={30}
            height={30}
          />
          <a href="https://co.linkedin.com/in/deveeup" target='_blank'>LinkedIn</a>
        </div>
        <div className="item">
          <Image
            src={Github}
            alt={'David Camacho - Github'}
            width={30}
            height={30}
          />
          <a href="https://github.com/deveeup" target='_blank'>Github</a>
        </div>
        <div className="item">
          <Image
            src={Email}
            alt={'David Camacho - Gmail'}
            width={30}
            height={30}
          />
          <a href="mailto:jossedaviid1@gmail.com" target='_blank'>Email</a>
        </div>
      </div>
      <div className="moreInfo">
        <div className="item">
          <div className="titleContainer">
            <Image
              src={Now}
              alt={'Now Icon'}
              width={30}
              height={30}
            />
            <h3>Current</h3>
          </div>
          <div className="description">
            <div className="titleContainer">
              <Image
                src={Globant}
                alt={'Globant Icon'}
                width={40}
                height={25}
              />
              <h4>Globant</h4>
            </div>
            <p>
              Sr. Web UI Developer.
              <br />
              <em>
                Since March 2021 - Now.
              </em>
            </p>
          </div>
        </div>
        <div className="item">
          <div className="titleContainer">
            <Image
              src={Academy}
              alt={'Now Icon'}
              width={30}
              height={30}
            />
            <h3>Academy</h3>

          </div>
          <div className="description">
            <div className="titleContainer">
              <Image
                src={DefaultBullet}
                alt={'Default Icon'}
                width={10}
                height={10}
              />
              <h4>UPTM Kléber Ramírez</h4>
            </div>
            <p>
              Ingeniería Informática
              <br />
              <em>
                2011 - 2017.
              </em>
            </p>
          </div>
        </div>
        <div className="item">
          <div className="titleContainer">
            <Image
              src={Certifications}
              alt={'Certifications Icon'}
              width={30}
              height={30}
            />
            <h3>Certifications</h3>

          </div>
          <div className="description">
            <div className="titleContainer">
              <Image
                src={Aws}
                alt={'AWS Icon'}
                width={40}
                height={25}
              />
              <h4>Amazon web services</h4>
            </div>
            <p>
              Cloud Practitioner
              <br />
              <em>
                Aug 2020 - Aug 2023
              </em>
            </p>
          </div>
          <div className="description">
            <div className="titleContainer">
              <Image
                src={Scrum}
                alt={'Scrum Icon'}
                width={30}
                height={30}
              />
              <h4>International Scrum Institute</h4>
            </div>
            <p>
              Scrum Master
              <br />
              <em>
                Jun 2020.
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}