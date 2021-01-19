const day = 'monday';

switch(day){ // input = day
    case 'monday':
        console.log('Today is Monday');
        break; //* break is NEEDED!
    case 'tuseday':
        console.log('Tuseday is an extended Monday');
        break; //* break is NEEDED!
    case 'Wedesday':
        console.log('You are halfway')
        break; //* break is NEEDED!
    case 'Thursday':
    case 'Friday':
        console.log('Happy Friday!')
    case 'Saturday':
    case 'Sunday':
        console.log('Tomorrow is Monday :(')
    default: // kind of like an error case
        console.log('Not a valid day!')
}