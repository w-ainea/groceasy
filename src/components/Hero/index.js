import React from "react";
import { withRouter } from "react-router-dom";
import { CustomButton } from "..";
import background from "../../assets/img/hero-bcg.jpg";

const Hero = ({ history }) => (
  <section
    style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundAttachment: "scroll",
      height: "30rem",
    }}
  >
    <div className="h-64 relative">
      <div
        className="hero-content mt-24 md:mt-32 pb-10 sm:pt-2 min-w-0"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          backgroundColor: "#fff",
          opacity: "0.9",
          // maxWidth: "40rem",
          minWidth: "20rem",
        }}
      >
        <h1 className="font-bold text-4xl text-gray-700 sm:text-5xl font-headings tracking-tight z-10 px-4">
          Easy online stores for grocery retailers
        </h1>

        <p className="px-4 text-lg text-gray-700">
          We make it simple to build an online store, sell your products and
          grow your business{" "}
        </p>

        <CustomButton onClick={() => history.push("/auth")}>
          Open your store
        </CustomButton>
      </div>
    </div>
  </section>
);

export default withRouter(Hero);
