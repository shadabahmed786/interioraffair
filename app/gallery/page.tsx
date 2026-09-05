'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Calendar, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { PROJECTS_LIST, ProjectItem } from '@/lib/constants';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Chip } from '@/components/ui/Chip';

const CATEGORIES = ['All', 'Complete Turnkey', 'Residential', 'Kitchen & Wardrobes', 'Walls & Ceilings'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="w-full bg-[#FAF8F5] text-[#24221F] pb-24">
      {/* Header */}
      <section className="py-20 sm:py-24 bg-[#F5F2EC] border-b border-[#E2DACF]">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#756557] block mb-3">
              TRANSFORMED RESIDENCES
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#24221F] mb-6">
              Our Completed Projects
            </h1>
            <p className="text-sm sm:text-base text-[#756557] font-light leading-relaxed">
              Every project represents a transition from bare grey structure to a refined, cohesive sanctuary executed across Islamabad, Rawalpindi, and Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16 border-b border-[#E2DACF]">
        <div className="flex flex-wrap gap-2.5 items-center">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#756557] mr-3">
            Filter:
          </span>
          {CATEGORIES.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <Card key={project.id} variant="cream" className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Hero Image */}
                <div
                  className="aspect-[16/10] bg-[#E7E1D8] overflow-hidden rounded mb-6 relative group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="dark">{project.category}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-[#FAF8F5] text-[10px] uppercase tracking-widest px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    View Gallery & Details
                  </div>
                </div>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#756557] mb-3">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#24221F]" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#24221F]" />
                    {project.timeline}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#24221F]" />
                    {project.year}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl text-[#24221F] mb-3 font-semibold">
                  {project.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#756557] leading-relaxed font-light mb-4">
                  {project.brief}
                </p>

                {/* Materials & Services */}
                <div className="space-y-3 pt-3 border-t border-[#E2DACF] mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] font-semibold block mb-1">
                      Key Materials:
                    </span>
                    <p className="text-xs text-[#24221F] font-medium">{project.materials}</p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#756557] font-semibold block mb-1.5">
                      Services Executed:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#F5F2EC] text-[#24221F] border border-[#E2DACF] rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E2DACF]">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs uppercase tracking-[0.18em] font-semibold text-[#24221F] hover:underline cursor-pointer"
                >
                  View Photo Gallery →
                </button>
                <Button
                  variant="whatsapp"
                  size="sm"
                  href={`https://wa.me/923008504499?text=${encodeURIComponent(`Hi Interior Affairs, I am interested in a scope similar to your "${project.title}" project in ${project.location}.`)}`}
                  isExternal
                  icon={<MessageCircle size={14} />}
                >
                  Enquire Similar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Gallery Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#FAF8F5] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded p-6 sm:p-10 border border-[#E2DACF]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-[#E2DACF] mb-6">
              <div>
                <Badge variant="stone" className="mb-2">{selectedProject.category}</Badge>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#24221F] font-semibold">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-[#756557] mt-1">
                  {selectedProject.location} · {selectedProject.timeline}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="text-xs uppercase tracking-widest px-3 py-1.5 border border-[#24221F] hover:bg-[#24221F] hover:text-[#FAF8F5] rounded transition-colors"
              >
                Close ✕
              </button>
            </div>

            {/* Gallery Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {selectedProject.gallery.map((img, i) => (
                <div key={i} className="aspect-[4/3] bg-[#E7E1D8] relative rounded overflow-hidden">
                  <Image
                    src={img}
                    alt={`${selectedProject.title} view ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#756557] font-light leading-relaxed mb-6">
              <p><strong className="text-[#24221F] font-semibold">Concept:</strong> {selectedProject.concept}</p>
              <p><strong className="text-[#24221F] font-semibold">Materials:</strong> {selectedProject.materials}</p>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-[#E2DACF]">
              <Button
                variant="whatsapp"
                size="md"
                href={`https://wa.me/923008504499?text=${encodeURIComponent(`Hi Interior Affairs, I reviewed the gallery for ${selectedProject.title} and want to discuss a similar project.`)}`}
                isExternal
                icon={<MessageCircle size={15} />}
              >
                Discuss This Project on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
