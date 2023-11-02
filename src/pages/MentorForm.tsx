function MentorForm(){

return(
<div className="w-full h-screen bg-slate-900 pt-28">
<div className="w-full md:w-96 md:max-w-full mx-auto rounded-md">
  <div className="p-10 border border-slate-700 sm:rounded-md">
    <form>
      <h1 className="text-center text-3xl font-poppins italic text-white ">Mentor Form</h1>
      <label className="block mb-6">
          <span className="text-white">Full Name</span>
          <input
            name="name"
            type="name"
            className="block w-full mt-2 px-2 py-1 bg-gray-800 text-white border-slate-700 rounded-md shadow-sm focus:border-indigo-700 focus:ring focus:ring-indigo-700 focus:ring-opacity-50"
            placeholder="Jane Doe"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="text-white">Email address</span>
          <input
            name="email"
            type="email"
            className="block w-full mt-2 px-2 py-1 bg-gray-800 text-white border-slate-700 rounded-md shadow-sm focus:border-indigo-700 focus:ring focus:ring-indigo-700 focus:ring-opacity-50"
            placeholder="jane.doe@example.com"
            required
          />
        </label>
        <div className="mb-6 text-center">
          <button
            type="submit"
            className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
          >
            Submit
          </button>
        </div>
    </form>
  </div>
</div>
</div>
);
}

export default MentorForm;