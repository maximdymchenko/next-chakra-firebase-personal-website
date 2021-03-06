import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const BlogSeo = ({ title, summary, publishedAt, url, image }) => {
    const date = new Date(publishedAt).toISOString()
    const featuredImage = {
        url: `https://next-chakra-firebase-personal-website.vercel.app${image}`,
        alt: title
    }

    return (
        <>
            <NextSeo
                title={`${title} – Maxim Dymchenko`}
                description={summary}
                canonical={url}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: date
                    },
                    url,
                    title,
                    description: summary,
                    images: [featuredImage]
                }}
            />
            <ArticleJsonLd
                authorName="Maxim Dymchenko"
                dateModified={date}
                datePublished={date}
                description={summary}
                images={[featuredImage]}
                publisherLogo="/static/favicons/android-chrome-192x192.png"
                publisherName="Maxim Dymchenko"
                title={title}
                url={url}
            />
        </>
    )
}

export default BlogSeo