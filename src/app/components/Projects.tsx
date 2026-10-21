import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */
interface Project {
  title: string;
  tags: string[];
  description: string;
  url: string;
  impact?: string;
}

/* ─── Data ───────────────────────────────────────────────── */
const featured: Project = {
  title: "API Gateway",
  tags: ["Node.js", "Express.js", "MongoDB", "Redis", "JWT"],
  description:
    "Built a secure API Gateway to centralize authentication, API key management, and request forwarding. Added Redis-based rate limiting with usage tiers, request logging, and filterable, paginated analytics endpoints.",
  url: "https://github.com/RAJPRASHUL/api-gateway",
  impact: "Authentication · Tiered rate limiting · Request analytics",
};

const bentoProjects: (Project & { colSpan: number; rowSpan: number })[] = [
  {
    title: "Tiny URL — URL Shortener",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "Developed a full-stack URL shortener with custom aliases, collision-safe short codes, click analytics, QR code generation and downloads, and secure redirection. Includes input validation, centralized error handling, and security middleware.",
    url: "https://github.com/RAJPRASHUL/url_shortner",
    impact: "Custom aliases · Click analytics · QR codes",
    colSpan: 3,
    rowSpan: 1,
  },
  {
    title: "ProgressMap — Productivity Dashboard",
    tags: ["JavaScript"],
    description:
      "Built a productivity dashboard for tracking daily tasks, completion streaks, milestones, notes, and long-term progress, helping users monitor consistency and visualize progress toward personal goals.",
    url: "https://github.com/RAJPRASHUL/progressMap",
    impact: "Tasks · Streaks · Milestones",
    colSpan: 3,
    rowSpan: 1,
  },
];

/* ─── Shared button ──────────────────────────────────────── */
function ViewBtn({ url }: { url: string }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ boxShadow: "3px 3px 0px #1A1A1A", fontFamily: "var(--font-mono)" }}
      className="inline-flex items-center gap-2 bg-transparent border-[2px] border-[#1A1A1A] py-2 px-4 text-xs font-bold uppercase tracking-wider"
      whileHover={{ y: -2, boxShadow: "5px 5px 0px #1A1A1A", transition: { type: "spring", stiffness: 400 } }}
    >
      View Project <ExternalLink className="w-3 h-3" />
    </motion.a>
  );
}

/* ─── Bento card ─────────────────────────────────────────── */
function BentoCard({ project, index }: { project: typeof bentoProjects[0]; index: number }) {
  return (
    <motion.div
      className="project-card bg-[#F5F0E8] border-[2px] border-[#1A1A1A] p-4 flex flex-col overflow-hidden"
      style={{
        gridColumn: `span ${project.colSpan}`,
        gridRow: `span ${project.rowSpan}`,
        boxShadow: "3px 3px 0 #1A1A1A",
        borderRadius: 0,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: "8px 8px 0px #1A1A1A", transition: { duration: 0.2, ease: "easeOut" } }}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            style={{ fontFamily: "var(--font-mono)", fontSize: 10, border: "1.5px solid #1A1A1A", background: "#ffffff" }}
            className="px-2 py-[2px] font-bold uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-base sm:text-lg mb-2 leading-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p style={{ fontFamily: "var(--font-display)", fontSize: 12, marginBottom: "8px" }} className="leading-relaxed">
        {project.description}
      </p>

      {/* Impact */}
      {project.impact && (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 10 }} className="opacity-55 mb-3">
          {project.impact}
        </p>
      )}

      <ViewBtn url={project.url} />
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────── */
export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-12"
        >
          <span
            style={{ fontFamily: "var(--font-display)" }}
            className="absolute -left-4 -top-8 font-black text-[140px] leading-none opacity-[0.06] select-none z-0"
          >
            05
          </span>
          <h2 style={{ fontFamily: "var(--font-display)" }} className="relative z-10 font-black text-4xl sm:text-5xl">
            Projects
          </h2>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12 }} className="mt-2 opacity-50">
            Things I've built and shipped.
          </p>
        </motion.div>

        {/* ── FEATURED CARD ── */}
        <motion.div
          className="project-card border-[3px] border-[#1A1A1A] bg-[#F5F0E8] overflow-hidden mb-5 flex flex-col sm:flex-row"
          style={{ boxShadow: "7px 7px 0px #1A1A1A", minHeight: 180 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6, boxShadow: "10px 10px 0px #1A1A1A", transition: { duration: 0.2, ease: "easeOut" } }}
        >
          {/* Yellow accent block — top on mobile, right on desktop */}
          <div
            className="w-full sm:w-[40%] sm:order-last flex flex-col items-center justify-center py-8 sm:py-0"
            style={{ background: "#00B4D8", borderLeft: "0", borderBottom: "3px solid #1A1A1A" }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 28, fontWeight: 700, color: "#1A1A1A" }}>
              SECURE
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#1A1A1A" }} className="opacity-70 mt-1">
              API GATEWAY
            </span>
          </div>

          {/* Left content */}
          <div className="flex-1 p-6 flex flex-col justify-between" style={{ borderRight: "3px solid #1A1A1A" }}>
            <div>
              <p
                style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.15em" }}
                className="uppercase opacity-50 mb-2"
              >
                Featured Project
              </p>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700 }} className="mb-3 leading-tight">
                {featured.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {featured.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      fontWeight: 700,
                      background: "#00B4D8",
                      border: "2px solid #1A1A1A",
                      padding: "2px 8px",
                      color: "#1A1A1A",
                    }}
                    className="uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: 12 }} className="leading-relaxed mb-2">
                {featured.description}
              </p>

              {featured.impact && (
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10 }} className="opacity-55 mb-4">
                  {featured.impact}
                </p>
              )}
            </div>
            <ViewBtn url={featured.url} />
          </div>
        </motion.div>

        {/* ── BENTO GRID ── */}
        <p
          style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em" }}
          className="uppercase opacity-45 mb-3"
        >
          More Projects
        </p>

        {/* Desktop: 6-col CSS grid */}
        <div
          className="hidden sm:grid gap-[14px]"
          style={{ gridTemplateColumns: "repeat(6, 1fr)" }}
        >
          {bentoProjects.map((project, index) => (
            <BentoCard key={index} project={project} index={index} />
          ))}
          {/* Always building tile */}
          <motion.div
            className="bg-[#00B4D8] border-[2px] border-[#1A1A1A] p-4 flex flex-col justify-between"
            style={{ gridColumn: "span 1", gridRow: "span 1", boxShadow: "3px 3px 0 #1A1A1A", borderRadius: 0 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -6, boxShadow: "8px 8px 0px #1A1A1A", transition: { duration: 0.2, ease: "easeOut" } }}
          >
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }} className="opacity-50 mb-1">
                MORE COMING
              </p>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-lg mb-4">
                Always building.
              </h3>
            </div>
            <motion.a
              href="https://github.com/RAJPRASHUL"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", boxShadow: "3px 3px 0 #1A1A1A" }}
              className="inline-flex items-center gap-1 border-[2px] border-[#1A1A1A] bg-transparent py-2 px-4 text-xs font-bold uppercase tracking-wider self-start"
              whileHover={{ y: -2, boxShadow: "5px 5px 0 #1A1A1A", transition: { type: "spring", stiffness: 400 } }}
            >
              GitHub ↗
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile: single column stack */}
        <div className="flex flex-col gap-4 sm:hidden">
          {bentoProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-[#F5F0E8] border-[2px] border-[#1A1A1A] p-4 flex flex-col"
              style={{ boxShadow: "3px 3px 0 #1A1A1A" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    style={{ fontFamily: "var(--font-mono)", fontSize: 10, border: "1.5px solid #1A1A1A", background: "#ffffff" }}
                    className="px-2 py-[2px] font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-lg mb-2">
                {project.title}
              </h3>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 12 }} className="leading-relaxed mb-2 flex-1">
                {project.description}
              </p>
              {project.impact && (
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 10 }} className="opacity-55 mb-3">
                  {project.impact}
                </p>
              )}
              <ViewBtn url={project.url} />
            </motion.div>
          ))}
          {/* Always building — mobile */}
          <div
            className="bg-[#00B4D8] border-[2px] border-[#1A1A1A] p-4 flex flex-col gap-3"
            style={{ boxShadow: "3px 3px 0 #1A1A1A" }}
          >
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }} className="opacity-50">
              MORE COMING
            </p>
            <h3 style={{ fontFamily: "var(--font-display)" }} className="font-black text-lg">
              Always building.
            </h3>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 12 }} className="leading-relaxed">
              New projects ship regularly. Check GitHub for latest work.
            </p>
            <motion.a
              href="https://github.com/RAJPRASHUL"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono)", boxShadow: "3px 3px 0 #1A1A1A" }}
              className="inline-flex items-center gap-1 border-[2px] border-[#1A1A1A] bg-transparent py-2 px-4 text-xs font-bold uppercase tracking-wider self-start"
              whileHover={{ y: -2, boxShadow: "5px 5px 0 #1A1A1A", transition: { type: "spring", stiffness: 400 } }}
            >
              GitHub ↗
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
