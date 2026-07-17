import { AboutEditorial } from "@/components/sections/AboutEditorial";
import { ContactCinematic } from "@/components/sections/ContactCinematic";
import { EngineeringPhilosophy } from "@/components/sections/EngineeringPhilosophy";
import { OpeningFilm } from "@/components/sections/OpeningFilm";
import { PillarMoment } from "@/components/sections/PillarMoment";
import { WorkReveal } from "@/components/sections/WorkReveal";
import { siteConfig } from "@/lib/data/site";

export default function Home() {
  const { pillars } = siteConfig;

  return (
    <>
      <OpeningFilm />
      <AboutEditorial />
      <PillarMoment
        id="craft"
        index="01"
        title={pillars.craft.title}
        lead={pillars.craft.lead}
        body={pillars.craft.body}
        image={pillars.craft.image}
        imagePosition={pillars.craft.imagePosition}
      />
      <EngineeringPhilosophy />
      <PillarMoment
        id="delivery"
        index="03"
        title={pillars.delivery.title}
        lead={pillars.delivery.lead}
        body={pillars.delivery.body}
        image={pillars.delivery.image}
        imagePosition={pillars.delivery.imagePosition}
      />
      <WorkReveal />
      <ContactCinematic />
    </>
  );
}
