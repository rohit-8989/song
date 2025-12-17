const songs = [
  {
    title: "Night Drive",
    artist: "Lo-Fi Beats",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
  },
  {
    title: "Late Coding",
    artist: "Chillhop",
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f"
  },
  {
    title: "Dark Room",
    artist: "Synthwave",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
  }
];

let index = 0;

const song = document.getElementById("song");
const artist = document.getElementById("artist");
const album = document.getElementById("album");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const play = document.getElementById("play");

function updateSong() {
  song.textContent = songs[index].title;
  artist.textContent = songs[index].artist;
  album.src = songs[index].image;
}

next.addEventListener("click", () => {
  index++;
  if (index >= songs.length) index = 0;
  updateSong();
});

prev.addEventListener("click", () => {
  index--;
  if (index < 0) index = songs.length - 1;
  updateSong();
});

play.addEventListener("click", () => {
  play.textContent = play.textContent === "▶" ? "⏸" : "▶";
});
