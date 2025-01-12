import BookList from '@/components/BookList'
import BookOverview from '@/components/BookOverview'
import { BookData } from '@/constants'

import React from 'react'

const Home = () => {
 return (
  <>

  <BookOverview  { ...BookData[3]}/>
 <div className="mt-28">
 <BookList  
  title = "Latest Books " books  = {BookData} containerClassName = "mt-28" />
  
 </div>
 
  </>
 )

}

export default Home