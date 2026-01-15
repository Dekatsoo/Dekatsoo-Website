/*
DEPLOYMENT (VERCEL / NETLIFY READY)
1. Create a Next.js + Tailwind project
2. Paste this file as app/page.tsx
3. Ensure shadcn/ui & lucide-react are installed
4. Run: npm run build && npm run start
Site Name: Dekatsoo
*/

import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Cpu, Leaf, Users, Mic, GraduationCap } from "lucide-react";

export default function DekatsooPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">Aditya Vikram Singh</h1>
          <p className="text-lg text-gray-600">Student • Chess Player • Robotics Enthusiast • Leader</p>
          <p className="text-sm text-gray-500">Dekatsoo.com</p>
        </div>

        {/* About */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              I am a Class 11 student at City Montessori School, Gomti Nagar 1, Lucknow. I maintain strong academic
              performance while actively competing in chess, robotics, innovation challenges, and leadership programs.
              My interests lie at the intersection of technology, strategy, and real-world problem solving.
            </p>
          </CardContent>
        </Card>

        {/* Academics */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap />
              <h2 className="text-2xl font-semibold">Academics</h2>
            </div>
            <p>ICSE Board Examination (2024–2025): <strong>94%</strong></p>
          </CardContent>
        </Card>

        {/* Chess */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Trophy />
              <h2 className="text-2xl font-semibold">Competitive Chess</h2>
            </div>
            <ul className="list-disc ml-5 text-gray-700">
              <li>U-19 CISCE Regionals – Rank 10/51 (2024–25)</li>
              <li>U-17 CISCE Regionals – Rank 9/58 (2025–26)</li>
              <li>3rd – CCBW U-16 Tournament (June 2025)</li>
              <li>4th – Athrise Chess Competition (Dec 2025)</li>
              <li>8th – CCBW U-16 Tournament (June 2024)</li>
              <li>Represented school at CISCE U-19 Zonals</li>
            </ul>
          </CardContent>
        </Card>

        {/* Robotics */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Cpu />
              <h2 className="text-2xl font-semibold">Robotics & Engineering</h2>
            </div>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Maharishi Bot Fiesta 2025 – Team Lead, ₹15,300 prize</li>
              <li>Constantia 2025 – 2 Gold Medals</li>
              <li>Technoxian 2025 – Robo Soccer Controller (International Finals)</li>
              <li>Technoxian 2024 – Line Following Robot Designer</li>
              <li>Inter-School Robotics Competition – Builder & Volunteer</li>
            </ul>
          </CardContent>
        </Card>

        {/* Leadership */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Mic />
              <h2 className="text-2xl font-semibold">Leadership & Public Speaking</h2>
            </div>
            <ul className="list-disc ml-5 text-gray-700">
              <li>JSGC MUN 2024 – USA Delegate, Verbal Mention</li>
              <li>IYMC – Social Media Team & Robotics Lead</li>
              <li>CMS GN1 Alumni Meet – Operations Manager</li>
              <li>Chief Justice Conference – Robotics Lab Presenter</li>
            </ul>
          </CardContent>
        </Card>

        {/* Social & Environment */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Leaf />
              <h2 className="text-2xl font-semibold">Social Impact</h2>
            </div>
            <ul className="list-disc ml-5 text-gray-700">
              <li>Eco-Club Co-Founder – Sustainability initiatives</li>
              <li>Plastic Awareness Campaign – Lucknow Zoo</li>
              <li>IAYP Volunteer – Tutored early learners</li>
            </ul>
          </CardContent>
        </Card>

        {/* Innovation */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Users />
              <h2 className="text-2xl font-semibold">Innovation</h2>
            </div>
            <p className="text-gray-700">
              NASA Space Apps Challenge – Developed an educational rover simulation game. Secured <strong>6th place</strong>
              showcasing technical creativity and teamwork.
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm pt-6">
          © 2026 Dekatsoo | Aditya Vikram Singh
        </div>
      </div>
    </div>
  );
}
