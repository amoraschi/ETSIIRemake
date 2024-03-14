import { parse } from 'node-html-parser'

export async function GET () {
  const res = await fetch('https://www.etsii.us.es/')

  const data = await res.text()
  const html = parse(data)

  const imageEls = html.querySelectorAll('#camera_wrap_434 > div')
  const newsEls = html.querySelectorAll('.lnpd_item_without_intro')
  const images = imageEls.map((el) => {
    const src = el.getAttribute('data-src')
    const url = el.getAttribute('data-link')

    return {
      src,
      url: (url == null || url === '') ? null : url?.startsWith('http') ? url : `https://www.etsii.us.es/${url}`
    }
  })

  const news = newsEls.map((el) => {
    const date = el.querySelector('.lnd_introdate')?.text.trim()
    const link = el.querySelector('a')?.getAttribute('href')
    const title = el.querySelector('.lnpd_item_title > span')?.text.trim()

    return {
      date,
      url: link?.startsWith('http') ? link : `https://www.etsii.us.es${link}`,
      title
    }
  })

  return Response.json({
    images,
    news
  })
}
