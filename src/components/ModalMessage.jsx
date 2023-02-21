import React from 'react'

export const MessageLogin = (props) => {

    let colorButton = props.messageUserLogin === "Tài khoản hoặc mật khẩu không đúng!" ?
        "from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800" :
        'from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800';


    let showButton = (
        props.messageUserLogin === "" ?
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white
        font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg 
        transition duration-150 ease-in-out"
                onClick={() => props.setShowMessageLogin(false)}
            >XÁC NHẬN</button>
            :

            <button type="button" class={`text-white bg-gradient-to-r ${colorButton}
            font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                onClick={() => props.setShowMessageLogin(false)}
            >XÁC NHẬN</button>
    )
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">{props.messageUserLogin === "" ? 'Không được bỏ trống!!!' : props.messageUserLogin}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            {showButton}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export const MessageRegister = props => {
    let buttonColor = '';
    if (props.messageUserRegister === 'Email đã tồn tại!') {
        buttonColor = 'bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500'
    }
    else {
        buttonColor = 'bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
    }

    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">

                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">{props.messageUserRegister}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button onClick={() => props.setShowMessageRegister(false)} type="button"
                                className={`inline-flex w-full justify-center rounded-md border border-transparent ${buttonColor} focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}>XÁC NHẬN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export const DeletingMessage = (props) => {
    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-center">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <div className="mt-2">
                                            <p className="text-lg text-gray-500">{props.messageDelete}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    onClick={() => props.setShowMessage(false)}
                                    type="button"
                                    class="inline-block rounded bg-danger px-6 pt-2.5 pb-2 text-xs 
                                    font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64]
                                     transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
                                >OK</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}