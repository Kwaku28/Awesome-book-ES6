class Navigation {
  constructor() {
    this.formContainer = document.querySelector('.book-form');
    this.bookListSection = document.querySelector('.book-list-section');
    this.contactSection = document.querySelector('.contact-section');

    const listLink = document.querySelector('#list-btn');
    const AddNewLink = document.querySelector('#add-btn');
    const contactLink = document.querySelector('#contact-btn');

    listLink.addEventListener('click', () => {
      this.bookListSection.style.display = 'block';
      this.formContainer.style.display = 'none';
      this.contactSection.style.display = 'none';
    });

    AddNewLink.addEventListener('click', () => {
      this.bookListSection.style.display = 'none';
      this.formContainer.style.display = 'flex';
      this.contactSection.style.display = 'none';
    });

    contactLink.addEventListener('click', () => {
      this.bookListSection.style.display = 'none';
      this.contactSection.style.display = 'flex';
      this.formContainer.style.display = 'none';
    });
  }
}

export default Navigation;
