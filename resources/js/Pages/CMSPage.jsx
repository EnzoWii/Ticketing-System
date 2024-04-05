// CMSPage.js
import React from 'react';
import RichTextEditor from '@/Components/RichTextEditor';
import ImageUploader from '@/Components/ImageUploader';
import Authenticated from '@/Layouts/AuthenticatedLayout';
const CMSPage = ({auth}) => {
  return (
    <Authenticated
    user={auth.user}
    >
        <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Content Management System</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Write Article</h2>
          <RichTextEditor />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Upload Image</h2>
          <ImageUploader />
        </div>
      </div>
    </div>
    </Authenticated>

  );
};

export default CMSPage;
