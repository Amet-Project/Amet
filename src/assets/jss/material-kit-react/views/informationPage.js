import { container } from "assets/jss/material-kit-react.js";

const informationPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF",
    paddingBottom: "20vh"
  },
  infoBigContainer: {
    borderRadius: "25px",
    padding: "100px",
    zIndex: "2",
    position: "absolute",
    marginTop: "0vh",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "black",
  },
  infoContainer: {
    borderRadius: "25px",
    padding: "20px",
    zIndex: "2",
    position: "relative",
    marginTop: "1vh",
    width: "100%",
    background: "#e6e6e6",
    overflow: "auto"
  },
  infoContainerCenter: {
    borderRadius: "25px",
    padding: "20px",
    zIndex: "2",
    position: "relative",
    marginTop: "1vh",
    width: "100%",
    background: "#e6e6e6",
    textAlign: "-webkit-center"
  },
  hrRound: {
    borderTop: "4px solid #000",
    borderRadius: "5px",
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  pageHeader: {
    minHeight: "100vh",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    },
    "& footer li a,& footer li a:hover,& footer li a:active": {
      color: "#FFFFFF"
    },
    "& footer": {
      position: "absolute",
      bottom: "0",
      width: "100%"
    }
  },
  pageFooter:{
    position: "absolute",
    width: "100%",
    bottom: "0",
    background: "#ddd"
  },
  form: {
    margin: "0"
  },
  signupLink: {
    color: "#FFFFFF",
    fontSize: "1.125rem",
    lineHeight: "1.5em",
    textDecoration: "underline"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#495057"
  },
  casinoImage: {
    width: "5%",
    verticalAlign: "middle"
  },
  row: {
    marginLeft: "1rem !important",
  },
  "g-4": {
    marginLeft: "1rem !important",
  },
  casinoListImage: {
    width: "320px",
    float: "left",
    maxHeight: "250px"
  },
  listText: {
    marginLeft: "360px",
    fontSize: "larger"
  },
  btnListDiv: {
    textAlign: "center"
  },
  btnList: {
    width: "30%"
  }
};

export default informationPageStyle;
