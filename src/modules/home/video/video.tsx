import React from "react";

const VideoSection: React.FC = () => {
  return (
    <div style={sectionStyle}>
      <div style={containerStyle}>
      
        {/* Phần văn bản */}
        <div style={textContainerStyle}>
          <h2 style={headingStyle}>A whole world of freelance talent at your fingertips</h2>
          <p style={textStyle}><b>✔ The best for every budget.</b> Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
          <p style={textStyle}><b>✔ Quality work done quickly.</b> Find the right freelancer to begin working on your project within minutes.</p>
          <p style={textStyle}><b>✔ Protected payments, every time.</b> Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
          <p style={textStyle}><b>✔ 24/7 support.</b> Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
        </div>

        {/* Phần video */}
        <div style={videoContainerStyle}>
          <video width="100%" height="auto" controls>
            <source src="../../../../public/hinhanh/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

// CSS cho các phần tử
const sectionStyle: React.CSSProperties = {
  backgroundColor: "#0b3621", // Màu nền xanh đậm theo hình
  padding: "80px 0",
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const textContainerStyle: React.CSSProperties = {
  flex: 1,
  paddingRight: "20px",
  color: "#fff",
};

const headingStyle: React.CSSProperties = {
  fontSize: "36px",
  fontWeight: "700",
  marginBottom: "20px",
  lineHeight: "1.4",
};

const textStyle: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "400",
  marginBottom: "15px",
  lineHeight: "1.6",
};

const videoContainerStyle: React.CSSProperties = {
  flex: 1,
  paddingLeft: "20px",
};

export default VideoSection;
