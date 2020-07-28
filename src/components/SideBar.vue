<template>
    <div class="tt-sidebar cyan lighten-4">
        <h4 class="sidebar-title">Team</h4>
        <div class="team-list-sidebar">
            <div class="team-list-sidebar-teammem">
                <div class="team-list-sidebar-teammem-port green">
                    <img class="team-list-sidebar-teammem-port-img" src="../assets/images/portraitTest04.jpeg">
                </div>
                <div class="team-list-sidebar-teammen-name">
                    Jane Doe
                </div>
            </div>
            <div class="team-list-sidebar-teammem">
                <div class="team-list-sidebar-teammem-port green">
                    <img class="team-list-sidebar-teammem-port-img" src="../assets/images/portraitTest03.jpeg">
                </div>
                <div class="team-list-sidebar-teammen-name">
                    Deborah bra
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar'
    
}
</script>

<style>
.tt-sidebar{
    width: 300px;
    height: 80vh;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
}

.sidebar-title{
    text-align: center;
    padding: 20px;
    border-top: solid white;
    border-bottom: solid white;
    color: white;
}

.team-list-sidebar{
    margin: 0 auto;
    width: 90%;
    height: 600px;
    background: #4dd0e1;
    overflow-y: scroll;
}

.team-list-sidebar-teammem{
    width: 85%;
    height: 120px;
    margin:0 auto;
    margin-top: 30px;
    box-shadow: 5px 5px 9px #749999;
    padding:10px;
    background:#0097a7;
}

.team-list-sidebar-teammem-port{
    width:40%;
    height:100%;
    float:left;
}

.team-list-sidebar-teammem-port-img{
    width:100%;
    height:100%;
    object-fit: cover;
}

.team-list-sidebar-teammen-name{
    float:left;
    text-align: center;
    margin-left:10px;
    margin-top:20px;
    color:white;
}
</style>