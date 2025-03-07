import React from 'react';

const LeaveComment = () => {
  return (
    <div className="w-full max-w-2xl mt-8">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400">Leave a comment</h2>
      <textarea 
        className="w-full p-4 mb-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none" 
        rows={5} 
        placeholder="Write a comment"
      />
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 space-y-4 md:space-y-0">
        <div className="flex items-start">
          <input 
            type="checkbox" 
            id="save-info" 
            className="mr-2 mt-1 accent-cyan-400"
          />
          <label htmlFor="save-info" className="text-gray-400 text-xs leading-relaxed">
            Save my name, email, and<br/>
            website in this browser for the next time I comment.
          </label>
        </div>
        {/* Butonun text-sm ve py-1.5 px-4 olarak güncellendi */}
        <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-bold py-1.5 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default LeaveComment;