import { createClient } from 'contentful'
import Image from 'next/image'

const client = createClient({
space: process.env.CONTENTFUL_SPACE_ID,
accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'portfolioItem'
    })

    const paths = res.items.map(item => {
        return {
            params: { projects: item.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'portfolioItem',
        'fields.slug': params.projects
    })

    return {
        props: { portfolioItem: items[0]}
    }
}

export default function ProjectDetails({ portfolioItem }) {
    const { featuredImage, title, technos, description } = portfolioItem.fields
    
    console.log(technos)
    return(
        <div>
            <div className='banner'>
            <Image
                    src={ 'https:' + featuredImage.fields.file.url }
                    width={ featuredImage.fields.file.details.image.width}
                    height={ featuredImage.fields.file.details.image.height}
                />
            </div>
            <div className='info'>
                <h3>Technos:</h3>    
                {technos.map(tech => (
                    <div><span key={tech}>{ tech }</span></div>
                ))}
            </div>
        </div>
    )
}