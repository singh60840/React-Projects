import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch('https://api.github.com/users/singh60840')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="text-center text-2xl font-bold mt-10 bg-gray-100 p-10 rounded-lg shadow-lg">
      Github followers: {data.followers}
      {data.avatar_url && (
        <img
          src={data.avatar_url}
          alt="Avatar"
          className="w-20 h-20 rounded-full mx-auto mt-5"
        />
      )}
    </div>
  );
}

export default Github;
