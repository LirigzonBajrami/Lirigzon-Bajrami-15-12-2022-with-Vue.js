<template>
  <div>
    <Header />
    <form class="add-student">
      <h3>Edit Student</h3>
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
      <button type="button" @click="updateStudent">Edit Student</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "Update-Student",
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
    };
  },
  methods: {
    async updateStudent() {
      // Validation
      if (
        this.student.name === "" ||
        this.student.birthday === "" ||
        this.student.municipality === "" ||
        this.student.createdAt === ""
      ) {
        return;
      }

      const response = await axios.put(
        `http://localhost:3000/students/${this.$route.params.id}`,
        {
          name: this.student.name,
          dateOfBirthday: this.student.birthday,
          municipality: this.student.municipality,
          createdAt: this.student.createdAt,
        }
      );

      if (response.status === 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },

  async mounted() {
    const user = localStorage.getItem("user");

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }

    const response = await axios.get(
      `http://localhost:3000/students/${this.$route.params.id}`
    );

    this.student.name = response.data.name;
    this.student.birthday = response.data.dateOfBirthday;
    this.student.municipality = response.data.municipality;
    this.student.createdAt = response.data.createdAt;
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
  color: #e67700;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.add-student input {
  border: 1px solid #e67700;
  padding: 5px 10px;
  outline: none;
}

.form-group label {
  color: #e67700;
  font-weight: 500;
}

.add-student button {
  border: none;
  background-color: #e67700;
  color: #fff;
  font-weight: 500;
  padding: 5px;
  border-radius: 4px;
  margin-top: 30px;
}

.add-student button:hover {
  background-color: #cf6b00;
}
.add-student p {
  color: red;
}
</style>
