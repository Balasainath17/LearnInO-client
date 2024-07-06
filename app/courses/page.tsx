'use client'
 
import { Suspense } from 'react'
import Search from '../components/Search'
 
const Page = () => {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Search />
    </Suspense>
  )
}

export default Page;