import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Credit Admin - Senior Executive</h4>
                <h5>Shriram Housing Finance</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Working in Credit Deparment of Home Loan Product, Checking Customers KYCs details,
              There Financials Documents and Check eligibility, also doing other works like 
              Initiation and Follow up of FI / RCU / Legal / Technical Reports updates and many more.  
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Credit Processing Analyst</h4>
                <h5>ICICI Bank</h5>
              </div>
              <h3>2022-2023 </h3>
            </div>
            <p>
              Working in Credit Deparment of mortgage loan Product 
              Doing Check login Files, Generate Manual Sanction Letters,
              Files Sent to ops, Docket Preprations, ETC... 
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Account Department</h4>
                <h5>Kothari Departmental Store</h5>
              </div>
              <h3>2021-2022</h3>
            </div>
            <p>
              Working with Gofrugal Software for Data Entry of 
              There Local purchase Bills and tally Stocks and Checking out Stocks 
              when received from Supplier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
