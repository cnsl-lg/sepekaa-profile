import './style.css'
import instagramIcon from '/instagram-icon.svg'
import spotifyIcon from '/spotify-icon.svg'
import driveIcon from '/drive-icon.svg'

document.querySelector('#app').innerHTML = `
  <div class="max-w-xl mx-auto">
    <header class="p-4">
      <figure class="flex items-center mb-2">
        <img src="sepekaa-logo.jpg" alt="Sepekaa Logo" class="header_logo" />
        <figcaption>
          <h1 class="header_title">Sepekaa_01</h1>
          <span class="header_subtitle">XII RPL-1</span>
        </figcaption>
      </figure>
      <p class="header_quote"> "Engaging class, experienced teachers, innovative methods. Discover potential!"</p>
      <ul class="header_tags border-b-4 border-slate-200 pb-4">
        <li class="header_tag_item">
          <span class="font-semibold text-slate-600">#</span> 💻
        </li>
        <li class="header_tag_item">
          <span class="font-semibold text-slate-600">#</span> 📶
        </li>
        <li class="header_tag_item">
          <span class="font-semibold text-slate-600">#</span> 🎧
        </li>
        <li class="header_tag_item">
          <span class="font-semibold text-slate-600">#</span> 🖊️
        </li>
      </ul>
    </header>
    <main class="p-4">
      <h2 class="text-2xl font-bold mini:text-lg">Social Links</h2>
      <p class="text-base font-semibold mini:text-xs">Here are our social links to tell you that we are exist.</p>
      <ul class="mt-6">
        <li>
          <a href="https://www.instagram.com/sepekaa_01/?igshid=YmMyMTA2M2Y%3D" target="_blank" class="w-full inline-flex items-center gap-x-2 text-slate-800 text-lg font-semibold border-2 border-slate-300 p-4 rounded-xl mb-4 mini:text-sm mini:mb-2">
            <img src=${instagramIcon} alt="Instagram Icon" class="w-10 h-10 mini:w-8 mini:h-8" />
            <span>Instagram | Sepekaa_01</span>
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/user/314ld7wkolp2vipxpmuzaxrbaewe?si=kiZAIoc8QHyN3pbcBzwenA&nd=1" target="_blank" class="w-full inline-flex items-center gap-x-2 text-slate-800 text-lg font-semibold border-2 border-slate-300 p-4 rounded-xl mb-4 mini:text-sm mini:mb-2">
            <img src=${spotifyIcon} alt="Spotify Icon" class="w-10 h-10 mini:w-8 mini:h-8" />
            <span>Spotify | Spotify Playlist</span>
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/drive/folders/10zMgesrXg7dqs1cXnP-zlAFdEcq4Q0wd" target="_blank" class="w-full inline-flex items-center gap-x-2 text-slate-800 text-lg font-semibold border-2 border-slate-300 p-4 rounded-xl mb-4 mini:text-sm mini:mb-2">
            <img src=${driveIcon} alt="Google Drive Icon" class="w-10 h-10 mini:w-8 mini:h-8" />
            <span>Google Drive | Photo Sepekaa</span>
          </a>
        </li>
      </ul>
    </main>
    <footer class="p-4 text-center text-slate-500">
      <p>&copy;Sepekaa_01 2023</p>
    </footer>
  </div>
`