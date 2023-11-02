function MentorForm(){

return(
<div className="w-full h-screen bg-slate-900 pt-28">
<div className="w-full md:w-96 md:max-w-full mx-auto rounded-md">
  <div className="p-10 border border-slate-700 sm:rounded-md">
    <form method="POST" action="https://herotofu.com/start">
    <label className="block mb-6">
        <span className="text-white">Full Name</span>
        <input
          name="name"
          type="name"
          className="block w-full mt-2 px-2 py-1 bg-gray-800 text-white border-slate-700 rounded-md shadow-sm focus:border-indigo-700 focus:ring focus:ring-indigo-700 focus:ring-opacity-50"
          placeholder="Joe Bloggs"
          required
        />
      </label>
      <label className="block mb-6">
        <span className="text-white">Email address</span>
        <input
          name="email"
          type="email"
          className="block w-full mt-2 px-2 py-1 bg-gray-800 text-white border-slate-700 rounded-md shadow-sm focus:border-indigo-700 focus:ring focus:ring-indigo-700 focus:ring-opacity-50"
          placeholder="joe.bloggs@example.com"
          required
        />
      </label>
      <label className="block mb-6">
        <span className="text-white">Institution</span>
        <input
          name="institution"
          type="institution"
          className="block w-full mt-2 px-2 py-1 bg-gray-800 text-white border-slate-700 rounded-md shadow-sm"
          placeholder=""
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
      <div>
        <div className="mt-2 text-gray-700 text-center text-xs">
            Made with 
          <a href="https://beta.kossiitkgp.org" className="hover:underline" target="_blank">KOSS</a>
        </div>
      </div>
    </form>
  </div>
</div>
</div>
);
}

export default MentorForm;