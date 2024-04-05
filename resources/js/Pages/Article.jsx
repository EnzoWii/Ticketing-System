import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'

function Article({ article, auth }) {
  return (
    <Authenticated user={auth.user}>

    <div className='p-20'>
            <h1 className='text-3xl text-center font-bold mb-10'>{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
    </Authenticated>

  )
}

export default Article
