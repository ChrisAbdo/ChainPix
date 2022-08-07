import LandingNavbar from "../components/LandingNavbar";
import ethpixel from "../assets/ethereumgif.gif";
import Image from "next/image";
import styles from "../styles/Landing.module.css";

const Landing = ({ web3Handler }) => {
  return (
    <>
      <div className={styles.landingText}>
        <div>
          <LandingNavbar web3Handler={web3Handler} />
        </div>

        <section class="mt-6 ">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class=" text-[#edf6ff] max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                Place a tile. Draw with others. Mint your NFT.
              </h1>
              <p class="max-w-2xl mb-6 font-light text-2xl text-[#dbecff]">
                From checkout to global sales tax compliance, companies around
                the world use Flowbite to simplify their payment stack.
              </p>
              <button
                onClick={web3Handler}
                class="btn btn-info  active:btn btn-outline mr-4"
              >
                Get started (Connect Wallet)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="ml-2 bi bi-wallet"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />{" "}
                </svg>
              </button>
              <a href="/about" class="btn btn-outline">
                Learn more
              </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image src={ethpixel} alt="mockup" />
            </div>
          </div>
        </section>

        <section className="mb-12 mr-4">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <div class="text-[#edf6ff] max-w-2xl  text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                <h1>Latest Creations</h1>
              </div>
            </div>
            <div class="  lg:col-span-5 lg:flex space-x-48">
              <a
                className="flex items-center justify-center gap-2 hover:text-white transition-all duration-500"
                href=""
                rel="noopener noreferrer"
              >
                <img
                  src="https://logosarchive.com/wp-content/uploads/2022/02/OpenSea-icon.svg"
                  alt="Vercel Logo"
                  width={18}
                  height={16}
                />
                OpenSea
              </a>
              <a
                className="flex items-center justify-center gap-2 hover:text-white transition-all duration-500"
                href=""
                rel="noopener noreferrer"
              >
                <img
                  className="bg-yellow-500"
                  src="/mint.svg"
                  alt="Vercel Logo"
                  width={18}
                  height={16}
                />
                Gas-Free Mint
              </a>
            </div>
          </div>

          <div class="ml-4 grid grid-cols-4 gap-4">
            <a
              href=""
              class="hover:scale-105 hover:border-[#3ABFF8] transition-all duration-500 block overflow-hidden rounded-2xl border"
            >
              <img
                class="object-cover w-full h-56"
                src="https://avatars.dicebear.com/api/pixel-art/:2342asdfasdf23234269.svg"
                alt=""
              />

              <div class="p-4 ">
                <p class="text-xs border-b">uploaded by: 0x1Fd...C3Cb</p>

                <h5 class="text-sm text-white">
                  How to position your furniture for positivity
                </h5>

                <p class="mt-1 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum nobis aliquid accusamus? Sint, sequi voluptas.
                </p>
              </div>
            </a>
            <a
              href=""
              class="hover:scale-105 hover:border-[#3ABFF8] transition-all duration-500 block overflow-hidden rounded-2xl border"
            >
              <img
                class="object-cover w-full h-56"
                src="https://avatars.dicebear.com/api/pixel-art/:920394829309.svg"
                alt=""
              />

              <div class="p-4 ">
                <p class="text-xs border-b">uploaded by: 0x746...19F8</p>

                <h5 class="text-sm text-white">
                  How to position your furniture for positivity
                </h5>

                <p class="mt-1 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum nobis aliquid accusamus? Sint, sequi voluptas.
                </p>
              </div>
            </a>
            <a
              href=""
              class="hover:scale-105 hover:border-[#3ABFF8] transition-all duration-500 block overflow-hidden rounded-2xl border"
            >
              <img
                class="object-cover w-full h-56"
                src="https://avatars.dicebear.com/api/pixel-art/:920394asdfas23423423414234532ffs3gqtb829309.svg"
                alt=""
              />

              <div class="p-4 ">
                <p class="text-xs border-b">uploaded by: 0x944...3420</p>

                <h5 class="text-sm text-white">
                  How to position your furniture for positivity
                </h5>

                <p class="mt-1 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum nobis aliquid accusamus? Sint, sequi voluptas.
                </p>
              </div>
            </a>
            <a
              href=""
              class="hover:scale-105 hover:border-[#3ABFF8] transition-all duration-500 block overflow-hidden rounded-2xl border"
            >
              <img
                class="object-cover w-full h-56"
                src="https://avatars.dicebear.com/api/pixel-art/:92039482asfasfasfasfasfasfasfdsfadrt3q45weqrvw9309.svg"
                alt=""
              />

              <div class="p-4 ">
                <p class="text-xs border-b">uploaded by: 0xB7B...D7Ce</p>

                <h5 class="text-sm text-white">
                  How to position your furniture for positivity
                </h5>

                <p class="mt-1 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum nobis aliquid accusamus? Sint, sequi voluptas.
                </p>
              </div>
            </a>
            <a
              href=""
              class="hover:scale-105 hover:border-[#3ABFF8] transition-all duration-500 block overflow-hidden rounded-2xl border"
            >
              <img
                class="object-cover w-full h-56"
                src="https://avatars.dicebear.com/api/pixel-art/:92039482asffgsdagasgasfasfasfasfasfasfdsfadrt3q45weqrvw9309.svg"
                alt=""
              />

              <div class="p-4 ">
                <p class="text-xs border-b">uploaded by: 0xB7B...D7Ce</p>

                <h5 class="text-sm text-white">
                  How to position your furniture for positivity
                </h5>

                <p class="mt-1 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum nobis aliquid accusamus? Sint, sequi voluptas.
                </p>
              </div>
            </a>
            <a
              href=""
              class="hover:scale-105 hover:border-[#3ABFF8] transition-all duration-500 block overflow-hidden rounded-2xl border"
            >
              <img
                class="object-cover w-full h-56"
                src="https://avatars.dicebear.com/api/pixel-art/:92039482asffdsfdsafdsafasfasfasfasfasfasfdsfadrt3q45weqrvw9309.svg"
                alt=""
              />

              <div class="p-4 ">
                <p class="text-xs border-b">uploaded by: 0xB7B...D7Ce</p>

                <h5 class="text-sm text-white">
                  How to position your furniture for positivity
                </h5>

                <p class="mt-1 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum nobis aliquid accusamus? Sint, sequi voluptas.
                </p>
              </div>
            </a>
            <a
              href=""
              class="hover:scale-105 hover:border-[#3ABFF8] transition-all duration-500 block overflow-hidden rounded-2xl border"
            >
              <img
                class="object-cover w-full h-56"
                src="https://avatars.dicebear.com/api/pixel-art/:92039482asdfasdfasfasfasfasfasfasfasfdsfadrt3q45weqrvw9309.svg"
                alt=""
              />

              <div class="p-4 ">
                <p class="text-xs border-b">uploaded by: 0xB7B...D7Ce</p>

                <h5 class="text-sm text-white">
                  How to position your furniture for positivity
                </h5>

                <p class="mt-1 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum nobis aliquid accusamus? Sint, sequi voluptas.
                </p>
              </div>
            </a>
            <a
              href=""
              class="hover:scale-105 hover:border-[#3ABFF8] transition-all duration-500 block overflow-hidden rounded-2xl border"
            >
              <img
                class="object-cover w-full h-56"
                src="https://avatars.dicebear.com/api/pixel-art/:92039482afdsasfasfasfasfasfasfasfdsfadrt3q45weqrvw9309.svg"
                alt=""
              />

              <div class="p-4 ">
                <p class="text-xs border-b">uploaded by: 0xB7B...D7Ce</p>

                <h5 class="text-sm text-white">
                  How to position your furniture for positivity
                </h5>

                <p class="mt-1 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum nobis aliquid accusamus? Sint, sequi voluptas.
                </p>
              </div>
            </a>
          </div>
        </section>

        <footer className="flex h-48 w-full items-center justify-center space-x-48">
          <a
            className="flex items-center justify-center gap-2 hover:text-white transition-all duration-500"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png?20211104142029"
              alt="Vercel Logo"
              width={18}
              height={16}
            />
            Twitter
          </a>
          <a
            className="flex items-center justify-center gap-2 hover:text-white transition-all duration-500"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.svgrepo.com/show/353655/discord-icon.svg"
              alt="Vercel Logo"
              width={18}
              height={16}
            />
            Discord{" "}
          </a>
        </footer>
      </div>
    </>
  );
};

export default Landing;
