const UserHobbiesTags = ({ dataHobbies }) => {
  return (
    <>
      <div className='relative z-0 mb-6 mt-4 w-full group'>
        {dataHobbies.map((hobby, index) => (
          <span
            key={index}
            className='bg-indigo-100 text-indigo-800 font-medium mr-2 px-3 py-1 rounded dark:bg-indigo-200 dark:text-indigo-900'
          >
            {hobby}
          </span>
        ))}
      </div>
    </>
  );
};

export default UserHobbiesTags;
