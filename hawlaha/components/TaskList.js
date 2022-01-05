import React from 'react'
import { View, Text, FlatList } from 'react-native'

import TaskItem from './TaskItem';

const TaskList = ({tasks}) => {

    const renderItem = ({item}) => {
        return <TaskItem task={item} />;
    };


    return (
        <FlatList
            style={{width:'100%'}}
            data = {tasks}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
        />
    )
}

export default TaskList;
