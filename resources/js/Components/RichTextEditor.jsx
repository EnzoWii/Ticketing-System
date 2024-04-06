import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { Inertia } from '@inertiajs/inertia';

const RichTextEditor = () => {
  const [title, setTitle] = useState('');
  const [editorHtml, setEditorHtml] = useState('');

  const handleSubmit = () => {
    Inertia.post('/cms', {
      title: title,
      content: editorHtml
    });


    window.location.reload()
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter title..."
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
      />
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleChange}
        className="bg-white"
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">Submit</button>
    </div>
  );
};

export default RichTextEditor;
