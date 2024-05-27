let easy = document.querySelector('.easy');
let medium = document.querySelector('.medium');
let hard = document.querySelector('.hard');
let E = document.querySelector('.e');
let M = document.querySelector('.m');
let H = document.querySelector('.h');

let ques = document.querySelector('.ques');


async function helper() {
    try {
        let contents = await fetch('https://leetcode-api-faisalshohag.vercel.app/abheet_seth_/');
        let response = await contents.json();

        if (response) {
            easy.innerHTML = response.easySolved || 0;
            medium.innerHTML = response.mediumSolved || 0;
            hard.innerHTML = response.hardSolved || 0;
            E.innerHTML = response.totalEasy || 0;
            M.innerHTML = response.totalMedium || 0;
            H.innerHTML = response.totalHard || 0;

            if (response.recentSubmissions && response.recentSubmissions.length > 0) {
                ques.innerHTML = response.recentSubmissions[0].title;
            } else {
                ques.innerHTML = 'No recent submissions found.';
            }
        } else {
            console.error('Invalid response structure:', response);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

helper();
