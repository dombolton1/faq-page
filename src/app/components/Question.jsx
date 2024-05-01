import React from 'react';
import { IoMdAdd, IoMdRemove } from "react-icons/io";


export default function QuestionComponent({ data, openQuestionId, toggleQuestion }) {
  return (
    <div key={data.id} className="mb-10 border border-gray-300 rounded-md p-8 bg-white flex-col cursor-pointer" onClick={() => toggleQuestion(data.id)}>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-primecarers-green cursor-pointer">
          {data.question}
        </h1>
        {openQuestionId === data.id ?
          <IoMdRemove className="text-primecarers-green" size={30}/> :
          <IoMdAdd className="text-primecarers-green" size={30}/>
        }
      </div>
      {openQuestionId === data.id && (
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: data.answer }} />
      )}
    </div>
  );
}