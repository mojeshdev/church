import React, { useState } from "react";

const About = () => {
  const [language, setLanguage] = useState("telugu"); // default Telugu

  return (
    <div className="p-8 text-left mt-20 flex flex-col items-center  space-y-6">
      {/* Language Switch Buttons */}
      <div className="flex items-center justify-center space-x-4 mb-4">
        <button
          onClick={() => setLanguage("telugu")}
          className={`px-4 py-2 rounded-lg font-body font-semibold ${
            language === "telugu"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          తెలుగు
        </button>
        <button
          onClick={() => setLanguage("english")}
          className={`px-4 py-2 rounded-lg font-body font-semibold ${
            language === "english"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          English
        </button>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-800 font-heading mb-2">
        {language === "telugu" ? "మా సంఘం గురించి" : "About Our Church"}
      </h2>

      {/* Content */}
      <p className="max-w-3xl text-gray-700 leading-relaxed font-body">
        {language === "telugu" ? (
          <>
            యెరూషలేము శాలోం మినిస్ట్రీస్ అనేది దేవుని ప్రేమ, విశ్వాసం, మరియు ఆశను
            వ్యాప్తి చేయడానికి అంకితమైన విశ్వాసుల సంఘం. మేము ప్రతీ వారము ప్రార్థన
            సమావేశాలు, యువతా కార్యక్రమాలు మరియు సేవా కార్యక్రమాలు నిర్వహిస్తాము,
            ప్రజలు దేవునికి దగ్గరవ్వడానికి సహాయం చేస్తాము.
          </>
        ) : (
          <>
            YSM Church is a community of believers committed to spreading love,
            faith, and hope. We conduct weekly services, community outreach, and
            youth programs to bring people closer to God.
          </>
        )}
      </p>
    </div>
  );
};

export default About;
