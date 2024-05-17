
const Navbar = () => {
  return (
    <nav>
      <div className="bg-black text-white">
        <div className="w-11/12 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Babur Hut</h1>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow w-96" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
