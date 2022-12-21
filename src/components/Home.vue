<template>
  <div>
    <Header />
    <div class="table-content">
      <div class="table-search">
        <h3>Students Informations</h3>
        <input
          type="text"
          v-model="search"
          placeholder="Search for students...."
        />
      </div>
      <table>
        <thead class="table-head">
          <tr>
            <th>Index</th>
            <th>
              Name
              <i
                @click="ascendingOrderByName"
                class="fa-solid fa-arrow-down"
              ></i>
              <i
                @click="descendingOrderByName"
                class="fa-solid fa-arrow-up"
              ></i>
            </th>
            <th>
              DoB

              <i
                @click="ascendingOrderByDate"
                class="fa-solid fa-arrow-down"
              ></i>
              <i
                @click="descendingOrderByDate"
                class="fa-solid fa-arrow-up"
              ></i>
            </th>
            <th>
              Municipality
              <i
                @click="ascendingOrderByMunicipality"
                class="fa-solid fa-arrow-down"
              ></i>
              <i
                @click="descendingOrderByMunicipality"
                class="fa-solid fa-arrow-up"
              ></i>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in filteredStudents" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.dateOfBirthday }}</td>
            <td>{{ student.municipality }}</td>
            <td>
              <router-link class="update" :to="'/update-student/' + student.id"
                >Edit</router-link
              >
              <button class="delete" @click="deleteStudent(student.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="error" class="alert alert-danger" role="alert">
        Network Error. Please try again!
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";

export default {
  name: "Home-Page",
  components: {
    Header,
  },
  data() {
    return {
      students: [],
      search: "",
      error: false,
    };
  },

  async mounted() {
    this.loadData();
  },

  methods: {
    ascendingOrderByName() {
      this.students = this.students.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    descendingOrderByName() {
      this.students = this.students.sort((a, b) => (a.name < b.name ? 1 : -1));
    },
    ascendingOrderByMunicipality() {
      this.students = this.students.sort((a, b) =>
        a.municipality > b.municipality ? 1 : -1
      );
    },
    descendingOrderByMunicipality() {
      this.students = this.students.sort((a, b) =>
        a.municipality < b.municipality ? 1 : -1
      );
    },
    ascendingOrderByDate() {
      this.students = this.students.sort(
        (a, b) => new Date(a.dateOfBirthday) - new Date(b.dateOfBirthday)
      );
    },
    descendingOrderByDate() {
      this.students = this.students.sort(
        (a, b) => new Date(b.dateOfBirthday) - new Date(a.dateOfBirthday)
      );
    },

    async deleteStudent(id) {
      try {
        const response = await axios.delete(
          `http://localhost:3000/students/${id}`
        );

        if (response.status === 200) {
          // reload page
          this.loadData();
        }
      } catch (err) {
        this.error = true;
      }
    },
    async loadData() {
      const user = localStorage.getItem("user");

      if (!user) {
        this.$router.push({ name: "SignUp" });
      }

      const response = await axios.get("http://localhost:3000/students");
      this.students = response.data;
    },
  },
  computed: {
    filteredStudents() {
      return this.students.filter(
        (student) =>
          student.name.toLowerCase().includes(this.search.toLowerCase()) ||
          student.municipality
            .toLowerCase()
            .includes(this.search.toLowerCase()) ||
          student.id
            .toString()
            .toLowerCase()
            .includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.table-content {
  max-width: 1200px;
  margin: 120px auto;
  padding: 0 30px;
}
table {
  width: 100%;
}

.table-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-search input {
  width: 400px;
  outline: none;
  border: 1px solid #2b8a3e;
  padding: 3px 12px;
  border-radius: 200px;
}

th {
  background-color: #2b8a3e;
  color: #fff;
  padding: 0 5px;
}
td {
  height: 40px;
  background-color: #e9ecef;
  padding: 0 5px;
}

table tr {
  border-bottom: 1px solid #fff;
  height: 40px;
}

.fa-arrow-up {
  margin-left: 3px;
}

.delete {
  margin-left: 10px;
  border: none;
  background-color: #c92a2a;
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  padding: 2px 10px;
}

.update {
  text-decoration: none;
  background-color: #e67700;
  color: #fff;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 5px;
}

.alert-danger {
  margin-top: 5px;
}
</style>
