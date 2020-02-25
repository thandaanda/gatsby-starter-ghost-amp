import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
const PostCard = ({ post, index }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)
    return (
        <Link to={url} className={`post-card ` + (index % 6 === 0 ? `post-card-large` : ``)}>
            <Link to={url} className="post-card-image-link">
                {post.feature_image &&
                        <div className="post-card-image" style={{
                            backgroundImage: `url(${post.feature_image})` ,
                        }}></div>}
            </Link>
            <div className="post-card-content">
                <div className="post-card-content-link">
                    <header className="post-card-header">
                        <h2 className="post-card-title">{post.title}</h2>
                    </header>
                    <section className="post-card-excerpt">{post.excerpt.split(` `).slice(0, 40).join(` `)}</section>
                </div>
                <footer className="post-card-footer">
                    <div className="post-card-footer-left">
                        <div className="post-card-avatar">
                            {post.primary_author.profile_image ?
                                <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                                <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                            }
                        </div>
                    </div>
                    <div className="post-card-footer-right">
                        <div className="reading-time">{readingTime}</div>
                    </div>
                </footer>
            </div>
        </Link>
    )
}
PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    index: PropTypes.number,
}
export default PostCard