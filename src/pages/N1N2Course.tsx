import { useState } from "react";
import { Navbar } from "@/components/Navbar";

// Only the four requested quiz questions:
const quiz = [
  {
    question: "Correctly divide the following long-kanji word into chunks: 警察署",
    answers: ["警・察署", "警察・署", "警・察・署"],
    correct: "警察・署",
  },
  {
    question: "What does 警察署 mean?",
    answers: ["Police Officer", "Police Station", "Chief of a Police Station"],
    correct: "Police Station",
  },
  {
    question: "Correctly divide this long-kanji word into chunks: 文章理解",
    answers: ["文章・理解", "文・章・理解", "文章理・解"],
    correct: "文章・理解",
  },
  {
    question: "What does 文章理解 mean?",
    answers: [
      'Text comprehension ("comprehension of the text")',
      'Sentence & Chapter comprehension ("chapter comprehension and the text")',
      'Comprehension of sentence logic ("logic comprehension of the sentence)'
    ],
    correct: 'Text comprehension ("comprehension of the text")',
  },
];

const courseSteps = [
  {
    type: "video" as const,
    title: "Start Now for FREE",
    video: "https://youtu.be/BlFSRWdZgb8?si=9R3thozaCDkMF8Zf",
  },
  {
    type: "video" as const,
    title: "1.1 Noun Suffixes",
    video: "https://youtu.be/BlFSRWdZgb8?si=70BHcwoV6HTMSNF_",
  },
  {
    type: "quiz" as const,
    title: "Quiz: Reading Comprehension",
    quiz,
  },
  {
    type: "video" as const,
    title: "Bonus 1/2: A Real JLPT N2 Text",
    video: "https://youtu.be/pgfeChjsuls",
  },
  {
    type: "video" as const,
    title: "Bonus 2/2: A Real JLPT N1 Text",
    video: "https://youtu.be/F0ctfIuXKHQ",
  },
  {
    type: "cta" as const,
  },
];

function getYouTubeEmbed(url: string) {
  if (url.includes("watch?v=")) {
    let id = new URL(url).searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }
  if (url.includes("youtu.be/")) {
    let id = url.split("youtu.be/")[1]?.split("?")[0];
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }
  return null;
}

export default function N1N2Course() {
  const [step, setStep] = useState(0);
  const [quizState, setQuizState] = useState<(string | null)[]>(Array(quiz.length).fill(null));
  const currentStep = courseSteps[step];

  // For embedding Zcal widget
  // eslint-disable-next-line
  // @ts-ignore
  if (typeof window !== "undefined" && step === 5 && !document.getElementById("zcal-embed-script")) {
    const script = document.createElement("script");
    script.id = "zcal-embed-script";
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }

  const handleQuiz = (qIdx: number, ans: string) => {
    setQuizState(state => state.map((v, i) => i === qIdx ? ans : v));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-lightblue via-white to-brand-purple/10 pt-0 pb-16">
      <Navbar />
      <div className="container-custom pt-32">
        {/* Centered Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center w-full">
          N1-N2 Reading Comprehension Course
        </h1>
        {/* Content grid flipped: stepper on left, boxes on right */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Stepper left, boxes right (swapped) */}
          <div className="flex-1 max-w-2xl mx-auto rounded-2xl shadow-lg bg-white/95 px-4 py-8 flex flex-col">
            {courseSteps[step].type === "video" && (
              <>
                <div className="font-bold text-2xl text-center mb-4">{courseSteps[step].title}</div>
                <div className="aspect-video rounded overflow-hidden mb-4 bg-gray-100 shadow flex items-center justify-center">
                  <iframe
                    src={getYouTubeEmbed(courseSteps[step].video) || ""}
                    className="w-full h-full border-none"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    loading="lazy"
                    title={courseSteps[step].title}
                  />
                </div>
              </>
            )}
            {courseSteps[step].type === "quiz" && (
              <>
                <div className="font-semibold mb-3">{courseSteps[step].title}</div>
                <div>
                  {courseSteps[step].quiz.map((q, qIdx) => (
                    <div key={qIdx} className="mb-4">
                      <div className="font-semibold mb-2">{q.question}</div>
                      <div className="flex flex-col gap-2">
                        {q.answers.map(ans => (
                          <button
                            className={`rounded-lg py-2 px-3 border ${
                              quizState[qIdx] === ans
                                ? "bg-brand-purple text-white shadow"
                                : "bg-gray-100"
                            }`}
                            onClick={() => handleQuiz(qIdx, ans)}
                            key={ans}
                          >
                            {ans}
                          </button>
                        ))}
                      </div>
                      {quizState[qIdx] &&
                        (quizState[qIdx] === q.correct ? (
                          <div className="text-green-600 text-sm mt-1">Correct!</div>
                        ) : (
                          <div className="text-red-600 text-sm mt-1">Incorrect</div>
                        ))}
                    </div>
                  ))}
                </div>
              </>
            )}
            {courseSteps[step].type === "cta" && (
              <div className="bg-brand-blue/10 p-6 rounded-xl max-w-2xl mx-auto my-8 text-center shadow">
                <div className="mb-3 text-lg font-semibold">
                  Want to keep learning?
                </div>
                <div>
                  Book your live class with Carlos and get access to the remaining 7 videos and quizzes.<br />
                  <span className="font-medium text-brand-purple">Only €65 for a limited time.</span>
                </div>
                <div className="mt-4">
                  {/* Embedded Zcal Widget */}
                  <div className="zcal-inline-widget" data-style="minimal">
                    <a href="https://zcal.co/carloscoordinator/liven1n2">
                      N1-N2 Course - LIVE class - Schedule a meeting
                    </a>
                  </div>
                </div>
              </div>
            )}
            {/* Navigation Arrows */}
            <div className="flex justify-between mt-6">
              <button
                className="btn-outline"
                onClick={() => setStep(s => Math.max(s - 1, 0))}
                disabled={step === 0}
                aria-label="Previous step"
              >
                &larr; Previous
              </button>
              <button
                className="btn-outline ml-4"
                onClick={() => setStep(s => Math.min(s + 1, courseSteps.length - 1))}
                disabled={step === courseSteps.length - 1}
                aria-label="Next step"
              >
                Next &rarr;
              </button>
            </div>
          </div>
          {/* Info boxes right */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="bg-white/90 rounded-2xl shadow-xl p-8 text-lg">
              <span className="font-semibold block mb-2">Course overview</span>
              <div>
                This 12-hour course caters specially to N1 and N2 takers.<br />
                You'll be going over the main elements that hinder comprehension of advanced-level text.<br />
                Each section of the course is accompanied by a video and short quiz.<br />
                It includes a LIVE class with Carlos to assess your language learning goals.
              </div>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-xl p-8 text-lg">
              <span className="font-semibold block mb-2">What to expect?</span>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Learn exactly what it takes to excel in the hardest part of the JLPT: the reading comprehension (読解) part
                </li>
                <li>
                  Develop the ability to effectively identify and use suffixes, the passive voice, subordinate clauses, formal adverbs and formal connectors, including real examples, long texts, exercises and quizzes
                </li>
                <li>
                  Work through the course alongside a Japanese teacher
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
