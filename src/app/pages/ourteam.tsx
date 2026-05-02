import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamData } from "../components/team/teamData";
import SEO from "../components/ui/SEO";

const TeamOption1 = () => {
  const [activeTab, setActiveTab] = useState("all");

  const getInitials = (name: string) => 
    name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);

  // Categorization logic
  const ceo = teamData.find((m) => m.category === "CEO");
  const executives = teamData.filter((m) =>
    ["CTO", "CFO", "COO"].includes(m.category),
  );

  const getDepartmentData = (dept: string) => {
    const deptMembers = teamData.filter((m) => m.department === dept);
    return {
      head: deptMembers.filter((m) => m.category === "Head"),
      senior: deptMembers.filter((m) => m.category === "Senior"),
      junior: deptMembers.filter((m) => m.category === "Junior"),
      intern: deptMembers.filter((m) => m.category === "Intern"),
    };
  };

  const devTeam = getDepartmentData("Development");
  const mktTeam = getDepartmentData("Marketing");

  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-poppins text-[#191a23]">
      <SEO
        title="Our Team"
        description="Meet the experts at TechTide Corporate LLP. Our team of skilled developers and designers is dedicated to building high-quality digital solutions."
        keywords="TechTide team, web developers Lahore, software engineers, UI designers, expert tech team, digital transformation experts"
      />

      {/* Hero Section - Reverted to Original */}
      <div className="relative h-screen pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#453abc]/10 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#60c3e3]/10 rounded-full blur-[80px] md:blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-sm font-medium tracking-[0.2em] uppercase mb-4">
              Meet the TechTide Corporate LLP Team
            </p>
            <h1 className="text-4xl md:text-7xl font-poppins font-medium text-[#191a23] mb-6 leading-tight md:leading-[1.1]">
              Experts in Web Development, Software{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#453abc] to-[#60c3e3]">
                Solutions & Digital Innovation
              </span>
            </h1>
            <p className="text-[#6b7280] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Get to know our talented team of developers, designers, and
              strategists who deliver end-to-end technology solutions for
              businesses and startups.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 pb-20">
        {/* CEO Section */}
        {ceo && (
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#453abc] to-[#60c3e3]" />
              <h2 className="text-2xl font-semibold">Chief Executive Officer</h2>
            </div>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="relative max-w-3xl rounded-[24px] border border-[#453abc]/15 bg-white/65 backdrop-blur-[20px] flex flex-row items-stretch overflow-hidden shadow-[0_20px_50px_rgba(69,58,188,0.08)] before:absolute before:inset-0 before:rounded-[24px] before:bg-gradient-to-br before:from-[#453abc]/5 before:to-[#60c3e3]/5 before:pointer-events-none after:absolute after:top-0 after:left-0 after:right-0 after:h-[4px] after:rounded-t-[24px] after:bg-gradient-to-r after:from-[#453abc] after:to-[#60c3e3]"
            >
              <div className="w-[120px] sm:w-[160px] md:w-[260px] shrink-0 bg-gradient-to-br from-[#453abc]/10 to-[#60c3e3]/10 overflow-hidden">
                {ceo.image ? <img src={ceo.image} alt={ceo.name} className="w-full h-full object-cover object-top" /> : <div className="w-full h-full flex items-center justify-center text-5xl font-semibold text-[#453abc]">{getInitials(ceo.name)}</div>}
              </div>
              <div className="flex-1 p-5 sm:p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-semibold text-[#191a23] mb-2">{ceo.name}</h3>
                <div className="inline-block w-fit px-[18px] py-[6px] rounded-full bg-gradient-to-r from-[#453abc] to-[#60c3e3] text-white text-[11px] font-medium tracking-[0.15em] uppercase mb-4">
                  {ceo.role}
                </div>
                <p className="text-[15px] font-light text-[#6b7280] leading-[1.8] max-w-[500px]">
                  Visionary leader with a decade of experience scaling technology ventures. Passionate about building digital solutions that create real, lasting business value.
                </p>
              </div>
            </motion.div>
          </section>
        )}

        {/* Executive Leadership */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#453abc] to-[#60c3e3]" />
            <h2 className="text-2xl font-semibold">Executive Leadership</h2>
            <small className="ml-auto text-[11px] font-normal tracking-widest uppercase text-[#c4c6d0]">{executives.length} Members</small>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {executives.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-row items-stretch rounded-[24px] border border-[#453abc]/10 bg-white/60 backdrop-blur-[16px] relative overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:border-[#453abc]/25 hover:shadow-[0_20px_50px_rgba(69,58,188,0.15)] group min-h-[160px] md:min-h-[200px]"
              >
                <div className="w-[120px] md:w-[160px] shrink-0 bg-gradient-to-br from-[#453abc]/10 to-[#60c3e3]/10 overflow-hidden">
                  {member.image ? <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" /> : <div className="w-full h-full flex items-center justify-center text-3xl font-semibold text-[#453abc]">{getInitials(member.name)}</div>}
                </div>
                <div className="flex-1 p-5 md:p-8 flex flex-col justify-center">
                  <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#60c3e3] mb-1.5">{member.role}</div>
                  <h4 className="text-[22px] font-semibold text-[#191a23] mb-2">{member.name}</h4>
                  <p className="text-[14px] font-light text-[#6b7280] leading-[1.6]">
                    Driving excellence and innovation that powers efficiency and quality across all departments.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#453abc] to-[#60c3e3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Filter */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-1 p-1 bg-[#453abc]/5 border border-[#453abc]/10 rounded-[14px] max-w-full">
            {["all", "development", "marketing"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-[10px] text-[12px] font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab 
                  ? "bg-white text-[#453abc] shadow-[0_2_12_rgba(69,58,188,0.12)]" 
                  : "text-[#6b7280] hover:text-[#453abc] hover:bg-white/50"
                }`}
              >
                {tab === "all" && <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="19" r="2"/></svg>}
                {tab === "development" && <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
                {tab === "marketing" && <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>}
                {tab.charAt(0).toUpperCase() + tab.slice(1)} {tab !== "all" && "Team"}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="w-full space-y-16"
            >
              {/* Department Heads */}
              {(activeTab === "all" || activeTab === "development" || activeTab === "marketing") && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[10px] font-medium tracking-widest uppercase text-[#c4c6d0] after:flex-1 after:h-[1px] after:bg-[#453abc]/10">
                    Department Heads
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {(activeTab === "all" || activeTab === "development") && devTeam.head.map((m, i) => (
                      <div key={i} className="rounded-[24px] border border-[#453abc]/12 bg-white/65 backdrop-blur-[16px] flex flex-row items-stretch transition-all duration-300 overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(69,58,188,0.12)] min-h-[180px] md:min-h-[220px]">
                        <div className="w-[120px] md:w-[160px] shrink-0 bg-[#f3f4f6] overflow-hidden">
                          {m.image ? <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" /> : <div className="w-full h-full flex items-center justify-center text-[26px] font-semibold text-[#453abc]">{getInitials(m.name)}</div>}
                        </div>
                        <div className="flex-1 p-5 md:p-8 flex flex-col justify-center">
                          <span className="inline-block w-fit px-3 py-0.5 rounded-full text-[9px] font-medium tracking-wider uppercase bg-[#453abc]/8 text-[#453abc] mb-3">Development</span>
                          <h5 className="text-[21px] font-semibold text-[#191a23] mb-1">{m.name}</h5>
                          {m.name === "Mubashir Ahmad Hamza" && <div className="text-[13px] font-light text-[#6b7280] mb-1">Full Stack Developer</div>}
                          <div className="text-[12px] font-medium tracking-wider uppercase text-[#60c3e3] mb-3">{m.role}</div>
                          <p className="text-[13px] font-light text-[#9ca3af] leading-relaxed mb-4">Leading the development team to build scalable, high-performance digital solutions.</p>
                          {m.skills && m.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {m.skills.slice(0, 5).map((skill, si) => (
                                <span key={si} className="px-2.5 py-0.5 rounded-full text-[9px] font-medium bg-[#453abc]/5 text-[#453abc]/70 border border-[#453abc]/10">{skill}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {(activeTab === "all" || activeTab === "marketing") && mktTeam.head.map((m, i) => (
                      <div key={i} className="rounded-[24px] border border-[#453abc]/12 bg-white/65 backdrop-blur-[16px] flex flex-row items-stretch transition-all duration-300 overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(69,58,188,0.12)] min-h-[180px] md:min-h-[220px]">
                        <div className="w-[120px] md:w-[160px] shrink-0 bg-[#f3f4f6] overflow-hidden">
                          {m.image ? <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" /> : <div className="w-full h-full flex items-center justify-center text-[26px] font-semibold text-[#453abc]">{getInitials(m.name)}</div>}
                        </div>
                        <div className="flex-1 p-5 md:p-8 flex flex-col justify-center">
                          <span className="inline-block w-fit px-3 py-0.5 rounded-full text-[9px] font-medium tracking-wider uppercase bg-[#60c3e3]/10 text-[#0e7490] mb-3">Marketing</span>
                          <h5 className="text-[21px] font-semibold text-[#191a23] mb-1">{m.name}</h5>
                          <div className="text-[12px] font-medium tracking-wider uppercase text-[#60c3e3] mb-3">{m.role}</div>
                          <p className="text-[13px] font-light text-[#9ca3af] leading-relaxed mb-4">Driving brand growth and market presence through strategic marketing initiatives.</p>
                          {m.skills && m.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {m.skills.slice(0, 5).map((skill, si) => (
                                <span key={si} className="px-2.5 py-0.5 rounded-full text-[9px] font-medium bg-[#60c3e3]/5 text-[#0e7490]/70 border border-[#60c3e3]/10">{skill}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Senior Team */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[10px] font-medium tracking-widest uppercase text-[#c4c6d0] after:flex-1 after:h-[1px] after:bg-[#453abc]/10">
                  Senior Team
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(activeTab === "all" || activeTab === "development") && devTeam.senior.map((m, i) => (
                    <div key={i} className="rounded-[24px] border border-[#453abc]/8 bg-white/60 backdrop-blur-[12px] flex flex-row items-stretch transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:border-[#453abc]/20 hover:shadow-[0_15px_35px_rgba(69,58,188,0.1)] relative overflow-hidden group min-h-[140px] md:min-h-[180px]">
                      <div className="w-[100px] md:w-[120px] shrink-0 bg-gradient-to-br from-[#453abc]/8 to-[#60c3e3]/12 overflow-hidden transition-all duration-300">
                        {m.image ? <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" /> : <div className="w-full h-full flex items-center justify-center text-[28px] font-semibold text-[#453abc]">{getInitials(m.name)}</div>}
                      </div>
                      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center overflow-hidden">
                        <h5 className="text-[20px] font-semibold text-[#191a23] mb-1 truncate">{m.name}</h5>
                        <div className="text-[13px] font-light text-[#9ca3af] mb-2.5 truncate">{m.role}</div>
                        <span className="inline-block w-fit px-3.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-[#453abc]/8 text-[#453abc] mb-3">Development</span>
                        {m.skills && m.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {m.skills.slice(0, 3).map((skill, si) => (
                              <span key={si} className="px-2 py-0.5 rounded-full text-[8.5px] font-medium bg-[#453abc]/5 text-[#453abc]/70 border border-[#453abc]/10">{skill}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {(activeTab === "all" || activeTab === "marketing") && mktTeam.senior.map((m, i) => (
                    <div key={i} className="rounded-[24px] border border-[#453abc]/8 bg-white/60 backdrop-blur-[12px] flex flex-row items-stretch transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:border-[#453abc]/20 hover:shadow-[0_15px_35px_rgba(69,58,188,0.1)] relative overflow-hidden group min-h-[140px] md:min-h-[180px]">
                      <div className="w-[100px] md:w-[120px] shrink-0 bg-gradient-to-br from-[#453abc]/8 to-[#60c3e3]/12 overflow-hidden transition-all duration-300">
                        {m.image ? <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" /> : <div className="w-full h-full flex items-center justify-center text-[28px] font-semibold text-[#453abc]">{getInitials(m.name)}</div>}
                      </div>
                      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center overflow-hidden">
                        <h5 className="text-[20px] font-semibold text-[#191a23] mb-1 truncate">{m.name}</h5>
                        <div className="text-[13px] font-light text-[#9ca3af] mb-2.5 truncate">{m.role}</div>
                        <span className="inline-block w-fit px-3.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-[#60c3e3]/10 text-[#0e7490] mb-3">Marketing</span>
                        {m.skills && m.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {m.skills.slice(0, 3).map((skill, si) => (
                              <span key={si} className="px-2 py-0.5 rounded-full text-[8.5px] font-medium bg-[#60c3e3]/5 text-[#0e7490]/70 border border-[#60c3e3]/10">{skill}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Junior Team */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[10px] font-medium tracking-widest uppercase text-[#c4c6d0] after:flex-1 after:h-[1px] after:bg-[#453abc]/10">
                  Junior Team
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(activeTab === "all" || activeTab === "development") && devTeam.junior.map((m, i) => (
                    <div key={i} className="rounded-[24px] border border-[#453abc]/8 bg-white/60 backdrop-blur-[12px] flex flex-row items-stretch transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:border-[#453abc]/20 hover:shadow-[0_15px_35px_rgba(69,58,188,0.1)] relative overflow-hidden group min-h-[140px] md:min-h-[180px]">
                      <div className="w-[100px] md:w-[120px] shrink-0 bg-gradient-to-br from-[#453abc]/8 to-[#60c3e3]/12 overflow-hidden transition-all duration-300">
                        {m.image ? <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" /> : <div className="w-full h-full flex items-center justify-center text-[28px] font-semibold text-[#453abc]">{getInitials(m.name)}</div>}
                      </div>
                      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center overflow-hidden">
                        <h5 className="text-[20px] font-semibold text-[#191a23] mb-1 truncate">{m.name}</h5>
                        <div className="text-[13px] font-light text-[#9ca3af] mb-2.5 truncate">{m.role}</div>
                        <span className="inline-block w-fit px-3.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-[#453abc]/8 text-[#453abc] mb-3">Development</span>
                        {m.skills && m.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {m.skills.slice(0, 3).map((skill, si) => (
                              <span key={si} className="px-2 py-0.5 rounded-full text-[8.5px] font-medium bg-[#453abc]/5 text-[#453abc]/70 border border-[#453abc]/10">{skill}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {(activeTab === "all" || activeTab === "marketing") && mktTeam.junior.map((m, i) => (
                    <div key={i} className="rounded-[24px] border border-[#453abc]/8 bg-white/60 backdrop-blur-[12px] flex flex-row items-stretch transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:border-[#453abc]/20 hover:shadow-[0_15px_35px_rgba(69,58,188,0.1)] relative overflow-hidden group min-h-[140px] md:min-h-[180px]">
                      <div className="w-[100px] md:w-[120px] shrink-0 bg-gradient-to-br from-[#453abc]/8 to-[#60c3e3]/12 overflow-hidden transition-all duration-300">
                        {m.image ? <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" /> : <div className="w-full h-full flex items-center justify-center text-[28px] font-semibold text-[#453abc]">{getInitials(m.name)}</div>}
                      </div>
                      <div className="flex-1 p-4 md:p-6 flex flex-col justify-center overflow-hidden">
                        <h5 className="text-[20px] font-semibold text-[#191a23] mb-1 truncate">{m.name}</h5>
                        <div className="text-[13px] font-light text-[#9ca3af] mb-2.5 truncate">{m.role}</div>
                        <span className="inline-block w-fit px-3.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-[#60c3e3]/10 text-[#0e7490] mb-3">Marketing</span>
                        {m.skills && m.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {m.skills.slice(0, 3).map((skill, si) => (
                              <span key={si} className="px-2 py-0.5 rounded-full text-[8.5px] font-medium bg-[#60c3e3]/5 text-[#0e7490]/70 border border-[#60c3e3]/10">{skill}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interns */}
              {(devTeam.intern.length > 0 || mktTeam.intern.length > 0) && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[10px] font-medium tracking-widest uppercase text-[#c4c6d0] after:flex-1 after:h-[1px] after:bg-[#453abc]/10">
                    Interns
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(activeTab === "all" || activeTab === "development") && devTeam.intern.map((m, i) => (
                      <div key={i} className="rounded-[24px] border border-[#453abc]/8 bg-white/60 backdrop-blur-[12px] flex flex-row items-stretch transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:border-[#453abc]/20 hover:shadow-[0_15px_35px_rgba(69,58,188,0.1)] relative overflow-hidden group min-h-[140px] md:min-h-[180px]">
                        <div className="w-[100px] md:w-[120px] shrink-0 bg-gradient-to-br from-[#453abc]/8 to-[#60c3e3]/12 overflow-hidden transition-all duration-300">
                          {m.image ? <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" /> : <div className="w-full h-full flex items-center justify-center text-[28px] font-semibold text-[#453abc]">{getInitials(m.name)}</div>}
                        </div>
                        <div className="flex-1 p-4 md:p-6 flex flex-col justify-center overflow-hidden">
                          <h5 className="text-[20px] font-semibold text-[#191a23] mb-1 truncate">{m.name}</h5>
                          <div className="text-[13px] font-light text-[#9ca3af] mb-2.5 truncate">{m.role}</div>
                          <span className="inline-block w-fit px-3.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-[#453abc]/8 text-[#453abc] mb-3">Development</span>
                          {m.skills && m.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-auto">
                              {m.skills.slice(0, 3).map((skill, si) => (
                                <span key={si} className="px-2 py-0.5 rounded-full text-[8.5px] font-medium bg-[#453abc]/5 text-[#453abc]/70 border border-[#453abc]/10">{skill}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {(activeTab === "all" || activeTab === "marketing") && mktTeam.intern.map((m, i) => (
                      <div key={i} className="rounded-[24px] border border-[#453abc]/8 bg-white/60 backdrop-blur-[12px] flex flex-row items-stretch transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:border-[#453abc]/20 hover:shadow-[0_15px_35px_rgba(69,58,188,0.1)] relative overflow-hidden group min-h-[140px] md:min-h-[180px]">
                        <div className="w-[100px] md:w-[120px] shrink-0 bg-gradient-to-br from-[#453abc]/8 to-[#60c3e3]/12 overflow-hidden transition-all duration-300">
                          {m.image ? <img src={m.image} alt={m.name} className="w-full h-full object-cover object-top" /> : <div className="w-full h-full flex items-center justify-center text-[28px] font-semibold text-[#453abc]">{getInitials(m.name)}</div>}
                        </div>
                        <div className="flex-1 p-4 md:p-6 flex flex-col justify-center overflow-hidden">
                          <h5 className="text-[20px] font-semibold text-[#191a23] mb-1 truncate">{m.name}</h5>
                          <div className="text-[13px] font-light text-[#9ca3af] mb-2.5 truncate">{m.role}</div>
                          <span className="inline-block w-fit px-3.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-[#60c3e3]/10 text-[#0e7490] mb-3">Marketing</span>
                          {m.skills && m.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-auto">
                              {m.skills.slice(0, 3).map((skill, si) => (
                                <span key={si} className="px-2 py-0.5 rounded-full text-[8.5px] font-medium bg-[#60c3e3]/5 text-[#0e7490]/70 border border-[#60c3e3]/10">{skill}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TeamOption1;

