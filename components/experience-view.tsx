"use client";

import { useState } from "react";
import { Tabs } from "./tabs";
import { experience, education } from "@/lib/data";
import { CheckIcon } from "./icons";

export function ExperienceView() {
  const [tab, setTab] = useState("experience");

  return (
    <div>
      <Tabs
        value={tab}
        onChange={setTab}
        options={[
          { label: "Experience", value: "experience" },
          { label: "Education", value: "education" },
        ]}
      />

      {tab === "experience" ? (
        <div className="space-y-6">
          {experience.map((job) => (
            <article
              key={job.role + job.period}
              className="animate-fade-up overflow-hidden rounded-2xl border border-line bg-panel shadow-card dark:border-line-dark dark:bg-panel-dark dark:shadow-card-dark"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line p-6 dark:border-line-dark">
                <div>
                  <h3 className="text-[17px] font-semibold text-ink dark:text-ink-dark">
                    {job.role}
                  </h3>
                  <a
                    href={job.companyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-accent hover:underline"
                  >
                    {job.company}
                  </a>
                </div>
                <span className="whitespace-nowrap rounded-full border border-line px-3 py-1 font-mono text-[11.5px] font-medium text-muted dark:border-line-dark dark:text-muted-dark">
                  {job.period}
                </span>
              </div>

              {job.groups && (
                <div className="divide-y divide-line dark:divide-line-dark">
                  {job.groups.map((group) => (
                    <div key={group.title} className="p-6">
                      <p className="mb-3 text-[13.5px] font-semibold text-ink dark:text-ink-dark">
                        {group.title}
                      </p>
                      <ul className="space-y-2.5">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
                            <span className="text-[14px] leading-relaxed text-muted dark:text-muted-dark">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {education.map((entry) => (
            <article
              key={entry.school + entry.period}
              className="animate-fade-up rounded-2xl border border-line bg-panel p-6 shadow-card dark:border-line-dark dark:bg-panel-dark dark:shadow-card-dark"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-[16px] font-semibold text-ink dark:text-ink-dark">
                    {entry.program}
                  </h3>
                  <a
                    href={entry.schoolHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-medium text-accent hover:underline"
                  >
                    {entry.school}
                  </a>
                  {entry.detail && (
                    <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted dark:text-muted-dark">
                      {entry.detail}
                    </p>
                  )}
                </div>
                <span className="whitespace-nowrap rounded-full border border-line px-3 py-1 font-mono text-[11.5px] font-medium text-muted dark:border-line-dark dark:text-muted-dark">
                  {entry.period}
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
