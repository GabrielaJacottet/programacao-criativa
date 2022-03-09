let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let width = 60;
let height = 60;
let gap = 20;


for (let i = 0; i < 5; i++)
{
    for (let j = 0; j < 5; j++)
    {
        let x = 100 + (width + gap) * i;
        let y = 100 + (height + gap) * j;
        
        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();

        if (Math.random() > 0.5) 
        {
            context.beginPath();
            //context.rect(x + 9, y + 9, width - 18, height - 18);
            context.arc(x + 30, y + 30, width - 35, height - 16, 2 * Math.PI);
            context.stroke();
        }
   }
}

let artists = ['Celine','Whitney']

function listArtists (newArtists)
{
    artists.push('RBD')
    console.log (artists)
}

listArtists();