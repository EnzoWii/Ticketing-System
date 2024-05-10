import Authenticated from '@/Layouts/AuthenticatedLayout'
import AuthenticatedLayout from '@/Layouts/facilitatorLayout'
import React from 'react'

function Article({ article, auth }) {
    console.log(auth.user.roles)
    return (
        <>
            {
                auth.user.roles == 'user' && <Authenticated user={auth.user}>

                    <div className='p-20'>
                        <h1 className='text-5xl text-center font-bold mb-10'>{article.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                </Authenticated>
            }

            {
                auth.user.roles == 'facilitators' &&
                <AuthenticatedLayout user={auth.user}>
                    <div className='p-20'>
                        <h1 className='text-3xl text-center font-bold mb-10'>{article.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                </AuthenticatedLayout>

            }
        </>


    )
}

export default Article
