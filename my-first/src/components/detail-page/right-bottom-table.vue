<template>
    <table>
        <tr v-for="itme in tableData">
            <td v-for="i in itme">{{i}}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        props:{
            tableData:Object
        }
    }
</script>

<style scoped>
table{
    width: 100%;
    text-indent: 15px;
    border-collapse:collapse;
    margin-top: 20px;
}
td{
    height: 44px;
    line-height: 44px;
    border: 1px solid #f0f2f5;
}
</style>