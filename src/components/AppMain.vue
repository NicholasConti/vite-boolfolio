<template>
    <main>
        <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="project in data">
                    <div class="card">
                        <img v-if="project.image" :src="project.image" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.project_name }}</h5>
                            <p class="card-text">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'AppMain',
    props: {
        data: Object
    }

}
</script>

<style lang="scss" scoped></style>