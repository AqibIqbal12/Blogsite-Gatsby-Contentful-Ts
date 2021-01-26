import React from 'react';
import LayOut from '../components/LayOut';
import BlogDetails from '../components/BlogDetails/BlogDetails'

const Blogs = ({pageContext}) => {

    const {blogDetails} = pageContext
    return (
        <LayOut>
            <BlogDetails blogDetails={blogDetails}/>
            {/* {itemDetails.blogPostHeading} */}
        </LayOut>
    )
}
export default Blogs
