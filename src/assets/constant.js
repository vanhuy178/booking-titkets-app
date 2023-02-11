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

// FUNCTION TO CAPITALIZATION LETTER 

export const capitalizationletter = (string) => {
    let trimString = string.trim();
    let word = trimString.split(' ');
    for (let i = 0, length = word.length; i < length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].substr(1)
    }
    return word.join(' ')
}
// console.log(capitalizationletter('xuyên không thời gian'));



// CUSTOMIZE LIBRARY SLICK