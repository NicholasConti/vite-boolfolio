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
                <div class="card-body my-2">
                    <h3>Messages:</h3>
                    <ul v-if="project.messages.length">
                        <li v-for="message in project.messages">
                            <h4>{{ message.author }}</h4>
                            <p>{{ message.message }}</p>
                        </li>
                    </ul>
                    <form @submit.prevent="sendMessage">
                        <div class="mb-3">
                            <label for="author" class="form-label">Author</label>
                            <input type="text" class="form-control" id="author" v-model="formData.author">
                        </div>
                        <div class="mb-3">
                            <label for="mail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="mail" v-model="formData.email">
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">Text</label>
                            <textarea class="form-control" id="content" rows="2" v-model="formData.message"></textarea>
                        </div>
                        <input type="submit" value="Send" class="btn btn-success">
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'ShowProject',
    data() {
        return {
            store,
            project: null,
            formData: {
                author: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        getProject() {
            //axios.get(this.apiBaseUrl + this.apiUrls.projects + "/" + this.$route.params.slug)
            axios.get(`${this.store.apiBaseUrl}/projects/${this.$route.params.slug}`)
                .then((response) => {
                    this.project = response.data.results
                    // console.log(this.project)
                }).catch((error) => {
                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' });
                    }
                })
        },
        sendMessage() {
            const data = {
                author: this.formData.author,
                email: this.formData.email,
                message: this.formData.message,
                project_id: this.project.id
            };

            axios.post(`${this.store.apiBaseUrl}/messages`, data).then((response) => {
                if (response.status === 201) {
                    this.project.messages.push(response.data);
                    // this.formData.author = '';
                    // this.formData.email = '';
                    // this.formData.message = '';
                }
            }).catch((error) => {
                console.log(error)
            });
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