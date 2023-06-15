import ProjectBox from './ProjectBox';
import testImage from '../logo.svg'

export default {
    component: ProjectBox,
    title: 'Project',
    tags: ['autodocs'],
}

export const Default = {
    args: {
        project: {
            id: '1',
            title: 'Test Project',
            image: testImage
        }
    }
}