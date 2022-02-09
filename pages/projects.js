import { createClient } from 'contentful'
import PortfolioItemCard from '../components/PortfolioItemCard'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'portfolioItem' })

  return {
    props: {
      portfolioItems: res.items
    }
  }
}

export default function Projects({ portfolioItems }){

    console.log(portfolioItems)
    return(
        <div className='container mx-auto my-20 xl:my-40 flex justify-between'>
            {portfolioItems.map(item => (
                <PortfolioItemCard key={item.sys.id} item={item} />
            ))}
        </div>
    )
}