import { Section } from 'astro-boilerplate-components';

import betterStackLogo from '../../public/assets/images/better-stack-white.png';
import clerkLogo from '../../public/assets/images/clerk.png';
import crowdinLogo from '../../public/assets/images/crowdin-white.png';
import nextlessLogo from '../../public/assets/images/nextlessjs.png';
import sentryLogo from '../../public/assets/images/sentry-white.png';
import tursoLogo from '../../public/assets/images/turso.png';

const Sponsors = () => (
  <Section title="What I Do">
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="border-2 border-gray-300 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
        <p className="text-sky-600">I create modern and responsive websites using the latest technologies like React, Astro, and more.</p>
      </div>
      <div className="border-2 border-gray-300 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
        <p className="text-sky-600">I develop cross-platform mobile applications with React Native, providing seamless user experiences.</p>
      </div>
      <div className="border-2 border-gray-300 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
        <p className="text-sky-600">I design intuitive and engaging user interfaces, ensuring a great user experience across all devices.</p>
      </div>
      <div className="border-2 border-gray-300 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2">Game Developer</h3>
        <p className="text-sky-600">I design and develop engaging games across various platforms, bringing ideas to life with interactive experiences.</p>
      </div>
    </div>
  </Section>
);

export { Sponsors };
