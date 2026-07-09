import { useState, useEffect } from "react";

function JournalForm() {
  // State
  const [journal, setJournal] = useState("");
  const [mood, setMood] = useState("");
  const [entries, setEntries] = useState([]);

  // Mood list
  const moods = ["😊", "😄", "😐", "😔", "😡"];

  useEffect(() => {
    fetch("http://localhost:5000/journal")
      .then((response) => response.json())
      .then((data) => setEntries(data));
  }, []);

  const handleSave = () => {
  if (journal.trim() === "") {
    alert("Please write something in your journal.");
    return;
  }

  if (mood === "") {
    alert("Please select a mood.");
    return;
  }

  const newEntry = {
    id: Date.now(),
    text: journal,
    mood: mood,
    createdAt: new Date().toLocaleString(),
  };

  fetch("http://localhost:5000/journal", {

    method: "POST",

    headers: {

        "Content-Type": "application/json",

    },

    body: JSON.stringify(newEntry),

})
.then((response) => response.json())
.then((data) => {

    console.log(data);

});

  alert("Journal entry saved!");

  // Clear the form
  setJournal("");
  setMood("");
};

  return (
    <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-12">

      <h2 className="text-3xl font-bold mb-6">
        How are you feeling today?
      </h2>

      <textarea
        value={journal}
        onChange={(e) => setJournal(e.target.value)}
        maxLength={500}
        placeholder="Write your thoughts here..."
        className="w-full h-48 border rounded-xl p-4 resize-none outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Mood Selection */}
      <div className="mt-6">
        <h3 className="font-semibold mb-3">
          Select Your Mood
        </h3>

        <div className="flex gap-4">
          {moods.map((emoji) => (
            <button
              key={emoji}
              onClick={() => setMood(emoji)}
              className={`text-4xl p-2 rounded-full transition duration-200 ${
                mood === emoji
                  ? "bg-indigo-600 text-white scale-110"
                  : "hover:bg-gray-100"
              }`}
            >
              {emoji}
            </button>
          ))}
        </div>

        <p className="mt-4 text-lg">
          Current Mood: {mood || "None"}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 flex justify-between items-center">

        <p className="text-gray-500">
          Characters: {journal.length} / 500
        </p>

        <button
          onClick={handleSave}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Save Entry
        </button>

        <h2 className="text-2xl font-bold mt-12 mb-4">
            Previous Entries
        </h2>

        <pre>
        {JSON.stringify(entries, null, 2)}
        </pre>

      </div>

    </section>
  );
}

export default JournalForm;