import { useState } from "react";

function JournalForm() {
  // State
  const [journal, setJournal] = useState("");
  const [mood, setMood] = useState("");

  // Mood list
  const moods = ["😊", "😄", "😐", "😔", "😡"];

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

  console.log("New Journal Entry:");
  console.log(newEntry);

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

      </div>

    </section>
  );
}

export default JournalForm;