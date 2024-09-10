<template lang="">
  <div class="quiz-card">
    <StarIcon class="quiz-score" />
    <img src="../png.png" title="quiz" class="quiz-card-miniature" />
    <div class="quiz-question-count">
      <div></div>
      <p>10 questions</p>
    </div>
    <div class="card-info">
      <div class="quiz-tags">
        <p>anime</p>
        <p>manga</p>
        <p>quiz</p>
        <p>test</p>
      </div>
      <p>Quiz Card</p>
      <div class="quiz-other-infos">
        <div class="quiz-creator-info">
          <img src="../png.png" title="quiz" class="quiz-creator-avatar" />
          <p>Somebody</p>
        </div>
        <p>1.0k played</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import StarIcon from './StarIcon.vue'
</script>
<style lang="css" scoped>
.quiz-card {
  margin-inline: 1rem;
  background-color: #8cbb81;
  width: 300px;
  border-radius: 10px;
}

.quiz-question-count {
  display: flex;
  position: absolute;
  place-self: flex-end;
  padding: 5px;
  margin-top: 135px;
  margin-right: 8px;
  border-radius: 10px;
  width: 85px;
  height: 26px;
  align-items: center;
  justify-content: center;
}

.quiz-question-count > div {
  background: rgba(0, 0, 0, 0.5);
  filter: blur(4px);
  width: 100%;
  height: 100%;
}

.quiz-question-count > p {
  position: absolute;
  color: white;
  margin: 0;
  font-size: 11pt;
}

.card-info {
  margin-inline: 10px;
}

.card-info p {
  margin-block: 5px;
}

.quiz-score {
  position: absolute;
  place-self: flex-end;
  margin: 5px;
}

.card-info,
.quiz-card {
  display: flex;
  flex-direction: column;
}

.quiz-other-infos,
.quiz-creator-info {
  display: flex;
  flex-direction: row;
}

.quiz-creator-info {
  align-items: center;
}

.quiz-other-infos {
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.quiz-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.quiz-tags p {
  margin: 0;
}

.quiz-creator-avatar {
  width: 24px;
  height: 24px;
  border-radius: 25px;
}

.quiz-card-miniature {
  width: 300px;
  height: 175px;
}
</style>
