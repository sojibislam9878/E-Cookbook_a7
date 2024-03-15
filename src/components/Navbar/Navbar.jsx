const Navbar = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="navbar bg-base-100 justify-center">
        <div className="flex-1">
          <a className="btn btn-ghost text-4xl font-bold">E-Cookbook</a>
          <div className="hidden lg:flex md:justify-center lg:gap-16 gap-6 w-2/3 mx-auto opacity-70">
            <a href="">Home</a>
            <a href="">Recipes</a>
            <a href="">About</a>
            <a href="">Search</a>
          </div>
        </div>
        <div className="md:flex gap-2 hidden">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto outline-none rounded-full bg-slate-200"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full bg-green-500">
                <span className="material-symbols-outlined text-4xl">person</span>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
