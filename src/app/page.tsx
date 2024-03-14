'use client'

import { useEffect, useState } from 'react'
import {
  CarouselApi,
} from '@/components/ui/carousel'
import ImageCarousel from '@/components/news/image-carousel'
import NewsTable from '@/components/news/news-table'

export default function HomePage () {
  const [images, setImages] = useState<Array<{ src: string, url: string }> | null>(null)
  const [news, setNews] = useState<Array<{ date: string, url: string, title: string }> | null>(null)
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    const fetchFront = async () => {
      const res = await fetch('/api')
      const data = await res.json()
      console.log(data)

      setImages(data.images)
      setNews(data.news)
    }

    fetchFront()

    const interval = setInterval(() => {
      api?.scrollNext()
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [api])

  return (
    <main
      className='absolute top-20 inset-0'
    >
      <div
        className='grid h-full place-items-center grid-cols-2'
      >
        {
          images != null && (
            <ImageCarousel
              images={images}
              setApi={setApi}
            />
          )
        }
        {
          news != null && (
            <NewsTable
              news={news}
            />
          )
        }
      </div>
    </main>
  )
}
