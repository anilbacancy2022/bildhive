<template>
  <a-layout>
    <h2 style="color: white">Popular Movies</h2>
    <section class="card-list">
      <article
        class="card"
        v-for="movie in movieList"
        :key="movie"
        @click="movieDetail(movie.id)"
      >
        <div class="card-img">
          <img
            :src="`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
            alt="Movie Poster"
          />
        </div>

        <header class="card-header" style="background: solid black">
          <h2>
            <span :title="movie.title">
              {{ movie.title }}
            </span>
            <p>{{ getYear(movie.release_date) }}</p>
          </h2>

          <h4 class="movie-overview" :title="movie.overview">
            {{ movie.overview }}
          </h4>
        </header>
      </article>
    </section>

    <h2 style="color: white">Top Rated Movies</h2>
    <section class="card-list">
      <article
        class="card"
        v-for="movie in movieListTop"
        :key="movie"
        @click="movieDetail(movie.id)"
      >
        <div class="card-img">
          <img
            :src="`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
            alt="Movie Poster"
          />
        </div>

        <header class="card-header" style="background: solid black">
          <h2>
            <span :title="movie.title">
              {{ movie.title }}
            </span>
            <p>{{ getYear(movie.release_date) }}</p>
          </h2>

          <h4 class="movie-overview" :title="movie.overview">
            {{ movie.overview }}
          </h4>
        </header>
      </article>
    </section>
  </a-layout>
</template>
<script>
import { defineComponent } from "vue";
// import { StarFilled } from "@ant-design/icons-vue";
import axios from "axios";
import moment from "moment";
import { API_KEY } from "../config.json";
export default defineComponent({
  components: {
    // StarFilled,
  },
  data() {
    return {
      movieList: [],
      movieListTop: [],
    };
  },
  async created() {
    let result = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    this.movieList = result.data.results;
    let toprated = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    );
    this.movieListTop = toprated.data.results;
  },
  methods: {
    getYear: function (result) {
      return moment(result, "YYYY-MM-DD").year();
    },
    movieDetail: function (id) {
      this.$router.push({ name: "MovieDetails", params: { id: id } });
    },
  },
  setup() {
    return {};
  },
});
</script>
<style>
.movie-rating {
  font-size: 30px;
  color: white;
  text-align: left;
}
.movie-rating span {
  font-size: 30px;
  color: gold;
}

.ant-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #091e3c !important;
}
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #000;
}

@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap");

body {
  padding: 0;
  margin: 0;
  background-color: #17141d !important;
  color: white;
  font-family: "DM Mono", monospace;
}

.card-list {
  display: flex;
  padding: 3rem;
  overflow-x: scroll;
}

.card-list::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.card-list::-webkit-scrollbar-thumb {
  background: #201c29;
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}

.card-list::-webkit-scrollbar-track {
  background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);
}

.card {
  cursor: pointer;
  display: flex;
  position: relative;
  flex-direction: column;
  height: 300px;
  width: 400px;
  min-width: 250px;
  padding: 1.5rem;
}

.card {
  /* ... */

  border-radius: 16px;
  background: #17141d;
  box-shadow: -1rem 0 3rem #000;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: 0.2s;
}
.card-img {
  background: #17141d;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-top: -24px;
  transition: 0.2s;
}

.card-img img {
  width: 250px;
  border-radius: 16px 16px 0 0;
  margin: 0 -24px;
}

.card:hover {
  transform: translateY(-1rem);
}

.card:hover ~ .card {
  transform: translateX(130px);
}

.card:not(:first-child) {
  margin-left: -130px;
}

.card-author {
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  margin: 3rem 0 0;
}

.author-avatar img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  filter: grayscale(100%);
  margin: 16px 10px;
}

.half-circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 48px;
  fill: none;
  stroke: #ff8a00;
  stroke-width: 8;
  stroke-linecap: round;
}

.card-header {
  margin-bottom: auto;
}

.card-header p {
  font-size: 14px;
  margin: 0 0 1rem;
  color: #7a7a8c;
}

.card-header h2 {
  font-size: 20px;
  margin: 0.25rem 0 auto;
  color: white;
  cursor: pointer;
}

.card-header h4 {
  margin: 0.25rem 0 auto;
  text-align: justify;
  color: white;
  cursor: pointer;
}

.card-header h2:hover {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  text-shadow: none;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tags {
  margin: 1rem 0 2rem;
  padding: 0.5rem 0 1rem;
  line-height: 2;
  margin-bottom: 0;
}

.tags a {
  font-style: normal;
  font-weight: 700;
  font-size: 0.5rem;
  color: #7a7a8c;
  text-transform: uppercase;
  font-size: 0.66rem;
  border: 3px solid #28242f;
  border-radius: 2rem;
  padding: 0.2rem 0.85rem 0.25rem;
  position: relative;
}

.tags a:hover {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  text-shadow: none;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  background-clip: text;
  border-color: white;
}

.movie-overview {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-header h2 span {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>