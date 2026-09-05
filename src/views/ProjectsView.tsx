import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { Project, ActivePage } from '../types';
import { ArrowRight, MapPin, Calendar, Clock, CheckCircle } from 'lucide-react';

interface ProjectsViewProps {
  setActivePage: (page: ActivePage) => void;
  onOpenConsultation: () => void;
  onOpenProjectLightbox?: (project: Project) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  setActivePage,
  onOpenConsultation,
  onOpenProjectLightbox
}) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(PROJECTS[0]);

  return (
    <div id="projects-page" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#24221F]">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <h1 className="font-serif-editorial text-4xl sm:text-6xl text-[#24221F] mb-4">
            SPACES WE'VE TRANSFORMED.
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#756557] leading-relaxed font-light">
            Every project starts from a different brief — a bare grey structure, a dated kitchen, a single accent wall. What they share is a finished result that looks intentional, not assembled.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {PROJECTS.map((proj) => {
            const isSelected = selectedProject?.id === proj.id;
            return (
              <div
                key={proj.id}
                onClick={() => {
                  setSelectedProject(proj);
                  if (onOpenProjectLightbox) onOpenProjectLightbox(proj);
                }}
                className={`group cursor-pointer bg-[#F5F2EC] border rounded p-5 transition-all duration-300 ${
                  isSelected ? 'border-[#24221F] shadow-lg bg-[#FAF8F5]' : 'border-[#E2DACF] hover:border-[#24221F]'
                }`}
              >
                <div className="aspect-[4/3] bg-[#E7E1D8] overflow-hidden rounded mb-4">
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#24221F] block mb-1">
                  {proj.label}
                </span>
                <span className="text-xs text-[#756557] block mb-2 flex items-center gap-1">
                  <MapPin size={12} /> {proj.location}
                </span>
                <h3 className="font-serif-editorial text-xl text-[#24221F] font-semibold mb-2">
                  {proj.title}
                </h3>
                <div className="text-xs font-semibold text-[#24221F] group-hover:underline flex items-center justify-between pt-2 border-t border-[#E2DACF]">
                  <span>View Project Detail</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* PROJECT DETAIL INTRO Display */}
        {selectedProject && (
          <div id="project-detail-section" className="bg-[#F5F2EC] border border-[#E2DACF] rounded p-8 sm:p-12">
            <div className="max-w-4xl mb-8">
              <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#24221F] mb-4">
                A SPACE, REIMAGINED.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#24221F] leading-relaxed font-light">
                What began as <strong className="font-semibold text-[#24221F] underline">{selectedProject.startingCondition}</strong> became an interior built around <strong className="font-semibold text-[#24221F] underline">{selectedProject.concreteOutcomes}</strong>.
              </p>
            </div>

            {/* Project Specs Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6 bg-[#FAF8F5] border border-[#E2DACF] rounded mb-8 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] font-semibold block mb-1">Project</span>
                <span className="font-semibold text-[#24221F]">{selectedProject.title}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] font-semibold block mb-1">Location</span>
                <span className="font-semibold text-[#24221F]">{selectedProject.location}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] font-semibold block mb-1">Type</span>
                <span className="font-semibold text-[#24221F]">{selectedProject.type}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] font-semibold block mb-1">Services</span>
                <span className="font-semibold text-[#24221F]">{selectedProject.servicesUsed.join(', ')}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] font-semibold block mb-1">Timeline</span>
                <span className="font-semibold text-[#24221F]">{selectedProject.timeline}</span>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {selectedProject.gallery.map((img, i) => (
                <div key={i} className="aspect-[4/3] bg-[#E7E1D8] overflow-hidden rounded border border-[#E2DACF]">
                  <img src={img} alt={`${selectedProject.title} ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  setActivePage('quote');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#24221F] text-[#FAF8F5] hover:bg-[#3D3A36] text-xs uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded cursor-pointer"
              >
                REQUEST PROJECT QUOTE →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
