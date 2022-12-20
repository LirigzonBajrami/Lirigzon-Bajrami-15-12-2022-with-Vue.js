<template>
  <div class="login">
    <i class="fa-solid fa-building-columns"></i>
    <div v-show="successSignUp" class="alert alert-success" role="alert">
      You are logged in successfully!
    </div>

    <input
      type="email"
      v-model="email"
      placeholder="Please enter your email..."
      required
    />
    <input
      type="password"
      v-model="password"
      placeholder="Please enter your password..."
      required
    />
    <p class="error" v-if="error">Please fill all fields!</p>
    <button @click="login">Login</button>
    <p>
      Don't have an account ? <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login-Page",
  data() {
    return {
      email: "",
      password: "",
      successSignUp: false,
      error: false,
    };
  },
  methods: {
    async login() {
      // Validation
      if (this.email === "" || this.password === "") {
        this.error = true;
        return;
      }
      const response = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );

      if (response.status === 200 && response.data.length > 0) {
        localStorage.setItem("user", JSON.stringify(response.data[0]));
        this.successSignUp = true;

        setTimeout(() => {
          this.$router.push({ name: "Home" });
        }, 500);
      }
    },
  },
  mounted() {
    const user = localStorage.getItem("user");

    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style scoped>
.fa-solid {
  font-size: 30px;
  color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  margin: auto auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login input {
  width: 100%;
  height: 35px;
  padding: 0 5px;
  border: 1px solid #2b8a3e;
  outline: none;
}

.login button {
  width: 101%;
  height: 30px;
  border: none;
  background-color: #2b8a3e;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.alert-success {
  width: 100%;
  margin-bottom: 0px;
}
.error {
  color: red;
}
</style>
