<template>
  <nav class="navbar">
    <a class="system-title" href="#">Student Information System</a>
    <span class="welcome-user">
      Welcome back {{ user }}, <a href="#" @click="logout">Logout</a>
    </span>
  </nav>
  <div class="nav-items">
    <router-link to="/">Home</router-link>
    <router-link to="/add-student">Add Student</router-link>
    <router-link to="/archive">Archive</router-link>
    <router-link to="/help">Help</router-link>
  </div>
</template>

<script>
export default {
  name: "Header-Component",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },

  mounted() {
    const user = localStorage.getItem("user");

    if (user) {
      const userObject = JSON.parse(user);
      this.user = userObject.name;
    }
  },
};
</script>

<style scoped>
.navbar {
  background-color: #2b8a3e;
  display: flex;
  justify-content: space-between;
  padding: 5px 100px;
  height: 50px;
}

.navbar a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
}

.nav-items {
  display: flex;
  gap: 22px;
  padding: 0 100px;
  background-color: #212529;
  /* border-top: 1px solid #fff; */
}

.nav-items a {
  padding: 5px 0;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
}

.welcome-user {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #fff;
}

.welcome-user a {
  background-color: #e9ecef;
  padding: 3px;
  border-radius: 5px;
  margin-left: 10px;
  color: #000;
}
</style>
