import ProjectHeader from "../components/ProjectHeader";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ApproachCard from "../components/ApproachCard";
import PaperNote from "../components/PaperNote";
import Button from "../components/Button";
import heroFinalPrototype from "../assets/pocket-shades/hero-final-prototype.webp";
import initialSketches from "../assets/pocket-shades/initial-sketches.webp";
import earlyConceptModel from "../assets/pocket-shades/early-concept-model.webp";
import outcomeAwardCertificate from "../assets/pocket-shades/outcome-award-certificate.webp";
import packagingFlat from "../assets/pocket-shades/packaging-flat.webp";
import targetAudience from "../assets/pocket-shades/target-audience.webp";
import packagingDetails from "../assets/pocket-shades/packaging-details.webp";
import packagingPrototype from "../assets/pocket-shades/packaging-prototype.webp";
import foldingSequence from "../assets/pocket-shades/folding-sequence.webp";
import chicagoScrews from "../assets/pocket-shades/chicago-screws.webp";
import foldingDesigns from "../assets/pocket-shades/folding-designs.webp";
import visualIdentity from "../assets/pocket-shades/visual-identity.webp";
import giantHeader from "../assets/pocket-shades/giant-header.webp";
import "./PocketShades.css";

type StaggeredImage = {
  label: string;
  caption: string;
  align: "start" | "center" | "end";
  widthPercent: number;
  aspectRatio: string;
  src?: string;
  alt?: string;
};

const foldingProcessImages: StaggeredImage[] = [
  {
    label: "pocket-shades-folding-designs.jpg — technical drawings and wireframe designs exploring the folding mechanism",
    caption: "Exploring different folding mechanisms for the sunglasses.",
    align: "end",
    widthPercent: 55,
    aspectRatio: "1512 / 632",
    src: foldingDesigns,
    alt: "Laser-cutting wireframe layout of the Pocket Shades frame, arms, and hinge pieces",
  },
  {
    label: "pocket-shades-folding-sequence.jpg — a single image of four photos showing the paper-and-popsicle-stick prototype at different stages of folding",
    caption:
      "Testing the folding mechanism with construction paper, popsicle sticks, and tape.",
    align: "start",
    widthPercent: 95,
    aspectRatio: "1544 / 530",
    src: foldingSequence,
    alt: "Four photos showing the paper-and-popsicle-stick prototype at different stages of folding, from flat to fully folded",
  },
  {
    label: "pocket-shades-chicago-screws.jpg — hardware components used in the higher-fidelity prototype",
    caption:
      "Hardware components used in developing the higher-fidelity prototype.",
    align: "end",
    widthPercent: 42,
    aspectRatio: "908 / 384",
    src: chicagoScrews,
    alt: "A 3D-printed Chicago screw hinge pin next to its digital design file, shown side by side",
  },
];

const responsibilities = [
  {
    emoji: "🎨",
    title: "Visual Identity",
    description:
      "I developed the overall visual direction for Pocket Shades, including its color palette, nature-inspired illustrations, and playful brand aesthetic.",
  },
  {
    emoji: "📦",
    title: "Packaging Design",
    description:
      "I designed the square packaging concept, visual packaging elements, and intended unboxing experience.",
  },
  {
    emoji: "📈",
    title: "Sales & Marketing",
    description:
      "I developed the proposed go-to-market strategy, including customer positioning, distribution channels, crowdfunding, and marketing concepts.",
  },
  {
    emoji: "🔧",
    title: "Physical Prototyping",
    description:
      "I collaborated with my teammates on the development of the physical sunglasses prototype.",
  },
];

export default function PocketShades() {
  return (
    <div className="pocket-shades">
      <div className="pocket-shades__giant-header">
        <img
          src={giantHeader}
          alt="Olive and orange Pocket Shades sunglasses, one pair open and one shown folded"
          className="pocket-shades__giant-header-image"
        />
      </div>
      <ProjectHeader
        category="Design"
        title="Pocket Shades"
        subtitle="Small enough to forget. Ready when you need them."
        intro={[
          "A pair of fully collapsible sunglasses designed to make everyday portability a little more playful.",
          "Developed during Cornell Tech's two-day Physical Entrepreneurship Bootcamp, Pocket Shades went from an idea to a physical prototype, complete with a visual identity, packaging concept, and proposed go-to-market strategy.",
          "This project was awarded Hardware Entrepreneur Winner at Cornell Tech's Physical Entrepreneurship Bootcamp.",
        ]}
        meta={[
          { label: "Institution", value: "Cornell Tech" },
          { label: "Timeline", value: "September 2025" },
          {
            label: "Roles and Responsibilities",
            value: [
              "Product Design",
              "Brand Design",
              "Marketing Strategy",
              "Go-to-Market Strategy",
            ],
          },
          { label: "Recognition", value: "Hardware Entrepreneur Winner" },
        ]}
      />

      <section className="pocket-shades__section">
        <img
          src={heroFinalPrototype}
          alt="Final Pocket Shades prototype, laser-cut acrylic in red, shown disassembled and folded"
          className="pocket-shades__hero-image"
        />
      </section>

      {/* The Background */}
      <section className="pocket-shades__section">
        <p className="text-caption-3 pocket-shades__eyebrow">The Background</p>
        <p className="text-body pocket-shades__paragraph">
          Pocket Shades was developed during Cornell Tech's Physical
          Entrepreneurship Bootcamp, a two-day program focused on taking a
          product from idea to physical prototype.
        </p>
        <p className="text-body pocket-shades__paragraph">
          The two-day format meant thinking through product functionality,
          physical design, manufacturing considerations, and how the product
          might eventually be brought to market — all at once, and fast.
        </p>
      </section>

      {/* My Responsibilities */}
      <section className="pocket-shades__section">
        <p className="text-caption-3 pocket-shades__eyebrow">
          My Responsibilities
        </p>
        <div className="pocket-shades__responsibilities">
          {responsibilities.map((item) => (
            <ApproachCard
              key={item.title}
              emoji={item.emoji}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* The Idea */}
      <section className="pocket-shades__section">
        <p className="text-heading pocket-shades__heading">
          What if sunglasses were something you could always carry?
        </p>
        <p className="text-body pocket-shades__paragraph">
          Sunglasses are easy to forget, and traditional cases can be bulky
          and inconvenient to carry around. The concept: a pair of sunglasses
          that could fold into a compact form, making them easy to keep in a
          pocket or bag.
        </p>
        <p className="text-body pocket-shades__paragraph">
          The idea was to create something lightweight, durable, and
          affordable enough to become an everyday essential. Almost like lip
          balm: something you can always have with you.
        </p>
        <p className="text-body pocket-shades__paragraph">
          Pocket Shades was envisioned for people who are frequently on the
          move, including commuters, travelers, digital nomads, and outdoor
          enthusiasts.
        </p>
        <div className="pocket-shades__image-row pocket-shades__image-row--natural">
          <figure className="pocket-shades__figure pocket-shades__figure--sketches">
            <img
              src={initialSketches}
              alt="Hand-drawn notebook sketches exploring foldable sunglasses mechanisms, including slide-and-latch, knife hinge, swing-to-collapse, and concealed hinge concepts"
              className="pocket-shades__inline-image"
            />
            <figcaption className="text-caption pocket-shades__caption">
              Initial product sketches exploring different folding
              mechanisms.
            </figcaption>
          </figure>
          <figure className="pocket-shades__figure pocket-shades__figure--concept-model">
            <img
              src={earlyConceptModel}
              alt="An early paper-and-popsicle-stick model testing a swing-to-collapse folding concept"
              className="pocket-shades__inline-image"
            />
            <figcaption className="text-caption pocket-shades__caption">
              An early paper-and-stick concept model used to test the
              swing-to-collapse folding mechanism.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* From Sketch to Prototype */}
      <section className="pocket-shades__section">
        <p className="text-heading pocket-shades__heading">Making it fold.</p>
        <p className="text-body pocket-shades__paragraph">
          From the initial sketches, a few different folding mechanisms were
          explored — slide-and-latch hinges, a swing-to-collapse frame, and a
          concealed knife hinge — before the first low-fidelity prototype
          was built out of construction paper, popsicle sticks, and tape.
        </p>
        <p className="text-body pocket-shades__paragraph">
          Three hinge approaches were considered for the lens arms —
          butterfly hinges, foldable metal hinges, and inward-folding hinges
          — compared using a simple weighted decision matrix across customer
          experience, laser-cutting feasibility, cost, build time,
          accessibility, and risk. Butterfly hinges scored highest, so that's
          what got built.
        </p>
        <p className="text-body pocket-shades__paragraph">
          For the higher-fidelity prototype, the design moved to laser-cut
          acrylic frames and 3D-printed Chicago screws as hinge pins, aiming
          to keep the sunglasses compact while still functioning like a
          conventional pair.
        </p>
        <div className="pocket-shades__staggered-gallery">
          {foldingProcessImages.map((image) => (
            <figure
              className="pocket-shades__figure pocket-shades__staggered-figure"
              style={{
                maxWidth: `${image.widthPercent}%`,
                alignSelf:
                  image.align === "center"
                    ? "center"
                    : image.align === "end"
                      ? "flex-end"
                      : "flex-start",
              }}
              key={image.label}
            >
              {image.src ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="pocket-shades__inline-image"
                />
              ) : (
                <ImagePlaceholder
                  label={image.label}
                  aspectRatio={image.aspectRatio}
                />
              )}
              <figcaption className="text-caption pocket-shades__caption">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Designing the Identity */}
      <section className="pocket-shades__section">
        <p className="text-heading pocket-shades__heading">
          A little sunshine, wherever you go.
        </p>
        <p className="text-body pocket-shades__paragraph">
          This was the part of the project I led most directly. I wanted
          Pocket Shades to feel playful, whimsical, approachable, and
          connected to nature.
        </p>
        <p className="text-body pocket-shades__paragraph">
          The warm orange palette was chosen to evoke sunshine, warmth, and
          optimism. The botanical illustrations were meant to communicate a
          connection to nature and reflect an aspiration toward a more
          environmentally conscious product.
        </p>
        <p className="text-body pocket-shades__paragraph">
          The target was a younger, mobile audience that valued convenience,
          affordability, and thoughtful design.
        </p>
        <figure className="pocket-shades__figure">
          <img
            src={visualIdentity}
            alt="Pocket Shades visual identity board: inspiration references for minimalistic and playful packaging, the primary typeface Roboto Condensed Bold, and a warm orange and olive color palette"
            className="pocket-shades__inline-image"
          />
          <figcaption className="text-caption pocket-shades__caption">
            Exploring a playful, nature-inspired visual identity through warm
            colors, typography, and botanical illustrations.
          </figcaption>
        </figure>
      </section>

      {/* The Packaging Experience */}
      <section className="pocket-shades__section">
        <div className="pocket-shades__packaging-top">
          <div className="pocket-shades__packaging-intro">
            <p className="text-heading pocket-shades__heading">
              A little surprise inside a square box.
            </p>
            <p className="text-body pocket-shades__paragraph">
              Traditional sunglasses often come in elongated packaging. For
              Pocket Shades, I wanted to create a compact square box instead
              — small enough that someone might wonder how a full-sized pair
              of sunglasses could possibly fit inside.
            </p>
            <p className="text-body pocket-shades__paragraph">
              When they opened the box, they'd discover the folding
              mechanism. The packaging was meant to create a small moment of
              surprise while reinforcing the product's portability.
            </p>
          </div>
          <figure className="pocket-shades__figure pocket-shades__figure--mockup">
            <img
              src={packagingDetails}
              alt="3D render of the open Pocket Shades packaging, showing the botanical illustration inside the box and the 'Ideated and created by Raleigh, Alexandra, and Audrey' credit"
              className="pocket-shades__inline-image"
            />
            <figcaption className="text-caption pocket-shades__caption">
              Packaging illustrations and surface details.
            </figcaption>
          </figure>
        </div>

        <figure className="pocket-shades__figure pocket-shades__figure--flat">
          <img
            src={packagingFlat}
            alt="Flat die-line layout of the Pocket Shades packaging, showing the Pocket Shades logo, botanical illustrations, and 'Foldable, compact, lightweight' copy"
            className="pocket-shades__inline-image"
          />
          <figcaption className="text-caption pocket-shades__caption">
            The flat packaging design — the square case, unfolded.
          </figcaption>
        </figure>

        <figure className="pocket-shades__figure pocket-shades__packaging-prototype">
          <img
            src={packagingPrototype}
            alt="The assembled paper packaging prototype, shown open from two angles with the folded sunglasses inside"
            className="pocket-shades__inline-image"
          />
          <figcaption className="text-caption pocket-shades__caption">
            The assembled square box prototype, shown from two angles.
          </figcaption>
        </figure>
      </section>

      {/* Bringing It to Market */}
      <section className="pocket-shades__section">
        <p className="text-caption-3 pocket-shades__eyebrow">
          Bringing It to Market
        </p>
        <p className="text-body pocket-shades__paragraph">
          Beyond designing the product and its identity, I explored how Pocket Shades could reach its first customers.
        </p>

        <div className="pocket-shades__market-group pocket-shades__market-group--with-visual">
          <div className="pocket-shades__market-text">
            <p className="text-caption-2 pocket-shades__market-label">
              Target Audience
            </p>
            <p className="text-body pocket-shades__paragraph">
              Pocket Shades is perfect for people who are always on the move, from commuters and travelers 
              to outdoor enthusiasts. The goal is to offer an affordable, playful alternative to conventional sunglasses, 
              with portability at the center of the product experience.
            </p>
          </div>
          <img
            src={targetAudience}
            alt="Two hikers in outdoor apparel walking a forest trail, representing the Pocket Shades target customer"
            className="pocket-shades__market-visual"
          />
        </div>

        <div className="pocket-shades__market-group">
          <p className="text-caption-2 pocket-shades__market-label">
            Proposed Distribution Strategy
          </p>
          <div className="pocket-shades__distribution-cards">
            <div className="distribution-card">
              <p className="text-caption-2 distribution-card__subtitle">
                Crowdfunding
              </p>
              <p className="distribution-card__title">Kickstarter</p>
              <p className="text-caption distribution-card__description">
                Gauge interest, test demand, and potentially support an
                initial production run.
              </p>
            </div>
            <div className="distribution-card">
              <p className="text-caption-2 distribution-card__subtitle">
                Direct-to-consumer
              </p>
              <p className="distribution-card__title">Shopify</p>
              <p className="text-caption distribution-card__description">
                A proposed online storefront where customers could purchase
                Pocket Shades directly.
              </p>
            </div>
          </div>
        </div>

        <div className="pocket-shades__market-group">
          <p className="text-caption-2 pocket-shades__market-label">
            Proposed Marketing Strategy
          </p>
          <div className="pocket-shades__marketing-notes">
            <PaperNote
              title="Instagram & TikTok"
              description="Short-form videos demonstrating the folding mechanism and portability."
              color="#e8a85f"
              rotation={-2}
            />
            <PaperNote
              title="Influencer Partnerships"
              description="Collaborations with travel and lifestyle creators whose audiences align with Pocket Shades."
              color="#9aa178"
              rotation={1}
            />
            <PaperNote
              title="Referral Marketing"
              description="Encouraging early customers to introduce Pocket Shades to others."
              color="#f1dc96"
              rotation={-1}
            />
          </div>
        </div>

        <p className="text-caption pocket-shades__note">
          This was a proposed strategy for the bootcamp pitch — the
          Kickstarter campaign, Shopify storefront, and marketing campaigns
          were never actually launched.
        </p>
      </section>

      {/* The Outcome */}
      <section className="pocket-shades__section">
        <p className="text-heading pocket-shades__heading">
          The Conclusion
        </p>
        <p className="text-body pocket-shades__paragraph">
          In two days, the team developed a foldable sunglasses prototype,
          created its brand identity and packaging, and proposed a sales and
          marketing strategy.
        </p>
        <p className="text-body pocket-shades__paragraph">
          🏆 Pocket Shades was awarded Hardware Entrepreneur Winner at Cornell
          Tech's Physical Entrepreneurship Bootcamp.
        </p>
        <figure className="pocket-shades__figure pocket-shades__outcome-award">
          <img
            src={outcomeAwardCertificate}
            alt="The Hardware Entrepreneur Winner certificate and trophy, awarded to Pocket Shades at Cornell Tech's 2025 Physical Entrepreneurship Bootcamp"
            className="pocket-shades__outcome-award-image"
          />
          <figcaption className="text-caption pocket-shades__caption">
            The Hardware Entrepreneur Winner certificate and trophy, awarded
            September 6, 2025.
          </figcaption>
        </figure>
      </section>

      {/* Looking Back
      <section className="pocket-shades__section">
        <p className="text-caption-3 pocket-shades__eyebrow">Looking Back</p>
        <p className="text-body pocket-shades__paragraph">
          I really enjoyed this project because it gave me the opportunity to
          work across physical product development, visual design,
          packaging, and commercial strategy.
        </p>
        <p className="text-body pocket-shades__paragraph">
          It was particularly rewarding to take an idea from initial sketches
          to a tangible prototype within two days.
        </p>
        <p className="text-body pocket-shades__paragraph">
          Given more time, I would have liked to explore sustainable
          materials and manufacturing options, the durability of the folding
          mechanism over repeated use, customer feedback on portability and
          usability, and pricing and manufacturing feasibility.
        </p>
      </section> */}

      <section className="pocket-shades__links">
        <Button to="/">← Back to Work</Button>
      </section>
    </div>
  );
}
