<template>
  <div class="legend">
    <b-container class="px-sm-5" fluid="lg">
      <b-row>
        <b-col></b-col>
        <b-col md="4" class="text-left">
          <p class="project-description">Oznaczenie saperskie: </p>
          <p class="project-description">
          <img class="img-desc mb-2" src="../assets/icon-destroyed.svg">
           - zniszczone
          </p>
          <p class="project-description">
          <img class="img-desc mb-2" src="../assets/icon-veryGood.svg">
           - zabezpieczone
          </p>
          <p class="project-description">
          <img class="img-desc mb-2" src="../assets/icon-unknown.svg">
           - niezabezpieczone
          </p>
          <p class="project-description">
          <img class="img-desc mb-2" src="../assets/icon-veryBad.svg">
           - w bardzo złym stanie
          </p>

        </b-col>
        <b-col>
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<style>




.project-description {
  color: #fff;
}

.img-desc {
  max-width: 60px;
}

</style>