import { MdAppRegistration, MdOutlineCompareArrows, MdOutlineLogin } from 'react-icons/md'

export const links = [
    {
        id: 1,
        page: 'login',
        path: 'auth',
        icon: MdOutlineLogin
    },
    {
        id: 2,
        page: 'register',
        path: 'auth/register',
        icon: MdAppRegistration
    },
    {
        id: 3,
        page: 'compare',
        path: 'compare',
        icon: MdOutlineCompareArrows
    }
]