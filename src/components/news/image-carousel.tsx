import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface ImageCarouselProps {
  images: Array<{ src: string, url: string }>
  setApi: (api: CarouselApi) => void
}

export default function ImageCarousel ({ images, setApi }: ImageCarouselProps) {
  return (
    <Carousel
      className='w-full max-w-xl'
      setApi={setApi}
    >
      <CarouselContent>
        {
          images.map((image, index) => (
            <CarouselItem
              key={index}
            >
              <Card>
                <CardContent
                  className=' p-6'
                >
                  {
                    image.url != null ? (
                      <Link
                        href={image.url ?? '#'}
                        target='_blank'
                        className='flex items-center justify-center'
                      >
                        <Image
                          src={image.src}
                          alt='Image'
                          width={500}
                          height={10}
                          className='h-full w-full object-cover'
                        />
                      </Link>
                    ) : (
                      <Image
                        src={image.src}
                        alt='Image'
                        width={500}
                        height={10}
                        className='h-full w-full object-cover'
                      />
                    )
                  }
                </CardContent>
              </Card>
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
