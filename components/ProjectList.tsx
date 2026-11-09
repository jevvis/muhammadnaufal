'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-emerald-600', 'bg-blue-600', 'bg-teal-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-teal-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Redo Ratio BWF Menuju Sigma Level 5", en: "BWF Redo Ratio to Sigma Level 5" },
    description: { id: "Defect rate perakitan hose turun 12,9% dan Sigma Level naik dari 4,99 menjadi 5,02.", en: "Hose assembly defect rate down 12.9% and Sigma Level up from 4.99 to 5.02." },
    framework: "PT BINA PERTIWI 2026",
    techStack: ["Six Sigma", "Poka-Yoke"],
  },
  {
    number: '02',
    title: { id: "JWF Lean Implementation", en: "JWF Lean Implementation" },
    description: { id: "Kapasitas produksi naik 33% dan line balance score dari 61% menjadi 87%.", en: "Production capacity up 33% and line balance score from 61% to 87%." },
    framework: "PT BINA PERTIWI 2024 — 2025",
    techStack: ["Lean", "Kaizen"],
  },
  {
    number: '03',
    title: { id: "Percepatan Lead Time Instalasi", en: "Installation Lead Time Acceleration" },
    description: { id: "Lead time instalasi turun 42%, dari 19 hari menjadi 11 hari, melalui eliminasi pemborosan.", en: "Installation lead time down 42%, from 19 days to 11 days, through waste elimination." },
    framework: "PT BINA PERTIWI 2023 — 2024",
    techStack: ["Waste Elimination", "OTIF"],
  },
  {
    number: '04',
    title: { id: "Peningkatan Pangsa Pasar Optional", en: "Optional Market Share Improvement" },
    description: { id: "Pangsa pasar Optional naik dari 22% menjadi 47% melalui peningkatan Installation OTIF.", en: "Optional market share up from 22% to 47% by raising Installation OTIF." },
    framework: "PT BINA PERTIWI 2023",
    techStack: ["Market Share", "OTIF"],
  },
  {
    number: '05',
    title: { id: "Operasional Perakitan Hose", en: "Hose Assembly Operations" },
    description: { id: "Mengawasi perakitan hose dengan target keselamatan, kualitas, pengiriman, dan produktivitas hingga 10.000 unit.", en: "Supervising hose assembly against safety, quality, delivery, and productivity targets of up to 10,000 units." },
    framework: "PT BINA PERTIWI BALIKPAPAN",
    techStack: ["Hose Assembly", "KPI"],
  },
  {
    number: '06',
    title: { id: "Operasional Produksi Alat Berat", en: "Heavy Equipment Production Operations" },
    description: { id: "Memimpin 50+ operator dan mekanik pada 3 kelompok lini produk, hingga 400 unit per bulan.", en: "Leading 50+ operators and mechanics across 3 product line groups, up to 400 units per month." },
    framework: "PT BINA PERTIWI JAKARTA",
    techStack: ["50+ People", "Line Balancing"],
  },
  {
    number: '07',
    title: { id: "Juara 1 Bina Pertiwi Innovation Challenge 2026", en: "1st Place Bina Pertiwi Innovation Challenge 2026" },
    description: { id: "Pemenang kategori QCC - Reimplementasi bersama Tim VAS Improvement.", en: "Winner of the QCC - Reimplementation category with the VAS Improvement Team." },
    framework: "PENGHARGAAN 2026",
    techStack: ["QCC", "Lean"],
  },
  {
    number: '08',
    title: { id: "Platinum Award Continuous Improvement Convention 2025", en: "Platinum Award Continuous Improvement Convention 2025" },
    description: { id: "Platinum Award pada Stream Lean, Yogyakarta, September 2025.", en: "Platinum Award in the Lean Stream, Yogyakarta, September 2025." },
    framework: "PENGHARGAAN 2025",
    techStack: ["Lean", "CIC"],
  },
  {
    number: '09',
    title: { id: "Juara 2 Bina Pertiwi Innovation Challenge 2025", en: "2nd Place Bina Pertiwi Innovation Challenge 2025" },
    description: { id: "Tim Gemba Warrior, kategori QCP - Operational Excellence.", en: "Gemba Warrior Team, QCP - Operational Excellence category." },
    framework: "PENGHARGAAN 2025",
    techStack: ["QCP", "Gemba"],
  },
  {
    number: '10',
    title: { id: "Pemeliharaan Pesawat", en: "Aircraft Maintenance" },
    description: { id: "Pelepasan dan pemasangan komponen, inspeksi sistem hidraulik dan pneumatik, serta preventive maintenance.", en: "Component removal and installation, hydraulic and pneumatic system inspection, and preventive maintenance." },
    framework: "PT GMF AEROASIA",
    techStack: ["Airworthiness", "Hydraulics"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'LEAN & OPERATIONAL EXCELLENCE PORTFOLIO' : 'PORTOFOLIO LEAN & OPERATIONAL EXCELLENCE'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Production, Lean Six Sigma Projects & Awards' : 'Produksi, Proyek Lean Six Sigma & Penghargaan'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of production leadership, measurable improvement projects, and innovation awards.'
              : 'Rekam jejak kepemimpinan produksi, proyek perbaikan yang terukur, dan penghargaan inovasi.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
