let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// #region agent log
fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:9',message:'Script loaded, checking guess variable scope',data:{guessExists:typeof guess!=='undefined',guessValue:typeof guess!=='undefined'?guess:'undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H1,H5'})}).catch(()=>{});
// #endregion

document.querySelector('.check').addEventListener('click', function() {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:12',message:'Button clicked, getting guess value',data:{rawValue:document.querySelector('.guess').value},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H1'})}).catch(()=>{});
    // #endregion
    const guess= Number(document.querySelector('.guess').value);
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:15',message:'Guess value converted',data:{guess:guess,secretNumber:secretNumber,score:score},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H1'})}).catch(()=>{});
    // #endregion
    
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:18',message:'Checking if guess is valid',data:{hasGuess:!!guess,guessValue:guess},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H1'})}).catch(()=>{});
    // #endregion
    if (!guess) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:20',message:'No guess entered branch',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H1'})}).catch(()=>{});
        // #endregion
        displayMessage('⛔️ No number!');
    } else if (guess===secretNumber) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:23',message:'Correct guess branch',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H1'})}).catch(()=>{});
        // #endregion
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess != secretNumber) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:30',message:'Wrong guess branch',data:{score:score,guessGreater:guess>secretNumber},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H1,H2,H3'})}).catch(()=>{});
        // #endregion
        if (score >1) {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:32',message:'Calling displayMessage function',data:{functionExists:typeof displayMessage!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H2'})}).catch(()=>{});
            // #endregion
            displayMessage(guess>secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:37',message:'Game lost branch, checking score selector',data:{selectorExists:!!document.querySelector('.score')},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H2,H3'})}).catch(()=>{});
            // #endregion
            displayMessage('💥 You lost the game!');
            document.querySelector('score').textContent = 0;
        }
    }
})

// #region agent log
fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:45',message:'Code after event listener executed on page load',data:{guessExists:typeof guess!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H1,H5'})}).catch(()=>{});
// #endregion

document.querySelector('.again').addEventListener('click', function() {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1e9ba3bc-58ba-46fe-960a-f5f2a0016175',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:48',message:'Again button clicked, checking displayMessage function',data:{functionExists:typeof displayMessage!=='undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H2'})}).catch(()=>{});
    // #endregion
    score = 20;
    highscore = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');

})