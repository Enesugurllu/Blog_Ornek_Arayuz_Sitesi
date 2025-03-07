import React from 'react';

const Comments = () => {
  return (
    <div className="w-full max-w-2xl mt-8">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Comments</h1>
      <div className="space-y-6">
        {/* Comment 1 */}
        <div className="flex space-x-4">
          <img 
            src="https://storage.googleapis.com/a1aa/image/CZ0Cc172a0LM1ZLetu2lf9uJDZU7g0aOz_8E68sjKl4.jpg"
            alt="Profile picture of Robert Fox"
            className="w-12 h-12 rounded-full"
            width={50}
            height={50}
          />
          <div>
            <div className="text-lg font-semibold text-white">Robert Fox</div>
            <div className="text-sm text-gray-400">August 25, 2023</div>
            <div className="bg-gray-800 p-4 rounded-lg mt-2 text-gray-300">
              White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.
            </div>
          </div>
        </div>

        {/* Comment 2 */}
        <div className="flex space-x-4">
          <img 
            src="https://storage.googleapis.com/a1aa/image/iTdPBUaaHzwMO-VySULuXM4m0bRVv77aZrhXpFIdaV8.jpg"
            alt="Profile picture of Jenny Wilson"
            className="w-12 h-12 rounded-full"
            width={50}
            height={50}
          />
          <div>
            <div className="text-lg font-semibold text-white">Jenny Wilson</div>
            <div className="text-sm text-gray-400">August 25, 2023</div>
            <div className="bg-gray-800 p-4 rounded-lg mt-2 text-gray-300">
              White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.
            </div>
          </div>
        </div>

        {/* Comment 3 */}
        <div className="flex space-x-4">
          <img 
            src="https://storage.googleapis.com/a1aa/image/4_3KmtcSXCpda53Nm43ieP6Vrp2md7f3Cx5ympBSrrw.jpg"
            alt="Profile picture of Eleanor Pena"
            className="w-12 h-12 rounded-full"
            width={50}
            height={50}
          />
          <div>
            <div className="text-lg font-semibold text-white">Eleanor Pena</div>
            <div className="text-sm text-gray-400">August 25, 2023</div>
            <div className="bg-gray-800 p-4 rounded-lg mt-2 text-gray-300">
              White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;