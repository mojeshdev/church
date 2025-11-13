import React, { useState } from "react";

// AboutComponent.jsx
// Bilingual (Telugu / English) About component with paragraph breaks
// Each paragraph renders as a separate <p> with spacing (one-line gap) after it.

const teluguParagraphs = [
  `దేవుని నామములో వందనాలు.. నా పేరు ప్రసంగి కుమార్ వడ్లమూడి. నేను మా తల్లీ తండ్రులు వడ్లమూడి యూదా, శారా లకు ఆరవ సంతానం. మా తల్లిదండ్రులు పెనమలూరు మండలం గంగూరు గ్రామంలో జీవిస్తూ దేవుని సేవకుడు గడ్డం సత్యం గారి వద్ద బాప్తీస్మం తీసుకున్నారు. సంఘంలో విశ్వాసంతో ఉంటూ వ్యవసాయం ద్వారా జీవించేవారు.`,

  `దేవుడు మా నాన్నగారితో దర్శనం ద్వారా మాట్లాడి గన్నవరం మండలం చింతగుంట గ్రామానికి సేవ చేయడానికి పిలిచారు. ఆయన ఆ పిలుపుకు లోబడి అక్కడ సేవ చేస్తూ ఆరుగురు సంతానాలను జాగ్రత్తగా పెంచారు.`,

  `ఆర్థిక పరిస్థితుల దృష్ట్యా మా కుటుంబంలో మొదటి ముగ్గురు—రెండు అన్నలు మరియు ఒక అక్క—వారిని చదవించడం కాని సాధ్యమైంది. నాకు చదవడానికి తీవ్రమైన ఆసక్తి ఉండటనే కారణంగా మొదటికి ఇంటి దగ్గర ఉన్న ప్రభుత్వ పాఠశాలలో 5వ తరగతి వరకు చదివాను. తరువాత గన్నవరం ప్రభుత్వ పాఠశాలలో అడ్మిషన్ తీసుకొని 10వ తరగతి వరకు హాస్టల్‌లో చదివాను. 10వ తరగతిలో 495/600 మార్కులు రావడం వలన రెసిడెన్షియల్ కాలేజ్‌లో ఇంటర్మీడియట్ చదవడానికి దేవుడు కృప చూపించారు.`,

  `తరువాత ఎంసెట్‌లో మంచి ర్యాంక్ రావడంతో నాకు ప్రతిష్టాత్మకమైన JNTU, అనంతపురం లో ఇంజనీరింగ్ చదవడానికి అవకాశమాగింది. కళాశాల మొదటి సంవత్సరంలో స్నేహితులతో అల్లరి చేసే సమయం కూడా వచ్చింది; అయినప్పటికీ పాస్టర్ కుటుంబంలో పెరిగినందున ఆదివారం ప్రార్థనను ఎప్పుడూ వదిలి చెప్పను.`,

  `2009 ఆగస్టు 15 న ఒక యవ్వനస్తుల ప్రార్థనా సమావేశంలో రేవ్. తిమోతి రావు గారి వాక్యం నా హృదయానికి తాకింది. ఆ రోజున నేను బాప్తీస్మం తీసుకుని జీవితాన్ని క్రీస్తులో అంకితం చేసుకునేందుకు నిర్ణయించుకున్నాను. అప్పటి నుంచే దైవభయం ద్వారా నేర్పుగా చదివుతూ స్టూడెంట్స్ చర్చి ద్వారా సేవ చేయడం ప్రారంభించాను.`,

  `2012 డిసెంబరులో "TECHNO CHRISTMAS" అనే కార్యక్రమం నిర్వహించి సువార్త ప్రబోదించడానికి మరియు ఆ సంవత్సరం పాటు స్టూడెంట్ సంఘం నడిపే అవకాశం కలిగింది.`,

  `విద్య పూర్తి చేసిన తర్వాత నేను వైజాగ్ స్టీల్ ప్లాంట్‌లో గల కాంట్రాక్ట్ ఉద్యోగంలో పని చేసినాను. ఆరోగ్యం సరిగా లేకపోవడంతో ఆ ఉద్యోగాన్ని వదిలి, సుమారు ఆరు సంవత్సరాలు లెక్చరర్‌గా పనిచేశాను.`,

  `2019 ఫిబ్రవరి 13 ఉదయం మా ఇంటి నుండి ఫోన్ వచ్చి మా నాన్నగారికి ప్రేరణ సమయంలో హై బీపీ వలన బ్రెయిన్ స్ట్రోక్ వచ్చినట్లు తెలియజేశారు. విజయవాడ కామినేని హాస్పిటల్‌లో చేరించారు. అటవైపు 2019 ఫిబ్రవరి 14న మా తండ్రి మరణించారు. చరిత్రలో, ఆయన శవం వదిలి ఉంటున్న సమయంలో దేవుడు నాకు స్పష్టం గా పలసినట్లు సైన్యం జరుగుతుండగా ఆయన పరిచర్య చేయమని పిలిచారు.`,

  `ఆ పిలుపును అంగీకరించి ముందుగా ఉద్యోగం కొనసాగిస్తూ మూడు నెలలపాటు పరిచర్య ప్రారంభించాను. కానీ కుటుంబ బాధ్యతలు మరియు సంఘ బాధ్యతలతో-two-పనులను సమన్వయించుకోవడంలో సమస్య ఎదురై ఒక రాత్రి ప్రార్థనలో నేను దేవునికి ఇది సాధ్యమా అని అడిగాను. ఆప్పుడు యెషయా 66:13 ద్వారా దేవుడు నన్ను బలపరిచాడు. అప్పటి నుంచి నేను ఉద్యోగాన్ని పూర్తిగా రిజైన్ చేసి పరిపాలనా సేవలో కేంద్రీకృతమయ్యాను.`,

  `పరిచర్యలో మొదటి సంవత్సరంలో ఇద్దరు బాప్తీస్మం తీసుకున్నారు. తర్వాతి సంవత్సరాలలో నిత్యం ప్రార్థనతో ఎంతో మంది ప్రభువు వలన ప్రతి సంవత్సరం సుమారు 7 మందికి బాప్తీస్మం జరుగుతూ సంఘం వృద్ధి చెందింది.`,

  `దేవుడు నాకు నూతన ఆలోచనలు ఇచ్చి సండే స్కూల్ ఈవెంట్స్, యువతా మీటింగ్స్ వంటి కార్యక్రమాలు ఏర్పాటు చేయించడానికి కృప చూపించాడు. 2023లో నేను వివాహముచేసి నా భార్య ఉషతో కలిసి ఈవెంట్స్ మరియు సువార్త పరిచర్యలో కలిసి సేవ చేస్తున్నాము. దయచేసి మా కొరకు మరియు మా సంఘం కొరకు ప్రార్థన చేయండి.`
];

const englishParagraphs = [
  `Greetings in the Name of the Lord! My name is Preacher Kumar Vadlamudi, and I am the sixth child of my parents, Mr. Vadlamudi Judah and Mrs. Sarah. They lived in Ganguru village, Penamaluru Mandal, and were faithful believers in Christ. After receiving baptism under the ministry of God’s servant Rev. Gaddam Satyam, they remained steadfast in fellowship while supporting their family through farming.`,

  `God spoke to my father through a vision and called him to serve in Chintagunta village, Gannavaram Mandal. He obeyed God’s call and faithfully ministered there while raising all six of us with great care and dedication.`,

  `Due to financial hardship, my parents could not educate my two elder brothers and one sister. However, I had a deep passion for learning. I studied up to fifth grade at the nearby government school and then joined the Government School in Gannavaram, where I completed tenth grade while living in the hostel. By God’s grace, I scored 495 out of 600 in my 10th-class examinations, which made it possible for me to pursue Intermediate studies at a Residential College.`,

  `Subsequently I obtained a good rank in the EAMCET examination, and by God’s favor I was admitted to study Engineering at the esteemed JNTU, Anantapur. During my first year in college I, like many youths, engaged in youthful pastimes; nevertheless, being raised in a pastor’s family I never missed Sunday worship.`,

  `On August 15, 2009, during a youth service, Rev. Timothy Rao spoke a message that deeply touched my heart. That day I decided to dedicate my life to Christ and received baptism. From then on I grew in the fear of God, continued my studies conscientiously, and served faithfully in the student-led church on campus.`,

  `In December 2012 I organized an event called "TECHNO CHRISTMAS," which gave me the opportunity to proclaim the Gospel and lead the student fellowship throughout that year.`,

  `After completing my studies I worked as a contract employee at the Visakhapatnam Steel Plant. Due to health issues I left that position and later served as a lecturer for approximately six years.`,

  `While working in Kodad, on the morning of February 13, 2019, at about 5:00 AM, I received a call informing me that my father had suffered a brain stroke caused by high blood pressure during morning prayer. He was admitted to Kamineni Hospital, Vijayawada, and on February 14, 2019, he passed away. At his funeral, God spoke to me clearly, calling me to continue his ministry.`,

  `I heeded that call and for three months balanced work with ministry, but I found the dual burden of family and church responsibilities increasingly heavy. In prayer I asked God for strength, and through Isaiah 66:13 He strengthened me. Consequently, I resigned from my job and devoted myself to full-time ministry.`,

  `In the first year of ministry two people were baptized. Through earnest prayer and God’s grace, the church has grown steadily and on average around seven people are baptized each year.`,

  `God gave me fresh vision to start Sunday School events and youth meetings, by which many believers have been strengthened. In 2023 I was married, and since then my wife Usha and I have been serving together in gospel ministry. Please pray for us and for our church.`
];

export default function About() {
  const [language, setLanguage] = useState("telugu");

  const paragraphs = language === "telugu" ? teluguParagraphs : englishParagraphs;

  return (
    <section className="p-8 mt-20 flex flex-col items-center">
      {/* Language Switch Buttons */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        <button
          onClick={() => setLanguage("telugu")}
          className={`px-4 py-2 rounded-lg font-body font-semibold transition-all ${
            language === "telugu"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-pressed={language === "telugu"}
        >
          తెలుగు
        </button>

        <button
          onClick={() => setLanguage("english")}
          className={`px-4 py-2 rounded-lg font-body font-semibold transition-all ${
            language === "english"
              ? "bg-yellow-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          aria-pressed={language === "english"}
        >
          English
        </button>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-800 font-heading mb-4">
        {language === "telugu" ? "మా సంఘం గురించి" : "About Our Church"}
      </h2>

      {/* Content: each paragraph is a separate <p> with a one-line gap (mb-4) after it */}
      <div className="max-w-6xl text-left">
        {paragraphs.map((para, idx) => (
          <p
            key={idx}
            className="text-gray-700 leading-relaxed mb-4 font-body"
            style={{ whiteSpace: "pre-line" }}
          >
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
