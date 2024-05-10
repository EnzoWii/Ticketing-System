import React, { useState, useRef } from 'react';


const RichTextEditor = () => {
    const [title, setTitle] = useState('');
    const [subtext, setSubtext] = useState('');
    const [editorHtml, setEditorHtml] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const imageInputRef = useRef(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const handleSubmit = () => {
        Inertia.post('/cms', {
            title: title,
            subtext: subtext,
            content: editorHtml
        });


        window.location.reload()
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleSubtextChange = (e) => {
        setSubtext(e.target.value);
    }
    const handleChange = (html) => {
        setEditorHtml(html);
    };



    return (
        <>



        </>
    );
};

export default RichTextEditor;
