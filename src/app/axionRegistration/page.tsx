"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { 
  Users, 
  Phone, 
  ChevronDown, 
  ChevronUp, 
  ShieldAlert, 
  FileText, 
  Clock, 
  Tag
} from "lucide-react";

export default function AxionEventHub() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showGeneralGuidelines, setShowGeneralGuidelines] = useState(false);

  const toggleRules = (id: string) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 selection:bg-amber-500/30 font-sans pb-28">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-12 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Background glow & mesh */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Main Event Header Banner */}
          <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-zinc-800/80 shadow-[0_0_50px_rgba(245,158,11,0.15)] group">
            <Image 
              src="/images/events/axion-hero-banner.png" 
              alt="AXION 2026 - Dayananda Sagar College of Engineering" 
              width={1024}
              height={598}
              className="w-full h-auto object-contain rounded-2xl group-hover:scale-[1.01] transition-transform duration-500" 
              priority
            />
          </div>

          {/* Guidelines & Brochure Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowGeneralGuidelines(!showGeneralGuidelines)}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700/60 text-zinc-300 hover:text-amber-400 hover:border-amber-500/50 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>{showGeneralGuidelines ? "Hide General Guidelines" : "Read General Guidelines (All Events)"}</span>
              {showGeneralGuidelines ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
            <a
              href="/axion-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 hover:border-amber-500/50 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>View Brochure</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Expandable General Guidelines Section ── */}
      <AnimatePresence>
        {showGeneralGuidelines && (
          <motion.section 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 mb-12 overflow-hidden"
          >
            <div className="bg-zinc-950/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.08)]">
              <h3 className="text-lg font-bold text-amber-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5" /> General Event Guidelines
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-zinc-300">
                <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
                  <p className="font-semibold text-white mb-1">1. Registration & Identification</p>
                  <p className="text-zinc-400 leading-relaxed">
                    Participants must register according to team size specified. A valid college ID card is mandatory for verification. Late arrivals will not be entertained.
                  </p>
                </div>
                <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
                  <p className="font-semibold text-white mb-1">2. Fair Play & Conduct</p>
                  <p className="text-zinc-400 leading-relaxed">
                    Sportsmanship is expected throughout. Cheating, unauthorized assistance, or equipment damage will lead to immediate disqualification.
                  </p>
                </div>
                <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
                  <p className="font-semibold text-white mb-1">3. Devices & Communication</p>
                  <p className="text-zinc-400 leading-relaxed">
                    Personal electronic devices are strictly prohibited during active competition rounds. Communication is restricted exclusively to registered teammates.
                  </p>
                </div>
                <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
                  <p className="font-semibold text-white mb-1">4. Originality & Safety</p>
                  <p className="text-zinc-400 leading-relaxed">
                    All builds, circuits, and code must be authored by registered participants. Fully assembled commercial kits and exposed 220V AC wiring are strictly prohibited.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center gap-2 text-xs sm:text-sm text-amber-300 font-medium">
                <span>📌 Refer brochure for detailed rules.</span>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ── Events Section ── */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">

          {/* ══════════════════════ 1. HARDWARE EXPO ══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-[#0d0d12] border border-zinc-800/80 hover:border-amber-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row gap-8 justify-between items-stretch">
              
              {/* Left Column: Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Event Title & Badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-3xl">💡</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Hardware Expo
                    </h2>
                    <span className="px-3 py-1 bg-amber-500/15 text-amber-400 text-xs font-bold rounded-full border border-amber-500/30 uppercase tracking-wider">
                      IDEA & BUILD
                    </span>
                  </div>

                  {/* Subtitle / Category */}
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.18em] mb-3">
                    HACKATHON EXPO · BUILD. INTEGRATE. INNOVATE.
                  </p>

                  {/* Overview description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    A college-level competition where teams showcase physical engineering prototypes, undergo demonstrations before hardware experts and tech judges, and pitch the real-world applicability of their projects.
                  </p>

                  {/* Specs & Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300 mb-6 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/60">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-white">Team Size:</strong> 2–4 members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-white">Entry Fee:</strong> free </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-white">Finalists:</strong> Top 20 teams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-white">Coordinator:</strong> Dhruva J H (<a href="tel:6361536637" className="text-amber-400 hover:underline">6361536637</a>)</span>
                    </div>
                  </div>

                  {/* Note Callout */}
                  <div className="bg-[#0b1020] border-l-4 border-amber-500 rounded-r-xl p-3.5 mb-4 text-xs text-amber-200/90 leading-relaxed">
                    <strong className="text-amber-300">Note:</strong> Ideal for working prototypes; any project at any development stage is welcome – hardware, novel use cases and engineering depth. We value originality, technical soundness, and problem-solving capability.
                  </div>
                </div>

                {/* Rules Dropdown Toggle */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleRules("expo")}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-amber-400 transition-colors py-1 cursor-pointer"
                  >
                    <span>{activeTab === "expo" ? "Hide Guidelines & Tracks" : "View Tracks & Round Details"}</span>
                    {activeTab === "expo" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {activeTab === "expo" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300 space-y-3 overflow-hidden"
                      >
                        <div>
                          <p className="font-bold text-amber-400 mb-1">Competition Tracks:</p>
                          <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                            <li><strong className="text-zinc-200">1. Intelligent Systems & Automation:</strong> Robotics, Edge AI & TinyML, Sustainable Tech</li>
                            <li><strong className="text-zinc-200">2. Open Innovation:</strong> Commercially viable engineering projects bridging academic concepts</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-amber-400 mb-1">Rounds:</p>
                          <p className="text-zinc-400 leading-relaxed">
                            <strong className="text-zinc-200">Round 1 (Online Screening):</strong> 5-slide PDF presentation (Problem Statement, Hardware Block Diagram & Core Components), 1-minute working demonstration video, and BOM.<br/>
                            <strong className="text-zinc-200">Round 2 (Hardware Expo Finale):</strong> Top 20 teams present their working physical prototype before judges for 5–10 minutes.
                          </p>
                        </div>
                        <div>
                          <p className="font-bold text-amber-400 mb-1">Judging Weightage:</p>
                          <p className="text-zinc-400">
                            Functionality: 25% · Complexity: 25% · Build Quality: 20% · Innovation & Cost: 15% · Pitch: 15%
                          </p>
                        </div>
                        <div className="pt-2 border-t border-zinc-800/60 text-amber-300/90 font-medium">
                          📌 Refer brochure for detailed rules.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Column: Visual Card with Image & Register CTA */}
              <div className="lg:w-72 shrink-0 flex flex-col justify-between items-stretch">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-gradient-to-b from-zinc-900/80 via-zinc-950/90 to-zinc-950 p-3 shadow-xl backdrop-blur-md group-hover:border-zinc-700 transition-all duration-300">
                  {/* Header overlay on card */}
                  <div className="pb-2.5 px-1 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold tracking-[0.2em] text-amber-400 uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      HARDWARE EXPO
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">EVENT</span>
                  </div>

                  {/* Image container */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/60 group-hover:border-zinc-700/80 transition-colors">
                    <Image
                      src="/images/events/hardware-expo.jpg"
                      alt="Hardware Expo Prototype"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Register Button */}
                <div className="mt-4">
                <Link href="https://partner.mentorlink.in/en/application-form/qsMTpIDnjO"
               target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
>
                    <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold uppercase tracking-widest rounded-xl transition-all shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] cursor-pointer">
                      REGISTER NOW
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>


          {/* ══════════════════════ 2. EMBEDDED ENIGMA ══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-[#0d0d12] border border-zinc-800/80 hover:border-amber-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row gap-8 justify-between items-stretch">
              
              {/* Left Column: Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Event Title & Badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-3xl">🧩</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Embedded Enigma
                    </h2>
                    <span className="px-3 py-1 bg-emerald-500/15 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30 uppercase tracking-wider">
                      DSC
                    </span>
                  </div>

                  {/* Subtitle / Category */}
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.18em] mb-3">
                    HARDWARE CHALLENGE · THINK. DEBUG. DECODE.
                  </p>

                  {/* Overview description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    An intense, 4-round challenge that pushes participants from theoretical concepts to practical, hands-on engineering. Teams must rely on raw technical intuition to solve unannounced puzzles, troubleshoot physical circuits, and decode mystery firmware against a strict clock.
                  </p>

                  {/* Specs & Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300 mb-6 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/60">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-white">Team Size:</strong> 2 members (Strictly)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-white">Registration Fee:</strong> ₹150 per team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-white">Format:</strong> 4 Elimination Rounds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>
                        <strong className="text-white">Coordinator:</strong> Jyothika S (<a href="tel:8310325378" className="text-amber-400 hover:underline">8310325378</a>)
                      </span>
                    </div>
                  </div>

                  {/* Note Callout */}
                  <div className="bg-[#0b1020] border-l-4 border-amber-500 rounded-r-xl p-3.5 mb-4 text-xs text-amber-200/90 leading-relaxed">
                    <strong className="text-amber-300">Note:</strong> Lookout on-site since your problem-solving skills, practical approach, and technical mindset are what's being tested. Minimal hardware is permitted, but intellect and a solver's mindset are paramount.
                  </div>
                </div>

                {/* Rules Dropdown Toggle */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleRules("enigma")}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-amber-400 transition-colors py-1 cursor-pointer"
                  >
                    <span>{activeTab === "enigma" ? "Hide Challenge Rules" : "View Challenge Rules & Protocol"}</span>
                    {activeTab === "enigma" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {activeTab === "enigma" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300 space-y-2 overflow-hidden"
                      >
                        <ul className="list-disc pl-5 space-y-1.5 text-zinc-400">
                          <li>Only materials, components, and tools provided by the organizers may be used during the event.</li>
                          <li>Participants are not permitted to bring outside hardware, pre-built circuits, or personal tools into the event area.</li>
                          <li>Phones, laptops, tablets, and smartwatches must remain stowed throughout active rounds.</li>
                          <li>Teams may communicate only with their registered teammate during the competition.</li>
                          <li>Completed solutions must be verified by an organizer before proceeding.</li>
                          <li>Latecomers will not receive additional time.</li>
                        </ul>
                        <div className="pt-2 border-t border-zinc-800/60 text-amber-300/90 font-medium">
                          📌 Refer brochure for detailed rules.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Column: Visual Card with Image & Register CTA */}
              <div className="lg:w-72 shrink-0 flex flex-col justify-between items-stretch">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-gradient-to-b from-zinc-900/80 via-zinc-950/90 to-zinc-950 p-3 shadow-xl backdrop-blur-md group-hover:border-zinc-700 transition-all duration-300">
                  {/* Header overlay on card */}
                  <div className="pb-2.5 px-1 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold tracking-[0.2em] text-amber-400 uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      EMBEDDED ENIGMA
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">EVENT</span>
                  </div>

                  {/* Image container */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/60 group-hover:border-zinc-700/80 transition-colors">
                    <Image
                      src="/images/events/embedded-enigma.jpg"
                      alt="Embedded Enigma Hardware Challenge"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Register Button */}
                <div className="mt-4">
                  <Link
  href="https://partner.mentorlink.in/en/application-form/qsMTpIDnjO"
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full"
>
                    <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold uppercase tracking-widest rounded-xl transition-all shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] cursor-pointer">
                      REGISTER NOW
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>


          {/* ══════════════════════ 3. VECTOR CHASE ══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative bg-[#0d0d12] border border-zinc-800/80 hover:border-amber-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row gap-8 justify-between items-stretch">
              
              {/* Left Column: Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Event Title & Badges */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-3xl">🤖</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Vector Chase
                    </h2>
                    <span className="px-3 py-1 bg-emerald-500/15 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30 uppercase tracking-wider">
                      DSC
                    </span>
                  </div>

                  {/* Subtitle / Category */}
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.18em] mb-3">
                    TECHNICAL CHALLENGE · AUTONOMOUS LINE-FOLLOWING
                  </p>

                  {/* Overview description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    Put your autonomous robotics skills to the test in Vector Chase, a high-speed line-following challenge designed to test sensing, control, calibration, and real-time decision-making. Strictly a line follower challenge, not a line-maze solver.
                  </p>

                  {/* Specs & Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300 mb-6 bg-zinc-950/60 p-4 rounded-2xl border border-zinc-800/60">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-white">Team Size:</strong> 2–3 members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-white">Entry Fee:</strong> ₹100 per team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-white">Trials:</strong> 3 official runs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong className="text-white">Coordinator:</strong> Aditya Venkatesh (<a href="tel:9740768828" className="text-amber-400 hover:underline">9740768828</a>)</span>
                    </div>
                  </div>

                  {/* Note Callout */}
                  <div className="bg-[#0b1020] border-l-4 border-amber-500 rounded-r-xl p-3.5 mb-4 text-xs text-amber-200/90 leading-relaxed">
                    <strong className="text-amber-300">Note:</strong> A classic robotics test—agility, logic in code, and how well the hardware and its guidance mechanism work together gets you to the win! 100% autonomous bots only.
                  </div>
                </div>

                {/* Rules Dropdown Toggle */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleRules("vector")}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-amber-400 transition-colors py-1 cursor-pointer"
                  >
                    <span>{activeTab === "vector" ? "Hide Bot Specs & Track Rules" : "View Bot Specs & Track Rules"}</span>
                    {activeTab === "vector" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {activeTab === "vector" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-xs text-zinc-300 space-y-3 overflow-hidden"
                      >
                        <div>
                          <p className="font-bold text-amber-400 mb-1">Bot Specifications:</p>
                          <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                            <li>Max dimensions: 25 cm × 25 cm × 25 cm (±2 cm tolerance allowed during technical inspection).</li>
                            <li>Max weight: 2.5 kg. Onboard power supply only (max 12 V DC).</li>
                            <li>100% autonomous. Bluetooth, Wi-Fi, RF, and manual control are strictly prohibited.</li>
                            <li>Only standard rubber wheels or treads are permitted (no sticky sprays/chemicals).</li>
                            <li><strong className="text-zinc-200">Component Lock:</strong> Once inspected, major hardware cannot be replaced.</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-bold text-amber-400 mb-1">Trials & Track:</p>
                          <p className="text-zinc-400 leading-relaxed mb-4">
                            3 official trials (max 3 min each, 3 min setup window). Timing begins at start line and ends at finish line. Max 3 human touches permitted per trial (restart from last checkpoint).<br/>
                            <strong className="text-zinc-200">Track:</strong> 30 mm line thickness on matte flex banner with white-on-black and black-on-white sections (line inversion), crossovers, and sharp curves.
                          </p>
                          <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-zinc-700/50 bg-white p-2">
                            <div className="relative w-full h-full">
                              <Image 
                                src="/images/vector chase track.jpg" 
                                alt="Vector Chase Track Layout" 
                                fill 
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-zinc-800/60 text-amber-300/90 font-medium">
                          📌 Refer brochure for detailed rules.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Column: Visual Card with Image & Register CTA */}
              <div className="lg:w-72 shrink-0 flex flex-col justify-between items-stretch">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-gradient-to-b from-zinc-900/80 via-zinc-950/90 to-zinc-950 p-3 shadow-xl backdrop-blur-md group-hover:border-zinc-700 transition-all duration-300">
                  {/* Header overlay on card */}
                  <div className="pb-2.5 px-1 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold tracking-[0.2em] text-amber-400 uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      VECTOR CHASE
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-wider">EVENT</span>
                  </div>

                  {/* Image container */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/60 group-hover:border-zinc-700/80 transition-colors">
                    <Image
                      src="/images/events/vector-chase.png"
                      alt="Vector Chase Autonomous Robot"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Register Button */}
                <div className="mt-4">
                  <Link
                 href="https://partner.mentorlink.in/en/application-form/qsMTpIDnjO"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block w-full">

                    <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold uppercase tracking-widest rounded-xl transition-all shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] cursor-pointer">
                      REGISTER NOW
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer watermark */}
      <footer className="mt-20 text-center text-zinc-600 text-xs tracking-wider">
        AXION 2026 · Vertex · Department of Electronics and Telecommunication Engineering · DSCE
      </footer>
    </div>
  );
}
