<template>
    <div class="tt-project-section">
        <span class="tt-project-col">
            <div class="tt-project-col-container">
                <div class="tt-project-col-title">
                    Project name 01
                    <button class="project-del btn cyan">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="tt-project-col-teamlist">
                    <TeamCardMain />
                </div>
            </div>
        </span>

        <span class="tt-addProject">
            <button class="btn cyan add-btn">
                <i class="fas fa-plus"></i>
            </button>
        </span>
    </div>
</template>

<script>
import TeamCardMain from '@/components/TeamCardMain'

export default {
    name: 'ProjectCol',
    components: {
        TeamCardMain
    }
    
}
</script>

<style>
.tt-project-section{
    height: 100%;
}

.tt-project-col{
    width: 600px;
    height: 100%;
    border-right: solid #d1d1d1;
    border-left: solid #d1d1d1;
    background: white;
    display:inline-block;
    margin-right: -4px;
}

.tt-project-col-container{
    width: 90%;
    height: 100%;
    margin-left: 5%;
}

.tt-project-col-title{
    width: 100%;
    padding-top: 50px;
    padding-bottom: 20px;
    font-size: 40px;
    text-align: center;
    font-weight: 200;
    border-bottom: solid #d1d1d1;
    border-top: solid #d1d1d1;
}

.project-del{
    color:white;
    height:40px;
}

.tt-project-col-teamlist{
    width:95%;
    /*Delete when cards added */
    height: 80%;
    /*Delete when cards added */
    margin-top: 20px;
    margin-left: 2.5%;
    overflow-y: scroll;
}

.tt-addProject{
    width: 100px;
    display:inline-block;
    margin:20px;
}

.add-btn{
    width: 80px;
    height: 80px;
    position: relative;
    margin-bottom: 1300px;
    margin-left: 40px;
}
</style>