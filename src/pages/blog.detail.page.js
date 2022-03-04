import { useEffect, useState } from 'react';
import { getBlogs } from './../services/blog.service';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar.component';
import BlogAll from './../components/blogAll.component';
import Header from '../components/header.component';

const BlogDetailPage = (props) => {

  const [blogLife, setBlogLife] = useState([])
  const [blogEntertainment, setBlogEntertainment] = useState([])
  const [blogSports, setBlogSports] = useState([])
  const [blogFinance, setBlogFinance] = useState([])
  const [blogFashion, setBlogFashion] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    reloadBlogs()
  },[])

  const reloadBlogs = () => {
    loadBlog('LIFE', setBlogLife)
    loadBlog('ENTERTAINMENT',setBlogEntertainment)
    loadBlog('SPORTS', setBlogSports)
    loadBlog('FINANCE', setBlogFinance)
    loadBlog('FASHION', setBlogFashion)
  }

  const loadBlog = async (tag, func) => {
    const result = await getBlogs(tag)
    if(result) {
      console.log(result)
      func(result)
    }
  }

    return (
      <div>
        <Navbar />
        <Header />
        <div className='container' style={{marginTop: '30px'}}>
          <div className='row'>
            <div className="col">
              {blogLife.length > 0 && 
              blogLife.map((blog) => {
                const {id, title, tag, content} = blog
                return (
                  <BlogAll 
                  key = {id}
                  id = {id}
                  title = {title}
                  content = {content}
                  tag = {tag}
                   />
                )
              })}
              {blogLife.length === 0 && <div>No life related blogs</div>}
            </div>
           
              <div className="col">
                
                {blogEntertainment.length > 0 && 
                blogEntertainment.map((blog) => {
                  const {id, title, tag, content} = blog
                  return (
                    <BlogAll 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                    
                    />
                  )
                })}
                {blogEntertainment.length === 0 && <div>No Entertainment related blogs</div>}
              </div>
        </div>

        <div className='row'>
            <div className="col">
              
              {blogSports.length > 0 && 
              blogSports.map((blog) => {
                const {id, title, tag, content} = blog
                return (
                  <BlogAll 
                  key = {id}
                  id = {id}
                  title = {title}
                  content = {content}
                  tag = {tag}
                  
                   />
                )
              })}
              {blogSports.length === 0 && <div>No Sports related blogs</div>}
            </div>
           
              <div className="col">
                
                {blogFinance.length > 0 && 
                blogFinance.map((blog) => {
                  const {id, title, tag, content} = blog
                  return (
                    <BlogAll 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                    
                    />
                  )
                })}
                {blogFinance.length === 0 && <div>No Finance related blogs</div>}
              </div>
        </div>
        <div className='row'>
        <div className="col">
                
                {blogFashion.length > 0 && 
                blogFashion.map((blog) => {
                  const {id, title, tag, content} = blog
                  return (
                    <BlogAll 
                    key = {id}
                    id = {id}
                    title = {title}
                    content = {content}
                    tag = {tag}
                    
                    />
                  )
                })}
                {blogFashion.length === 0 && <div>No Fashion related blogs</div>}
              </div>
              <div className='col'></div>
        </div>
      </div>
      </div>
    )
  }
  
  export default BlogDetailPage