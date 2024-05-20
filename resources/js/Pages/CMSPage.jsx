import React, { useRef, useEffect, useState } from 'react';
import Authenticated from '@/Layouts/facilitatorLayout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { useForm, router } from '@inertiajs/react';
import { PencilIcon, Trash, ViewIcon } from 'lucide-react';
import InputError from '@/Components/InputError';
import Modal from '@/Components/Modal';

const CMSPage = ({ auth, articles }) => {
    const { data, setData, delete: { id: destroy }, post, put, errors, reset, processing } = useForm();
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [articleToDeleteId, setArticleToDeleteId] = useState(null);
    const [articleToUpdatedId, setArticleToUpdatedId] = useState(null);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    const imageInputRef = useRef(null);

    const openDeleteModal = (id) => {
        setArticleToDeleteId(id);
        setDeleteModalOpen(true);
    }
    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    }

    const handleDeleteArticle = () => {
        router.delete(route('article.destroy', { id: articleToDeleteId }));
        closeDeleteModal();
    }
    useEffect(() => {
        // Check if an image was selected and update form data accordingly
        if (imageInputRef.current && imageInputRef.current.files.length > 0) {
            setData('image', imageInputRef.current.files[0]);
        }
    }, [imageInputRef.current]);

    const handleFileChange = (e) => {
        setData('image', e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/cms', data);
        reset(); // Reset the form data after submission
        setCreateModalOpen(false); // Close create modal after submission
    };

    const handleViewArticle = (id) => {
        window.location.href = `articles/${id}`;
    }

    return (
        <Authenticated user={auth.user}>
            <div className="flex gap-10 py-8 px-4">
                <div className="w-[30%]">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h1 className="text-3xl font-bold mb-4">Content Management System</h1>
                        <h2 className="text-xl font-semibold mb-2">Write Article</h2>
                        <button onClick={() => setCreateModalOpen(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-md">Create Article</button>
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold mb-2">Upload Image</h2>
                            <div>
                                <input ref={imageInputRef} type="file" onChange={handleFileChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[70%]">
                    <h2 className="text-xl font-semibold mb-4">Articles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {articles.map((article) => (
                            <div key={article.id} className="border border-gray-300 bg-white rounded-lg p-4 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                                    {/* Edit, Delete, and View buttons */}
                                    <div className='flex justify-between items-center'>
                                        <span className='flex justify-center items-center gap-2 cursor-pointer hover:bg-green-400 p-1 rounded' title="Edit"> <PencilIcon color="green" size={13} />Edit</span>
                                        <span className='flex justify-center items-center gap-2 cursor-pointer hover:bg-red-400 p-1 rounded' onClick={() => openDeleteModal(article.id)} title="Delete"> <Trash color="Red" size={13} />Delete</span>
                                        <span className='flex justify-center items-center gap-2 cursor-pointer hover:bg-slate-500 p-1 rounded' onClick={() => handleViewArticle(article.id)} title="View"> <ViewIcon color="Black" size={13} />View</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Create Article Modal */}
            {createModalOpen && (
                <Modal show={createModalOpen} onClose={() => setCreateModalOpen(false)}>
                    <div className="p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Create Article</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <input
                                        id="title"
                                        type="text"
                                        value={data.title || ''}
                                        onChange={(e) => setData('title', e.target.value)}
                                        placeholder="Enter title..."
                                        className="w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                    />
                                    <InputError className='mt-1 mb-1' message={errors.title} />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={data.subtext || ''}
                                        onChange={(e) => setData('subtext', e.target.value)}
                                        placeholder='Enter subtext...'
                                        className='w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
                                    />
                                    <InputError className='mb-2' message={errors.subtext} />
                                </div>
                                <div>
                                    <ReactQuill
                                        theme="snow"
                                        value={data.content || ''}
                                        onChange={(value) => setData('content', value)}
                                        className="bg-white"
                                    />
                                    <InputError className='mt-1' message={errors.content} />
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}
            {/* Delete Article Modal */}
            <Modal show={deleteModalOpen} onClose={closeDeleteModal}>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                    <p className="mb-4">Are you sure you want to delete this article?</p>
                    <div className="flex justify-end">
                        <button className="bg-red-500 text-white px-4 py-2 mr-2 rounded-md" onClick={closeDeleteModal}>Cancel</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleDeleteArticle}>Delete</button>
                    </div
>
                </div>
            </Modal>
        </Authenticated>
    );
};

export default CMSPage;
