import Prismic from '@prismicio/client'

export function getPrismiClient(req?: unknown) {
  const prismic = Prismic.client(
    'https://sujeitonext20.cdn.prismic.io/api/v2',
    {
      req,
    }
  )

  return prismic
}
