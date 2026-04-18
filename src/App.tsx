import "./index.css";
import logo from "./img/logo.png";

export default function App() {
  return (
    <div className="min-h-[100dvh] w-full bg-white flex flex-col items-center justify-between">
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-xl px-6 py-16 mx-auto text-center gap-12">
        <div className="opacity: 1; transform: none;">
          <img
            className="w-72 md:w-96 lg:w-[480px] h-auto object-contain"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="">
          <h2 className="text-4xl font-bold "> Join The Team</h2>
          <p className="text-sm mt-4">
            {" "}
            Stay up to date on when my new website launch, get exclusive music,
            stage play dates, TV appearances, and much more.
          </p>
        </div>
        <div className="opacity: 1; transform: none; w-full max-w-sm mx-auto">
          <form className="flex flex-col gap-3">
            <div className="space-y-2 relative">
              <input
                type="text"
                className="flex py-1 shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full h-12 px-5 rounded-full border border-black/20 bg-white text-black placeholder:text-black/40 text-sm focus-visible:ring-1 focus-visible:ring-red-600 focus-visible:border-red-600 transition-all duration-200"
                placeholder="Enter your email"
              />
              <div className="space-y-2 relative"></div>
            </div>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 border border-primary-border min-h-9 px-4 py-2 h-12 rounded-full bg-black text-white font-medium tracking-wider text-sm hover:bg-red-600 transition-colors duration-300 mt-1">
              Join the List
            </button>
          </form>
        </div>
      </main>
      <footer className="w-full py-10 flex justify-center items-center">
        <div className="flex items-center gap-8">
          <a
            href="https://instagram.com/official.CallMeJasmine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-black hover:text-red-600 transition-colors duration-300 hover:-translate-y-1 transform p-1"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              class="w-6 h-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>

          <a
            href="https://tiktok.com/@official.CallMeJasmine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-black hover:text-red-600 transition-colors duration-300 hover:-translate-y-1 transform p-1"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              class="w-6 h-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
            </svg>
          </a>
          <a
            href="https://youtube.com/@official.CallMeJasmine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-black hover:text-red-600 transition-colors duration-300 hover:-translate-y-1 transform p-1"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              class="w-6 h-6"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
