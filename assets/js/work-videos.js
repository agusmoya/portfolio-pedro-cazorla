function renderWorkVideos() {
  const workVideos = [
    {
      year: "year24",
      img: "assets/img/portadas/1_2024.webp",
      title: "Genaro Alonso - Volante Mixto",
      url: "https://youtu.be/oruIlfK8lBY?si=oQ6YVVmA3uDTikL1",
    },
    {
      year: "year23",
      img: "assets/img/portadas/1_2023.webp",
      title: "Julian Torres - Defensor",
      url: "https://www.youtube.com/watch?v=cV2JF389Lhs",
    },
    {
      year: "year23",
      img: "assets/img/portadas/2_2023.webp",
      title: "Veronica Cabrera - Delantera",
      url: "https://www.youtube.com/watch?v=rcL4H61c6zs",
    },
    {
      year: "year22",
      img: "assets/img/portadas/2_2022.webp",
      title: "Tomás Bernal - Delantero",
      url: "https://www.youtube.com/watch?v=EIL0wemLDNI",
    },
    {
      year: "year22",
      img: "assets/img/portadas/1_2022.webp",
      title: "Clasificación de los Goles - Godoy Cruz Femenino",
      url: "https://www.youtube.com/watch?v=EIL0wemLDNI",
    },
    {
      year: "year21",
      img: "assets/img/portadas/1_2021.webp",
      title: "Matias Toledo - Mediocentro Defensivo",
      url: "https://youtu.be/Maa4govtQp0",
    },
    {
      year: "year20",
      img: "assets/img/portadas/1_2020.webp",
      title: "Valentino Juárez (1° parte) - Mediocentro",
      url: "https://www.youtube.com/watch?v=uKPZJN5DsZQ",
    },
    {
      year: "year20",
      img: "assets/img/portadas/3_2020.webp",
      title: "Valentino Juárez (2° parte) - Mediocentro",
      url: "https://www.youtube.com/watch?v=xhieYZ1DPP8&t",
    },
    {
      year: "year20",
      img: "assets/img/portadas/2_2020.webp",
      title: "Ramiro Ruíz - Mediocampista",
      url: "https://www.youtube.com/watch?v=PA3WVQtgOFc",
    },
    {
      year: "year20",
      img: "assets/img/portadas/4_2020.webp",
      title: "Tomás Bernal - Centro Delantero",
      url: "https://www.youtube.com/watch?v=WjgM8uHfiAI",
    },
    {
      year: "year20",
      img: "assets/img/portadas/5_2020.webp",
      title: "Genaro Alonso - Volante Ofensivo",
      url: "https://www.youtube.com/watch?v=Rfc66H9aZZA",
    },
    {
      year: "year20",
      img: "assets/img/portadas/6_2020.webp",
      title: "Matias Guardia - Volante Ofensivo",
      url: "https://www.youtube.com/watch?v=LJgnPsaNwC4",
    },
  ];

  const container = document.querySelector(".work__container");
  if (!container) return;
  container.innerHTML = workVideos
    .map(
      (video) => `
        <div class="work__card mix ${video.year}">
            <img class="work__img" src="${video.img}" alt="img-work">
            <div class="work__card-content">
                <h3 class="work__title">${video.title}</h3>
                <a href="${video.url}" target="_blank" class="work__button">
                    Ir a YouTube<i class='bx bx-right-arrow-alt work__icon'></i>
                </a>
            </div>
        </div>
      `
    )
    .join("");
}
document.addEventListener("DOMContentLoaded", renderWorkVideos);
