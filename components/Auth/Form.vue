<template>
  <div class="w-full">
    <div class="flex justify-center">
      <div class="w-20 h-20">
        <LogoTwitter />
      </div>
    </div>
    <div class="pt-5 space-y-6 mb-2">
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
      <UIButton @click="handleLogin" liquid :disabled="isButtonDisable">
        Login
      </UIButton>
    </div>
    <div class="flex justify-center items-center pt-5">
      <p> ❤️username : pong & pass: password👨🏻‍💻</p>
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
const isSignUp = ref(false);
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
const isButtonDisable = computed(() => {
  return !data.username || !data.password || data.loading;
});
</script>
