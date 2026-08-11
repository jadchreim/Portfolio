import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { skillGroups } from "@/lib/data";
import { LayersIcon, ServerIcon, WrenchIcon, ShieldIcon, BriefcaseIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Skills - Jad Chreim",
};

const groupIcons = [LayersIcon, ServerIcon, WrenchIcon, ShieldIcon, BriefcaseIcon];

export default function SkillsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Skills"
        title="Systems & practices"
        description="Grouped by the part of the job each one supports."
      />

      <section className="mx-auto max-w-container px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[i % groupIcons.length];
            return (
              <section
                key={group.title}
                className="rounded-2xl border border-line bg-panel shadow-card dark:border-line-dark dark:bg-panel-dark dark:shadow-card-dark"
              >
                <div className="flex items-center gap-3 border-b border-line p-5 dark:border-line-dark">
                  <Icon className="h-[18px] w-[18px] text-accent" strokeWidth={1.9} />
                  <h2 className="text-[15.5px] font-semibold text-ink dark:text-ink-dark">
                    {group.title}
                  </h2>
                  <span className="ml-auto font-mono text-[11px] font-medium text-muted dark:text-muted-dark">
                    {group.skills.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 p-5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-line px-2.5 py-1.5 text-[13px] font-medium text-ink dark:border-line-dark dark:text-ink-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
}
