const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officia?';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/51.jpg" alt="">';
    name.innerHTML = 'Karan';
    date.innerHTML = 'Oct 08, 2020';

    animated_bgs.forEach((bg) => {
        bg.classList.remove('animated-bg');
    });
    animated_bg_texts.forEach((bg) => {
        bg.classList.remove('animated-bg-text');
    })
}