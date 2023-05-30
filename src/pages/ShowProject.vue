<template>
    <section>
        <div class="container" v-if="project">
            <h2>{{ project.project_name }}</h2>
            <div class="card">
                <img v-if="project.image" :src="project.image" class="card-img-top">
                <div class="card-body">
                    <p class="card-text">{{ project.description }}</p>
                    <div class="my-3" v-show="project.technologies.length">
                        <span class="badge text-bg-success me-1" v-for="tech in project.technologies">{{ tech.name }}</span>
                    </div>
                    <router-link :to="{ name: 'projects' }" class="btn btn-primary">
                        Back
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
            project: null
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    this.project = response.data.results
                    // console.log(this.project)
                }).catch((error) => {
                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' });
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