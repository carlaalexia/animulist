import React, { useState } from "react";
import html2canvas from "html2canvas";
import "./home.css";

function Home() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [name, setName] = useState("");
  const [generatedImage, setGeneratedImage] = useState(null);
  const [imageGenerated, setImageGenerated] = useState(false);

  const imagesInfo = [
    { src: "./assets/anime1.jpg", title: "The IDOLM@ASTER Million Live!" },
    { src: "./assets/anime2.jpg", title: "Mahoutsukai no Yome S2 Part 2" },
    { src: "./assets/anime3.jpg", title: "Atarashii Joushi wa Dotennen" },
    { src: "./assets/anime4.jpg", title: "Yuzuki-san Chi no Yon Kyoudai" },
    { src: "./assets/anime5.jpg", title: "Tokyo Revengers: Tenjiku-hen" },
    {
      src: "./assets/anime6.jpg",
      title: "Hypnosis Mic -Division Rap Battle- Rhyme Anima+",
    },
    {
      src: "./assets/anime7.jpg",
      title: "Captain Tsubasa: Season 2 - Junior Youth -hen",
    },
    { src: "./assets/anime8.jpg", title: "Kamierabi" },
    { src: "./assets/anime9.jpg", title: "Dead Mount Death Play Part 2" },
    {
      src: "./assets/anime10.jpg",
      title: "Kibou no Chikara: Otona Precure' 23",
    },
    { src: "./assets/anime11.jpg", title: "Dr. STONE: NEW WORLD Part 2" },
    { src: "./assets/anime12.jpg", title: "Kawagoe Boys Sing" },
    { src: "./assets/anime13.jpg", title: "Potion-danomi de Ikinobimasu!" },
    {
      src: "./assets/anime14.jpg",
      title: "Kage no Jitsuryokusha ni Naritakute! Season 2",
    },
    { src: "./assets/anime15.jpg", title: "Kusuriya no Hitorigoto" },
    { src: "./assets/anime16.jpg", title: "Toaru Ossan no VRMMO Katsudouki" },
    { src: "./assets/anime17.jpg", title: "Hametsu no Oukoku" },
    { src: "./assets/anime18.jpg", title: "Overtake!" },
    { src: "./assets/anime19.jpg", title: "DOG SIGNAL" },
    { src: "./assets/anime20.jpg", title: "Hikikomari Kyuuketsuki no Monmon" },
    { src: "./assets/anime21.jpg", title: "16bit Sensation: ANOTHER LAYER" },
    { src: "./assets/anime22.jpg", title: "SPYxFAMILY Season 2" },
    { src: "./assets/anime23.jpg", title: "Kamonohashi Ron no Kindan Suiri" },
    { src: "./assets/anime24.jpg", title: "Arknights: Fuyukomori Kaerimichi" },
    {
      src: "./assets/anime25.jpg",
      title: "Megumi no Daigo: Kyuukoku no Orange",
    },
    { src: "./assets/anime26.jpg", title: "Watashi no Oshi wa Akuyaku Reijou" },
    { src: "./assets/anime27.jpg", title: "Bullbuster" },
    { src: "./assets/anime28.jpg", title: "Uma Musume: Pretty Derby Season 3" },
    {
      src: "./assets/anime29.jpg",
      title:
        "Boukensha ni Naritai to Miyako ni Deteitta Musume ga S Rank ni Natteta",
    },
    { src: "./assets/anime30.jpg", title: "Boushoku no Berserk" },
    { src: "./assets/anime31.jpg", title: "Ojouto Banken-kun" },
    { src: "./assets/anime32.jpg", title: "Kanojo mo Kanojo Season 2" },
    { src: "./assets/anime33.jpg", title: "Sousou no Frieren" },
    {
      src: "./assets/anime34.jpg",
      title:
        "Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi",
    },
    {
      src: "./assets/anime35.jpg",
      title:
        "Tearmoon Teikoku Monogatari: Dantoudai kara Hajimaru, Hime no Tensei Gyakuten Story",
    },
    {
      src: "./assets/anime36.jpg",
      title:
        "Konyaku Haki sareta Reijou wo Hirotta Ore ga, Ikenai Koto wo Oshiekomu",
    },
    { src: "./assets/anime37.jpg", title: "Undead Unluck" },
    { src: "./assets/anime38.jpg", title: "Sanshi-La Frontier" },
    {
      src: "./assets/anime39.jpg",
      title: "Nanatsu no Taizai: Mokushiroku no Yonkishi",
    },
    { src: "./assets/anime40.jpg", title: "Ragna Crimson" },
    { src: "./assets/anime41.png", title: "Kizuna no Allele Season 2" },
    { src: "./assets/anime42.jpg", title: "FLCL: Shoegaze" },
    { src: "./assets/anime43.png", title: "Bokura no Ameiro Protocol" },
    { src: "./assets/anime44.jpg", title: "FLCL: Grunge" },
    { src: "./assets/anime45.png", title: "BEYBLADE X" },
    {
      src: "./assets/anime46.jpg",
      title: "Seijo no Maryoku wa Bannou desu Season 2",
    },
    {
      src: "./assets/anime47.png",
      title: "Kikansha no Mahou wa Tokubetsu desu",
    },
    {
      src: "./assets/anime48.jpg",
      title: "Saihate no Paladin: Tetsusabi no Yama no Ou",
    },
    {
      src: "./assets/anime49.png",
      title: "Kimi no Koto ga Dai Dai Dai Dai Daisuki na 100-nin no Kanojo",
    },
    { src: "./assets/anime50.jpg", title: "Migi to Dali" },
    { src: "./assets/anime51.png", title: "Hoshikuzu Telepath" },
    { src: "./assets/anime52.jpg", title: "Buta no Liver wa Kanetsu Shiro" },
    { src: "./assets/anime53.png", title: "SHY" },
    { src: "./assets/anime54.jpg", title: "Under Ninja" },
    { src: "./assets/anime55.png", title: "Paradox Live The Animation" },
    { src: "./assets/anime56.jpg", title: "Goblin Slayer II" },
    { src: "./assets/anime57.png", title: "MF Ghost" },
    { src: "./assets/anime58.jpg", title: "B-Project: Netsuretsu*Love Call" },
    {
      src: "./assets/anime59.png",
      title: "Tate no Yuusha no Nariagari Season 3",
    },
  ];

  const toggleImageSelection = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((item) => item !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  //GENERAR IMAGEN

  const generateImage = () => {
    const imageContainer = document.getElementById("selected-images-container");
    imageContainer.style.display = "block";

    const nameContainer = document.querySelector(".name-container");
    nameContainer.innerHTML = `<strong>Animes de temporada de ${name}</strong>`;

    html2canvas(imageContainer).then((canvas) => {
      const generatedImage = canvas.toDataURL("image/jpeg");
      setGeneratedImage(generatedImage);
      setImageGenerated(true);

      imageContainer.style.display = "none";
    });
  };


  //DESCARGAR IMAGEN
  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = "imagen_generada.jpg";
      link.click();
    }
  };

  return (
    <div className="App bg-gradient-to-b from-[#cea484] to-[#dbcca6]">
      <div>
        <h1 className="text-3xl font-semibold mb-10">ANIMUS DE OTOÑO</h1>
      </div>

      <div className="image-grid">
        {imagesInfo.map((image, index) => (
          <div className="image-container" key={index}>
            <div className="image-checkbox-container">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                checked={selectedImages.includes(index)}
                onChange={() => toggleImageSelection(index)}
              />
              <label htmlFor={`checkbox-${index}`} className="checkbox-label">
                <img
                  src={image.src}
                  alt={`Imagen ${index + 1}`}
                  className={`image ${
                    selectedImages.includes(index) ? "selected" : ""
                  }`}
                />
                <div className="image-title mt-2 font-semibold">
                  {image.title}
                </div>
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <p className="font-semibold text-lg">Tu nombre:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-xl font-bold text-lg px-2"
        />
      </div>

      <button
        onClick={generateImage}
        className="mt-10 font-semibold rounded-xl bg-orange-400 text-lg hover:bg-orange-300 px-4 py-2 shadow-md"
      >
        Finalizar
      </button>

      <div id="selected-images-container" style={{ display: "none" }}>
        <div className="name-container mb-10 text-2xl"></div>
        <div className="generated-images-container">
          {selectedImages.map((index) => (
            <img
              key={index}
              src={imagesInfo[index].src}
              alt={`Imagen ${index + 1}`}
              className="generated-image"
            />
          ))}
        </div>
      </div>

      {generatedImage && (
        <div className="mt-8">
          <img src={generatedImage} alt="Imagen generada" />
        </div>
      )}

      {imageGenerated && (
        <button
          onClick={downloadImage}
          className="mt-4 font-semibold rounded-xl bg-blue-400 text-lg hover:bg-blue-300 px-4 py-2 shadow-md"
        >
          Descargar Imagen
        </button>
      )}
    </div>
  );
}

export default Home;
