<template>
    <div>Vendor Name: {{ vendorName }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class VendorDetail extends Vue {
    get vendorName() {
        return this.$store.getters.vendorName;
    }
}
</script>

<style scoped></style>
