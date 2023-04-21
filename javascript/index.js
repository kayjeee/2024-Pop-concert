const speakers = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1598387846148-47e82ee120cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    name: 'Jay zee',
    organization: 'kay jee music label',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1545224144-b38cd309ef69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    name: 'Post malone',
    organization: 'kay jee music label',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1519326773765-3ae3b02c44cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    name: 'Kanye',
    organization: 'kay jee music label',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1598387993640-1eda0d648fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
    name: 'beyonce',
    organization: 'kay jee music label',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    name: 'Tim Cook',
    organization: 'kay jee music label',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
  {
    id: 6,
    image:
      'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',
    name: 'Sunder Pichai',
    organization: 'CEO of Google',
    background:
      'Lorem ipsum, dolor sit amet adipisicing elit. Deleniti, molestias.',
  },
];

const featuredSpeakers = document.querySelector('.speakers-list');
const speakersButton = document.querySelector('.speakers-btn');

function loadSpeakers() {
  speakers.forEach((speaker, index) => {
    const speakerContainer = document.createElement('article');
    speakerContainer.className = index > 1 ? 'flex-row-center-speaker speakers-display' : 'flex-row-center-speaker';
    featuredSpeakers.appendChild(speakerContainer);

    const speakerImage = document.createElement('img');
    speakerImage.src = `${speaker.image}`;
    speakerImage.alt = `Image of ${speaker.name}`;
    speakerImage.className = 'speaker-image';
    speakerContainer.appendChild(speakerImage);

    const speakerInfos = document.createElement('div');
    speakerInfos.className = 'speaker-infos';
    speakerContainer.appendChild(speakerInfos);

    const speakerName = document.createElement('h3');
    speakerName.className = 'light-black heading-medium speaker-heading';
    speakerName.textContent = `${speaker.name}`;
    speakerInfos.appendChild(speakerName);

    const speakerOrganization = document.createElement('h4');
    speakerOrganization.className = 'dark-orange';
    speakerOrganization.textContent = `${speaker.organization}`;
    speakerInfos.appendChild(speakerOrganization);

    const speakerBackground = document.createElement('h4');
    speakerBackground.className = 'light-black';
    speakerBackground.textContent = `${speaker.background}`;
    speakerInfos.appendChild(speakerBackground);
  });
}

function toggleSpeakers() {
  const displayedItems = document.querySelectorAll('.speakers-display');
  const toggledItems = document.querySelectorAll('.toggle');

  if (toggledItems.length === 0) {
    displayedItems.forEach((item) => {
      item.className = 'flex-row-center-speaker toggle';
    });
    speakersButton.textContent = 'LESS';
    const arrow = document.createElement('i');
    arrow.className = 'fas fa-angle-up down-arrow';
    speakersButton.appendChild(arrow);
  }
  if (toggledItems.length) {
    toggledItems.forEach((item) => {
      item.className = 'flex-row-center-speaker speakers-display';
      speakersButton.textContent = 'MORE';
      const arrow = document.createElement('i');
      arrow.className = 'fas fa-angle-down down-arrow';
      speakersButton.appendChild(arrow);
    });
  }
}

featuredSpeakers.addEventListener('DOMContentLoaded', loadSpeakers());
speakersButton.addEventListener('onclick', toggleSpeakers);

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

openNav();
closeNav();