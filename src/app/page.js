import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex flex-col justify-center text-center m-20 h-72">
        <h1 className="text-3xl font-bold mb-4">Welcome to prime<span className="text-primecarers-green font-bold">carers</span></h1>
        <p className="text-lg text-gray-700 mb-8">Visit our FAQ page for any queries.</p>
      </div>
    </div>
  );
}
