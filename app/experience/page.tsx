import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ExperienceView } from "@/components/experience-view";

export const metadata: Metadata = {
  title: "Experience - Jad Chreim",
};

export default function ExperiencePage() {
  return (
    <div>
      <PageHero
        eyebrow="Experience"
        title="Work & education"
        description="Roles held and where they were built on."
      />
      <section className="mx-auto max-w-container px-5 py-16 sm:px-8 sm:py-20">
        <ExperienceView />
      </section>
    </div>
  );
}
