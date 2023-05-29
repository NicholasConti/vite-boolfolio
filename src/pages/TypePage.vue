<template>
    <section>
        <div class="container">
            <h1>TYPE: {{ this.type.name }}</h1>

            <ul v-if="type.projects.length > 0">
                <li v-for="project in type.projects">
                    {{ project.project_name }}
                    <router-link :to="{ name: 'show', params: { slug: project.slug } }" class="btn btn-primary">
                        Show
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'TypePage',
    data() {
        return {
            store,
            type: null
        }
    },
    methods: {
        getType() {
            axios.get(`${this.store.apiBaseUrl}/types/${this.$route.params.slug}`).then((response) => this.type = response.data.results);
        }
    },
    created() {
        this.getType();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({ toParams })
                console.log({ previousParams })
                this.getType();
            }
        )
    }
}
</script>

<style lang="scss" scoped></style>