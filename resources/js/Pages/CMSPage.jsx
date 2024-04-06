import React, { useState, useEffect } from 'react';
import RichTextEditor from '@/Components/RichTextEditor';
import ImageUploader from '@/Components/ImageUploader';
import Authenticated from '@/Layouts/facilitatorLayout';
import { Inertia } from '@inertiajs/inertia';
import { PencilIcon, Trash, ViewIcon } from 'lucide-react';
const CMSPage = ({ auth, articles }) => {
    const handleViewArticle = (id) => {
        // Navigate to the article details page using Inertia
        Inertia.visit(`/articles/${id}`);
      };
  return (
    <Authenticated user={auth.user}>
      <div className="w-full flex gap-10 py-8 px-4">
      <div className="w-[40%]">
          <h2 className="text-xl font-semibold mb-2">Articles</h2>
          <div className="flex flex-col gap-3">
            {articles.map((article) => (
              <div key={article.id} className="border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <div className='flex gap-2'>
                    <span className='flex justify-center items-center gap-2 cursor-pointer hover:bg-green-400 p-1 rounded'> <PencilIcon color="green" size={15} />Edit</span>
                    <span className='flex justify-center items-center gap-2 cursor-pointer hover:bg-red-400 p-1 rounded'> <Trash color="Red" size={15} />Delete</span>
                    <span className='flex justify-center items-center gap-2 cursor-pointer hover:bg-slate-500 p-1 rounded' onClick={() => window.location.href = `articles/${article.id}`}> <ViewIcon color="Black" size={15} />View</span>

                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: article.content }} /> */}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[60%]">
        <h1 className="text-3xl font-bold mb-4">Content Management System</h1>
          <div>
            <h2 className="text-xl font-semibold mb-2">Write Article</h2>
            <RichTextEditor />
          </div>

        </div>
        <div>
            <h2 className="text-xl font-semibold mb-2">Upload Image</h2>
            <ImageUploader />
          </div>
      </div>
    </Authenticated>
  );
};

export default CMSPage;
