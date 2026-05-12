function About() {

  return (

    <div className="min-h-screen text-white px-6 py-16">

      {/* HERO SECTION */}

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <h1 className="text-6xl font-bold text-green-400 mb-8">

            About CyberShield AI

          </h1>

          <p className="text-xl text-gray-300 leading-10 max-w-5xl mx-auto">

            CyberShield AI is an advanced AI-powered cybercrime reporting and threat detection platform developed to help users stay safe in the digital world. The platform combines artificial intelligence, cybersecurity awareness, smart complaint management and real-time threat analysis into one professional system. Our mission is to create a secure digital environment where users can identify cyber threats, report online fraud and receive intelligent cybersecurity assistance.

          </p>

        </div>

        {/* MISSION */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          <div className="backdrop-blur-xl bg-white/5 border border-green-500/30 rounded-3xl p-10 shadow-2xl">

            <h2 className="text-4xl font-bold text-green-400 mb-6">

              Our Mission

            </h2>

            <p className="text-gray-300 leading-9 text-lg">

              Our mission is to spread cybersecurity awareness and provide users with smart tools to fight against cybercrime. CyberShield AI aims to reduce digital fraud, phishing attacks, online scams, ransomware threats and identity theft by providing intelligent security solutions and educational support.

            </p>

          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-green-500/30 rounded-3xl p-10 shadow-2xl">

            <h2 className="text-4xl font-bold text-green-400 mb-6">

              Our Vision

            </h2>

            <p className="text-gray-300 leading-9 text-lg">

              We envision a future where every internet user has access to powerful cybersecurity tools and AI-driven protection systems. CyberShield AI is designed to bridge the gap between technology and cyber safety by making security solutions accessible, intelligent and user-friendly.

            </p>

          </div>

        </div>

        {/* FEATURES */}

        <div className="mb-20">

          <h2 className="text-5xl font-bold text-green-400 text-center mb-14">

            Key Features

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="bg-white/5 border border-green-500/30 rounded-3xl p-8 shadow-2xl">

              <h3 className="text-3xl text-green-400 mb-5 font-bold">

                AI Threat Detection

              </h3>

              <p className="text-gray-300 leading-8">

                Detect phishing attacks, UPI scams, banking fraud, malware threats, ransomware attacks and suspicious cyber activities using intelligent AI analysis.

              </p>

            </div>

            <div className="bg-white/5 border border-green-500/30 rounded-3xl p-8 shadow-2xl">

              <h3 className="text-3xl text-green-400 mb-5 font-bold">

                Cyber Complaint Portal

              </h3>

              <p className="text-gray-300 leading-8">

                Users can securely register cybercrime complaints, upload evidence, track complaint status and download professional complaint reports.

              </p>

            </div>

            <div className="bg-white/5 border border-green-500/30 rounded-3xl p-8 shadow-2xl">

              <h3 className="text-3xl text-green-400 mb-5 font-bold">

                AI Cyber Assistant

              </h3>

              <p className="text-gray-300 leading-8">

                The integrated AI chatbot provides instant cybersecurity guidance, scam awareness tips and online safety recommendations.

              </p>

            </div>

          </div>

        </div>

        {/* WHY CHOOSE */}

        <div className="mb-20">

          <h2 className="text-5xl font-bold text-green-400 text-center mb-14">

            Why Choose CyberShield AI?

          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div className="bg-black/40 border border-green-500/30 rounded-3xl p-10">

              <ul className="space-y-6 text-lg text-gray-300">

                <li>
                  ✅ AI-powered cybersecurity platform
                </li>

                <li>
                  ✅ Professional complaint management system
                </li>

                <li>
                  ✅ Role-based admin and user dashboards
                </li>

                <li>
                  ✅ Real-time cyber threat analysis
                </li>

                <li>
                  ✅ OCR scam screenshot detection
                </li>

                <li>
                  ✅ Smart AI-generated FIR summaries
                </li>

              </ul>

            </div>

            <div className="bg-black/40 border border-green-500/30 rounded-3xl p-10">

              <ul className="space-y-6 text-lg text-gray-300">

                <li>
                  ✅ Modern responsive UI/UX design
                </li>

                <li>
                  ✅ Enterprise-level dashboard analytics
                </li>

                <li>
                  ✅ Cyber awareness and safety education
                </li>

                <li>
                  ✅ Secure authentication system
                </li>

                <li>
                  ✅ Complaint tracking with complaint ID
                </li>

                <li>
                  ✅ Professional MCA-level project architecture
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* TECHNOLOGY */}

        <div className="mb-20">

          <h2 className="text-5xl font-bold text-green-400 text-center mb-14">

            Technologies Used

          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Tailwind CSS",
              "JWT Authentication",
              "AI Threat Analysis",
              "OCR Detection",
            ].map((tech, index) => (

              <div
                key={index}
                className="bg-white/5 border border-green-500/30 rounded-2xl p-6 text-center text-xl font-bold shadow-xl hover:scale-105 transition duration-300"
              >

                {tech}

              </div>

            ))}

          </div>

        </div>

        {/* FOOTER */}

        <div className="text-center border-t border-green-500/30 pt-12">

          <h2 className="text-4xl text-green-400 font-bold mb-6">

            CyberShield AI

          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-4xl mx-auto">

            CyberShield AI is a next-generation cybersecurity platform focused on digital protection, cybercrime awareness and intelligent threat detection. The project demonstrates the power of combining artificial intelligence with modern web technologies to build a secure and intelligent cyber defense ecosystem.

          </p>

        </div>

      </div>

    </div>

  );

}

export default About;