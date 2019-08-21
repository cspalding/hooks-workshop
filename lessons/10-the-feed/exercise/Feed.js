import React, { useState, useEffect } from "react"
import FeedPost from "app/FeedPost"
import { loadFeedPosts, subscribeToNewFeedPosts } from "app/utils"
// import FeedFinal from './Feed.final'
// export default FeedFinal
export default Feed

let feedState = {
  posts: [],
  postLimit: 3,
  timestamp: Date.now(),
  newPosts: []
}

function Feed() {
  // state for the posts
  const [posts, setPosts] = useState(feedState.posts || [])
  const [postLimit, setPostLimit] = useState(feedState.postLimit || 3)
  const [timestamp, setTimestamp] = useState(feedState.timestamp || Date.now())
  const [newPosts, setNewPosts] = useState(feedState.newPosts || [])

  useEffect(() => {
    feedState.posts = posts
    feedState.postLimit = postLimit
    feedState.timestamp = timestamp
    feedState.newPosts = newPosts
  })

  // effect to fetch the posts bc fetching the posts is a side-effect, not directly render related
  useEffect(() => {
    let isCurrent = true
    loadFeedPosts(timestamp, postLimit)
      .then(posts => {
        if(isCurrent) {
          setPosts(posts)
        }
      })
      return () => { isCurrent = false }
  }, [postLimit, timestamp]) 

  useEffect(() => {
    return subscribeToNewFeedPosts(timestamp, posts => {
      setNewPosts(posts)
    })
  }, [timestamp])

  return (
    <div className="Feed">
      {
        newPosts.length > 0 && 
        <div className="Feed_button_wrapper">
          <button className="Feed_new_posts_button icon_button" onClick={() => {
            setPostLimit(postLimit + newPosts.length)
            setTimestamp(Date.now())
          }}>
            View {newPosts.length} New Post(s)
          </button>
        </div>
      }

      {
        posts.map((post, idx) => <FeedPost post={post} key={idx}/>)
      }

      <div className="Feed_button_wrapper">
        <button className="Feed_new_posts_button icon_button" onClick={() => setPostLimit(postLimit + 3)}>
          View More
        </button>
      </div>
    </div>
  )
}

