import axios from 'axios';
import { useAsync } from '@hooks';
import { Header, Spinner } from '@components';
import PostList from '@components/domain/PostList';
import PostProvider from '@contexts/PostProvider';
import { useCallback } from 'react';
import PostAddForm from '@components/domain/PostAddForm';

function PostsPage() {
  const initialPost = useAsync(async () => {
    return await axios
                    .get('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.data);
  }, []);

  const handleAddPost = useCallback(async (post) => {
    return await axios
                    .post(`https://jsonplaceholder.typicode.com/posts`, post)
                    .then((response) => response.data);
  }, []);

  const handleDeletePost = useCallback(async (id) => {
    return await axios
                    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then(() => ({ id }));
  }, []);

  return (
    <PostProvider
    initialPosts={initialPost.value}
    handleDeletePost={handleDeletePost}
    handleAddPost={handleAddPost}
    >
      <div>
        <Header>Posts</Header>
        <PostAddForm />
        <ul>
          {initialPost.isLoading ? <Spinner /> : <PostList />}
        </ul>
        axios를 이용한 네트워크 API 실습
      </div>
    </PostProvider>
  );
}

export default PostsPage;
