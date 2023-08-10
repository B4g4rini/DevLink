var toggleMode = () => {
    const html = document.documentElement;

    html.classList.toggle("light");

    const isLight = html.classList.contains("light");
    const srcValue = isLight ? "../img/avatar-light.jpg" : "../img/avatar.jpg";
    const altValue = isLight ? "Imagem de perfil no modo claro, com um jovem de cabelo curto, segurando um celular, vestindo camiseta escura" : "Imagem de perfil no modo escuro, com um jovem de cabelo curto segurando o celular, vestindo uma camiseta escura estampada com a bandeira do Brasil "



    document.querySelector("#profile img").setAttribute("src",srcValue);
    document.querySelector("#profile img").setAttribute("alt", altValue);

};