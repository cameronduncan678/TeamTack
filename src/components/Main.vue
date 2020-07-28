<template>
    <div class="tt-project-field">
        <ProjectCol />
    </div>
</template>

<script>
import ProjectCol from '@/components/ProjectCol'

export default {
    name: 'Main',
    components: {
        ProjectCol
    }
    
}
</script>

<style>
.tt-project-field{
    float:left;
    height: 80vh;
    width: 1500px;
    margin-top: 10px;
    margin-left: 10px;
    background: url('../assets/images/BGfield.png') no-repeat;
    background-size:100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    
}
</style>