let toastBox = document.getElementById('toast__box');

// here we declare the messeges that will be displayed whenever a button is clicked 
let successMsg = '<i class="fa-solid fa-check"></i> Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-xmark"></i> There was an error';
let invalidMsg = '<i class="fa-solid fa-user"></i> Invalid input';

showToast = (msg) => {
    // here we create one element 
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    // then we append the toast to the toastBox 
    toastBox.appendChild(toast)

    if (msg.includes('error')) {
        toast.classList.add('error')
    }
    if (msg.includes('Invalid')) {
        toast.classList.add('invalid')
    }

    setTimeout(() => {
        toast.remove();
    }, 5100);
}