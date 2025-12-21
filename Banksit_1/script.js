const account1 = {
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
    owner: 'Jonas Schmedtmann',
    type: 'premium',
};
const account2 = {
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    owner: 'Jessica Davis',
    type: 'standard',
};

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');


const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form--close .form__input--user');
const inputClosePin = document.querySelector('.form--close .form__input--pin');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const sort = document.querySelector('.btn--sort');


const accounts = [account1, account2];



const displayMovements = function (movements,sorted = false) {
    containerMovements.innerHTML = '';
    const movs = sorted ? movements.slice().sort((a,b) => a-b) :movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
        <div class='movements__row'>
            <div class='movements__type--${type}'>
            ${i + 1}
            ${type} </div>
            <div class='movements__value'>${mov}€</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html)
    })
}

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
}

const calcDisplaySummary = function (acc) {
    const income = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${income}€`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => deposit * acc.interestRate / 100)
        .filter(int => int >= 1)
        .reduce((acc, int) => acc + int, 0);

    labelSumInterest.textContent = `${interest}€`;
}
const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    })
}

createUsernames(accounts);

const updateUI = function (acc) {
    
    displayMovements(acc.movements,sorted);

    calcDisplayBalance(acc);

    calcDisplaySummary(acc);
}

let currentAccount;

btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:108',message:'Login click - before find',data:{username:inputLoginUsername.value,pin:inputLoginPin.value},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:110',message:'Login - after find account',data:{found:!!currentAccount,accountUsername:currentAccount?.username,accountPin:currentAccount?.pin},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:113',message:'Login - pin match, setting welcome',data:{welcomeText:`Welcome back, ${currentAccount.owner.split(' ')[0]}`,labelWelcomeExists:!!labelWelcome},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
        // #endregion
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:114',message:'Login - setting opacity',data:{containerAppExists:!!containerApp,opacityValue:containerApp?.style?.opacity,computedStyleMapExists:!!containerApp?.computedStyleMap},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
        // #endregion
        containerApp.style.opacity = 1;
    }
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:116',message:'Login - clearing inputs',data:{inputLoginUsernameExists:!!inputLoginUsername,inputLoginPinExists:!!inputLoginPin},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    inputLoginUsername.value = inputLoginPin.value = '';
})

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:119',message:'Transfer click - start',data:{amount:inputTransferAmount.value,to:inputTransferTo.value,currentAccountExists:typeof currentAccount!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    const amount = Number(inputTransferAmount.value);
    const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:122',message:'Transfer - checking conditions',data:{amount,receiverAccountExists:!!receiverAccount,currentAccountBalance:currentAccount?.balance,currentAccountUsername:currentAccount?.username,receiverAccountUsername:receiverAccount?.username},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    if (
        amount > 0 &&
        receiverAccount &&
        currentAccount.balance >= amount &&
        currentAccount.username !== receiverAccount.username
    ) {
        currentAccount.movements.push(-amount);
        receiverAccount.movements.push(amount);

        updateUI(currentAccount);
        updateUI(receiverAccount);

        inputTransferAmount.value = inputTransferTo.value = '';

    }
    else {
        alert('Invalid transfer');
        inputTransferAmount.value = inputTransferTo.value = '';
    }

})
btnLoan.addEventListener('click', function (e) {
    e.preventDefault();
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:144',message:'Loan click - start',data:{amount:inputLoanAmount.value,currentAccountExists:typeof currentAccount!=='undefined',currentAccountMovementsExists:!!currentAccount?.movements},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
    // #endregion
    const amount = Number(inputLoanAmount.value);
    if (
        amount > 0 &&
        currentAccount.movements.some(move => move >= amount * 0.1)
    ) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:151',message:'Loan - before push',data:{amount,currentAccountType:typeof currentAccount,currentAccountHasPush:typeof currentAccount?.push,currentAccountMovementsType:typeof currentAccount?.movements?.push},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
        // #endregion
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
        inputLoanAmount.value = '';
    }
})

btnClose.addEventListener('click', function (e) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:157',message:'Close click - checking credentials',data:{currentAccountUsername:currentAccount?.username,inputCloseUsername:inputCloseUsername.value,currentAccountPin:currentAccount?.pin,inputClosePin:inputClosePin.value},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'G'})}).catch(()=>{});
    // #endregion
    if (
        currentAccount.username === inputCloseUsername.value &&
        currentAccount.pin === Number(inputClosePin.value)
    ) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        accounts.splice(index, 1);
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:164',message:'Close - setting opacity',data:{containerAppExists:!!containerApp,opacityValue:containerApp?.style?.opacity,computedStyleMapExists:!!containerApp?.computedStyleMap},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'G'})}).catch(()=>{});
        // #endregion
        containerApp.style.opacity = 0;
        inputCloseUsername.value = inputClosePin.value = '';
    } else {
        alert('Invalid username or pin');
        inputCloseUsername.value = inputClosePin.value = '';
    }
})
let sorted = false;
sort.addEventListener('click', function (e) {
    e.preventDefault();
     sorted = !sorted;
    displayMovements(currentAccount.movements,sorted);
     updateUI(currentAccount);
} )
