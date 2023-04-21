const artists = [
  {
    id: 1,
    image: 'https://avatars.githubusercontent.com/u/51737508?v=4',
    name: 'Tacettin Kustu',
    organization: 'Full Stack Developer at Microverse',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 2,
    image:
      'https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg',
    name: 'Elon Musk',
    organization: 'CEO of Tesla',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 3,
    image:
      'https://www.ortakdurak.com/wp-content/uploads/2021/06/Jeff-Bezos.png',
    name: 'Jeff Bezos',
    organization: 'CEO of Amazon',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 4,
    image: 'https://i1.sndcdn.com/avatars-000099702312-agl30n-t500x500.jpg',
    name: 'Mark Zuckerberg',
    organization: 'CEO of Facebook',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 5,
    image:
      'https://eshop.macsales.com/blog/wp-content/uploads/2015/03/TimCookTwitter.jpg',
    name: 'Tim Cook',
    organization: 'CEO of Apple',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 6,
    image:
      'https://www.glusea.com/wp-content/uploads/2020/11/M-FEJMZ0_400x400.jpg',
    name: 'Sunder Pichai',
    organization: 'CEO of Google',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
];

const featuredArtists = document.querySelector('.artists-list');
const artistsButton = document.querySelector('.artists-btn');

function loadArtists() {
  artists.forEach((artist, index) => {
    const artistContainer = document.createElement('article');
    artistContainer.className = index > 1 ? 'flex-row-center artists-display' : 'flex-row-center';
    featuredArtists.appendChild(artistContainer);

    const artistImage = document.createElement('img');
    artistImage.src = `${artist.image}`;
    artistImage.alt = `Image of ${artist.name}`;
    artistImage.className = 'artist-image';
    artistContainer.appendChild(artistImage);

    const artistInfos = document.createElement('div');
    artistInfos.className = 'artist-infos';
    artistContainer.appendChild(artistInfos);

    const artistName = document.createElement('h3');
    artistName.className = 'light-black heading-medium artist-heading';
    artistName.textContent = `${artist.name}`;
    artistInfos.appendChild(artistName);

    const artistOrganization = document.createElement('h4');
    artistOrganization.className = 'dark-orange';
    artistOrganization.textContent = `${artist.organization}`;
    artistInfos.appendChild(artistOrganization);

    const artistBackground = document.createElement('h4');
    artistBackground.className = 'light-black';
    artistBackground.textContent = `${artist.background}`;
    artistInfos.appendChild(artistBackground);
  });
}

function toggleArtist() {
  const displayedItems = document.querySelectorAll('.artists-display');
  const toggledItems = document.querySelectorAll('.toggle');

  if (toggledItems.length === 0) {
    displayedItems.forEach((item) => {
      item.className = 'flex-row-center toggle';
    });
    artistsButton.textContent = 'LESS';
    const arrow = document.createElement('i');
    arrow.className = 'fas fa-angle-up down-arrow';
    artistsButton.appendChild(arrow);
  }
  if (toggledItems.length) {
    toggledItems.forEach((item) => {
      item.className = 'flex-row-center artists-display';
      artistsButton.textContent = 'MORE';
      const arrow = document.createElement('i');
      arrow.className = 'fas fa-angle-down down-arrow';
      artistsButton.appendChild(arrow);
    });
  }
}

featuredArtists.addEventListener('DOMContentLoaded', loadArtists());
artistsButton.addEventListener('onclick', toggleArtist);

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

openNav();
closeNav();