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
        setData({
            title: '',
            subtext: '',
            image: ''
        })
    };

    return (
        <Authenticated user={auth.user}>
            <div className="w-full flex gap-10 py-8 px-4">
                <div className="w-[40%]">
                    <h2 className="text-xl font-semibold mb-2">Articles</h2>
                    <div className="flex flex-col gap-3">
                        {articles.map((article) => (
                            <div key={article.id} className="border border-gray-300 bg-white rounded-lg p-4">
                                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                                <div className='flex gap-2'>
                                    <span className='flex justify-center items-center gap-2 cursor-pointer hover:bg-green-400 p-1 rounded'> <PencilIcon color="green" size={15} />Edit</span>
                                    <span className='flex justify-center items-center gap-2 cursor-pointer hover:bg-red-400 p-1 rounded' onClick={() => openDeleteModal(article.id)}> <Trash color="Red" size={15} />Delete</span>
                                    <span className='flex justify-center items-center gap-2 cursor-pointer hover:bg-slate-500 p-1 rounded' onClick={() => window.location.href = `articles/${article.id}`}> <ViewIcon color="Black" size={15} />View</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[60%]">
                    <h1 className="text-3xl font-bold mb-4">Content Management System</h1>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Write Article</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="border border-gray-300 rounded-lg p-4">
                                <div>
                                    <input
                                        id="title"
                                        type="text"
                                        value={data.title || ''}
                                        onChange={(e) => setData('title', e.target.value)}
                                        placeholder="Enter title..."
                                        className="w-full  px-4 py-2 border border-gray-300 rounded-md"
                                    />
                                    <InputError className='mt-1 mb-1' message={errors.title} />
                                </div>
                                <div className='mt-2'>
                                    <input
                                        type="text"
                                        value={data.subtext || ''}
                                        onChange={(e) => setData('subtext', e.target.value)}
                                        placeholder='Enter subtext...'
                                        className='w-full  px-4 border border-gray-300 rounded-md'
                                    />
                                    <InputError className=' mb-2' message={errors.subtext} />


                                </div>
                                <div className='mt-2'>
                                    <ReactQuill
                                        theme="snow"
                                        value={data.content || ''}
                                        onChange={(value) => setData('content', value)}
                                        className="bg-white"

                                    />
                                    <InputError className='mt-1' message={errors.content} />


                                </div>                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md" disabled={processing}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Upload Image</h2>
                    <div className="border border-gray-300 rounded-lg p-4">
                        <input ref={imageInputRef} type="file" onChange={handleFileChange} />
                    </div>
                </div>
            </div>
            <Modal show={deleteModalOpen} onClose={closeDeleteModal}>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                    <p className="mb-4">Are you sure you want to delete this article?</p>
                    <div className="flex justify-end">
                        <button className="bg-red-500 text-white px-4 py-2 mr-2 rounded-md" onClick={closeDeleteModal}>Cancel</button>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleDeleteArticle(articleToDeleteId)}>Delete</button>

                    </div>
                </div>
            </Modal>
        </Authenticated>
    );
};

export default CMSPage;
