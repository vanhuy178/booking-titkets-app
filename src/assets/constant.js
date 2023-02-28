
// TAKE THE LENGTH OF THE WEBSITE
export let win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight || docElem.clientHeight || body.clientHeight;

// HEADER MAIN LOGO
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
// HEADER MAIN LOGO

// FUNCTION TO CAPITALIZE EACH LETTER 
export const capitalizationletter = (string) => {
    let trimString = string.trim();
    let word = trimString.split(' ');
    for (let i = 0, length = word.length; i < length; i++) {
        word[i] = word[i][0].toUpperCase() + word[i].substr(1)
    }
    return word.join(' ')
}
// console.log(capitalizationletter('xuyên không thời gian'));

// FUNCTION TO CAPITALIZE FIRST LETTER 
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//COLOR VARIABLE
export const mainBackgroundColor = 'bg-yellow-100';
export const mainTextTitle = 'text-red-500'



// LOGIN AND REGISTER --- WILL TRANSFORM TO TAILWIND FILE CSS LATER.............................................

// INPUT
export const inputText = 'block w-full py-1 bg-pink-300 text-white mb-1 rounded-sm py-2 lg:py-0'

// BUTTON SUBMIT 
export const buttonSubmit = `mt-2 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 
focus:outline-none focus:ring-red-100 
dark:focus:ring-red-400 font-medium 
rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-full`;

// MESSAGE FOR ERROR
export const notBlank = 'không được bỏ trống';
// METHOD MESSAGE ERROR
export const messageError = (value = '') => {
    return <div className={`${mainTextTitle} text-sm`}>{value}</div>
}
// LOGIN AND REGISTER