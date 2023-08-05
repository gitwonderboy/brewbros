<template>
  <!-- Carousel Start -->
  <div class="container-fluid p-0 mb-5">
    <div id="blog-carousel" class="carousel slide overlay-bottom" data-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in carousel" :key="index" :class="item.style">
          <div
            class="carousel-caption d-flex flex-column align-items-center justify-content-center"
          >
            <h2 class="text-primary font-weight-medium m-0">{{ item.caption }}</h2>
            <h1 class="display-1 text-white m-0">{{ item.title }}</h1>
            <h2 class="text-white m-0">{{ item.subtitle }}</h2>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#blog-carousel" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#blog-carousel" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
    <div class="cupandsmoke container">
      <div class="cupsmoke">
        <div class="cup-image">
          <img src="/images/coffee_cup2.png" alt="cup-image" />
        </div>
        <div class="cup-smoke">
          <img src="/images/coffee_smoke.png" alt="cup-image" />
        </div>
      </div>
    </div>
  </div>
  <!-- Carousel End -->
</template>
<script>
export default {
  data() {
    return {
      carousel: [
        {
          title: "COFFEE",
          subtitle: "* SINCE 1994 *",
          caption: "We Have Been Serving",
          style: "carousel-item carousel-item-one active",
        },
        {
          title: "COFFEE",
          subtitle: "* SINCE 1994 *",
          caption: "We Have Been Serving",
          style: "carousel-item carousel-item-two",
        },
      ],
    };
  },
};
</script>
<style scoped>
.carousel-caption {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #120c0bc9;
  z-index: 1;
}
.cupandsmoke {
  position: relative;
}
.cupsmoke {
  position: absolute;
}
.cup-image {
  position: absolute;
  bottom: -230px;
  left: 220px;
  transform: rotate(30deg);
}
.cup-smoke {
  position: absolute;
  bottom: 90px;
  left: 330px;
}
</style>
