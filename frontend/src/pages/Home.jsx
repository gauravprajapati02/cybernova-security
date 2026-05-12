import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen w-full overflow-x-hidden text-white">

      {/* HERO SECTION */}

      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-10">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8">

              <span className="text-green-400">

                CyberShield AI

              </span>

              <br />

              Smart Cyber Crime Detection Platform

            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-8 md:leading-10 mb-8 md:mb-10">

              CyberShield AI is an advanced AI-powered cybercrime reporting and threat detection system developed to protect users from phishing attacks, online scams, banking fraud, ransomware and digital threats. The platform combines artificial intelligence, cybersecurity awareness and modern web technologies to create a secure digital environment.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

              <Link
                to="/complaint"
                className="bg-green-500 text-black px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold hover:bg-green-400 hover:scale-105 transition duration-300 shadow-2xl text-center"
              >

                Register Complaint

              </Link>

              <Link
                to="/track-complaint"
                className="border border-green-500 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold hover:bg-green-500 hover:text-black transition duration-300 text-center"
              >

                Track Complaint

              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="flex justify-center">

            <div className="w-full max-w-lg backdrop-blur-xl bg-white/5 border border-green-500/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-6 md:mb-8 text-center">

                AI Security Features

              </h2>

              <div className="space-y-4 md:space-y-6 text-base md:text-lg">

                <div className="bg-black/40 p-4 md:p-5 rounded-2xl border border-green-500/20">

                  ✅ AI Threat Detection

                </div>

                <div className="bg-black/40 p-4 md:p-5 rounded-2xl border border-green-500/20">

                  ✅ OCR Scam Scanner

                </div>

                <div className="bg-black/40 p-4 md:p-5 rounded-2xl border border-green-500/20">

                  ✅ Cyber Complaint Portal

                </div>

                <div className="bg-black/40 p-4 md:p-5 rounded-2xl border border-green-500/20">

                  ✅ AI Cyber Assistant

                </div>

                <div className="bg-black/40 p-4 md:p-5 rounded-2xl border border-green-500/20">

                  ✅ Complaint Tracking System

                </div>

                <div className="bg-black/40 p-4 md:p-5 rounded-2xl border border-green-500/20">

                  ✅ Role-Based Admin Dashboard

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT PLATFORM */}

      <section className="py-16 md:py-24 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14 md:mb-20">

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 mb-6 md:mb-8">

              About The Platform

            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-8 md:leading-10 max-w-5xl mx-auto">

              CyberShield AI is designed to provide intelligent cybersecurity solutions for users facing digital threats. The platform enables users to report cybercrime incidents, detect online scams, analyze suspicious messages and learn cybersecurity best practices through AI-powered assistance.

            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

            <div className="backdrop-blur-xl bg-white/5 border border-green-500/30 rounded-3xl p-6 md:p-10 shadow-2xl">

              <h3 className="text-2xl md:text-3xl text-green-400 font-bold mb-4 md:mb-6">

                Smart Detection

              </h3>

              <p className="text-gray-300 leading-7 md:leading-8">

                Analyze suspicious text, phishing emails, fake links and online threats using AI-powered cyber intelligence systems.

              </p>

            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-green-500/30 rounded-3xl p-6 md:p-10 shadow-2xl">

              <h3 className="text-2xl md:text-3xl text-green-400 font-bold mb-4 md:mb-6">

                Secure Complaint System

              </h3>

              <p className="text-gray-300 leading-7 md:leading-8">

                Register cybercrime complaints securely with complaint tracking, AI-generated FIR summaries and evidence upload support.

              </p>

            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-green-500/30 rounded-3xl p-6 md:p-10 shadow-2xl">

              <h3 className="text-2xl md:text-3xl text-green-400 font-bold mb-4 md:mb-6">

                AI Assistance

              </h3>

              <p className="text-gray-300 leading-7 md:leading-8">

                The integrated CyberShield AI chatbot helps users understand cyber threats, online safety and digital fraud prevention.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CYBER STATS */}

      <section className="py-16 md:py-24 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">

            <div className="bg-white/5 border border-green-500/30 rounded-3xl p-6 md:p-10 text-center shadow-2xl">

              <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">

                100+

              </h2>

              <p className="text-lg md:text-xl text-gray-300">

                Threat Patterns Detected

              </p>

            </div>

            <div className="bg-white/5 border border-green-500/30 rounded-3xl p-6 md:p-10 text-center shadow-2xl">

              <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">

                AI

              </h2>

              <p className="text-lg md:text-xl text-gray-300">

                Powered Security Analysis

              </p>

            </div>

            <div className="bg-white/5 border border-green-500/30 rounded-3xl p-6 md:p-10 text-center shadow-2xl">

              <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">

                24/7

              </h2>

              <p className="text-lg md:text-xl text-gray-300">

                Smart Cyber Assistance

              </p>

            </div>

            <div className="bg-white/5 border border-green-500/30 rounded-3xl p-6 md:p-10 text-center shadow-2xl">

              <h2 className="text-4xl md:text-6xl font-bold text-green-400 mb-4">

                Secure

              </h2>

              <p className="text-lg md:text-xl text-gray-300">

                Complaint Management

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TEAM SECTION */}

      <section className="py-16 md:py-24 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-400 mb-12 md:mb-16">

            Project Team

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

            <div className="bg-white/5 border border-green-500/30 rounded-3xl p-6 md:p-10 shadow-2xl">

              <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">

                Gaurav

              </h3>

              <p className="text-lg md:text-xl text-gray-300 leading-7 md:leading-8">

                MERN Stack Developer, AI Integration and Cybersecurity System Architecture.

              </p>

            </div>

            <div className="bg-white/5 border border-green-500/30 rounded-3xl p-6 md:p-10 shadow-2xl">

              <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">

                Harsh

              </h3>

              <p className="text-lg md:text-xl text-gray-300 leading-7 md:leading-8">

                Frontend Development, Dashboard Design and User Interface Development.

              </p>

            </div>

            <div className="bg-white/5 border border-green-500/30 rounded-3xl p-6 md:p-10 shadow-2xl">

              <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">

                Ishu

              </h3>

              <p className="text-lg md:text-xl text-gray-300 leading-7 md:leading-8">

                Backend Integration, Database Management and Complaint Workflow System.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* UNIVERSITY */}

      <section className="py-16 md:py-24 px-4 sm:px-6">

        <div className="max-w-5xl mx-auto text-center bg-white/5 border border-green-500/30 rounded-3xl p-8 md:p-16 shadow-2xl">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-6 md:mb-8">

            Academic Institution

          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-8 md:leading-10">

            This project has been developed as an MCA major project under

            <span className="text-green-400 font-bold">

              {" "}
              Bundelkhand University, Jhansi

            </span>

            .

          </p>

          <p className="text-base md:text-lg text-gray-400 mt-6 md:mt-8 leading-7 md:leading-8">

            The project demonstrates the implementation of modern cybersecurity concepts, artificial intelligence integration, threat analysis and secure complaint management using MERN stack technologies.

          </p>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-green-500/30 py-8 md:py-10 px-4 text-center text-sm md:text-base text-gray-400">

        © 2026 CyberShield AI | Developed By Gaurav, Harsh & Ishu | Bundelkhand University

      </footer>

    </div>

  );

}

export default Home;