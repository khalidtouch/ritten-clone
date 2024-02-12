import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'

export function MenuButton({ pathname, onClick }) {
    const navigate = useNavigate()

    if (pathname && pathname.endsWith('blog')) {
        return (
            <Button color='inherit' onClick={() => navigate(-1)}>Home</Button>
        )
    }

    return (
        <Button color='inherit' onClick={() => navigate('blog')}>Create</Button>
    )
}