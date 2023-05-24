export const showImage = (elem) => {
  elem.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.board__button_image')) {
      const url = target.getAttribute('data-pic');

      let h = screen.height;
      let w = screen.width;

      const win = window.open(
        'about: blank',
        '',
        `height=620, width=620, top=${h / 2 - 310}, left=${w / 2 - 310}`
      );

      win.document.body.innerHTML = `
      <img src="${url}" alt="Фото товара" style="height: 600px; width: 600px">
      `;
    }
  });
};
