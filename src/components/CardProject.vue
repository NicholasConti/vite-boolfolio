<template>
    <div class="card">
        <img v-if="project.image" :src="project.image" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ project.project_name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <router-link :to="{ name: 'show', params: { slug: project.slug } }" class="btn btn-primary">
                Show
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardProject',
    props: {
        project: Object
    }
}
</script>

<style lang="scss" scoped></style>