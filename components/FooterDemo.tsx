import { Hexagon, Github, Twitter } from "lucide-react"
import { Footer } from "@/components/ui/footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";


function Demo() {
  return (
    <div className="w-full">
      <Footer
        logo={<Hexagon className="h-10 w-10" />}
        brandName="Awesome Corp"
        socialLinks={[
          {
            icon: <FontAwesomeIcon icon={faInstagram} className="text-neutral-300"/>,
            href: "https://twitter.com",
            label: "Twitter",
          },
                    {
            icon:     <FontAwesomeIcon icon={faLinkedin} className="text-neutral-300" />,
            href: "https://github.com",
            label: "GitHub",
          },
          {
            icon:     <FontAwesomeIcon icon={faTwitter} className="text-neutral-300" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/products", label: "Products" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Scooter AI",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}

export { Demo }