import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <main className="h-full">
      <div className="bg-teal-400 min-h-screen flex flex-col xl:flex-row items-center justify-center gap-10">
        <Image
          src="https://picsum.photos/700/472"
          alt="Expense Tracker App preview"
          width={700}
          height={472}
          className="rounded-md"
          priority={true}
        />
        <div>
          <h1 className="text-5xl font-semibold my-6 max-w-[500px]">
            Track your <span className="font-extrabold">expenses</span> with ease
          </h1>
          <p className="text-2xl font-medium max-w-[600px]">
            Use Expense Tracker to easily keep track of your expenses. Get lifetime access for R1899
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
