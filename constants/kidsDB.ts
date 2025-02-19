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
    id: "1",
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
        <img src="/images/section-kid-detail/nutrition.png" width="812" height="450" alt="two women near to big stack of special nutrition" />
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
            <img src="/images/section-kid-detail/maryna-andrii.jpg" width="398" height="450" alt="women and kid smilling" />
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
    id: "2",
    name: "Timur Diachko",
    pageTitle: "Timur: A Young Leader Overcoming Asthma",
    pageDescription:
      "7-year-old Timur loves football and building cities with Lego. Your kindness can help him breathe easier and regain his strength.",
    richText: `
      <h2>Andrii Bevza</h2>
      <p>Andrii, an 11-year-old boy from Dnipropetrovsk, has faced challenges that most of us can hardly imagine. Diagnosed with a rare degenerative disorder, Andrii’s journey has been one of courage and perseverance. Despite the hardships, he has shown incredible strength and resilience, inspiring everyone around him.</p>
      
      <h3>A Life Full of Challenges</h3>
      <p>For the first three years of his life, Andrii developed like any other child, full of energy and curiosity. But then his parents noticed something was wrong—his right leg began to weaken, and over time, he lost the ability to walk. By age six, Andrii could no longer speak, chew, or swallow on his own. He is now fed through a tube and requires round-the-clock care.</p>
      <blockquote>A large delivery of vital nutrition for Andrii, ensuring his health and growth, made possible by your support.</blockquote>
      
      <h3>A Rare Diagnosis</h3>
      <p>It took years for doctors to identify Andrii’s condition as Hallervorden-Spatz disease, a rare and inherited degenerative disorder of the nervous system. This diagnosis came with its own set of challenges, as he is the only child in his region with this condition.</p>
      
      <h3>Nutritional Struggles</h3>
      <p>Andrii also battles severe protein-energy malnutrition. At just 11 years old, he weighed only 22 kilograms—a weight far below what a child his age should be.</p>
      <p>Thanks to specialized nutrition therapy and ongoing support, he has recently gained 3 kilograms, a step forward in his recovery. Each month, Andrii requires 30 cans of <strong>Resource Junior</strong> formula, costing nearly <strong>19,500 UAH</strong>, along with <strong>3,500 UAH</strong> for hygiene supplies.</p>
      <blockquote>Andrii has received his essential medicines and supplies, bringing hope to his recovery journey.</blockquote>
      
      <h3>Hope for a Better Future</h3>
      <p>Andrii’s medical team has recommended a life-changing medication, <strong>Ferriprox</strong>, which can slow the progression of his neurological disorder. However, the family’s financial situation makes it impossible to afford this treatment without outside help.</p>
      
      <h3>How You Can Help</h3>
      <p>By supporting Andrii, you can give him the gift of stability, better health, and hope for a brighter future. Every contribution helps ensure he receives the nutrition, medication, and care he needs to continue his journey of resilience.</p>
    `,
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
