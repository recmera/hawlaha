import React, {useEffect, useState} from 'react'
import { View } from 'react-native'
import {getTasks} from '../api'

import TaskList from '../components/TaskList'
import Layout from '../components/Layout'

const HomeScreen = () => {

    const [tasks, setTasks] = useState([])

    const loadTasks = async () => {
        const data = await getTasks()
        console.log(data)
        setTasks(data)
    }

    useEffect(() => {
        loadTasks()
    }, [])

    return (
        <Layout>
            <TaskList tasks={tasks} />
        </Layout>
    );
};

export default HomeScreen;
