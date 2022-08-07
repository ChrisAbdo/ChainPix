import React from "react";
import LandingNavbar from "../components/LandingNavbar";

const Landing = ({ web3Handler }) => {
  return (
    <div>
      <div className="fixed w-full">
        <LandingNavbar web3Handler={web3Handler} />
      </div>
      <div class="flex items-center justify-center">
        <div class="flex flex-col items-center justify-center bg-white m-border w-96 gap-8 p-8">
          <div class="flex flex-shrink-0 items-center justify-center overflow-hidden">
            <img
              src="/img/monster.png"
              // style="height: 75px; width: 75px;"
              style={{ height: "75px", width: "75px" }}
            />
          </div>
          <input
            class="input m-border w-full focus:outline-none"
            type="text"
            placeholder="Enter your name"
            maxlength="20"
            value=""
          />
          <div class="flex flex-col w-full">
            <button class="m-btn m-btn-primary mb-4">Play</button>
            <button class="m-btn m-btn-secondary">Create Private Room</button>
          </div>
          <div class="flex items-center justify-center opacity-50">
            <span class="text-xs mr-2">powered by</span>
            <img class="h-4 w-auto" src="/img/polygon.svg" alt="Polygon" />
          </div>
        </div>
      </div>
      <div>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://placeimg.com/260/400/arch"
              class="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 class="text-5xl font-bold">Box Office News!</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
    </div>
  );
};

export default Landing;
