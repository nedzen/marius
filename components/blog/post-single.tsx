import React from 'react';
import Author from '../../interfaces/author';
import Backlinks from '../misc/backlinks';
import PostBody from './post-body';
import PostMeta from './post-meta';

type Props = {
  title: string,
  content: string,
  date?: string,
  author?: Author,
  backlinks: { [k: string]: {
      title: string,
      excerpt: string,
    }
  }
}

function PostSingle({
  title,
  date,
  author,
  content,
  backlinks
}: Props) {
  return (
    <section className='section'>
      <article className="post">

        {/* Article header */}
        <header className="post-title">
          {/* Title */}
          <h1 className="h1">{title}</h1>
        </header>

        {/* Article content */}
        <div className="content" data-sticky-container>

          {/* Main content */}
          <div className='main'>

            {/* Article meta */}
            {(author || date) && (
              <>
                <PostMeta author={author} date={date}/>
              </>
            )}

            {/* Article body */}
            <PostBody content={content}/>

          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            
              <h4 className="h4">Backlinks</h4>
              <div className="container">
                {
                  (Object.keys(backlinks).length > 0) && (
                      <Backlinks backlinks={backlinks} />
                  )
                }
              </div>
          </aside>

        </div>
        {/* Article footer */}
      </article>
    </section>
  );
}

export default PostSingle;