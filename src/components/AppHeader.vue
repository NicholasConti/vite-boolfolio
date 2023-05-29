<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-between">
                <div>Logo</div>
                <nav>
                    <ul class="list-unstyled m-0 p-0 gap-2 d-flex">
                        <li>
                            <router-link :to="{ name: 'home' }" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'about' }" class="nav-link">
                                About
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'projects' }" class="nav-link">
                                Projects
                            </router-link>
                        </li>
                        <li>
                            <TypeList />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import TypeList from './TypeList.vue';

export default {
    name: "AppHeader",
    components: { TypeList }
}
</script>

<style lang="scss" scoped>
header {
    padding: 25px;
    background-color: pink;
}
</style>