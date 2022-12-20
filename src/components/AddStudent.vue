<template>
  <div>
    <Header />

    <form class="add-student">
      <h3>Add New Student</h3>
      <div class="form-group">
        <label for="name">Student Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          v-model="student.name"
          required
        />
      </div>

      <div class="form-group">
        <label for="birthday">Birthday</label>
        <input
          type="date"
          id="birthday"
          name="birthday"
          placeholder="Enter birthday"
          v-model="student.birthday"
          required
        />
      </div>

      <div class="form-group">
        <label for="municipality">Municipality</label>
        <input
          type="text"
          name="municipality"
          id="municipality"
          placeholder="Enter municipality"
          v-model="student.municipality"
          required
        />
      </div>

      <div class="form-group">
        <label for="createdAt">CreatedAt</label>
        <input
          type="date"
          id="createdAt"
          name="createdAt"
          placeholder="Date of creation"
          v-model="student.createdAt"
          required
        />
      </div>
      <p v-if="error">Please fill all fields!</p>
      <button type="button" @click="addStudent">Add New Student</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "Add-Student",
  components: {
    Header,
  },
  data() {
    return {
      student: {
        name: "",
        birthday: "",
        municipality: "",
        createdAt: "",
      },
      error: false,
    };
  },
  methods: {
    async addStudent() {
      // Validation
      if (
        this.student.name === "" ||
        this.student.birthday === "" ||
        this.student.municipality === "" ||
        this.student.createdAt === ""
      ) {
        this.error = true;
        return;
      }

      const response = await axios.post("http://localhost:3000/students", {
        name: this.student.name,
        dateOfBirthday: this.student.birthday,
        municipality: this.student.municipality,
        createdAt: this.student.createdAt,
      });

      if (response.status === 201) {
        this.$router.push({ name: "Home" });
      }
    },
  },

  mounted() {
    const user = localStorage.getItem("user");

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style scoped>
.add-student {
  width: 600px;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.add-student h3 {
  color: #2b8a3e;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.add-student input {
  border: 1px solid #2b8a3e;
  padding: 5px 10px;
  outline: none;
}

.form-group label {
  color: #2b8a3e;
  font-weight: 500;
}

.add-student button {
  border: none;
  background-color: #2b8a3e;
  color: #fff;
  font-weight: 500;
  padding: 5px;
  border-radius: 4px;
  margin-top: 30px;
}

.add-student button:hover {
  background-color: #277c38;
}
.add-student p {
  color: red;
}
</style>
