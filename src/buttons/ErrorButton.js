import Button from '@mui/material/Button';

export default function EmailButton() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:your-email@example.com';
    };

    return (
        <Button variant="contained" onClick={handleEmailClick}>
            Contact Me
        </Button>
    );
}