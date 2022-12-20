<template>
  <div>
    <Header />
    <div class="student-info">
      <h3>Student Info</h3>
      <div class="student">
        <div class="student-data">
          <p>Student Index:</p>
          <span>{{ student.id }}</span>
        </div>

        <div class="student-data">
          <p>Student Name:</p>
          <span>{{ student.name }}</span>
        </div>
        <div class="student-data">
          <p>DoB of Student:</p>
          <span>{{ student.birthday }}</span>
        </div>
        <div class="student-data">
          <p>Municipality:</p>
          <span>{{ student.municipality }}</span>
        </div>
        <div class="student-data">
          <p>CreatedAt:</p>
          <span>{{ student.createdAt }}</span>
        </div>
      </div>
      <router-link class="back" to="/">
        <ion-icon name="arrow-back-outline"></ion-icon> Back to Home
        page</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "View-Page",
  components: {
    Header,
  },
  data() {
    return {
      student: {
        id: "",
        name: "",
        birthday: "",
        municipality: "",
        createdAt: "",
      },
    };
  },

  async mounted() {
    const user = localStorage.getItem("user");

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    const response = await axios.get(
      `http://localhost:3000/students/${this.$route.params.id}`
    );

    this.student.id = response.data.id;
    this.student.name = response.data.name;
    this.student.birthday = response.data.dateOfBirthday;
    this.student.municipality = response.data.municipality;
    this.student.createdAt = response.data.createdAt;
  },
};
</script>

<style scoped>
.student-info {
  width: 600px;
  margin: 150px auto;
  padding: 60px;
  margin-bottom: 300px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.356);
}

.student-info h3 {
  margin-bottom: 40px;
  color: #2b8a3e;
}

.student-data {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #2b8a3e;
  padding: 0 10px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 10px;
}

.back {
  display: flex;
  align-items: center;
  color: #2b8a3e;
  margin-top: 22px;
}
</style>
