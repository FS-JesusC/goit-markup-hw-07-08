(() => {
  const refs = {
    openModalBtn: document.querySelector(".main-cover-page__button"),
    closeModalBtn: document.querySelector(".backdrop__button"),
    modal: document.querySelector(".backdrop"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();