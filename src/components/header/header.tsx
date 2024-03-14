'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { pages } from '@/lib/pages'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Header () {
  return (
    <div
      className='flex justify-between items-center h-20 gap-4 p-4 bg-white shadow-md'
    >
      <Image
        src='https://www.etsii.us.es/docs/imagen-etsii/logo-ETSII-US-Horizontal-Color.png'
        alt='Universidad de Sevilla'
        width={200}
        height={200}
        className='h-12 w-fit'
      />
      <div>
        {
          pages.map((item, index) => (
            <Sheet
              key={index}
            >
              <SheetTrigger
                asChild
              >
                <Button
                  variant='ghost'
                  className='font-semibold'
                >
                  {item.menu}
                </Button>
              </SheetTrigger>
              <SheetContent
                side='left'
              >
                <SheetHeader>
                  <SheetTitle
                    className='text-md font-semibold'
                  >
                    {item.menu}
                  </SheetTitle>
                </SheetHeader>
                <div
                  className='flex flex-col gap-4 py-4'
                >
                  {
                    item.items.map((subItem, subIndex) => (
                      <Button
                        key={subIndex}
                        variant='ghost'
                        className='flex items-center justify-between h-14'
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger
                              className='text-3xl font-bold truncate'
                            >
                              {subItem.name}
                            </TooltipTrigger>
                            <TooltipContent>
                              {subItem.name}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <ChevronRight
                          className='ml-2 h-4 w-4'
                        />
                      </Button>
                    ))
                  }
                </div>
              </SheetContent>
            </Sheet>
          ))
        }
      </div>
    </div>
  )
}
      
