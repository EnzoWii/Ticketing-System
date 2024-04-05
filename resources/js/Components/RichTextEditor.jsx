// RichTextEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const RichTextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <ReactQuill
        theme="snow" // Use the snow theme (other themes are available)
        value={editorHtml}
        onChange={handleChange}
      />
    </div>
  );
};

export default RichTextEditor;
