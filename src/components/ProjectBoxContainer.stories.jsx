import * as ProjectStories from './ProjectBox.stories'
import ProjectBoxContainer from "./ProjectBoxContainer";
import testImage from '../logo.svg'

// export const MockedState = {
//     projects: [
//         {id: '1', title: 'Project 1', image:testImage },
//         {id: '2', title: 'Project 2', image:testImage },
//         {id: '3', title: 'Project 3', image:testImage },
//         {id: '4', title: 'Project 4', image:testImage },
//     ]
// }

export default {
    component: ProjectBoxContainer,
    title: 'ProjectContainer',
    tags: ['autodocs'],
}

export const Default = () => {
    const projectList = [
        {id: '1', title: 'Project 1', image:testImage },
        {id: '2', title: 'Project 2', image:testImage },
        {id: '3', title: 'Project 3', image:testImage },
        {id: '4', title: 'Project 4', image:testImage },
    ]
    return <ProjectBoxContainer projects={projectList} />
}