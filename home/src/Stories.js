import React from 'react';
import { useFetch } from './hooks';

function Stories() {
    const data = useFetch('https://newsapi.org/v2/everything?q=tesla&from=2021-12-09&sortBy=publishedAt&apiKey=4dbc17e007ab436fb66416009dfb59a8', []);
    const articles = (data && data.articles) || [];

    return (
        <div className='Stories'>
            <h3>Stories</h3>
            {
                articles.map((article, index) => {
                    const { author, publishedAt, title, url } = article;

                    return (
                        <div key={String(index)}>
                            <a href={url}>{title}</a>
                            <div>{author} - {new Date(publishedAt).toLocaleString()}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Stories;
