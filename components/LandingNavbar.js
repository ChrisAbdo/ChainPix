import Image from "next/image";
import logo from "../assets/navbar.png";
import styles from "../styles/Navbar.module.css";

const LandingNavbar = ({ web3Handler, account }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Comforter&family=Poppins:wght@300&family=Supermercado+One&display=swap"
        rel="stylesheet"
      />

      <div className={styles.navbarText}>
        <div class="navbar bg-base-100">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            </div>

            <a class="btn btn-ghost normal-case text-xl">
              <Image src={logo} width={45} height={45} />
              pixelchain
            </a>
          </div>
          <div class="navbar-center hidden lg:flex"></div>

          {account ? (
            <div class="navbar-end">
              <button className="btn">
                {account.slice(0, 5) + "..." + account.slice(38, 42)}
              </button>
            </div>
          ) : (
            <div class="navbar-end">
              <button
                onClick={web3Handler}
                className="btn btn-info  active:btn btn-outline"
              >
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingNavbar;
