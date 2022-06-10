<template>
  <div class="container">
    <a-layout v-if="movieDetail.backdrop_path">
      <div class="movie-main">
        <img
          :src="`http://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`"
          alt="Poster Image"
        />
        <header class="card-header" style="background: solid black">
          <a-row>
            <a-col :span="16">
              <h1>
                <span :title="movieDetail.title">
                  {{ movieDetail.title }}
                  <span class="year"
                    >({{ getYear(movieDetail.release_date) }})</span
                  >
                </span>
              </h1>
              <h4 class="movie-overview" :title="movieDetail.overview">
                {{ movieDetail.overview }}
              </h4>
              <br /><br />
              <div class="movie-rating">
                {{ movieDetail.vote_average }}
                <star-filled style="height: 20px" />
              </div>
            </a-col>
            <a-col :span="8">
              <div class="movie-poster">
                <img
                  class="no-fade"
                  :src="`http://image.tmdb.org/t/p/w185${movieDetail.poster}`"
                  alt="Poster Image"
                />
              </div>
            </a-col>
          </a-row>
        </header>
      </div>
    </a-layout>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { StarFilled } from "@ant-design/icons-vue";
import axios from "axios";
import moment from "moment";
import { API_KEY } from "../config.json";
export default defineComponent({
  async beforeMount() {
    let movieId = this.$route.params.id;

    let result = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    );
    this.movieDetail = result.data;

    let images = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${API_KEY}`
    );
    this.movieDetail.poster = images.data.posters[2].file_path;
  },
  components: {
    StarFilled,
  },
  data() {
    return {
      movieDetail: {},
    };
  },
  methods: {
    getYear: function (result) {
      return moment(result, "YYYY-MM-DD").year();
    },
  },
});
</script>

<style scoped>
.no-fade {
  opacity: 1;
  height: 450px;
  border: solid 10px white;
  width: 300px;
}
.year {
  font-size: 25px !important;
}
.movie-overview {
  width: 700px;
  font-size: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
h1 {
  font-size: 30px;
  color: white;
  text-align: left;
}

h4 {
  text-align: left;
}
.container > .ant-layout {
  background: transparent !important;
}
.card-header {
  margin: 20px 40px;
}
</style>

<style>
.movie-main img {
  width: 100%;
  opacity: 0.1;
  position: absolute;
  margin-left: -50%;
}
</style>