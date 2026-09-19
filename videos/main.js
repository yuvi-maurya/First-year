console.log("Connected");

const btns = [
  "All",
  "Gaming",
  "Music",
  "Audition",
  "Free Fire Max",
  "Disha Vakani",
  "Live",
  "India soap operas",
  "Arijit Sigh",
  "Mixes",
  "T-Series",
  "Movies",
];

const btnsContainerEl = document.getElementById("btns-container");

for (let i = 0; i <= btns.length - 1; i = i + 1) {
  btnsContainerEl.innerHTML =
    btnsContainerEl.innerHTML +
    `<button style="${
      i === 0
        ? "background: #833AB4;background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);color:white"
        : "background-color:white;color:black"
    }">${btns[i]}</button>`;
}
const videos = [
  {
    title:
      "JavaScript Full Course for Beginners | Complete All-in-One Tutorial",
    thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
    channelName: "freeCodeCamp.org",
    ChannelLogo:
      "https://yt3.ggpht.com/0UrFW02_vRoTxrCcv4H6vSDXFwUPcafCf3oXIA6yMFUsVtIvE8EZdS2UMzbdscI7ifON_U7DHQ=s88-c-k-c0x00ffffff-no-rj",
    views: "6.5M views",
    uploadedAt: "2 years ago",
  },

  {
    title: "React JS Full Course 2025 | Learn React In 10 Hours",
    thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/hq720.jpg",
    channelName: "freeCodeCamp.org",
    ChannelLogo:
      "https://yt3.ggpht.com/0UrFW02_vRoTxrCcv4H6vSDXFwUPcafCf3oXIA6yMFUsVtIvE8EZdS2UMzbdscI7ifON_U7DHQ=s88-c-k-c0x00ffffff-no-rj",
    views: "2.5M views",
    uploadedAt: "4 months ago",
  },
  {
    title: "Bhole Baba Song 2025 | Shekhar Jaiswal",
    thumbnail: "https://i.ytimg.com/vi/ac29WH5qh7U/hq720.jpg",
    channelName: "Shekhar Jaiswal Music",
    ChannelLogo:
      "https://yt3.ggpht.com/8xJN9PbVvakyKDQXvJjqEcymaKxYRIZ80Gxm7ygkq6mGjkUwOlmPM33kX8D45tRIQy2NEbMglok=s88-c-k-c0x00ffffff-no-rj",
    views: "4.5M views",
    uploadedAt: "5 months ago",
  },
  {
    title: "Kedara | Hansraj Raghuwanshi | Kedarnath Dham Special 2025",
    thumbnail: "https://i.ytimg.com/vi/V8VKLgh0PbY/hq720.jpg",
    channelName: "Hansraj Raghuwanshi",
    ChannelLogo:
      "https://yt3.ggpht.com/ytc/AIdro_kKVvkRbLrPkZWjvCR_VRA93V7sJBFBZCzcZYfotO4V7WA=s88-c-k-c0x00ffffff-no-rj",
    views: "4.1M views",
    uploadedAt: "2 months ago",
  },
  {
    title: "Artificial Intelligence Full Course (2025) | Beginners FREE",
    thumbnail: "https://i.ytimg.com/vi/9tbaiFIm0HU/hq720.jpg",
    channelName: "Intellipaat",
    ChannelLogo:
      "https://yt3.ggpht.com/0UrFW02_vRoTxrCcv4H6vSDXFwUPcafCf3oXIA6yMFUsVtIvE8EZdS2UMzbdscI7ifON_U7DHQ=s88-c-k-c0x00ffffff-no-rj",
    views: "37K views",
    uploadedAt: "5 days ago",
  },
  {
    title: "Python Tutorial for Beginners | Learn Python in 5 Hours",
    thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hq720.jpg",
    channelName: "Programming with Mosh",
    ChannelLogo:
      "https://yt3.ggpht.com/ytc/AIdro_lfqWyfdV-XumvTTsBbJfpTwosFLl2K-7M59bZKuw=s88-c-k-c0x00ffffff-no-rj",
    views: "20M views",
    uploadedAt: "4 years ago",
  },

  {
    title: "Node.js Full Course (2025) | Backend Mastery",
    thumbnail: "https://i.ytimg.com/vi/Oe421EPjeBE/hq720.jpg",
    channelName: "Programming with Mosh",
    ChannelLogo:
      "https://yt3.ggpht.com/ytc/AIdro_lfqWyfdV-XumvTTsBbJfpTwosFLl2K-7M59bZKuw=s88-c-k-c0x00ffffff-no-rj",
    views: "1.7M views",
    uploadedAt: "1 year ago",
  },

  {
    title: "Top 10 JavaScript Projects for Beginners 2025",
    thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg",
    channelName: "CodeWithHarry",
    ChannelLogo:
      "https://yt3.ggpht.com/ytc/AIdro_mJfdkoIO-9-vOgt6UYI1ev6EOwbs8ck-ZedFAl5g=s88-c-k-c0x00ffffff-no-rj",
    views: "820K views",
    uploadedAt: "2 months ago",
  },

  {
    title: "How Internet Works in Hindi | Full Explanation",
    thumbnail: "https://i.ytimg.com/vi/AEaKrq3SpW8/hq720.jpg",
    channelName: "Geeky Hub",
    ChannelLogo:
      "https://yt3.ggpht.com/ytc/AIdro_kSrKnkt_f5og5F94ZFkfppjWSoDwXboGZfgOdxWQ=s88-c-k-c0x00ffffff-no-rj",
    views: "1.4M views",
    uploadedAt: "1 year ago",
  },
  {
    title: "Introduction to Machine Learning (2025) | Complete Guide",
    thumbnail: "https://i.ytimg.com/vi/GwIo3gDZCVQ/hq720.jpg",
    channelName: "Simplilearn",
    ChannelLogo:
      "https://yt3.ggpht.com/ytc/AIdro_lELkmq12PuLGM2i9TCuyKATzDR0D4MZsRGMQ=s88-c-k-c0x00ffffff-no-rj",
    views: "710K views",
    uploadedAt: "2 weeks ago",
  },
];

const videoContainerEl = document.getElementById("videos-container");

for (let i = 0; i <= videos.length - 1; i = i + 1) {
  videoContainerEl.innerHTML =
    videoContainerEl.innerHTML +
    `<figure onclick="showVideoPopup(${i})">
      <img
        alt=""
        src=${videos[i].thumbnail}
      />
      <figcaption>
        <img
          alt=""
          src=${videos[i].ChannelLogo}
        />
        <section class="heading-sec">
          <a href=""
            >${videos[i].title}
          </a>
          <p>${videos[i].channelName}</p>
          <p>${videos[i].views} • ${videos[i].uploadedAt}</p>
        </section>
      </figcaption>
    </figure>`;
}

// Popup Hide show Functionality
const popupEl = document.getElementById("popup");

const popupVideoEl = document.getElementById("popup-video");

function showVideoPopup(index) {
  popupVideoEl.poster = videos[index].thumbnail;

  popupEl.style.transform = "translateY(0%)";
  popupEl.style.zIndex = 50;

  console.log(videos[index]);
}

function closePopup() {
  popupEl.style.transform = "translateY(-100%)";
  popupEl.style.zIndex = -1;
}
