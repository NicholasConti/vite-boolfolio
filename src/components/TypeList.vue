<template>
    <div>
        <select class="form-select" v-if="types.length > 0" @change="changePage" v-model="currentType">
            <option v-for="tp in types" :value="tp.slug">{{ tp.name }}</option>
        </select>
    </div>
</template>
<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'TypeList',
    data() {
        return {
            store,
            currentType: '',
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(`${this.store.apiBaseUrl}/types`).then((response) => {
                this.types = response.data.results;
            })
        },
        changePage() {
            this.$router.push({ name: 'type', params: { slug: this.currentType } });
        }
    },
    created() {
        this.getTypes();
    }
}
</script>   

<style lang="scss" scoped></style>