const getList = (author, keyword) => {
  // 假数据
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1659986154026,
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1659986194143,
      author: 'lisi'
    }
  ]
}

const getDetail = (id) => {
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1659986154026,
    author: 'zhangsan'
  }
}

const newBlog = (blogData = {}) => {
  return {
    id: 3
  }
}

const updateBlog = (id, blogData = {}) => {
  return true
}

const deleteBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}
