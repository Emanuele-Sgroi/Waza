import { useState } from 'react';

function TagsInput({ tags, setTags }) {
  function handleKeyDown(e) {
    if (e.key !== 'Control') return;
    const value = e.target.value.toLowerCase();
    if (!value.trim()) return;

    e.target.value = '';

    // If statement to check if the tags array is less than 10 and check if the value is inside the array tags
    if (tags.length !== 10 && !tags.includes(value)) {
      setTags([...tags, value]);
    } else {
      return;
    }
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }

  return (
    <>
      <div className='relative z-0 mb-6 w-full group'>
        <input
          type='text'
          name='floating_tag'
          id='floating_tag'
          className='flex py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer'
          placeholder=' '
          autoComplete='off'
          onKeyDown={handleKeyDown}
        />
        <label
          htmlFor='floating_tag'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Tags
        </label>
        <p className='text-sm text-gray-400'>
          Use the CTRL command to separate tags. Limit: {tags.length}/10
        </p>
        <div className='mt-2'>
          {tags.map((tag, index) => (
            <div className='tag-item' key={index}>
              <span className='text'>#{tag}</span>
              <span className='close' onClick={() => removeTag(index)}>
                &times;
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TagsInput;
