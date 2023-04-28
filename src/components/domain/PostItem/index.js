import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePostContext } from '../../../contexts/PostProvider';
import { Header, Spinner } from '../../index';

export default function PostItem({ post }) {
    const [isLoading, setIsLoading] = useState(false);
    const { onDeletePost } = usePostContext();

    const handleDeletePost = useCallback(async (id) => {
        setIsLoading(true);
        await onDeletePost(id);
        setIsLoading(false);
    }, [onDeletePost]);
    return (
        <li>
            <Header strong level={3}>{post.title}</Header>
            <Link to={`${post.id}`}>Detail -&gt;</Link>
            { isLoading ? <Spinner /> : <button onClick={() => handleDeletePost(post.id)}>Delete</button> }
        </li>
    )
}