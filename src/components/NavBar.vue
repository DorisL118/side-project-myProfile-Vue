<template>
  <div id="nav" class="nav-transparent">
    <div class="container">
      <div class="row row-cols-2">
        <div class="row-col-2">
          <a href="#header">Doris Liu</a>
        </div>
        <div class="row-col-2">
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a href="#me">Me</a>
            </li>
            <li class="nav-item">
              <a href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a href="#project">Projects</a>
            </li>
            <li class="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  mounted() {
    window.addEventListener("scroll", function () {
      var nav = document.getElementById("nav");
      if (window.scrollY > 100) {
        nav.classList.remove("nav-transparent");
        nav.classList.add("nav-colored");
      } else {
        nav.classList.remove("nav-colored");
        nav.classList.add("nav-transparent");
      }
    });
  }
}
</script>
