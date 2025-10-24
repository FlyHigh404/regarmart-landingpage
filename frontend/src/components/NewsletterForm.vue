<template>
  <div class="w-full">
    <form class="flex flex-col sm:flex-row items-center sm:items-stretch gap-3" @submit.prevent="handleSubmit">
      <input type="email" :placeholder="$t('footer.emailPlaceholder')" aria-label="Masukkan Email" v-model="email"
        :disabled="isLoading"
        class="w-full px-4 py-3 text-black placeholder-[#1c1c1e]/50 bg-[#C7EBC6]/40 border border-green-500 rounded-lg focus:outline-none transition" />
      <button type="submit" :disabled="isLoading"
        class="w-full sm:w-auto bg-gradient-to-r from-[#26A81D] to-[#6EC568] hover:opacity-90 font-semibold px-6 py-3 rounded-lg cursor-pointer text-white transition-all active:scale-95 shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
        {{ isLoading ? 'Loading...' : $t('buttons.sendEmail') }}
      </button>
    </form>

    <!-- Menampilkan pesan feedback (sukses atau error) -->
    <p v-if="message" class="mt-2 text-sm" :class="messageType === 'success' ? 'text-green-800' : 'text-red-600'">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useReCaptcha } from 'vue-recaptcha-v3';
import axios from 'axios';

const email = ref('');
const isLoading = ref(false);
const message = ref('');
const messageType = ref('');

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const validateEmail = (email) => {
  if (!email.trim()) {
    return "Email tidak boleh kosong.";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Format email tidak valid.";
  }
  return null;
};

// 4. Logika utama saat form di-submit
const handleSubmit = async () => {
  message.value = '';

  const validationError = validateEmail(email.value);
  if (validationError) {
    messageType.value = 'error';
    message.value = validationError;

    setTimeout(() => {
      message.value = '';
    }, 5000);
    return;
  }

  isLoading.value = true;

  try {
    await recaptchaLoaded();
    const recaptchaToken = await executeRecaptcha('submitLead');

    const response = await axios.post('http://localhost:5000/api/leads', {
      email: email.value,
      recaptchaToken: recaptchaToken,
    });

    messageType.value = 'success';
    message.value = response.data.message;
    email.value = '';

    setTimeout(() => {
      message.value = '';
    }, 5000);

  } catch (error) {
    messageType.value = 'error';
    message.value = error.response?.data?.message || 'Terjadi kesalahan. Silakan coba lagi.';
  } finally {
    isLoading.value = false;
  }
};
</script>
