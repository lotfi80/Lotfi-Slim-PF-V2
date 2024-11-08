import { LOTFI_CONTENT } from "../constants";
import profilePic from "../assets/assets/LotfiSlimProfile.png";

const Lotfi = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-10" >
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">
              Lotfi Slim
            </h1>
            <span
              className="bg-gradient-to-r from-pink-300 via-slate-500
                to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              full stack developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {LOTFI_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10">
            <div className="flex justify-center rounded  ">
                  <img className="rounded-2xl"  src={profilePic} alt="Lotfi Slim" />

            </div>

        </div>
      </div>
    </div>
  );
};

export default Lotfi;
