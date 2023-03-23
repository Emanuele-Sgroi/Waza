import React from 'react';

const About = () => {
  return (
    <div className='container mx-auto mb-10 md:mb-24 min-h-screen m-10 font-mono'>
      <div className='font-bold	text-center'>
        <h1>About Waza</h1>
      </div>
      <div className='m-10'>
        <p>
          Waza is a community-driven platform that enables people to collaborate
          on personal and non-commercial projects. Our platform provides a space
          for individuals to connect with others who share their interests and
          collaborate on projects of mutual interest.
        </p>
        {'\n'}
        <p className='mt-10'>
          The idea for Waza came about when our founder, Manlio, was looking for
          new job opportunities and had to complete coding tests as part of the
          interview process. Some of these tests went terribly, and Manlio
          realized that there must be a better way for developers to showcase
          their skills and collaborate on projects in a low-pressure
          environment.
        </p>
        {'\n'}
        <p className='mt-10'>
          One particularly challenging test required Manlio to find a solution
          for matching products and ranking them according to relevance. After
          some research, Manlio decided to implement the "Levenshtein Distance"
          algorithm, and was able to complete the entire search on a thousand
          records in just 15 minutes. This experience helped Manlio to learn
          more about coding and become a great programmer, and also led to a
          deep understanding of the frustrations that younger developers often
          face. Luckly
        </p>
        {'\n'}
        <p className='mt-10'>
          From this experience, Manlio realized that there was a need for a
          platform where developers, designers, writers, artists, and others
          could collaborate on projects in a supportive and low-pressure
          environment. And so, Waza was born.
        </p>
        {'\n'}
        <p className='mt-10'>
          At its core, Waza is about sharing techniques, skills, and knowledge
          with others. Whether you're a seasoned pro or just starting out,
          you'll find a welcoming community and opportunities to learn and grow.
          We believe that collaboration is key to innovation, and that by
          working together, we can create amazing things that none of us could
          have done alone.
        </p>
        {'\n'}
        <p className='mt-10'>
          Our platform is designed to facilitate collaboration and
          communication, with tools like project management, file sharing, and
          real-time chat to help teams stay organized and on track. And we're
          committed to fostering a community that is inclusive, respectful, and
          supportive. We welcome people of all backgrounds and skill levels, and
          we believe that everyone has something to contribute.
        </p>
        {'\n'}
        <p className='mt-10'>
          If you're interested in learning more about Waza, or if you're ready
          to start collaborating on your next project, we invite you to join our
          community today!
        </p>
      </div>
    </div>
  );
};

export default About;
