'use client'
import { FaqSectionWithCategories } from "./faq-with-categories";

const DEMO_FAQS = [
  {
    question: "What kind of roles does scooter work for?",
    answer: " Scooter is purpose-built for sales roles — SDRs, AEs, inside sales, mid-market, enterprise, and more. If selling is core to the role, we’re built for it.",
    category: "Getting Started",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    category: "Billing",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
    category: "Pricing",
  },
  {
    question: "How can I contact support?",
    answer: "Our support team is available 24/7 through our help center, email support, or live chat. We typically respond within 2 hours.",
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