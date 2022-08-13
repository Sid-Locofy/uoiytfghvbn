import { FunctionComponent, useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  FormControlLabel,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import styles from "./css/ResultsPage.module.css";

export const ResultsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);

  const onFickleflightLogoButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.resultsPageDiv}>
        <header className={styles.topHeader}>
          <div className={styles.topContainerDiv}>
            <button
              className={styles.fickleflightLogoButton}
              onClick={onFickleflightLogoButtonClick}
            >
              <img className={styles.symbolsIcon} alt="" src="symbols.svg" />
            </button>
            <div className={styles.navigationRightDiv}>
              <div className={styles.navigationMenuDiv}>
                <div className={styles.exploreDiv} onClick={onExploreTextClick}>
                  Explore
                </div>
                <button className={styles.searchButton}>Search</button>
                <div className={styles.exploreDiv} onClick={onHotelsTextClick}>
                  Hotels
                </div>
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
        <div className={styles.searchFormSection}>
          <div className={styles.searchContainerDiv}>
            <div className={styles.bannerGradientDiv} />
            <img
              className={styles.bannerBackgroundIcon}
              alt=""
              src="banner-background1@2x.png"
            />
            <div className={styles.searchSectionDiv}>
              <div className={styles.titleDiv}>
                <div className={styles.whereAreYouOffToo}>
                  Where are you off too?
                </div>
              </div>
              <div className={styles.searchFormDiv}>
                <div className={styles.inputsRowDiv}>
                  <div className={styles.inputGroupDiv}>
                    <Autocomplete
                      className={styles.departureFieldAutocomplete}
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)Sanya (SYX)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                      size="medium"
                    />
                  </div>
                  <div className={styles.inputGroupDiv}>
                    <Autocomplete
                      className={styles.departureFieldAutocomplete}
                      sx={{ width: "100%" }}
                      disablePortal
                      options={[
                        "Clark (CRK)",
                        "Launceston (LST)",
                        "Kalibo (KLO)",
                        "Colombo CMB",
                        "Melbourne (AVV)",
                        "Los Angeles (LA)",
                      ]}
                      renderInput={(params: any) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Arrival"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Los Angeles (LA)"
                      size="medium"
                    />
                  </div>
                  <div className={styles.inputGroupDiv}>
                    <div className={styles.departureFieldAutocomplete}>
                      <DatePicker
                        label="Date"
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue: any) => {
                          setDateFieldDateTimePickerValue(newValue);
                        }}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            variant="outlined"
                            size="medium"
                            renderInput={{ placeholder: "01/05/2022" }}
                            helperText=""
                            fullWidth
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.buttonGroupDiv}>
                  <button className={styles.searchFlightsButton}>
                    <div className={styles.buttonDiv}>Search flights</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.searchResultsDiv}>
          <div className={styles.searchFiltersDiv}>
            <div className={styles.resultsSummaryDiv}>
              <div className={styles.resultsDiv}>10 out of 177 Results</div>
              <img className={styles.vectorIcon} alt="" src="vector-2.svg" />
            </div>
            <div className={styles.bookingOptionsDiv}>
              <b className={styles.resultsB}>Booking Options</b>
              <FormControlLabel
                className={styles.component1formcheckboxFormControlLabel}
                label="Book on Fickleflight"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckboxFormControlLabel1}
                label="Official Airline Websites"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className={styles.flightExperienceDiv}>
              <b className={styles.resultsB1}>Flight Experience</b>
              <FormControlLabel
                className={styles.component1formcheckboxFormControlLabel}
                label="No overnight flights"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckboxFormControlLabel1}
                label="No long stop-overs"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <div className={styles.airlinesDiv}>
              <b className={styles.resultsB2}>Airlines</b>
              <FormControlLabel
                className={styles.component1formcheckboxFormControlLabel}
                label="Singapore Airlines"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckboxFormControlLabel1}
                label="Qatar Airways"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <div className={styles.stopsDiv}>
              <b className={styles.resultsB3}>Stops</b>
              <FormControlLabel
                className={styles.component1formcheckboxFormControlLabel}
                label="1 Stop"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className={styles.component1formcheckboxFormControlLabel1}
                label="2 Stops"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <img className={styles.seperatorIcon} alt="" src="vector-5.svg" />
          </div>
          <div className={styles.flightCardsDiv}>
            <div className={styles.flightCardDiv}>
              <div className={styles.airlineSectionDiv}>
                <img className={styles.turkishIcon} alt="" src="turkish.svg" />
                <div className={styles.singaporeAirlinesDiv}>
                  Turkish Airlines
                </div>
              </div>
              <div className={styles.flightDetailsSection}>
                <div className={styles.departureDetailsDiv}>
                  <div className={styles.aMDiv}>11:35 PM</div>
                  <div className={styles.sINDiv}>SIN</div>
                </div>
                <div className={styles.flightDurationDiv}>
                  <img
                    className={styles.flightIcon}
                    alt=""
                    src="flighticon.svg"
                  />
                  <div className={styles.h55MNonStop}>33H 10M, 1-stop</div>
                </div>
                <div className={styles.arrivalDetailsDiv}>
                  <div className={styles.aMDiv}>4:45 PM</div>
                  <div className={styles.sINDiv1}>LAX</div>
                </div>
              </div>
              <div className={styles.priceSectionDiv}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 723</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.airlineSectionDiv}>
                <img className={styles.turkishIcon} alt="" src="sia.svg" />
                <div className={styles.singaporeAirlinesDiv1}>
                  Singapore Airlines
                </div>
              </div>
              <div className={styles.flightDetailsSection1}>
                <div className={styles.departureDetailsDiv}>
                  <div className={styles.aMDiv}>8:45 PM</div>
                  <div className={styles.sINDiv2}>SIN</div>
                </div>
                <div className={styles.flightDurationDiv1}>
                  <img
                    className={styles.flightIcon1}
                    alt=""
                    src="flighticon1.svg"
                  />
                  <div className={styles.h55MNonStop}>15H 10M, 2-stops</div>
                </div>
                <div className={styles.arrivalDetailsDiv}>
                  <div className={styles.aMDiv}>7:55 PM</div>
                  <div className={styles.sINDiv3}>LAX</div>
                </div>
              </div>
              <div className={styles.priceSectionDiv1}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 900</b>
              </div>
            </div>
            <div className={styles.flightCardDiv}>
              <div className={styles.airlineSectionDiv}>
                <img className={styles.japanIcon} alt="" src="japan.svg" />
                <div className={styles.singaporeAirlinesDiv}>
                  Japan Airlines
                </div>
              </div>
              <div className={styles.flightDetailsSection}>
                <div className={styles.departureDetailsDiv}>
                  <div className={styles.aMDiv}>8:20 PM</div>
                  <div className={styles.sINDiv2}>SIN</div>
                </div>
                <div className={styles.flightDurationDiv}>
                  <img
                    className={styles.flightIcon2}
                    alt=""
                    src="flighticon1.svg"
                  />
                  <div className={styles.h55MNonStop}>17H 30M, 1-stop</div>
                </div>
                <div className={styles.arrivalDetailsDiv}>
                  <div className={styles.aMDiv}>9:50 PM</div>
                  <div className={styles.sINDiv3}>LAX</div>
                </div>
              </div>
              <div className={styles.priceSectionDiv}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 859</b>
              </div>
            </div>
            <div className={styles.flightCardDiv}>
              <div className={styles.airlineSectionDiv}>
                <img className={styles.japanIcon} alt="" src="ana.svg" />
                <div className={styles.singaporeAirlinesDiv}>ANA</div>
              </div>
              <div className={styles.flightDetailsSection}>
                <div className={styles.departureDetailsDiv}>
                  <div className={styles.aMDiv}>6:35 PM</div>
                  <div className={styles.sINDiv2}>SIN</div>
                </div>
                <div className={styles.flightDurationDiv}>
                  <img
                    className={styles.flightIcon}
                    alt=""
                    src="flighticon1.svg"
                  />
                  <div className={styles.h55MNonStop}>19H 15M, 1-stop</div>
                </div>
                <div className={styles.arrivalDetailsDiv}>
                  <div className={styles.aMDiv}>9:50 PM</div>
                  <div className={styles.sINDiv3}>LAX</div>
                </div>
              </div>
              <div className={styles.priceSectionDiv}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 936</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.airlineSectionDiv}>
                <img
                  className={styles.americanAirlinesIcon}
                  alt=""
                  src="americanairlines.svg"
                />
                <div className={styles.singaporeAirlinesDiv}>
                  American Airlines
                </div>
              </div>
              <div className={styles.flightDetailsSection4}>
                <div className={styles.departureDetailsDiv}>
                  <div className={styles.aMDiv}>8:20 PM</div>
                  <div className={styles.sINDiv2}>SIN</div>
                </div>
                <div className={styles.flightDurationDiv}>
                  <img
                    className={styles.flightIcon}
                    alt=""
                    src="flighticon1.svg"
                  />
                  <div className={styles.h55MNonStop}>17H 30M, 1-stop</div>
                </div>
                <div className={styles.arrivalDetailsDiv}>
                  <div className={styles.aMDiv}>9:50 AM</div>
                  <div className={styles.sINDiv3}>LAX</div>
                </div>
              </div>
              <div className={styles.priceSectionDiv1}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 939</b>
              </div>
            </div>
            <div className={styles.flightCardDiv}>
              <div className={styles.airlineSectionDiv}>
                <img className={styles.turkishIcon} alt="" src="turkish.svg" />
                <div className={styles.singaporeAirlinesDiv}>
                  Turkish Airlines
                </div>
              </div>
              <div className={styles.flightDetailsSection}>
                <div className={styles.departureDetailsDiv}>
                  <div className={styles.aMDiv}>11:35 PM</div>
                  <div className={styles.sINDiv2}>SIN</div>
                </div>
                <div className={styles.flightDurationDiv5}>
                  <img
                    className={styles.flightIcon1}
                    alt=""
                    src="flighticon1.svg"
                  />
                  <div className={styles.h55MNonStop}>33H 10M, 2-stops</div>
                </div>
                <div className={styles.arrivalDetailsDiv}>
                  <div className={styles.aMDiv}>4:45 PM</div>
                  <div className={styles.sINDiv3}>LAX</div>
                </div>
              </div>
              <div className={styles.priceSectionDiv}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 673</b>
              </div>
            </div>
            <div className={styles.flightCardDiv}>
              <div className={styles.airlineSectionDiv}>
                <img className={styles.japanIcon} alt="" src="japan1.svg" />
                <div className={styles.singaporeAirlinesDiv}>
                  Japan Airlines
                </div>
              </div>
              <div className={styles.flightDetailsSection}>
                <div className={styles.departureDetailsDiv}>
                  <div className={styles.aMDiv}>10:25 PM</div>
                  <div className={styles.sINDiv2}>SIN</div>
                </div>
                <div className={styles.flightDurationDiv}>
                  <img
                    className={styles.flightIcon}
                    alt=""
                    src="flighticon1.svg"
                  />
                  <div className={styles.h55MNonStop}>26H 45M, 1-stop</div>
                </div>
                <div className={styles.arrivalDetailsDiv}>
                  <div className={styles.aMDiv}>9:10 AM</div>
                  <div className={styles.sINDiv3}>LAX</div>
                </div>
              </div>
              <div className={styles.priceSectionDiv}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 859</b>
              </div>
            </div>
            <div className={styles.flightCardDiv1}>
              <div className={styles.airlineSectionDiv}>
                <img
                  className={styles.americanAirlinesIcon}
                  alt=""
                  src="americanairlines1.svg"
                />
                <div className={styles.singaporeAirlinesDiv}>
                  American Airlines
                </div>
              </div>
              <div className={styles.flightDetailsSection4}>
                <div className={styles.departureDetailsDiv}>
                  <div className={styles.aMDiv}>10:25 PM</div>
                  <div className={styles.sINDiv2}>SIN</div>
                </div>
                <div className={styles.flightDurationDiv}>
                  <img
                    className={styles.flightIcon}
                    alt=""
                    src="flighticon1.svg"
                  />
                  <div className={styles.h55MNonStop}>26H 45M, 1-stop</div>
                </div>
                <div className={styles.arrivalDetailsDiv}>
                  <div className={styles.aMDiv}>9:10 AM</div>
                  <div className={styles.sINDiv3}>LAX</div>
                </div>
              </div>
              <div className={styles.priceSectionDiv1}>
                <img className={styles.vectorIcon1} alt="" src="vector-1.svg" />
                <b className={styles.s730B}>S$ 859</b>
              </div>
            </div>
            <button className={styles.primaryButton}>
              <div className={styles.rectangleDiv} />
              <div className={styles.searchFlightsDiv}>Show more results</div>
            </button>
          </div>
        </div>
        <div className={styles.footerSectionDiv}>
          <div className={styles.formTextDiv}>
            <div className={styles.newsletterFormSection}>
              <img
                className={styles.newsletterSectionBackground}
                alt=""
                src="newsletter-section-background1@2x.png"
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
                      <div className={styles.buttonDiv1}>submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className={styles.footer}>
              <div className={styles.fickleFlightBioDiv}>
                <img className={styles.logoIcon} alt="" src="logo1.svg" />
                <div className={styles.fickleFlightIsYourOneStop}>
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className={styles.socialIcons}
                  alt=""
                  src="social-icons1.svg"
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
      </div>
    </LocalizationProvider>
  );
};
