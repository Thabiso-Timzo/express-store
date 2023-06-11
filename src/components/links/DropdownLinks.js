import { MdAppRegistration, MdEmail, MdOutlineCompareArrows, MdOutlineLogin } from 'react-icons/md'
import { 
    FaBlog, 
    FaStore 
} from 'react-icons/fa'

export const links = [
    {
        id: 1,
        page: 'our store',
        path: '/store',
        icon: FaStore
    },
    {
        id: 2,
        page: 'blog',
        path: '/blog',
        icon: FaBlog
    },{
        id: 3,
        page: 'contact',
        path: '/contact',
        icon: MdEmail
    },
    {
        id: 4,
        page: 'compare',
        path: '/compare',
        icon: MdOutlineCompareArrows
    },
    {
        id: 5,
        page: 'login',
        path: '/login',
        icon: MdOutlineLogin
    },
    {
        id: 6,
        page: 'register',
        path: '/register',
        icon: MdAppRegistration
    },
]