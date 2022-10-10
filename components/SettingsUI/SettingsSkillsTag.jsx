import { useEffect } from 'react';

const SkillsTagsInput = ({ skills, setSkills, dataSkills, formChange }) => {
  useEffect(() => {
    if (dataSkills) {
      return setSkills([...skills, ...dataSkills]);
    }
  }, []);

  function handleKeyDown(e) {
    if (e.key !== 'Control') return;
    const value = e.target.value.toLowerCase();
    if (!value.trim()) return;

    e.target.value = '';

    // If statement to check if the tags array is less than 10 and check if the value is inside the array tags
    if (skills.length !== 10 && !skills.includes(value)) {
      formChange(true);
      setSkills([...skills, value]);
    } else {
      return;
    }
  }

  function removeTag(index) {
    setSkills(skills.filter((el, i) => i !== index));
    formChange(true);
  }

  return (
    <>
      <div className='relative z-0 mb-6 w-full group'>
        <input
          type='text'
          id='default-input'
          autoComplete='off'
          onKeyDown={handleKeyDown}
          className='bg-gray-50 border mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
        <p className='text-sm text-gray-400 mt-2 mb-2'>
          Use the{' '}
          <kbd className='px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500'>
            Ctrl
          </kbd>{' '}
          command to separate tags. Limit: {skills.length}/10
        </p>

        <div className='relative z-0 mt-5 mb-4 w-full group'>
          {skills.map((skill, index) => (
            <span
              id='badge-dismiss-red'
              key={index}
              className='inline-flex items-center mb-3 py-1 px-2 mr-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-200 dark:text-red-800'
            >
              {skill}
              <button
                type='button'
                className='inline-flex items-center p-0.5 ml-2 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-300 dark:hover:text-red-900'
                data-dismiss-target='#badge-dismiss-red'
                aria-label='Remove'
                onClick={() => removeTag(index)}
              >
                <svg
                  aria-hidden='true'
                  className='w-3.5 h-3.5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Remove badge</span>
              </button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillsTagsInput;
