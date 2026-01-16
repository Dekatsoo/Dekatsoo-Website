import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Trophy,
  Cpu,
  Leaf,
  Users,
  Mail,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState(null);

  const sections = [
    {
      title: "Academic Excellence",
      icon: Trophy,
      details: [
        "ICSE Board Examination 2024–25: Scored 94%",
        "Strong foundation in science and mathematics",
        "Excellent analytical and problem-solving skills",
      ],
    },
    {
      title: "Competitive Chess",
      icon: Trophy,
      details: [
        "CISCE U-19 Regionals: Ranked 10th out of 51 players",
        "CISCE U-17 Regionals: Ranked 9th out of 58 players",
        "3rd Place – CCBW U-16 Tournament",
        "4th Place – Athrise Chess Competition",
        "Represented school at CISCE Zonal Championship",
      ],
    },
    {
      title: "Robotics & Engineering",
      icon: Cpu,
      details: [
        "Team Lead – Maharishi Bot Fiesta 2025 (Won all competitions)",
        "Constantia 2025: Won 2 Gold Medals",
        "Technoxian 2025 finalist – Robo Soccer Controller",
        "Designed Line-Following Robot (Technoxian 2024)",
        "Presented robotics lab to Hon’ble Chief Justices",
      ],
    },
    {
      title: "Environmental Leadership",
      icon: Leaf,
      details: [
        "Co-founded school Eco-Club",
        "Led plastic awareness campaign at Lucknow Zoo",
        "Promoted sustainability initiatives",
      ],
    },
    {
      title: "Leadership & Service",
      icon: Users,
      details: [
        "Represented USA at JSGC MUN – Verbal Mention",
        "IAYP Volunteer – taught Maths & English",
        "Operations Manager – CMS Alumni Meet",
        "NASA Space Apps Challenge – 6th place",
      ],
    },
  ];

  const socials = [
    { icon: Github, url: "https://github.com/Dekatsoo" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/aditya-vikram-singh-a95a07276/" },
  ];

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-black dark:via-zinc-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-500">

        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-6 sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
          <h1 className="text-xl font-bold tracking-widest">DEKATSOO</h1>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
          >
            {dark ? <Sun /> : <Moon />}
          </button>
        </nav>

        {/* Hero */}
        <section className="text-center py-28 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Aditya Vikram Singh
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            A passionate student excelling in chess, robotics, leadership, and innovation.
            Building a strong future through technology, strategy, and impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mt-10 flex justify-center gap-6 flex-wrap"
          >
            <a
              href="/Aditya_Vikram_Singh_CV.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition"
            >
              <Download /> Download CV
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dekatsoo@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <Mail /> Contact
            </a>
          </motion.div>
        </section>

        {/* Sections */}
        <div className="max-w-5xl mx-auto px-6 pb-28 space-y-6">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === i ? null : i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}
              className={`rounded-2xl p-6 bg-white dark:bg-zinc-900 shadow-lg cursor-pointer select-none transition transform hover:scale-[1.02] ${
                active === i
                  ? "ring-2 ring-indigo-500 dark:ring-indigo-400 shadow-2xl"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <sec.icon className="w-7 h-7" />
                <h3 className="text-2xl font-semibold">{sec.title}</h3>
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                      {sec.details.map((d, idx) => (
                        <li key={idx}>• {d}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pb-12">
          {socials.map((s, idx) => (
            <a
              key={idx}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-zinc-800 hover:bg-indigo-500 dark:hover:bg-indigo-400 hover:text-white transition"
            >
              <s.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-10 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Dekatsoo • Designed & Built by Aditya Vikram Singh
        </footer>
      </div>
    </div>
  );
}

