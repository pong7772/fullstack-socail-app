<template>
  <div>
    <div class="pt-5 space-y-6">
      <h1>Login</h1>
      <UIInput
        label="Username"
        placeholder="username"
        v-model="data.username"
      />
      <UIInput
        label="Password"
        placeholder="******"
        type="password"
        v-model="data.password"
      />
      <div>
        <button @click="handleLogin">Submit</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import useAuth from "../composables/useAuth";
import UIInput from "./UIInput.vue";
const data = reactive({
  password: "",
  username: "",
  loading: false,
});
async function handleLogin() {
  const { login } = useAuth();
  data.loading = true;
  try {
    await login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
  //   alert(JSON.stringify(data));
}
</script>