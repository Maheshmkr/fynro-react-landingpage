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
import arrow from "./assets/image/icons8-right-arrow (4) 1.svg"
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
      <div id="section4">
        {/* <div><img src={hero}/></div> */}
        <p className="headtext">Meet our Advisors!</p>
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

    </>
  );
}

export default App;
