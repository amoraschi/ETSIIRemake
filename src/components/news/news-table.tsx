import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import Link from 'next/link'

interface NewsTableProps {
  news: Array<{ date: string, url: string, title: string }>
}

export default function NewsTable ({ news }: NewsTableProps) {
  return (
    <div>
      <Table
        className='bg-white shadow-md rounded-md w-full max-w-xl'
      >
        <TableCaption
          className='text-black font-semibold'
        >
          Noticias Recientes
        </TableCaption>
        <TableBody>
          {
            news.map((item, index) => (
              <TableRow
                key={index}
              >
                <TableCell>
                  {item.date}
                </TableCell>
                <TableCell>
                  <Link
                    href={item.url}
                    target='_blank'
                    className='underline text-blue-800 hover:text-blue-600'
                  >
                    {item.title}
                  </Link>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
