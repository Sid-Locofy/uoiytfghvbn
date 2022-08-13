import { FunctionComponent, useState, useCallback } from "react";
import { TextField, InputAdornment, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MatterhornPopup } from "./MatterhornPopup";
import { PortalPopup } from "./PortalPopup";
import styles from "./css/HotelsPage.module.css";

export const HotelsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);

  const onWebScreenClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.hotelsPageDiv}>
        <header className={styles.topHeader}>
          <div className={styles.topContainerDiv}>
            <div
              className={styles.fickleflightLogoDiv}
              onClick={onFickleflightLogoContainerClick}
            >
              <div className={styles.symbolsDiv}>
                <img
                  className={styles.webScreenIcon}
                  alt=""
                  src="webscreen.svg"
                  onClick={onWebScreenClick}
                />
              </div>
            </div>
            <div className={styles.navigationRightDiv}>
              <div className={styles.navigationMenuDiv}>
                <div className={styles.exploreDiv} onClick={onExploreTextClick}>
                  Explore
                </div>
                <div className={styles.exploreDiv} onClick={onSearchTextClick}>
                  Search
                </div>
                <button className={styles.hotelsButton}>Hotels</button>
                <button className={styles.offersButton}>Offers</button>
              </div>
              <div className={styles.accountSectionDiv}>
                <img
                  className={styles.hamburgerMenuIcon}
                  alt=""
                  src="notification.svg"
                />
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="notification1.svg"
                />
                <img
                  className={styles.unsplashd1UPkiFd04AIcon}
                  alt=""
                  src="top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.headerDiv}>
          <div className={styles.bannerDiv}>
            <img
              className={styles.bannerBackground}
              alt=""
              src="banner-background@2x.png"
            />
            <div className={styles.titleDiv}>
              <div className={styles.staysInLosAngeles}>
                Stays in Los Angeles
              </div>
              <div className={styles.optionsDiv}>
                <div className={styles.pilldefaultDiv}>
                  <div className={styles.bedsDiv}>Recommended</div>
                </div>
                <div className={styles.pilldefaultDiv1}>
                  <div className={styles.bedsDiv}>Price</div>
                </div>
                <div className={styles.pilldefaultDiv1}>
                  <div className={styles.bedsDiv}>Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hotelResultsDiv}>
          <div className={styles.resultsSumamryDiv}>
            <div className={styles.resultsDiv}>200+ results</div>
            <div className={styles.filtersDiv}>
              <img className={styles.filtersIcon} alt="" src="filters.svg" />
              <div className={styles.filtersDiv1}>Filters</div>
            </div>
          </div>
          <div className={styles.resultsSectionDiv}>
            <div className={styles.resultCardsCol}>
              <div className={styles.resultsCardDiv}>
                <img
                  className={styles.resultsImageIcon}
                  alt=""
                  src="unsplashs6ch7n3eoqy@2x.png"
                />
                <div className={styles.resultsDetailsDiv}>
                  <div className={styles.resultsSumamryDiv}>
                    <div className={styles.resultAndVideo}>
                      <div className={styles.kingBedStandard}>
                        1 king bed standard
                      </div>
                      <b className={styles.holidayInnExpre}>
                        Holiday Inn Expre...
                      </b>
                      <div className={styles.reviewDiv}>
                        <div className={styles.reviewsDiv}>(1,136 reviews)</div>
                        <div className={styles.starsDiv}>
                          <div className={styles.div}>4.7</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.videoIcon}
                      alt=""
                      src="video.svg"
                      onClick={openMatterhornPopup}
                    />
                  </div>
                  <div className={styles.priceAndCta}>
                    <div className={styles.pricingDiv}>
                      <b className={styles.s286B}>$S 286</b>
                      <div className={styles.nightDiv}>/night</div>
                    </div>
                    <button className={styles.viewDetailsButton}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.searchFlightsDiv}>
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.resultsCardDiv1}>
                <img
                  className={styles.resultsImageIcon}
                  alt=""
                  src="unsplashs6ch7n3eoqy1@2x.png"
                />
                <div className={styles.resultsDetailsDiv1}>
                  <div className={styles.resultsSumamryDiv}>
                    <div className={styles.resultDiv}>
                      <b className={styles.freehandLosAngeles}>
                        Freehand Los Angeles
                      </b>
                      <div className={styles.bedInQuad}>Bed in Quad</div>
                      <div className={styles.reviewDiv1}>
                        <div className={styles.reviewsDiv1}>
                          (1,941 reviews)
                        </div>
                        <div className={styles.starsDiv1}>
                          <div className={styles.div1}>4.2</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="vector1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.priceAndCta1}>
                    <div className={styles.pricingDiv}>
                      <b className={styles.s286B}>$S 198</b>
                      <div className={styles.nightDiv}>/night</div>
                    </div>
                    <button className={styles.viewDetailsButton}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.searchFlightsDiv}>
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.resultsCardDiv1}>
                <img
                  className={styles.resultsImageIcon}
                  alt=""
                  src="unsplashs6ch7n3eoqy2@2x.png"
                />
                <div className={styles.resultsDetailsDiv1}>
                  <div className={styles.resultsSumamryDiv}>
                    <div className={styles.resultDiv}>
                      <b className={styles.freehandLosAngeles}>
                        The Westin Bonavent...
                      </b>
                      <div className={styles.bedInQuad}>1 King, City view</div>
                      <div className={styles.reviewDiv1}>
                        <div className={styles.reviewsDiv1}>
                          (1,002 reviews)
                        </div>
                        <div className={styles.starsDiv1}>
                          <div className={styles.div1}>4.1</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="vector2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.priceAndCta1}>
                    <div className={styles.pricingDiv}>
                      <b className={styles.s286B}>$S 289</b>
                      <div className={styles.nightDiv}>/night</div>
                    </div>
                    <button className={styles.viewDetailsButton}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.searchFlightsDiv}>
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.resultsCardDiv}>
                <img
                  className={styles.resultsImageIcon}
                  alt=""
                  src="unsplashs6ch7n3eoqy3@2x.png"
                />
                <div className={styles.resultsDetailsDiv}>
                  <div className={styles.resultsSumamryDiv}>
                    <div className={styles.resultAndVideo}>
                      <div className={styles.kingBedStandard}>Deluxe King</div>
                      <b className={styles.holidayInnExpre}>
                        The Ritz-Carlton, L...
                      </b>
                      <div className={styles.reviewDiv}>
                        <div className={styles.reviewsDiv}>(1,136 reviews)</div>
                        <div className={styles.starsDiv}>
                          <div className={styles.div}>4.7</div>
                          <img
                            className={styles.vectorIcon}
                            alt=""
                            src="vector3.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.videoIcon}
                      alt=""
                      src="video1.svg"
                      onClick={openMatterhornPopup1}
                    />
                  </div>
                  <div className={styles.priceAndCta}>
                    <div className={styles.pricingDiv}>
                      <b className={styles.s286B}>$S 286</b>
                      <div className={styles.nightDiv}>/night</div>
                    </div>
                    <button className={styles.viewDetailsButton}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.searchFlightsDiv}>
                        View Details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <iframe
                className={styles.mapIframe}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
              />
            </div>
            <iframe
              className={styles.mapIframe1}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
        </div>
        <div className={styles.footerSectionDiv}>
          <div className={styles.newsletterFormSection}>
            <img
              className={styles.newsletterSectionBackground}
              alt=""
              src="newsletter-section-background@2x.png"
            />
            <div className={styles.subscribeFormDiv}>
              <div className={styles.formHeaderDiv}>
                <b className={styles.formTitleSubtext}>
                  subscribe to our newsletter
                </b>
                <b className={styles.formTitleB}>Get weekly updates</b>
              </div>
              <div className={styles.formDiv}>
                <div className={styles.formTextDiv}>
                  <div className={styles.fillInYourDetailsToJoinT}>
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className={styles.formFieldsDiv}>
                  <div className={styles.formTextDiv}>
                    <TextField
                      className={styles.inputTextField}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Your name"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className={styles.formTextDiv}>
                    <TextField
                      className={styles.inputTextField}
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Email address"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <button className={styles.button}>
                  <div className={styles.unstyledButtonDiv}>
                    <div className={styles.buttonDiv}>submit</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className={styles.footer}>
            <div className={styles.fickleFlightBioDiv}>
              <img className={styles.logoIcon} alt="" src="logo.svg" />
              <div className={styles.fickleFlightIsYourOneStop}>
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className={styles.socialIcons}
                alt=""
                src="social-icons.svg"
              />
            </div>
            <div className={styles.seperatorDiv} />
            <div className={styles.footerLinksDiv}>
              <div className={styles.companyDiv}>
                <div className={styles.aboutUsDiv}>About Us</div>
                <div className={styles.companyDiv1}>Company</div>
                <div className={styles.newsDiv}>News</div>
                <div className={styles.careersDiv}>Careers</div>
                <div className={styles.howWeWork}>How we work</div>
              </div>
              <div className={styles.companyDiv}>
                <div className={styles.accountDiv}>Account</div>
                <div className={styles.supportDiv1}>Support</div>
                <div className={styles.supportCenterDiv}>Support Center</div>
                <div className={styles.fAQDiv}>FAQ</div>
                <div className={styles.accessibilityDiv}>Accessibility</div>
              </div>
              <div className={styles.moreDiv}>
                <div className={styles.covidAdvisoryDiv}>Covid Advisory</div>
                <div className={styles.moreDiv1}>More</div>
                <div className={styles.airlineFeesDiv}>Airline Fees</div>
                <div className={styles.tipsDiv}>Tips</div>
                <div className={styles.howWeWork}>Quarantine Rules</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
      {isMatterhornPopup1Open && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup1}
        >
          <MatterhornPopup onClose={closeMatterhornPopup1} />
        </PortalPopup>
      )}
    </>
  );
};
