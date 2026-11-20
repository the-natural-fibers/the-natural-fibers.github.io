import rattanThumb from '../assets/thumbnails/Rattan.jpg';
import bambooThumb from '../assets/thumbnails/Bamboo.jpg';
import juteThumb from '../assets/thumbnails/Jute.jpg';
import seagrassThumb from '../assets/thumbnails/Seagrass.jpg';
import hempThumb from '../assets/thumbnails/Hemp.jpg';
import abacaThumb from '../assets/thumbnails/Abaca.jpg';

export const articlesData = [
  {
    slug: "natural-materials",
    fiberFamily: "Botanical Science",
    imageUrl: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=900&q=80",
    title: "Natural Materials: The Complete Botanical Classification & Sustainable Applications",
    mainKeyword: "natural materials",
    volume: 1300,
    kd: 34,
    category: "Material Science",
    badge: "Foundation",
    element: "earth",
    author: "Editorial Botanical Lab",
    publishedDate: "October 14, 2026",
    readTime: "9 min read",
    summary: "An exhaustive scientific and architectural overview of botanical fibers, classifying bast, leaf, seed, and woody grass fibers according to structural tensile strength, life-cycle impact, and modern circular design applications.",
    keyTakeaways: [
      "Natural plant fibers are categorized primarily into Bast (inner bark), Leaf, Fruit/Seed, and Woody Grasses.",
      "Unlike synthetic petroleum fibers (polypropylene, nylon), natural fibers are non-toxic, hygroscopic, and 100% biodegradable.",
      "The combination of cellular cellulose and lignin polymers gives botanical fibers an exceptional strength-to-weight ratio."
    ],
    tableOfContents: [
      { id: "defining-natural-materials", title: "1. Defining Natural Materials in the Modern Era" },
      { id: "taxonomic-classification", title: "2. The Four Primary Botanical Fiber Families" },
      { id: "cellulose-lignin-matrix", title: "3. The Science: Cellulose & Lignin Mechanics" },
      { id: "lifecycle-carbon-balance", title: "4. Carbon Balance: Photosynthesis vs Petrochemistry" },
      { id: "architectural-uses", title: "5. Interior, Architectural, and Industrial Applications" }
    ],
    contentHtml: `
      <section id="defining-natural-materials" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">1. Defining Natural Materials in the Modern Era</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          In a world increasingly saturated with petroleum-derived synthetics and non-recyclable composites, <strong>natural materials</strong> represent nature's ancient yet revolutionary engineering blueprint. Defined as substances harvested directly from plants, animals, or geological formations without synthetic chemical reconfiguration, botanical fibers form the vanguard of regenerative circular architecture.
        </p>
        <p class="text-base leading-relaxed text-[#2d3748]">
          Unlike plastics, which demand hundreds of years to fragment into harmful microplastics, plant-derived natural fibers complete their life cycle in months or years, returning essential organic carbon to the soil upon decomposition.
        </p>
      </section>

      <section id="taxonomic-classification" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">2. The Four Primary Botanical Fiber Families</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Botanists and material scientists classify plant fibers based on their anatomical origin within the plant:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="p-5 rounded-xl border border-[#e8ded1] bg-[#fbf9f5]">
            <h4 class="font-bold text-[#14365d] mb-2">A. Bast Fibers (Inner Bark Phloem)</h4>
            <p class="text-sm text-[#4a5568]">Extracted from the stem periphery. Examples include <strong>Jute, Hemp, Flax (Linen), and Ramie</strong>. Characterized by high tensile strength and flexible lengths.</p>
          </div>
          <div class="p-5 rounded-xl border border-[#e8ded1] bg-[#fbf9f5]">
            <h4 class="font-bold text-[#2a5a46] mb-2">B. Hard Leaf Fibers</h4>
            <p class="text-sm text-[#4a5568]">Stripped from the veins of leaves. Examples include <strong>Abaca (Manila Hemp), Sisal, and Henequen</strong>. Known for extreme stiffness, saltwater resistance, and high friction.</p>
          </div>
          <div class="p-5 rounded-xl border border-[#e8ded1] bg-[#fbf9f5]">
            <h4 class="font-bold text-[#7c482b] mb-2">C. Woody Grasses & Climbing Palms</h4>
            <p class="text-sm text-[#4a5568]">Stems and culms that offer structural rigidity. Examples include <strong>Bamboo, Rattan, and Reed</strong>. Valued for bending resilience, compressive load, and furniture frames.</p>
          </div>
          <div class="p-5 rounded-xl border border-[#e8ded1] bg-[#fbf9f5]">
            <h4 class="font-bold text-[#1b3d2f] mb-2">D. Coastal & Riparian Grasses</h4>
            <p class="text-sm text-[#4a5568]">Cultivated along riverbanks and tidal shores. Examples include <strong>Seagrass, Water Hyacinth, and Rush</strong>. Naturally water-resistant due to waxy cuticle coatings.</p>
          </div>
        </div>
      </section>

      <section id="cellulose-lignin-matrix" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">3. The Science: Cellulose & Lignin Mechanics</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          The structural supremacy of natural fibers originates in their dual-polymer composition:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-[#2d3748] mb-4">
          <li><strong>Cellulose (60–85%):</strong> Long, linear crystalline glucose polymers that provide immense longitudinal tensile strength.</li>
          <li><strong>Lignin (5–25%):</strong> A complex aromatic polymer acting as the cellular matrix and binder, conferring compressive stiffness and moisture defense.</li>
          <li><strong>Hemicellulose & Pectin:</strong> Intercellular adhesives facilitating flexibility and moisture sorption.</li>
        </ul>
      </section>

      <section id="lifecycle-carbon-balance" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">4. Carbon Balance: Photosynthesis vs Petrochemistry</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          While synthetic polymer production emits an average of 2.5 to 5.0 kg of CO2 equivalent per kilogram of virgin resin, fast-growing fiber crops act as net-negative carbon sinks during their growth phase:
        </p>
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-[#14365d] text-white">
                <th class="p-3">Material Type</th>
                <th class="p-3">Primary Source</th>
                <th class="p-3">Embodied Energy (MJ/kg)</th>
                <th class="p-3">Biodegradation Rate</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e8ded1] bg-white">
              <tr>
                <td class="p-3 font-medium text-[#0c2340]">Industrial Hemp / Jute</td>
                <td class="p-3">Annual botanical crops</td>
                <td class="p-3 text-emerald-700 font-semibold">10 – 15 MJ/kg</td>
                <td class="p-3">3 to 6 months</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#0c2340]">Bamboo Culm</td>
                <td class="p-3">Perennial woody grass</td>
                <td class="p-3 text-emerald-700 font-semibold">8 – 12 MJ/kg</td>
                <td class="p-3">1 to 3 years (compost)</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#0c2340]">Polypropylene (PP)</td>
                <td class="p-3">Fossil hydrocarbons</td>
                <td class="p-3 text-red-600 font-semibold">65 – 85 MJ/kg</td>
                <td class="p-3">450+ years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="architectural-uses" class="mb-6">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">5. Interior, Architectural, and Industrial Applications</h2>
        <p class="text-base leading-relaxed text-[#2d3748]">
          Today, natural materials transcend traditional rustic stereotypes. High-performance bio-composites reinforce aerospace vehicle interior panels, acoustic wall treatments made from unbleached jute suppress high frequencies, and handwoven lighting shades diffuse light organically while eliminating toxic off-gassing.
        </p>
      </section>
    `
  },
  {
    slug: "what-is-rattan",
    fiberFamily: "Climbing Palm",
    imageUrl: rattanThumb,
    title: "What is Rattan? Botanical Anatomy, Harvesting Cycles & Interior Craft",
    mainKeyword: "what is rattan",
    volume: 1900,
    kd: 25,
    category: "Botanical Profile",
    badge: "Plant Profile",
    element: "earth",
    author: "Editorial Botanical Lab",
    publishedDate: "October 16, 2026",
    readTime: "8 min read",
    summary: "Discover the true botanical identity of rattan: a solid-core climbing vine native to equatorial jungles, its differences from hollow bamboo, and why it remains the premier raw material for curved architectural furnishings.",
    keyTakeaways: [
      "Rattan is not a wood or a tree, but a solid climbing palm belonging to the subfamily Calamoideae.",
      "Unlike bamboo which is hollow, rattan possesses a solid, fibrous vascular core that becomes malleable under steam.",
      "Commercial rattan stems can grow over 100 meters long, winding through tropical canopy trees."
    ],
    tableOfContents: [
      { id: "botany-of-rattan", title: "1. The Botany of Rattan: A Rainforest Climbing Vine" },
      { id: "solid-core-structure", title: "2. The Solid Core Anatomy vs Bamboo" },
      { id: "steam-bending-physics", title: "3. The Physics of Steam Bending" },
      { id: "peel-core-cane", title: "4. Rattan Peel, Rattan Core, and Cane Explained" },
      { id: "sustainability-harvesting", title: "5. Rainforest Preservation Through Sustainable Harvesting" }
    ],
    contentHtml: `
      <section id="botany-of-rattan" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">1. The Botany of Rattan: A Rainforest Climbing Vine</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Many consumers mistake rattan for timber or bamboo, but botanically it is a climbing liana of the palm family (<strong>Arecaceae</strong>). Over 600 species exist, predominantly within the genera <em>Calamus</em>, <em>Daemonorops</em>, and <em>Korthalsia</em>. Native to the dense tropical jungles of Southeast Asia (with over 70% of global supply originating in Indonesia), rattan vines use curved thorns and flagella to climb high into the forest canopy in search of sunlight.
        </p>
      </section>

      <section id="solid-core-structure" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">2. The Solid Core Anatomy vs Bamboo</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          The single most vital engineering difference between rattan and bamboo lies in their interior cross-section:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-[#2d3748] mb-4">
          <li><strong>Rattan has a solid core:</strong> Its stem (culm) is packed with continuous longitudinal vascular bundles. This solid structure prevents splitting when bent into radical radii.</li>
          <li><strong>Bamboo is hollow:</strong> Bamboo consists of hollow nodes and internodes. When bent past a certain threshold, the hollow wall buckles or splinters unless pre-sliced into fine strips.</li>
        </ul>
      </section>

      <section id="steam-bending-physics" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">3. The Physics of Steam Bending</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          When exposed to pressurized steam (approx. 100°C / 212°F) for 15 to 25 minutes, the natural lignin within the rattan softens from a rigid glass state into a flexible thermoplastic polymer. Master craftsmen can then clamp the cane around curved wooden jigs. As it cools and dehydrates, the lignin resets into a rock-solid, permanent structural contour.
        </p>
      </section>

      <section id="peel-core-cane" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">4. Rattan Peel, Rattan Core, and Cane Explained</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          When a raw rattan pole is processed in the mill, three distinct materials are harvested:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white p-4 rounded-xl border border-[#e8ded1] shadow-xs">
            <h4 class="font-bold text-[#7c482b] mb-1">Rattan Pole (Cane)</h4>
            <p class="text-xs text-[#5a6a7e]">The whole unstripped pole with outer bark intact. Used for heavy load-bearing furniture frameworks and structural supports.</p>
          </div>
          <div class="bg-white p-4 rounded-xl border border-[#e8ded1] shadow-xs">
            <h4 class="font-bold text-[#2a5a46] mb-1">Rattan Peel (Skin)</h4>
            <p class="text-xs text-[#5a6a7e]">The thin, glassy outer layer stripped from the pole. High in natural silica, moisture-resistant, used for weaving cane webbing and joint lashings.</p>
          </div>
          <div class="bg-white p-4 rounded-xl border border-[#e8ded1] shadow-xs">
            <h4 class="font-bold text-[#14365d] mb-1">Rattan Core (Reed)</h4>
            <p class="text-xs text-[#5a6a7e]">The porous inner pith extruded into cylindrical or flat reeds. Highly absorbent, ideal for wicker basketry and decorative weaving.</p>
          </div>
        </div>
      </section>

      <section id="sustainability-harvesting" class="mb-6">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">5. Rainforest Preservation Through Sustainable Harvesting</h2>
        <p class="text-base leading-relaxed text-[#2d3748]">
          Because rattan cannot grow in clear-cut open fields, requiring living hardwood trees as a climbing trellis, rattan harvesting provides rainforest communities with a strong economic incentive to protect standing mature forests from deforestation.
        </p>
      </section>
    `
  },
  {
    slug: "what-is-bamboo",
    fiberFamily: "Giant Woody Grass",
    imageUrl: bambooThumb,
    title: "What is Bamboo? The Biology, Tensile Strength & Modern Architecture of Giant Grass",
    mainKeyword: "what is bamboo",
    volume: 1300,
    kd: 38,
    category: "Botanical Profile",
    badge: "Plant Profile",
    element: "leaf",
    author: "Editorial Botanical Lab",
    publishedDate: "October 18, 2026",
    readTime: "7 min read",
    summary: "An in-depth look into bamboo biology: how a member of the grass family achieves structural properties rivaling mild steel, its rapid 3-year regenerative harvest cycle, and cutting-edge laminated bamboo architecture.",
    keyTakeaways: [
      "Bamboo is the fastest-growing vascular plant on the planet, capable of growing up to 90 cm in 24 hours.",
      "The tensile strength of dense bamboo fibers can reach up to 28,000 psi, comparable to mild structural steel.",
      "Bamboo reproduces via extensive subterranean rhizome networks, regenerating perpetually without replanting."
    ],
    tableOfContents: [
      { id: "grass-not-tree", title: "1. The Poaceae Family: A Giant Grass, Not a Tree" },
      { id: "tensile-physics", title: "2. The Engineering Physics: Why Bamboo Rival Steel" },
      { id: "rhizome-biology", title: "3. Rhizome Biology: Clumping vs Running Species" },
      { id: "curing-borax-treatment", title: "4. Protecting Bamboo: Boron Salt Preservation" },
      { id: "contemporary-applications", title: "5. Modern Engineered Bamboo in Contemporary Design" }
    ],
    contentHtml: `
      <section id="grass-not-tree" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">1. The Poaceae Family: A Giant Grass, Not a Tree</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Bamboo belongs to the true grass family (<strong>Poaceae</strong>). Despite growing into massive culms exceeding 30 meters in height and 20 cm in diameter (such as <em>Dendrocalamus asper</em>, or Petung Bamboo), it does not possess secondary vascular cambium and produces no bark or annual growth rings.
        </p>
      </section>

      <section id="tensile-physics" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">2. The Engineering Physics: Why Bamboo Rivals Steel</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          The outer wall of the bamboo culm features an extraordinary concentration of dense sclerenchyma fiber sheaths. Toward the outer skin, vascular bundles are packed tightly, yielding a longitudinal tensile strength of up to 200–280 MPa (equivalent to roughly 28,000–40,000 psi), surpassing standard timber by a factor of three.
        </p>
      </section>

      <section id="rhizome-biology" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">3. Rhizome Biology: Clumping vs Running Species</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Botanically, bamboo expands through two subterranean root mechanisms:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-[#2d3748] mb-4">
          <li><strong>Sympodial (Clumping / Pachymorph):</strong> Prevalent in tropical zones. Stems sprout in tight, compact clusters from short rhizomes, causing no aggressive landscape displacement.</li>
          <li><strong>Monopodial (Running / Leptomorph):</strong> Common in temperate climates (e.g. <em>Phyllostachys</em>). Horizontal rhizomes traverse underground quickly, sending up independent shoots across large distances.</li>
        </ul>
      </section>

      <section id="curing-borax-treatment" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">4. Protecting Bamboo: Boron Salt Preservation</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Because fresh bamboo culms contain elevated concentrations of starches and sugars (making them vulnerable to powder-post beetles and fungal rot), modern ethical processing relies on soaking poles in non-toxic borax-boric acid water solutions. This crystallizes inside the cellulose cells, granting lifelong insect immunity without toxic heavy metals.
        </p>
      </section>

      <section id="contemporary-applications" class="mb-6">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">5. Modern Engineered Bamboo in Contemporary Design</h2>
        <p class="text-base leading-relaxed text-[#2d3748]">
          From cross-laminated bamboo timber (glu-bam) replacing steel beams in civic pavilions to micro-split woven lamp shades that cast hypnotic organic shadows, bamboo has cemented itself as the cornerstone of 21st-century biophilic architecture.
        </p>
      </section>
    `
  },
  {
    slug: "rattan-vs-bamboo",
    fiberFamily: "Comparative Study",
    imageUrl: rattanThumb,
    title: "Rattan vs Bamboo: Key Differences in Flexibility, Strength & Maintenance",
    mainKeyword: "rattan vs bamboo",
    volume: 210,
    kd: 9,
    category: "Comparative Study",
    badge: "Versus Guide",
    element: "earth",
    author: "Editorial Botanical Lab",
    publishedDate: "October 20, 2026",
    readTime: "7 min read",
    summary: "Clear up the widespread confusion between rattan and bamboo: comparing internal stem anatomy, bending radius, outdoor moisture tolerances, weight, and optimal design applications.",
    keyTakeaways: [
      "Rattan is a solid-core tropical vine; bamboo is a hollow-stemmed giant grass.",
      "Rattan can be steam-bent into complex curves and swirls; bamboo excels in straight structural compression.",
      "Bamboo holds better natural resilience to outdoor dampness when treated; rattan is best preserved indoors or under sheltered verandas."
    ],
    tableOfContents: [
      { id: "core-anatomy-difference", title: "1. Core Anatomical Differences: Solid vs Hollow" },
      { id: "tensile-and-bending", title: "2. Bending Radius and Flexibility Comparison" },
      { id: "weight-and-load", title: "3. Structural Weight & Load-Bearing Capabilities" },
      { id: "maintenance-longevity", title: "4. Maintenance and Outdoor Weather Tolerances" },
      { id: "side-by-side-matrix", title: "5. Side-by-Side Specifications Matrix" }
    ],
    contentHtml: `
      <section id="core-anatomy-difference" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">1. Core Anatomical Differences: Solid vs Hollow</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          While both materials are celebrated symbols of sustainable tropical craftsmanship, they belong to completely distinct plant kingdoms and display opposing mechanical behaviors. Bamboo is a cylindrical grass with hollow internodes and solid partition plates (nodes). Rattan is a solid, non-hollow climbing palm stem containing continuous fibrous channels from root to tip.
        </p>
      </section>

      <section id="tensile-and-bending" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">2. Bending Radius and Flexibility Comparison</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Because rattan is solid throughout, it can be bent into tight loops, spirals, and organic swoops under heat and steam without structural collapse. In contrast, whole bamboo poles resist radial bending; forcing a thick bamboo culm into a tight curve will induce longitudinal fracture along the grain. Bamboo must be split into thin veneers or slats before intricate curvature is achievable.
        </p>
      </section>

      <section id="weight-and-load" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">3. Structural Weight & Load-Bearing Capabilities</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Bamboo provides unparalleled compressive load capacity relative to its weight because its hollow cylindrical geometry maximizes the area moment of inertia. For straight pillars, scaffolding, ceiling rafters, and vertical studs, bamboo is drastically superior. Rattan, on the other hand, is heavier per volume due to its solid mass, offering tactile warmth and flexible ergonomic give for seating frames.
        </p>
      </section>

      <section id="maintenance-longevity" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">4. Maintenance and Outdoor Weather Tolerances</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Both natural materials dislike direct prolonged soaking:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-[#2d3748] mb-4">
          <li><strong>Rattan:</strong> Highly sensitive to rainwater and stagnant outdoor humidity. If left exposed to rain, the porous core swells, trapping moisture and cultivating grey mold. Strictly designed for indoor or covered porch use.</li>
          <li><strong>Bamboo:</strong> Protected naturally by an outer wax cuticle high in silica. When treated with borax and sealed with exterior UV polyurethane, bamboo can withstand sheltered outdoor environments.</li>
        </ul>
      </section>

      <section id="side-by-side-matrix" class="mb-6">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">5. Side-by-Side Specifications Matrix</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-[#7c482b] text-white">
                <th class="p-3">Attribute</th>
                <th class="p-3">Rattan</th>
                <th class="p-3">Bamboo</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e8ded1] bg-white">
              <tr>
                <td class="p-3 font-semibold text-[#0c2340]">Internal Stem</td>
                <td class="p-3">Solid fibrous core</td>
                <td class="p-3">Hollow culm with nodal partitions</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-[#0c2340]">Curvature Flexibility</td>
                <td class="p-3 text-emerald-700 font-medium">Extreme (Steam moldable)</td>
                <td class="p-3">Rigid in whole form (Requires splitting)</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-[#0c2340]">Compressive Strength</td>
                <td class="p-3">Moderate</td>
                <td class="p-3 text-emerald-700 font-medium">Very High (Rivals concrete/steel)</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-[#0c2340]">Best Design Application</td>
                <td class="p-3">Armchairs, headboards, cane weaving</td>
                <td class="p-3">Structural columns, screens, flooring, pendants</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `
  },
  {
    slug: "rattan-vs-wicker",
    fiberFamily: "Comparative Study",
    imageUrl: rattanThumb,
    title: "Rattan vs Wicker: The Vital Difference Between Material and Weaving Technique",
    mainKeyword: "rattan vs wicker",
    volume: 1300,
    kd: 18,
    category: "Comparative Study",
    badge: "Versus Guide",
    element: "earth",
    author: "Editorial Botanical Lab",
    publishedDate: "October 22, 2026",
    readTime: "6 min read",
    summary: "Rattan is a specific plant material; wicker is an ancient weaving technique. Learn how this fundamental distinction prevents costly purchasing mistakes when curating timeless furniture.",
    keyTakeaways: [
      "Rattan is a botanical vine harvested from nature; wicker is a method of interweaving flexible pliable materials.",
      "A piece of furniture can be made of rattan without being wicker (e.g. solid cane frame).",
      "A piece of wicker furniture can be woven from rattan, willow, reed, seagrass, synthetic resin, or paper rope."
    ],
    tableOfContents: [
      { id: "the-core-confusion", title: "1. The Origin of the Rattan vs Wicker Confusion" },
      { id: "what-wicker-means", title: "2. The Etymology and Mechanics of Wicker" },
      { id: "what-rattan-supplies", title: "3. How Rattan Serves Both Frame and Weave" },
      { id: "synthetic-all-weather-wicker", title: "4. Warning: Synthetic 'All-Weather' Resin Wicker" },
      { id: "how-to-identify", title: "5. How to Identify Genuine Botanical Wicker" }
    ],
    contentHtml: `
      <section id="the-core-confusion" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">1. The Origin of the Rattan vs Wicker Confusion</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Few distinctions in interior design generate as much consumer ambiguity as <strong>"rattan vs wicker"</strong>. Retailers frequently use these terms interchangeably, leading buyers to believe they are comparing two competing plant species.
        </p>
        <div class="p-4 rounded-xl bg-[#edf7f2] border-l-4 border-[#2a5a46] mb-4">
          <p class="text-sm font-semibold text-[#1b3d2f]">
            The Golden Rule: Rattan is the INGREDIENT. Wicker is the RECIPE.
          </p>
        </div>
      </section>

      <section id="what-wicker-means" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">2. The Etymology and Mechanics of Wicker</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          The word <em>wicker</em> derives from the Old Scandinavian term <em>vika</em> (meaning "to bend") and the Swedish word <em>veka</em> (meaning "willow twig"). Dating back to ancient Sumer and predynastic Egypt, wicker describes any item constructed by interlacing pliable strands around a rigid armature.
        </p>
      </section>

      <section id="what-rattan-supplies" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">3. How Rattan Serves Both Frame and Weave</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Because of rattan's anatomical versatility, a single artisan can build an entire armchair from rattan alone:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-[#2d3748] mb-4">
          <li><strong>The Frame:</strong> Thick rattan poles (cane) are steam-bent to build the load-bearing legs and backrest structure.</li>
          <li><strong>The Wicker Surface:</strong> Rattan peel or peeled core strands are woven across the frame using traditional wicker patterns (e.g. Vienna cane, open-web, or twill weave).</li>
        </ul>
      </section>

      <section id="synthetic-all-weather-wicker" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">4. Warning: Synthetic 'All-Weather' Resin Wicker</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          In contemporary patio retail, the majority of items sold as "wicker" are fabricated from High-Density Polyethylene (HDPE) or PVC extruded plastic strands wrapped around aluminum frames. While weather-resistant, these petroleum plastics offer none of the biophilic touch, porous breathability, or biodegradable qualities of natural botanical fibers.
        </p>
      </section>

      <section id="how-to-identify" class="mb-6">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">5. How to Identify Genuine Botanical Wicker</h2>
        <p class="text-base leading-relaxed text-[#2d3748]">
          To identify genuine organic plant wicker, inspect the strand ends and surface pores: natural plant strands exhibit delicate organic grain variations, subtle tonal gradients, and a tactile organic warmth that plastic extrusion can never authentically replicate.
        </p>
      </section>
    `
  },
  {
    slug: "what-is-jute",
    fiberFamily: "Bast Fiber",
    imageUrl: juteThumb,
    title: "What is Jute? The Golden Fiber of Sustainable Textiles & Interior Warmth",
    mainKeyword: "what is jute",
    volume: 3600,
    kd: 29,
    category: "Botanical Profile",
    badge: "Plant Profile",
    element: "water",
    author: "Editorial Botanical Lab",
    publishedDate: "October 25, 2026",
    readTime: "8 min read",
    summary: "Discover why jute is celebrated as the 'Golden Fiber' of global ecology: harvested from the Corchorus plant through gentle water retting, its carbon-negative life cycle, and timeless texture in modern spaces.",
    keyTakeaways: [
      "Jute is a 100% biodegradable bast fiber second only to cotton in global plant fiber production volume.",
      "It requires zero artificial fertilizers or chemical irrigation, flourishing exclusively on monsoon rains in delta regions.",
      "During its 120-day growth cycle, one hectare of jute plants consumes roughly 15 tonnes of CO2 and yields 11 tonnes of oxygen."
    ],
    tableOfContents: [
      { id: "botany-of-jute", title: "1. The Botany: Corchorus Plant & Delta Ecology" },
      { id: "water-retting-art", title: "2. The Ancient Art of Water Retting" },
      { id: "textile-mechanics", title: "3. Mechanical Properties: Texture, Insulation & Luster" },
      { id: "ecological-footprint", title: "4. Carbon Sink Powerhouse: The 120-Day Cycle" },
      { id: "interior-care", title: "5. Jute Rugs & Decor: Essential Care & Maintenance" }
    ],
    contentHtml: `
      <section id="botany-of-jute" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">1. The Botany: Corchorus Plant & Delta Ecology</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Jute is harvested from two annual herbaceous species of the mallow family: <em>Corchorus olitorius</em> (Tossa Jute) and <em>Corchorus capsularis</em> (White Jute). Native to the floodplains of the Ganges-Brahmaputra Delta in India and Bangladesh, jute stalks grow up to 3.5 meters high within a single four-month monsoon season without requiring chemical irrigation or synthetic pest management.
        </p>
      </section>

      <section id="water-retting-art" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">2. The Ancient Art of Water Retting</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          The transformation from leafy stem to silky golden yarn relies entirely on the natural element of water. Cut stems are tied into bundles and submerged in clean, slow-moving river water for 10 to 20 days. Natural aquatic micro-organisms ferment the pectins and cellular gums holding the stem together, allowing farmers to gently strip the lustrous bast fibers away from the central woody core.
        </p>
      </section>

      <section id="textile-mechanics" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">3. Mechanical Properties: Texture, Insulation & Luster</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Jute is distinguished by its soft golden sheen, low thermal conductivity, and high antistatic insulation. While its fibers are coarser than cotton, its cellular structure allows superior acoustic sound absorption when woven into area rugs, window drapes, and acoustic panels.
        </p>
      </section>

      <section id="ecological-footprint" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">4. Carbon Sink Powerhouse: The 120-Day Cycle</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Studies confirm that one hectare of standing jute consumes an astonishing 15 tons of atmospheric carbon dioxide while releasing 11 tons of clean oxygen during its short four-month vegetative phase. When rotated with rice paddy crops, jute foliage drops naturally to fertilize the soil with organic matter.
        </p>
      </section>

      <section id="interior-care" class="mb-6">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">5. Jute Rugs & Decor: Essential Care & Maintenance</h2>
        <p class="text-base leading-relaxed text-[#2d3748]">
          Because jute is a hygroscopic bast fiber, its primary vulnerability is standing moisture. It should never be steam-cleaned or placed in wet bathrooms. For everyday maintenance, vacuuming along the weave direction and immediate blotting of dry spills preserves its organic golden radiance for decades.
        </p>
      </section>
    `
  },
  {
    slug: "seagrass-vs-jute",
    fiberFamily: "Comparative Study",
    imageUrl: seagrassThumb,
    title: "Seagrass vs Jute: Moisture Resistance, Texture & Durability Compared",
    mainKeyword: "seagrass vs jute",
    volume: 20,
    kd: 0,
    category: "Comparative Study",
    badge: "Versus Guide",
    element: "water",
    author: "Editorial Botanical Lab",
    publishedDate: "October 27, 2026",
    readTime: "6 min read",
    summary: "Deciding between a seagrass or jute rug? Compare stain resistance, foot feel, moisture tolerance, and durability across high-traffic living spaces.",
    keyTakeaways: [
      "Seagrass grows in brackish marine water and has a non-porous cuticle that resists stains and liquids naturally.",
      "Jute is softer underfoot with a warmer tactile feel, but is porous and vulnerable to water staining.",
      "For entryways, dining rooms, and high-traffic hallways, seagrass is the winner; for bedrooms and barefoot lounges, jute reigns supreme."
    ],
    tableOfContents: [
      { id: "habitat-differences", title: "1. Saltwater Estuaries vs Freshwater Monsoon Fields" },
      { id: "stain-and-spills", title: "2. The Spill Test: Stain Resistance Compared" },
      { id: "underfoot-comfort", title: "3. Tactile Comfort & Underfoot Feel" },
      { id: "durability-traffic", title: "4. Traffic Ratings: High Hallways vs Cozy Bedrooms" },
      { id: "summary-matrix", title: "5. Direct Decision Guide" }
    ],
    contentHtml: `
      <section id="habitat-differences" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">1. Saltwater Estuaries vs Freshwater Monsoon Fields</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          The functional differences between seagrass and jute trace back to their native growing habitats. <strong>Seagrass</strong> thrives in salty, brackish coastal beds; to survive immersion in salt water, its outer reeds develop a dense, waxy, non-porous cuticle layer. <strong>Jute</strong> grows in freshwater river deltas; its inner bast fibers are porous, breathable, and absorbent.
        </p>
      </section>

      <section id="stain-and-spills" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">2. The Spill Test: Stain Resistance Compared</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          If wine, coffee, or pet fluids spill onto a <strong>jute</strong> rug, the porous cellulose acts like a sponge, drawing pigments deep into the fiber and causing water rings unless blotted instantly. Conversely, liquids pooled on <strong>seagrass</strong> bead up on the waxy cuticle, allowing effortless wiping with a dry microfiber cloth without staining.
        </p>
      </section>

      <section id="underfoot-comfort" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">3. Tactile Comfort & Underfoot Feel</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Jute is the softest of all natural plant floor fibers, making it a luxurious choice for bedrooms, reading nooks, and living areas where residents walk barefoot. Seagrass has a firmer, smooth, reed-like rigidity that feels cool and crisp underfoot.
        </p>
      </section>

      <section id="durability-traffic" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">4. Traffic Ratings: High Hallways vs Cozy Bedrooms</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          For mudrooms, dining rooms (where chairs slide repeatedly), and busy family corridors, seagrass offers superior abrasion resistance and does not shed fiber dust. Jute excels in peaceful low-to-medium traffic zones where acoustic comfort and soft organic luxury are prioritized.
        </p>
      </section>

      <section id="summary-matrix" class="mb-6">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">5. Direct Decision Guide</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-[#14365d] text-white">
                <th class="p-3">Scenario</th>
                <th class="p-3">Recommended Fiber</th>
                <th class="p-3">Primary Advantage</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#e8ded1] bg-white">
              <tr>
                <td class="p-3 font-medium text-[#0c2340]">Dining Room / Kitchen Table</td>
                <td class="p-3 font-bold text-[#14365d]">Seagrass</td>
                <td class="p-3">Food & liquid spills wipe clean effortlessly</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#0c2340]">Master Bedroom / Nursery</td>
                <td class="p-3 font-bold text-[#7c482b]">Jute</td>
                <td class="p-3">Supreme barefoot softness and warmth</td>
              </tr>
              <tr>
                <td class="p-3 font-medium text-[#0c2340]">Main Foyer / Entryway</td>
                <td class="p-3 font-bold text-[#14365d]">Seagrass</td>
                <td class="p-3">Withstands muddy boots and abrasive grit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `
  },
  {
    slug: "what-is-hemp-rope",
    fiberFamily: "Bast Fiber",
    imageUrl: hempThumb,
    title: "What is Hemp Rope? History, Load Capacity, Rot Resistance & Knot Integrity",
    mainKeyword: "what is hemp rope",
    volume: 90,
    kd: 13,
    category: "Bast Fiber & Cordage",
    badge: "Heritage Cordage",
    element: "earth",
    author: "Editorial Botanical Lab",
    publishedDate: "October 29, 2026",
    readTime: "7 min read",
    summary: "From ancient maritime navigation to modern sustainable architecture: examine why natural hemp cordage holds knots tighter than nylon, resists rot without toxins, and offers unmatched longevity.",
    keyTakeaways: [
      "Hemp fibers possess the highest tensile strength and lowest elongation stretch among all natural bast fibers.",
      "Natural hemp rope holds friction knots far better than synthetic polypropylene or nylon, which tend to slip under load.",
      "Industrial hemp contains natural antifungal and antimicrobial oils that resist mildew and rot even in damp conditions."
    ],
    tableOfContents: [
      { id: "maritime-history", title: "1. The Cordage That Built the Age of Sail" },
      { id: "tensile-and-stretch", title: "2. Tensile Capacity and Low-Stretch Mechanics" },
      { id: "knot-friction", title: "3. Superior Knot Integrity vs Slippery Synthetics" },
      { id: "tarred-vs-natural", title: "4. Tarred Hemp (Marline) vs Unbleached Cordage" },
      { id: "modern-architectural-uses", title: "5. Architectural Suspensions and Handrails" }
    ],
    contentHtml: `
      <section id="maritime-history" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">1. The Cordage That Built the Age of Sail</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          For thousands of years, global exploration and transoceanic commerce rode on the back of <strong>hemp rope</strong>. A single 18th-century naval ship-of-the-line carried upwards of 30 miles of hemp rigging. Cultivated from the tall, non-psychoactive stems of <em>Cannabis sativa L.</em>, hemp bast fibers provided the vital cordage that neither snapped in howling gales nor dissolved in corrosive sea salt.
        </p>
      </section>

      <section id="tensile-and-stretch" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">2. Tensile Capacity and Low-Stretch Mechanics</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Unlike synthetic nylon, which stretches up to 30% under heavy loads (creating dangerous recoil kinetic energy if severed), natural hemp rope exhibits remarkably low elongation (less than 2–3% under tension). This minimal stretch makes hemp ideal for architectural balustrades, suspension bridges, stage rigging, and climbing anchors where precise load positioning is mandatory.
        </p>
      </section>

      <section id="knot-friction" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">3. Superior Knot Integrity vs Slippery Synthetics</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Synthetic lines made of slick polypropylene or nylon have smooth, slippery surface filaments that cause complex knots to slip and unbind under variable cyclic loads. Hemp fibers have microscopic surface tooth and hairiness: under tension, the fibers interlock securely, creating a knot grip that refuses to budge while still remaining untieable by hand after load release.
        </p>
      </section>

      <section id="tarred-vs-natural" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">4. Tarred Hemp (Marline) vs Unbleached Cordage</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Historically, standing rigging exposed to salt spray was steeped in natural pine tar (yielding dark, aromatic "Stockholm Tarred Hemp" or marline), rendering the cordage waterproof for decades. For interior design, untreated virgin blonde hemp rope is preferred for its clean tactile grip, gentle organic scent, and rich golden hue.
        </p>
      </section>

      <section id="modern-architectural-uses" class="mb-6">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">5. Architectural Suspensions and Handrails</h2>
        <p class="text-base leading-relaxed text-[#2d3748]">
          In contemporary biophilic interiors, thick 3-strand twisted hemp rope is increasingly specified for staircase handrails, suspended lighting chandeliers, partition screens, and acoustic spatial dividers, uniting rugged heritage strength with sustainable tactile luxury.
        </p>
      </section>
    `
  },
  {
    slug: "what-is-abaca",
    fiberFamily: "Hard Leaf Fiber",
    imageUrl: abacaThumb,
    title: "What is Abaca? The Philippine Super-Fiber Fueling Marine Lines & Modern Craft",
    mainKeyword: "what is abaca",
    volume: 170,
    kd: 30,
    category: "Hard Leaf Fiber",
    badge: "High Performance",
    element: "leaf",
    author: "Editorial Botanical Lab",
    publishedDate: "October 31, 2026",
    readTime: "7 min read",
    summary: "Explore abaca (Musa textilis), the wild banana relative native to the Philippines that produces the world's strongest natural leaf fiber, prized from marine mooring lines to bespoke lighting shades.",
    keyTakeaways: [
      "Abaca is harvested from the leaf sheaths of Musa textilis, a non-edible wild banana plant.",
      "It is globally recognized as the strongest of all natural plant fibers, offering exceptional resistance to saltwater corrosion.",
      "Due to its non-porous wet strength, abaca is the critical raw material used in high-grade currency paper, tea bags, and automotive biocomposites."
    ],
    tableOfContents: [
      { id: "botany-musa-textilis", title: "1. The Botany: Musa Textilis and Volcanic Slopes" },
      { id: "mechanical-supremacy", title: "2. Mechanical Supremacy: Saltwater & Tensile Limits" },
      { id: "harvesting-and-stripping", title: "3. Tuxying and Stripping: The Extraction Craft" },
      { id: "tea-bags-to-hypercars", title: "4. Industrial Uses: Currency, Porous Tea Bags & Composites" },
      { id: "interior-woven-art", title: "5. Fine Woven Lighting & Architectural Textiles" }
    ],
    contentHtml: `
      <section id="botany-musa-textilis" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">1. The Botany: Musa Textilis and Volcanic Slopes</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Commonly known as Manila Hemp (though not related to actual cannabis hemp), <strong>Abaca</strong> is extracted from the elongated leaf sheaths of <em>Musa textilis</em>, a wild perennial relative of the edible banana. Native to the rich volcanic slopes and lush rainforests of the Philippines (which accounts for over 85% of worldwide production), abaca plants flourish beneath the shade canopy of primary forest trees without chemical fertilizers.
        </p>
      </section>

      <section id="mechanical-supremacy" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">2. Mechanical Supremacy: Saltwater & Tensile Limits</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          In tests conducted by international naval standards, abaca fibers demonstrated the highest breaking tenacity of any natural cellulose fiber on Earth. What sets abaca apart from jute and cotton is its immunity to saltwater degradation: even when submerged continuously in ocean brine, abaca does not rot, swell, or lose tensile cohesion.
        </p>
      </section>

      <section id="harvesting-and-stripping" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">3. Tuxying and Stripping: The Extraction Craft</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          Harvesting abaca requires profound physical skill. Farmers cut the pseudostem stalks every 18 to 24 months, then perform <em>tuxying</em>, carefully peeling the outermost fiber-rich ribbon from each overlapping leaf layer. The ribbons are pulled through serrated stripping knives to eliminate pulp and water, producing long, shimmering ivory fibers up to 3 meters in continuous length.
        </p>
      </section>

      <section id="tea-bags-to-hypercars" class="mb-10">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">4. Industrial Uses: Currency, Porous Tea Bags & Composites</h2>
        <p class="text-base leading-relaxed text-[#2d3748] mb-4">
          You interact with abaca fiber every day without realizing it:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-base text-[#2d3748] mb-4">
          <li><strong>Porous Infusion Paper:</strong> Its wet tensile strength makes abaca the primary raw material for 95% of the world's non-toxic tea bags and gourmet coffee filters.</li>
          <li><strong>Banknotes & Security Paper:</strong> Central banks worldwide blend abaca pulp into currency paper for tear resistance and fold longevity.</li>
          <li><strong>Automotive Underbody Paneling:</strong> Premium automotive manufacturers blend abaca fibers into polypropylene composites to replace heavy fiberglass, cutting vehicle weight while improving crash impact absorption.</li>
        </ul>
      </section>

      <section id="interior-woven-art" class="mb-6">
        <h2 class="text-2xl font-bold font-serif text-[#0c2340] mb-4">5. Fine Woven Lighting & Architectural Textiles</h2>
        <p class="text-base leading-relaxed text-[#2d3748]">
          In luxury architectural lighting, abaca cord is woven into breathtaking cocoon pendants and sculptural chandeliers. Its translucent natural sheen diffuses illumination with a soft amber warmth, casting organic filament shadows that plastic or synthetic weaves cannot match.
        </p>
      </section>
    `
  }
];

