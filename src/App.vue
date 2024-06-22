<template>
  <div id="app">
    <NavBar />
    <HeaderSection />
    <MeSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HeaderSection from './components/HeaderSection.vue';
import MeSection from './components/MeSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeaderSection,
    MeSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    FooterSection
  }
}
</script>

<style src="./assets/css/style.css" lang="css"></style>

