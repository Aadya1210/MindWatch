function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">

      <h1 className="text-3xl font-bold text-indigo-600">
        🧠 MindWatch
      </h1>

      <div className="flex gap-8 text-gray-700 font-medium">

        <a href="#">Features</a>

        <a href="#">About</a>

        <a href="#">Contact</a>

      </div>

      <div className="flex gap-4">

        <button className="px-5 py-2 rounded-lg hover:bg-gray-100 transition">
          Login
        </button>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
          Sign Up
        </button>

      </div>

    </nav>
  );
}

export default Navbar;