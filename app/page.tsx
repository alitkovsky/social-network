"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [inputData, setInputData] = useState('');

  const handleSaveData = async () => {
    const response = await fetch('/api/saveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: inputData }),
    });

    if (response.ok) {
      alert('Data saved successfully!');
      setInputData('');
    } else {
      alert('Something went wrong!');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={handleSaveData}>Save Data</button>
      </div>
    </main>
  )
}
