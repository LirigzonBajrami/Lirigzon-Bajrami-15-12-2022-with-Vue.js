<template>
  <div class="sign-up">
    <i class="fa-solid fa-building-columns"></i>
    <div v-show="successSignUp" class="alert alert-success" role="alert">
      You are sign-up successfully!
    </div>
    <input
      type="text"
      v-model="name"
      placeholder="Please enter your name..."
      required
    />
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
    <button @click="signUp">Sign Up</button>
    <p>
      Already have an account ? <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      successSignUp: false,
      error: false,
    };
  },

  methods: {
    async signUp() {
      // Validation
      if (this.name === "" || this.email === "" || this.password === "") {
        this.error = true;
        return;
      }

      const response = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      if (response.status === 201) {
        localStorage.setItem("user", JSON.stringify(response.data));
        this.successSignUp = true;

        setTimeout(() => {
          this.$router.push({ name: "Home" });
        }, 800);
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
.sign-up {
  margin: auto auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.sign-up input {
  width: 100%;
  height: 35px;
  padding: 0 5px;
  border: 1px solid #2b8a3e;
  outline: none;
}

.sign-up button {
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
