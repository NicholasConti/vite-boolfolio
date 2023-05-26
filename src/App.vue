<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    // data() {
    //     return {
    //         apiBaseUrl: 'http://127.0.0.1:8000/api',
    //         apiUrls: {
    //             projects: '/projects'
    //         },
    //         projects: []
    //     }
    // },
    components: {
        AppHeader,
        AppFooter
    },
    // methods: {
    //     getProjects() {
    //         axios.get(this.apiBaseUrl + this.apiUrls.projects).then((response) => {
    //             this.projects = response.data.results;
    //         })
    //     }
    // },
    // created() {
    //     this.getProjects();
    // }
}
</script>

<template>
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
</template>

<style scoped></style>
