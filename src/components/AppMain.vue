<template>
    <main>
        <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="projects in data">
                    <div class="card">
                        <img src="#" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ projects.project_name }}</h5>
                            <p class="card-text">{{ projects.description }}</p>
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