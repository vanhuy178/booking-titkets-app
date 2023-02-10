// I AM GOTING SET ALL VARIABLE OF WEBSITE IN HERE

// HEADER 
export const styleImageLogo = {
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    animation: 'spin 10s linear infinite',
    animationDelay: 'calc(var(--delay) * -1s)'
}

export const animation = `
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
`