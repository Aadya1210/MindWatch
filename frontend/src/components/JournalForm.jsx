function JournalForm() {
  return (
    <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-12">

      <h2 className="text-3xl font-bold mb-6">
        How are you feeling today?
      </h2>

      <textarea
        placeholder="Write your thoughts here..."
        className="w-full h-48 border rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="mt-4 flex justify-between items-center">

        <p className="text-gray-500">
          Characters: 0 / 500
        </p>

        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
          Save Entry
        </button>

      </div>

    </section>
  );
}

export default JournalForm;