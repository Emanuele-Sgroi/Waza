const UserSkillsTags = ({ dataSkills }) => {
  return (
    <>
      <div className='relative z-0 mb-6 mt-4 w-full group'>
        {dataSkills.map((skills, index) => (
          <span
            key={index}
            className='bg-red-100 text-red-800 font-medium mr-2 px-3 py-1 rounded dark:bg-red-200 dark:text-red-900'
          >
            {skills}
          </span>
        ))}
      </div>
    </>
  );
};

export default UserSkillsTags;
