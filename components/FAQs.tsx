'use client'
import { FaqSectionWithCategories } from "./faq-with-categories";

const DEMO_FAQS = [
  {
    question: "What kind of roles does scooter work for?",
    answer: " Scooter is purpose-built for sales roles — SDRs, AEs, inside sales, mid-market, enterprise, and more. If selling is core to the role, we’re built for it.",
    category: "Getting Started",
  },
  {
    question: "How is this different from a recruiter or ATS?",
    answer: "Recruiters rely on gut feel. ATS systems just track applicants.Scooter brings structure, signal, and science — parsing resumes, assessing real traits, and delivering ranked shortlists so you spend time only on reps worth meeting.",
    category: "Billing",
  },
  {
    question: "What do you assess in candidates?",
    answer: "",
    category: "Pricing",
  },
    {
    question: "Is this is sourcing tool?",
    answer: "Not yet. Scooter starts at the top of the funnel — JD creation, application intake, and screening. Sourcing is on our roadmap.",
    category: "Pricing",
  },
  {
    question: "What do candidates think?",
    answer: " They love it. Candidates finally get to show how they sell — not just what they’ve sold. Even rejections come with clarity and respect.“This is the best hiring experience I’ve had.”",
    category: "Support",
  },
];

export function FaqSectionWithCategoriesDemo() {
  return (
    <FaqSectionWithCategories
      title="Have a question ? We've got you covered"
      description="Find answers to common questions about our services"
      items={DEMO_FAQS}
      contactInfo={{
        title: "Still have questions?",
        buttonText: "Contact Support",
        onContact: () => console.log("Contact support clicked"),
      }}
    />
  );
}