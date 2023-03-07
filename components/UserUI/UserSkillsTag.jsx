const UserSkillsTags = ({ dataSkills }) => {
  return (
    <>
      <div className='relative z-0 mb-6 mt-4 w-full group flex flex-wrap'>
        {dataSkills.map((skills, index) => (
          <span
            key={index}
            className='bg-red-100 text-red-800 font-medium mr-2 mb-2 px-3 py-1 rounded dark:bg-red-200 dark:text-red-900 text-sm sm:text-base'
          >
            {skills}
          </span>
        ))}
      </div>
    </>
  );
};

export default UserSkillsTags;
