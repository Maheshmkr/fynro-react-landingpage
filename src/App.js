import logo from "./assets/image/fynro.svg";
import para from "./assets/image/h1.png";
import tick from "./assets/image/icons8-tick (2) 1.svg";
import rockte from "./assets/image/Frame 1000003962.svg";
import illstart from "./assets/image/Home 2 Header image.svg";
import star1 from "./assets/image/Frame.svg";
import vectorimage2 from "./assets/image/Group 1000003460.png";
import vectorimage1 from "./assets/image/Group 1000003464.png";
import youtubeimage from "./assets/image/image.png";
import hero from "./assets/image/Hero.png";
import cardimage1 from "./assets/image/Rectangle 61040.png";
import cardimage2 from "./assets/image/Rectangle 61040 (1).png";
import cardimage3 from "./assets/image/Rectangle 61040 (2).png";
import staroffer from "./assets/image/Staroffer.svg";
import briefcase from "./assets/image/icons8-briefcase 1.svg";
import crown from "./assets/image/icons8-crown (1) 1.svg";
import dots from "./assets/image/dots.svg";
import youtubeicon from "./assets/image/icons8-youtube-logo 1.svg";
import investment from "./assets/image/icons8-investment 1.svg";
import broker from "./assets/image/icons8-broker 1.svg";
import growth from "./assets/image/icons8-financial-growth-analysis 1.svg";
import crisis from "./assets/image/icons8-financial-crisis 1.svg";
import profit from "./assets/image/icons8-profit 1.svg";
import charity from "./assets/image/icons8-charity 1.svg";
import arrow from "./assets/image/icons8-right-arrow (4) 1.svg";
import stepill from "./assets/image/Frame 1000003954.jpg";
import profile1 from './assets/image/logo.svg';
import profile2 from './assets/image/logo (1).svg';
import profile3 from './assets/image/logo (2).svg';
import starts from "./assets/image/Star 1.svg";
import dealsimg1 from "./assets/image/Rectangle 61063.png";
import dealsimg2 from "./assets/image/Rectangle 61064.png";
import dealsimg3 from "./assets/image/Rectangle 61065.jpg";
import fflogo from "./assets/image/ffLogo.svg";
import facebook from "./assets/image/icon_facebook.svg";
import "./App.css";

const carddata = [{
  image1: cardimage1,
  cardname: "Antonio J Redondo Plata",
  Years: "5",
  Specialized: "Financial Planning",
  rating: "4.2",
  Creditsd: "50",
  Credits: "45"
},
{
  image1: cardimage2,
  cardname: "Nancy John Sarikha",
  Years: "2",
  Specialized: "Credit Advise",
  rating: "4.5",
  Creditsd: "30",
  Credits: "27"
},
{
  image1: cardimage3,
  cardname: "Sanjay Dutt",
  Years: "6",
  Specialized: "Portfolio Management",
  rating: "4.2",
  Creditsd: "50",
  Credits: "47"
}
]
function Cards(props) {
  return (<div className="cards">
    <div className="cardscout">
      <div className="card">
        <img src={props.image1} style={{ padding: "8px" }} />
        {/* <div className={props.cardstatus ? "cardstatus":"crdstatus-off"} style={{width: "74px",height: "24px",background:"#ffffff"}}>
            <p style={{display:"flex",width: "57px",height: "15px",fontSize:"12px",color: "#383E54",textAlign: "center",fontFamily: "Gilroy-SemiBold"}}>
              Top Rated
              </p>
            </div> */}
        <div className="offer">
          <img src={crown} style={{ width: "16px", height: "16px" }} />
          <div className="offertext">
            <p className="offertext1">Specialized in <span className="offertext2">{props.Specialized}</span></p>
          </div>
        </div>
        <div className="carname">
          <div className="cardname1">
            <p className="nameofcard">{props.cardname}</p>
            <div className="greencard">
              <img src={staroffer} />
              <p
                style={{
                  color: "#ffffff",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "16px",
                }}
              >
                {" "}
                4.2
              </p>
            </div>
          </div>
          <div className="ratingcard"></div>
          <div className="experience">
            <img src={briefcase} />
            <p className="years">{props.Years} Years Experience</p>
          </div>
          <div className="discount">
            <div className="creditscont">
              <p className="discountpoint">{props.Creditsd} credits</p>
              <p className="discuntmin">{props.Credits} Credits /Min</p>
            </div>
            <button className="bookbtn">Book</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

const stepsdata = [{
  Stepcount: "1",
  step_rule: "Register",
  step_details: "Sign up with your basic information in just a few simple steps and get started right away."
}, {
  Stepcount: "2",
  step_rule: "Register",
  step_details: "Recharge your wallet with flexible plans and connect seamlessly with our expert advisors."
}, {
  Stepcount: "3",
  step_rule: "Explore Advisors",
  step_details: "Browse through certified experts and connect with the perfect advisor for your needs for you financial clarifications."
}]
function Stepframe(props) {
  return (
    <div className="steps" style={{ height: "124px", gap: "8px", height: "124px", width: "491px" }}>
      <div className="step1" style={{ display: "flex", width: "59px", height: "26px", padding: "5px 12px", justifyContent: "center", alignItems: "center", gap: "10px", borderRadius: "24px", background: "#CBF2E0" }}>
        <p style={{ color: "#008545", fontFamily: "Poppins", fontSize: "12px" }}>{props.Stepcount}</p>
      </div>
      <div className="step_conte">
        <p style={{ color: "#121214", fontFamily: "Gilroy-SemiBold", fontSize: "18px" }}>{props.step_rule}</p>
      </div>
      <div className="step_details">
        <p style={{ color: "#555", fontFamily: "Gilroy-Medium", fontSize: "16px" }}>{props.step_details}</p>
      </div>
    </div>
  )
}


const costumer = [{
  customersimage1: profile1,
  background: "#F0F9FA",
  costumername: "Ranjani Andrew",
  costumerfeedback: "Fynro made managing my finances so simple! My advisor helped me optimize my investments, and I’ve seen incredible growth in just a few months",
}, {
  customersimage1: profile2,
  background: "#FFF5EC",
  costumername: "Rajesh Palanisamy",
  costumerfeedback: "I never thought retirement planning could be this easy. The expert guidance I received gave me complete peace of mind about my future",

}, {
  customersimage1: profile3,
  costumername: "Sibi Chakravathy",
  background: "#ECF1FB",
  costumerfeedback: "The personalized advice on credit management was a game-changer. My financial advisor helped me improve my credit score and plan smarter",

}]
function Customers(props) {
  return (
    <div style={{ backgroundColor: props.background, padding: "24px", width: "321px", height: "354px", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
      <img src={props.customersimage1} style={{ marginTop: "24px", position: "absolute", top: "-64px" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "13px", marginTop: "82px" }}>
        <p style={{ margin: "0px", color: "#121214", fontFamily: "Gilroy-SemiBold", fontSize: "20px" }}>
          {props.costumername}
        </p>
        <p style={{ margin: "0px", color: "#555555", fontFamily: "Gilroy-Medium", fontSize: "16px", textAlign: "center" }}>
          {props.costumerfeedback}
        </p>
      </div>
      <div style={{ display: "flex", height: "24px", justifyContent: "center", width: "50%", alignItems: "flex-start", gap: "4px" }}>
        <img src={starts} />
        <img src={starts} />
        <img src={starts} />
        <img src={starts} />
        <img src={starts} />

      </div>
    </div>
  )
}

const dealsdata = [{
  image1: dealsimg1,
  deals1: "50% Off On Credit Management!",
  deals2: "Limited-time offer for first-time users. Get expert advice on managing your credit efficiently."
},
{
  image1: dealsimg2,
  deals1: "Free Retirement Planning with 200+ Credits!",
  deals2: "Claim a complimentary retirement planning session towards a secure and stress-free future today!"
},
{
  image1: dealsimg3,
  deals1: "Free Personal Finance Session  ",
  deals2: "Claim a complimentary retirement planning session towards a secure and stress-free future today!"
}
]
function Deals(props) {
  return (
    <div className="dealscard">
      <img src={props.image1} style={{ width: "450px", height: "255px", borderRadius: "12px" }} />
      <p style={{ margin: "24px 0px 0px 0px", color: "#121214", font: "20px", fontFamily: "Gilroy-SemiBold" }}>{props.deals1}</p>
      <p style={{ margin: "0px", color: "#555555", font: "16px", fontFamily: "Gilroy-Medium" }}>{props.deals2}</p>
      <p style={{ margin: "0px", color: "#5978FF", font: "16px", fontFamily: "Gilroy-SemiBold", display: "flex", gap: "8px" }}>Learn More <img src={arrow} /></p>
    </div>
  )
}


function App() {
  return (
    <>
      <header className="headerline">
        <div className="headerlogo">
          <img src={logo} alt="Logo" />
          <p
            style={{
              color: "#383E54",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "16px",
            }}
          >
            Fynro
          </p>
        </div>
        <div className="navge" style={{ fontFamily: "Poppins" }}>
          <a
            style={{
              color: "#F8971F",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "600",
            }}
          >
            Home
          </a>
          <a className="navgenon">Explore Advisors</a>
          <a className="navgenon">Blogs</a>
          <a className="navgenon">White papers</a>
        </div>
        <div className="but">
          <button className="loginbtn">Login</button>
          <button className="getstartbtn">Get Started</button>
        </div>
      </header>

      <div id="section1">
        <div className="textpara">
          <div className="titletext">
            <img
              src={para}
              alt="Unlock Financial Clarity With Certified Advisors"
              style={{ marginLeft: "-40px" }}
            />
          </div>
          <div className="paratext">
            <p style={{ marginTop: "32px" }}>
              Fynro links you with expert financial advisors who align with your
              goals, offering tailored solutions for investments, retirement
              planning, and beyond. Unlock your financial potential and thrive
              with confidence!
            </p>
          </div>

          <div className="infotext" style={{ marginTop: "37px" }}>
            <div className="join">
              <img src={tick} />
              <p
                style={{
                  color: "#555555",
                  fontFamily: "Gilroy-Medium",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Verified Advisors
              </p>
            </div>
            <div className="join">
              <img src={tick} />
              <p
                style={{
                  color: "#555555",
                  fontFamily: "Gilroy-Medium",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "24px",
                }}
              >
                Instant Connect
              </p>
            </div>
            <img src={rockte} />
          </div>
          <button className="exploreadvisors_btn" style={{ marginTop: "60px" }}>
            Explore Advisors
          </button>
        </div>
        <div className="illstart1">
          <img src={illstart} style={{ paddingLeft: "95px" }} />
          <div className="rating">
            <div className="ratingstar">
              <img src={star1}></img>
              <img src={star1}></img>
              <img src={star1}></img>
              <img src={star1}></img>
              <img src={star1}></img>
            </div>
            <p
              style={{
                margin: "0px",
                color: "#0D0E10",
                fontFamily: "Gilroy-SemiBold",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "24px",
              }}
            >
              100+ Positive Reviews
            </p>
          </div>
        </div>
      </div>

      <div id="section2">
        <p
          style={{
            color: "#121214",
            textAlign: "center",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "37px",
            textTransform: "capitalize",
          }}
        >
          Watch Our Action
        </p>
        <div className="video">
          <div>
            <img src={vectorimage1}></img>
          </div>

          <div>
            <div
              className="videocount"
              style={{
                display: "flex",
                alignItems: "center",
                backgroundImage:
                  'url("https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg")',
                justifyContent: "center",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src={youtubeicon}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              />
            </div>
            <div
              style={{
                color: "#FFFFFF",
                height: "3.5rem",
                display: "flex",
                alignItems: "center",
                paddingLeft: "52.27px",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                background: "#0e1328",
                color: "#ffffff",
                fontFamily: "Gilroy-SemiBold",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Video Title display here
            </div>
          </div>

          <div>
            <img src={vectorimage2}></img>
          </div>
        </div>
        <div>
          <img src={dots} className="dots" />
        </div>
      </div>

      <div id="section3">
        <p className="headtext">What do we solve for you?</p>
        <div className="sectiontitle">
          <div className="firstbox">
            <img src={investment} />
            <p className="firstboxtitle">Investment Management</p>
            <p className="firstboxtext">
              Optimize your wealth and grow it with expert, personalized
              investment strategies.
            </p>
          </div>
          <div className="firstbox">
            <img src={broker} />
            <p className="firstboxtitle">Retirement Planning</p>
            <p className="firstboxtext">
              Secure your future with a personalized retirement plan for
              financial independence and peace of mind.
            </p>
          </div>
          <div className="firstbox">
            <img src={growth} />
            <p className="firstboxtitle">Portfolio Optimization</p>
            <p className="firstboxtext">
              Optimize your portfolio and grow your wealth with expert,
              personalized investment strategies.
            </p>
          </div>
          <div className="firstbox">
            <img src={crisis} />
            <p className="firstboxtitle">Stock Market Guidance</p>
            <p className="firstboxtext">
              Navigate stock market confidently with expert guidance tailored to
              maximize your investments.
            </p>
          </div>
          <div className="firstbox">
            <img src={profit} />
            <p className="firstboxtitle">Credit Management</p>
            <p className="firstboxtext">
              Get expert help to manage your credit, improve your score, and
              make smarter borrowing decisions.
            </p>
          </div>
          <div className="firstbox">
            <img src={charity} />
            <p className="firstboxtitle">Personalized Finance Advise</p>
            <p className="firstboxtext">
              Get tailored financial advice to help you make smart decisions and
              achieve your goals with confidence.
            </p>
          </div>
        </div>
      </div>

      <div id="section4" style={{ 
        backgroundImage:`url(${hero})`,
      backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat", }}>
        {/* <div><img src={hero}/></div> */}
        <p className="headtext" style={{ margin: "0px" }}>Meet our Advisors!</p>
        {/* <Cards 
          image1={cardimage1} 
          cardname="Antonio J Redondo Plata" 
          Years="5" 
          Specialized="Financial Planning" 
          rating="4.2"  
          Creditsd="50" 
          Credits="45"
        /> */}
        <div className="totalcard">
          {
            carddata.map((user, index) => (
              <Cards key={index}
                image1={user.image1}
                cardname={user.cardname}
                Years={user.Years}
                Specialized={user.Specialized}
                rating={user.rating}
                Creditsd={user.Creditsd}
                Credits={user.Credits}
              />
            ))
          }
        </div>
        <div className="explreconte">
          <div className="explore">
            <p style={{ color: "#5978FF", fontFamily: "Gilroy-SemiBold" }}>Explore More Advisors</p>
            <img src={arrow} />
          </div>
        </div>
      </div>

      <div id="section5" style={{ marginTop: "89px" }}>
        <p style={{ fontFamily: "Gilroy-Bold", fontSize: "28px", display: "flex", justifyContent: "center" }}>Get connected with advisor in just 3 Easy steps</p>
        <div className="stepframe_two" style={{ display: "flex", justifyContent: "center", gap: "94px", alignItems: "center" }}>
          <div className="totalsteps" style={{ display: "flex", width: "491px", flexDirection: "column", alignItems: "flex-start", gap: "40px" }}>
            {
              stepsdata.map((user, index) => (
                <Stepframe key={index}
                  Stepcount={user.Stepcount}
                  step_rule={user.step_rule}
                  step_details={user.step_details}
                />
              ))
            }
          </div>
          <img src={stepill} style={{ width: "417px", height: "377px" }} />

        </div>
      </div>

      <div id="section6">
        <div className="feedblock">
          <p style={{ color: "#121214", fontFamily: "Gilroy-Bold", fontSize: "28px", display: "flex", justifyContent: "center" }}>See what our Customers says</p>
          <div className="allcostomers" style={{ padding: "10px", display: "flex", gap: "20px", display: "flex", justifyContent: "center", marginTop: "100px" }}>
            {
              costumer.map((user, index) => (
                <Customers key={index}
                  background={user.background}
                  customersimage1={user.customersimage1}
                  costumername={user.costumername}
                  costumerfeedback={user.costumerfeedback}

                />
              ))
            }

          </div>
        </div>

      </div>

      <div id="section7">
        <p style={{ color: "#121214", fontFamily: "Gilroy-Bold", fontSize: "28px", display: "flex", justifyContent: "center", padding: "100px 0px 0px 0px", margin: "0px" }}>Exclusive Deals This Month!</p>
        <div className="dealallwrapper">
        <div className="dealsall">
          {
            dealsdata.map((user, index) => (
              <Deals key={index}
                image1={user.image1}
                deals1={user.deals1}
                deals2={user.deals2}

              />
            ))
          }

        </div>
        </div>
      </div>

      <div className="section8">
        <footer style={{ background: "#0D1226", height: "586px", marginTop: "57px" }}>
          <div className="footerall">
            <div className="footer1">
              <div style={{ display: "flex", alignItems: "center", justifyItems: "center", gap: "10px" }}>
                <img src={fflogo} />
                <p style={{ fontSize: "18px" }}>Fynro</p>
              </div>
              <p style={{ width: "285px", color: "#9497A1" }}>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
              <div className="linkicon" style={{display: "flex",alignItems: "flex-start",gap:"15px" }}>
                <img src={facebook} />
                <img src={facebook} />
                <img src={facebook} />
                <img src={facebook} />
              </div>

            </div>
            <div className="footer2">
              <p style={{fontFamily:"Gilroy-SemiBold",color:"#ffffff"}}>Quick links</p>
              <p>Home</p>
              <p>Explore Advisors</p>
              <p>Blogs</p>
              <p>White Papers</p>

            </div>
            <div className="footer3">
              <p style={{fontFamily:"Gilroy-SemiBold",color:"#ffffff"}}>Advisor Portal</p>
              <p>Become a Advisor</p>
              <p>Sign in as Advisor</p>
            </div>
            <div className="footer4">
              <p style={{fontFamily:"Gilroy-SemiBold",color:"#ffffff"}}>Cantact info</p>
              <p>fynro.info.co.us</p>
              <p>+91 77086-54343</p>
              <p>1642 Sunrise Avenue, Neelangarai, Chennai , 600115</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
