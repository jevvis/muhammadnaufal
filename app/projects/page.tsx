import Navbar from '@/components/Navbar'
import ProjectList from '@/components/ProjectList'

export const metadata = {
  title: 'Pengalaman & Portofolio | Muhammad Naufal Ammar',
  description: 'Portofolio proyek Lean Six Sigma, pengalaman produksi, dan penghargaan inovasi',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <ProjectList />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)] mt-20">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Muhammad Naufal Ammar All rights reserved.
        </p>
      </footer>
    </main>
  )
}
