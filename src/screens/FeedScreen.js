import React from 'react';
import posts from '../../assets/data/posts.json'
import FeedPost from '../components/FeedPost'
import { FlatList } from 'react-native';

const FeedScreen = () => {
    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => <FeedPost post={item} />}
        />
    );
}

export default FeedScreen;
