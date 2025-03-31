interface KidsProfile {
  id: string;
  name: string;
  pageTitle: string;
  pageDescription: string;
  richText: string;
  coverImageSRC: string;
  gallery?: { src: string; alt: string }[];
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

      <ul class="rich-flex">
        <li class="rich-col">
          <h3>A Life Full of Challenges</h3>
          <p>For the first three years of his life, Andrii developed like any other child, full of energy and curiosity. But then his parents noticed something was wrong—his right leg began to weaken, and over time, he lost the ability to walk. By age six, Andrii could no longer speak, chew, or swallow on his own. He is now fed through a tube and requires round-the-clock care.</p>
        </li>
        <li class="rich-col">
          <figure>
            <picture>
              <source srcset="/images/page-profile/andrii-bevza/andrii-life-challenges-feeding-tube.avif" type="image/avif" />
              <img src="/images/page-profile/andrii-bevza/andrii-life-challenges-feeding-tube.jpg" width="398" height="450" alt="women and kid smilling" />
            </picture>
            <figcaption>Andrii lies on a colorful blanket in a festive shirt with a feeding tube attached, symbolizing his strength in the face of severe neurological challenges.</figcaption>
          </figure>
        </li>
      </ul>
      
      <h3>A Rare Diagnosis</h3>
      <p>It took years for doctors to identify Andrii’s condition as Hallervorden-Spatz disease, a rare and inherited degenerative disorder of the nervous system. This diagnosis came with its own set of challenges, as he is the only child in his region with this condition.</p>

      <h3>Nutritional Struggles</h3>
      <p>Andrii also battles severe protein-energy malnutrition. At just 11 years old, he weighed only 22 kilograms—a weight far below what a child his age should be.</p>
      <p>Thanks to specialized nutrition therapy and ongoing support, he has recently gained 3 kilograms, a step forward in his recovery. Each month, Andrii requires 30 cans of <strong>Resource Junior</strong> formula, costing nearly <strong>19,500 UAH</strong>, along with <strong>3,500 UAH</strong> for hygiene supplies.</p>

      <figure>
        <picture>
          <source srcset="/images/page-profile/andrii-bevza/nutrition.avif" type="image/avif" />
          <img src="/images/page-profile/andrii-bevza/nutrition.jpg" width="812" height="450" alt="two women near to big stack of special nutrition" />
        </picture>
        <figcaption>Boxes of Resource Junior medical nutrition delivered for Andrii’s therapy, supported by volunteers to help him overcome severe malnutrition.</figcaption>
      </figure>
      
      <ul class="rich-flex">
        <li class="rich-col">
          <h3>Hope for a Better Future</h3>
          <p>Andrii’s medical team has recommended a life-changing medication, <strong>Ferriprox</strong>, which can slow the progression of his neurological disorder. However, the family’s financial situation makes it impossible to afford this treatment without outside help.</p>
        </li>
        <li class="rich-col">
          <figure>
            <picture>
              <source srcset="/images/page-profile/andrii-bevza/maryna-andrii.avif" type="image/avif" />
              <img src="/images/page-profile/andrii-bevza/maryna-andrii.jpg" width="398" height="450" alt="women and kid smilling" />
            </picture>
            <figcaption>Andrii has received his essential medicines...</figcaption>
          </figure>
        </li>
      </ul>
      
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
        <figure>
        
        <li class="rich-col">
          <figure>
              <picture>
              <source srcset="/images/page-profile/timur-diachko/timurs-family-electric-generator.avif" type="image/avif" />
              <img src="/images/page-profile/andrii-bevza/timurs-family-electric-generator.jpg" width="812" height="450" alt="Timur and his siblings stand with the generator that keeps his medicines safe during power outages." />
            </picture>
            <figcaption>Timur and his siblings stand with the generator that keeps his medicines safe during power outages.</figcaption>
        </li>
      </ul>
      
      <h3>Coping with Trauma and Health Challenges</h3>
      <p>In Kamyanske, Timur has been receiving psychological rehabilitation to cope with the trauma of war. The doctors diagnosed him with bronchial asthma, a condition that requires continuous treatment. Each year, he needs eight packs of Oraltek inhaler, costing a total of 95,200 UAH. Despite these challenges, Timur remains a beacon of resilience and hope.</p>

      <figure>
        <picture>
              <source srcset="/images/page-profile/timur-diachko/maryna-with-timur-family.avif" type="image/avif" />
              <img src="/images/page-profile/timur-dziachko/maryna-with-timur-family.jpg" width="812" height="450" alt="Timur and his siblings stand with the generator that keeps his medicines safe during power outages." />
            </picture>
        <figcaption>Timur and his siblings with the generator that ensures his medications remain refrigerated and safe during frequent power outages.</figcaption>
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
  {
    id: "bohdan-bizhka",
    name: "Bohdan Bizhka",
    pageTitle: "Bohdan: A Strong Spirit Living with Cerebral Palsy",
    pageDescription:
      "15-year-old Bohdan needs regular rehabilitation to improve balance, speech, and motor skills. Your support helps him live more independently.",
    richText: `
      <h2>Bohdan Bizhka</h2>
      <p>Bohdan has lived with cerebral palsy since birth. He has difficulty walking, very weak legs, and struggles to maintain balance. Due to hyperkinesis—uncontrolled movements of the hands—he finds it hard to perform precise actions like eating with a spoon, writing, dressing himself, and doing basic self-care.</p>
      <p>Spasticity of the muscles makes it difficult for him to walk, use his hands, and speak. His speech is unclear, and he cannot pronounce all sounds. Despite this, Bohdan’s intellect is intact—he is smart, studies in the 8th grade, and actively interacts with other children.</p>
      
      <figure>
        <picture>
          <source srcset="/images/page-profile/bohdan-bizhka/bohdan-spring-portrait-garden.avif" type="image/avif" />
          <img src="/images/page-profile/andrii-bevza/bohdan-spring-portrait-garden.jpg" width="812" height="450" alt="Bohdan smiling outdoors in a spring garden." />
        </picture>
        <figcaption>Bohdan enjoys the fresh air and beauty of nature during a walk in the garden.</figcaption>
      </figure>

      <ul class="rich-flex">
        <li class="rich-col">
          <h3>A Life Full of Challenges</h3>
          <p>Since early childhood, Bohdan has received massage therapy, physical and occupational therapy, and worked with speech therapists and psychologists. He practices fine motor skills and learns to care for himself. He is very positive, loves adventure films and cartoons, and enjoys walking his dog Miguel. He dreams of traveling and seeing new places.</p>
          <p>Bohdan is raised by his mother alone. During growth spurts, his spasticity worsens, leading to further physical challenges. He needs regular rehabilitation courses to preserve and improve his abilities.</p>
        </li>
        <li class="rich-col">
          <figure>
            <picture>
              <source srcset="/images/page-profile/bohdan-bizhka/bohdan-physical-therapy-treadmill.avif" type="image/avif" />
              <img src="/images/page-profile/andrii-bevza/bohdan-physical-therapy-treadmill.jpg" width="812" height="450" alt="Bohdan walking on a treadmill during therapy." />
            </picture>
            <figcaption>Physical therapy helps Bohdan maintain coordination and mobility.</figcaption>
          </figure>
        </li>
      </ul>
  
      <ul class="rich-flex">
        <li class="rich-col">
          <figure>
            <picture>
              <source srcset="/images/page-profile/bohdan-bizhka/bohdan-craft-occupational-therapy.avif" type="image/avif" />
              <img src="/images/page-profile/andrii-bevza/bohdan-craft-occupational-therapy.jpg" width="812" height="450" alt="Bohdan doing a craft activity at a table." />
            </picture>
            <figcaption>Bohdan strengthens his fine motor skills through creative craft activities during occupational therapy.</figcaption>
          </figure>
        </li>
        <li class="rich-col">
          <h3>A Center That Can Help</h3>
          <p>In Dnipro, there is a rehabilitation center called “Bude Tak” (“It Will Be So”) with excellent specialists. Bohdan would love to attend therapy sessions there. One course — 10 physical therapy sessions + 10 massages — costs <strong>16,300 UAH</strong>.</p>
        </li>
      </ul>
  
      <h3>How You Can Help</h3>
      <p>By supporting Bohdan, you give him the chance for a better future — with less pain, more independence, and the confidence to keep striving. Let’s help him complete his rehabilitation course at “Bude Tak”.</p>
    `,
    coverImageSRC: "/images/section-kids/bogdan-bizhka-cover.jpg",
    gallery: [
      {
        src: "/images/section-kids/bohdan-cover.jpg",
        alt: "Bohdan during rehabilitation",
      },
    ],
  },
];
export default kidsDB;
