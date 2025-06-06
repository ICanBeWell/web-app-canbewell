import React from "react";
import App from "./App";
import { PageView, initGA } from "./Tracking";
import videoen from "./videos/video_en.mp4";
import videofr from "./videos/video_fr.mp4";
import calleng from "./assets/Logos/icanbewelleng.png";
import callcompletelogo from "./assets/Logos/icanbewelllogo.png";
import callfren from "./assets/Logos/canbewellfren.png";
import callchoixsante from "./assets/Logos/choixsantefren.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Divider } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

// import homepageimg from './assets/Banner/homepageimage.png';

import { Link, withRouter } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import Homescreenfren from "./Homescreenfren";

// CSS classes
import "./LandingPage.css";
// banner slider component file
import BannerSlider from "./components/bannerSlider";
class LandingPageFR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleHomePage = this.handleHomePage.bind(this);
  }
  handleChange() {
    this.setState({ language: "english" });
    localStorage.setItem("app_language", this.state.language);
    // document.cookie = "firstVisit=false; path=/; SameSite=Lax";

    //return (<App app_language={this.state.language} />)
  }
  handleChange2() {
    this.setState({ language: "french" });
    // document.cookie = "firstVisit=false; path=/; SameSite=Lax";
    localStorage.setItem("app_language", this.state.language);
  }
  handleHomePage() {
    this.setState({ language: "" });
    localStorage.setItem("app_language", this.state.language);
  }
  //Redirect to the "/" route
  handleRedirect() {
    // this.props.history.push('/');
    window.location.href = "/en";
  }

  openVideoen() {
    window.open(videoen);
  }
  openVideofr() {
    window.open(videofr);
  }

  componentDidMount() {
    initGA("UA-151893001-1");
  }

  render() {
    const currentDate = new Date();
    // Render nothing if the "show" prop is false

    return (
      <div className="landing-page">
        {this.state.language == "" || null ? (
          <div className="pt-3">
            <section id="landing-page-header">
              <Row className="m-0 d-flex justify-content-around align-items-center">
                <Col>
                  <img
                    className="landing-logo-header"
                    src={callcompletelogo}
                    alt="CANBeWellLogo"
                    test-id="logo"
                  />
                </Col>
                <Col className="d-flex justify-content-end">
                  <a
                    href="/en"
                    className="font-description"
                    onClick={this.handleRedirect}
                  >
                    English
                  </a>
                </Col>
              </Row>
            </section>

            <BannerSlider handleChange={this.handleChange2} />

            <section className="primary-background res-blue-width res-blue-height-en py-3 d-flex flex-column justify-content-center">
              <div
                className="landing-notice-privacystmnt font-subHeading text-white"
                test-id="fr-reliable-resource-statement"
              >
                VOS RESSOURCES CANADIENNES POUR LE BIEN-ÊTRE ET LA PRÉVENTION
              </div>

              <div className="flex_btn">
                <a
                  href="#"
                  type="button"
                  className="btn btn-primary-get-started btn-lg btn_started btn_alginment"
                  onClick={this.handleChange2}
                >
                  <b>EXPLORER</b>
                </a>
              </div>
            </section>

            <div className="link-container">
              <section className="intro-page-links d-flex flex-column flex-start">
                <div className="pad_15">
                  <a
                    className="link"
                    rel="noopener"
                    href={videofr}
                    target="_blank"
                  >
                    <PlayArrowIcon fontSize="large" />
                    <p>Comment utiliser choixsante.ca</p>
                  </a>
                </div>

                <div className="pad_15">
                  <a
                    type="button"
                    className="link"
                    href="/iCanBeWell_CheckYourSymptoms_FR.htm"
                    rel="noopener"
                  >
                    <PlayArrowIcon fontSize="large" />
                    <p>Vérifier vos symptômes</p>
                  </a>
                </div>

                <div className="pad_15">
                  <a
                    type="button"
                    className="link"
                    href="/iCanBeWell_NoFamilyMD_NP_FR.htm"
                    rel="noopener"
                  >
                    <PlayArrowIcon fontSize="large" />
                    <p>
                      Si vous n’avez pas de médecin de famille ou
                      infirmière praticienne
                    </p>
                  </a>
                </div>

                <div className="pad_15 container_button">
                  <a
                    className="link"
                    rel="noopener"
                    onClick={() => this.props.setOpenDialog(true)}
                  >
                    <PlayArrowIcon fontSize="large" />
                    <p>Ajoutez à votre écran d'accueil</p>
                  </a>
                </div>
              </section>
            </div>
            <Divider className="main-page-divider" />
            <section id="landing-page-footer">
              <Row className="d-flex justify-content-center align-items-center m-0">
                <Col
                  xs={{ order: 1, span: 12 }}
                  sm={{ order: 1, span: 8 }}
                  md={{ order: 2, span: 9 }}
                  className="d-flex justify-content-center align-items-center footer-text mx-0"
                >
                  <a
                    href="iCanBeWell_AboutUs.htm?lang=fr"
                    rel="noopener noreferrer"
                    test-id="aboutus-statement-fr"
                    className="text-center col_grey"
                  >
                    À propos de nous
                  </a>
                  <span className="mx-3"> &#124; </span>
                  <a
                    href="/iCanBeWell_PrivacyPolicy.htm?lang=fr"
                    rel="noopener noreferrer"
                    test-id="privacy-statement-fr"
                    className="privacyFr text-center col_grey"
                  >
                    Politique de confidentialité
                  </a>
                  <span className="mx-3"> &#124; </span>
                  <a
                    href="https://www.uottawa.ca/faculte-medecine/familiale/choix-sante"
                    rel="noopener noreferrer"
                    className="text-center col_grey"
                    target="_blank"
                  >
                    Contactez-nous
                  </a>
                </Col>
              </Row>
              <div className="d-flex justify-content-center my-2">
                <div className="copyright">
                  &copy; {currentDate.getFullYear()} choix santé
                </div>
              </div>
            </section>
            <Homescreenfren
              openDialog={this.props.openDialog}
              setOpenDialog={this.props.setOpenDialog}
            />
          </div>
        ) : (
          <div>
            <App
              appLanguage={this.state.language}
              setAppLanguage={this.handleHomePage}
            />
          </div>
        )}
      </div>
    );
  }
}
export default withRouter(LandingPageFR);
