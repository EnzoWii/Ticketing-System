import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import Subherofaq from '@/Components/subherofaq'
function FAQ({auth}) {
  return (
   <Authenticated  user={auth.user}>
        <Subherofaq />
   </Authenticated>
  )
}

export default FAQ
