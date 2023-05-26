<template>
    <section>
        <div class="container">
            <h2>{{ project.project_name }}</h2>
            <div class="card">
                <img v-if="project.image" :src="project.image" class="card-img-top">
                <div class="card-body">
                    <p class="card-text">{{ project.description }}</p>
                    <router-link :to="{ name: 'projects' }" class="btn btn-primary">
                        Backs
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ShowProject',
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                projects: '/projects'
            },
            project: []
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    if (response.data.success) {
                        this.project = response.data.results
                    } else {
                        // this.$router.push({ name: 'not-found' })
                    }
                })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<style lang="scss" scoped>
img {
    width: 200px;
}
</style>