<template>
  <div class="tt-manager-field teal lighten-4">
    <h4 class="tm-header white-text">Team Manager</h4>
    <div class="tm-container">
      <div class="row">
        <div class="col tm-photo-section">
          <div class="tm-photo">
            <img
              class="tm-photo-photo"
              src="https://www.neilsonreeves.co.uk/wp-content/uploads/Corporate-Headshot-grey-background.jpg"
            />
            <div class="tm-photo-btn">
              <button class="btn">Upload Image</button>
            </div>
          </div>
        </div>
        <div class="col">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6 cyan">
                <input type="text" placeholder="First Name" />
              </div>
              <div class="input-field col s6 cyan">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 cyan">
                <input type="email" placeholder="email@address.com" />
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12 cyan">
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
          </form>
        </div>
        <div class="col">
          <button class="tm-btn btn cyan">
            <i class="far fa-edit"></i>
          </button>
          <button class="tm-btn btn red">
            <i class="far fa-minus-square"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TMMain",
};
</script>

<style>
.tt-manager-field {
  float: left;
  height: 80vh;
  width: 75%;
  margin-top: 10px;
  margin-left: 10px;
  background-size: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.tm-container {
  margin: 0 auto;
  width: 97%;
}

.tm-header {
  margin: 20px;
  padding-bottom: 10px;
  border-bottom: solid white;
}

.tm-photo-section {
  border: solid 1px white;
}

.tm-photo {
  width: 250px;
  height: 60vh;
}

.tm-photo-photo {
  margin-top: 10%;
  height: 80%;
  width: 100%;
  border: 1.5px dashed white;
  object-fit: cover;
}

.tm-photo-btn {
  margin-top: 20px;
  text-align: center;
}

.tm-btn {
  display: block;
  width: 70px;
  height: 70px;
  margin: 30%;
}

.tm-btn i {
  font-size: 250%;
}
</style>