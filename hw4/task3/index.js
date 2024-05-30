const minimumAge = 18;
const maximumAge = 60;

let ageValue = prompt('How old are you? Enter a number.')

// string input containing only numbers is accepted. Ex: "88" - accept, "88 years" or "" - throw an error.
// Actually, for prompt we probably only need a check for an empty input?
if (isNaN(ageValue) || !(ageValue)) {
    alert('Not a numberrrrrr!')
} else {
    switch(true) {
        case ageValue < minimumAge: {
            alert(`You don't have access because your age is ${ageValue}. It's less than ${minimumAge}.`);
            break;
        }
    
        case minimumAge <= ageValue && ageValue < maximumAge: {
            alert('Welcome!');
            break;
        }
    
        case ageValue === maximumAge: {
            alert('Technical work.');
            break;
        }
    
        case ageValue > maximumAge: {
            alert('Keep calm and watch the Culture channel.');
            break;
        }   
    }
}