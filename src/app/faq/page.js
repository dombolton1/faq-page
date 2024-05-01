'use client'

import qs from "qs";
import { useEffect, useState } from 'react';
import QuestionComponent from '../components/Question';

const faqPageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: {
        questions: {
          populate: true
        }
      }
    }
  },
})

// console.log(faqPageQuery)

async function getStrapiData(path) {
  const baseUrl = "http://localhost:1337";
  const url = new URL(path, baseUrl);

  url.search = faqPageQuery;

  try {
    const response = await fetch(url.href);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default function faqPage() {
  const [strapiData, setStrapiData] = useState(null);
  const [openQuestionId, setOpenQuestionId] = useState(null);
  const [audience, setAudience] = useState('client');

  useEffect(() => {
    async function fetchData() {
      const strapiResponse = await getStrapiData("/api/faq-page");
      setStrapiData(strapiResponse);
    }
    fetchData();
  }, []);

  const toggleQuestion = (questionId) => {
    setOpenQuestionId(openQuestionId === questionId ? null : questionId);
  };

  const toggleAudience = (audience) => {
    setAudience(audience)
    // console.log(audience)
  }

  if (!strapiData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="flex flex-col justify-center text-center m-20 h-72">
        <h1 className="text-3xl font-bold mb-4">{strapiData.data.attributes.blocks[0].title}<span className="text-primecarers-green font-bold">{audience === 'client' ? 'Clients' : 'Carers'}</span></h1>
        <p className="text-lg text-gray-700 mb-8">{strapiData.data.attributes.blocks[0].subtitle}</p>
        <div className="flex justify-center">
          <div className="flex justify-center items-center h-28 border-gray-300 rounded-full bg-white w-2/3 space-x-10">
            <h2 className={`text-2xl cursor-pointer ${audience === 'client' ? 'font-bold text-white border-gray-300 rounded-full bg-primecarers-green p-4' : ''}`} onClick={() => {toggleAudience('client'), toggleQuestion(null)}}>For Clients</h2>
            <h2 className={`text-2xl cursor-pointer ${audience === 'carer' ? 'font-bold text-white border-gray-300 rounded-full bg-primecarers-green p-4' : ''}`} onClick={() => {toggleAudience('carer'), toggleQuestion(null)}}>For Carers</h2>
          </div>
        </div>
      </div>

      <div className="flex-col w-2/3 flex-grow ml-32 mr-32 items-center justify-center">
        {strapiData.data.attributes.blocks[1].questions.map((data) => (
            data.audience === audience && (
              <QuestionComponent key={data.id} data={data} toggleQuestion={toggleQuestion} openQuestionId={openQuestionId} />
            )
        ))}
      </div>
    </div>
  )
}
