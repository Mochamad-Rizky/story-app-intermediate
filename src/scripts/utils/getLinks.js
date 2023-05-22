const getLinks = () =>
  Array.from(document.querySelectorAll('app-button[renderType="link"][class="nav-link"]')).map(
    (link) => link.shadowRoot.querySelector('a'),
  );

export default getLinks;
