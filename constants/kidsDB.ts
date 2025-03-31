interface KidsProfile {
  id: string;
  name: string;
  pageTitle: string;
  pageDescription: string;
  richText: string;
  coverImageSRC: string;
  gallery: { src: string; alt: string }[];
}

const kidsDB: KidsProfile[] = [
  {
    id: "andrii-bevza",
    name: "Andrii Bevza",
    pageTitle: "Andrii: Fighting a Rare Disorder with Courage",
    pageDescription:
      "At 11 years old, Andrii dreams of a healthier future. With your support, he can access life-saving nutrition and medication.",
    richText: `
      <h2>Andrii Bevza</h2>
      <p>Andrii, an 11-year-old boy from Dnipropetrovsk, has faced challenges that most of us can hardly imagine. Diagnosed with a rare degenerative disorder, Andrii’s journey has been one of courage and perseverance. Despite the hardships, he has shown incredible strength and resilience, inspiring everyone around him.</p>
      
      <h3>A Life Full of Challenges</h3>
      <p>For the first three years of his life, Andrii developed like any other child, full of energy and curiosity. But then his parents noticed something was wrong—his right leg began to weaken, and over time, he lost the ability to walk. By age six, Andrii could no longer speak, chew, or swallow on his own. He is now fed through a tube and requires round-the-clock care.</p>
      
      <h3>A Rare Diagnosis</h3>
      <p>It took years for doctors to identify Andrii’s condition as Hallervorden-Spatz disease, a rare and inherited degenerative disorder of the nervous system. This diagnosis came with its own set of challenges, as he is the only child in his region with this condition.</p>

      <figure>
        <img src="/images/section-kid-detail/nutrition.avif" width="812" height="450" alt="two women near to big stack of special nutrition" />
        <figcaption>A large delivery of vital nutrition for Andrii, ensuring his health and growth, made possible by your support.</figcaption>
      </figure>
      
      <ul class="rich-flex">
        <li class="rich-col">
          <h3>Nutritional Struggles</h3>
          <p>Andrii also battles severe protein-energy malnutrition. At just 11 years old, he weighed only 22 kilograms—a weight far below what a child his age should be.</p>
          <p>Thanks to specialized nutrition therapy and ongoing support, he has recently gained 3 kilograms, a step forward in his recovery. Each month, Andrii requires 30 cans of <strong>Resource Junior</strong> formula, costing nearly <strong>19,500 UAH</strong>, along with <strong>3,500 UAH</strong> for hygiene supplies.</p>
        </li>
        <li class="rich-col">
          <figure>
            <img src="/images/section-kid-detail/maryna-andrii.avif" width="398" height="450" alt="women and kid smilling" />
            <figcaption>Andrii has received his essential medicines and supplies, bringing hope to his recovery journey.</figcaption>
          </figure>
        </li>
      </ul>
      
      <h3>Hope for a Better Future</h3>
      <p>Andrii’s medical team has recommended a life-changing medication, <strong>Ferriprox</strong>, which can slow the progression of his neurological disorder. However, the family’s financial situation makes it impossible to afford this treatment without outside help.</p>
      
      <h3>How You Can Help</h3>
      <p>By supporting Andrii, you can give him the gift of stability, better health, and hope for a brighter future. Every contribution helps ensure he receives the nutrition, medication, and care he needs to continue his journey of resilience.</p>
    `,
    coverImageSRC: "/images/section-kids/andrii-cover.jpg",
    gallery: [
      {
        src: "/images/section-kids/andrii-cover.jpg",
        alt: "Andrii get his medications",
      },
    ],
  },
  {
    id: "timur-diachko",
    name: "Timur Diachko",
    pageTitle: "Timur: A Young Leader Overcoming Asthma",
    pageDescription:
      "7-year-old Timur loves football and building cities with Lego. Your kindness can help him breathe easier and regain his strength.",
    richText: `
      <h2>Timur Diachko</h2>
      <p>Timur is a bright and courageous 7-year-old boy from the Zaporizhzhia region of Ukraine. Before the war turned his life upside down, Timur was a lively and ambitious child, always ready to lead his siblings in games and adventures. But when the conflict reached his hometown of Polohy, Timur’s world changed forever.</p>
      
      <ul class="rich-flex">
        <li class="rich-col">
          <h3>Life in a War Zone</h3>
          <p>In February 2024, Polohy was overtaken during the early days of the war. The town became a frontline zone, constantly bombarded and unsafe. Timur, along with his family, spent weeks sheltering in a cold, damp basement.</p>
          <p>The harsh conditions took their toll, and Timur developed a persistent cough that worsened each day. When he began struggling to breathe, his parents made the heartbreaking decision to split the family.</p>
          <p>Timur’s mother took him and his siblings to safety in Kamyanske, while his father stayed behind to care for his immobile grandmother.</p>
        </li>
        <li class="rich-col">
          <figure>
            <img src="/images/section-kid-detail/timurs-family-electric-generator.avif" width="398" height="450" alt="women and kid smilling" />
            <figcaption>Timur and his siblings stand with the generator that keeps his medicines safe during power outages.</figcaption>
          </figure>
        </li>
      </ul>
      
      <h3>Coping with Trauma and Health Challenges</h3>
      <p>In Kamyanske, Timur has been receiving psychological rehabilitation to cope with the trauma of war. The doctors diagnosed him with bronchial asthma, a condition that requires continuous treatment. Each year, he needs eight packs of Oraltek inhaler, costing a total of 95,200 UAH. Despite these challenges, Timur remains a beacon of resilience and hope.</p>

      <figure>
        <img src="/images/section-kid-detail/maryna-with-timur-family.avif" width="812" height="450" alt="two women near to big stack of special nutrition" />
        <figcaption>Timur’s family receives essential medicines, bringing hope and care to their home.</figcaption>
      </figure>
      
      <h3>Finding Joy Amidst Struggles</h3>
      <p>Although once a fearless leader, Timur now struggles with fear of loud sounds and frequent tears, reminders of the war’s impact. Yet, his determination to find joy and purpose shines through. Unable to play his favorite game, football, due to breathlessness and weakness, Timur has found new passions. He spends his time building intricate cities with Lego and watching educational videos about ships, dreaming of a brighter and healthier future.</p>
      
      <h3>A Story of Heartbreak and Hope</h3>
      <p>Timur’s story is one of both heartbreak and hope. With your support, he can access the treatment he needs to breathe freely again and reclaim his childhood. Together, we can help Timur grow into the leader he was born to be, free from the shadows of war and illness.</p>`,
    coverImageSRC: "/images/section-kids/timur-cover.jpg",
    gallery: [
      {
        src: "/images/section-kids/timur-cover.jpg",
        alt: "Timur get his medications",
      },
    ],
  },
];
export default kidsDB;
