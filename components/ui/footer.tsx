import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { InfiniteSlider } from "./infinite-slider";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  socialLinks: Array<{
    icon: React.ReactNode;
    href: string;
    label: string;
  }>;
  mainLinks: Array<{
    href: string;
    label: string;
  }>;
  legalLinks: Array<{
    href: string;
    label: string;
  }>;
  copyright: {
    text: string;
    license?: string;
  };
}

const font = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-16 flex flex-col items-center lg:pb-8 lg:pt-24 bg-neutral-900 rounded-md text-white m-2">
      <div className="flex flex-col gap-4 items-center text-center">
        <h1 className={`lg:text-5xl font-medium text-5xl`}>
          Ready to get started?
        </h1>
        <p className="text-md text-zinc-300">Let’s find your next great seller.</p>
        <Button className="bg-gradient-to-b flex items-center gap-2 from-neutral-100 to-zinc-400 text-black px-6 rounded-full shadow-md transition-all duration-400 hover:shadow-inner hover:shadow-neutral-300">
          Get started
          <ArrowRight />
        </Button>
      </div>
      <div className="px-6 lg:px-[6rem] flex flex-col w-full py-[6rem]">
        <div className="md:flex md:items-start md:justify-between">
          <a
            href="/"
            className="flex items-center gap-x-2"
            aria-label={brandName}
          >
            <Image src="/logo.png" alt="Logo" width={40} height={40} />

            <h1 className="text-2xl text-neutral-200 font-medium ">Scooter</h1>
          </a>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  size="icon"
                  className=""
                  asChild
                >
                  <a href={link.href} target="_blank" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0 text-neutral-300">
                  <a
                    href={link.href}
                    className="text-sm underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-sm leading-6 text-muted-foreground whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>{copyright.text}</div>
            {copyright.license && <div>{copyright.license}</div>}
          </div>
        </div>
      </div>
<InfiniteSlider
  gap={50}
  duration={50}
  className="flex flex-col items-center justify-center gap-6 text-center w-full opacity-50"
>
  <Image
    src="/pop.png"
    alt="Pop"
    width={400}
    height={800}
    className="filter grayscale"
  />
  <Image
    src="/pop.png"
    alt="Pop"
    width={400}
    height={800}
    className="filter grayscale"
  />
  <Image
    src="/pop.png"
    alt="Pop"
    width={400}
    height={800}
    className="filter grayscale"
  />
    <Image
    src="/pop.png"
    alt="Pop"
    width={400}
    height={800}
    className="filter grayscale"
  />
    <Image
    src="/pop.png"
    alt="Pop"
    width={400}
    height={800}
    className="filter grayscale"
  />
</InfiniteSlider>

    </footer>
  );
}
