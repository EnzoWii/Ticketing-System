import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import Subherofaq from '@/Components/subherofaq'
function FAQ({auth}) {
  return (
   <Authenticated  user={auth.user}>
    <div className='flex w-full'>
        <div className='w-[80%]'><Subherofaq /></div>
        <div>
            hello
        </div>
    </div>
   </Authenticated>
  )
}

export default FAQ
