<template>
    <div class="sm:flex">
        <div
            class="relative lg:w-[580px] md:w-96 w-full p-10 min-h-screen bg-white shadow-xl flex items-center pt-10 dark:bg-slate-900 z-10"
        >
            <div
                class="w-full lg:max-w-sm mx-auto space-y-10"
                uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true"
            >
                <!-- logo image-->
                <a href="#">
                    <img
                        src="../assets/images/logo.png"
                        class="w-28 absolute top-10 left-10 dark:hidden"
                        alt=""
                /></a>
                <a href="#">
                    <img
                        src="../assets/images/logo-light.png"
                        class="w-28 absolute top-10 left-10 hidden dark:!block"
                        alt=""
                /></a>

                <!-- logo icon optional -->
                <div class="hidden">
                    <img
                        class="w-12"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600"
                        alt="Socialite html template"
                    />
                </div>

                <!-- title -->
                <div>
                    <h2 class="text-2xl font-semibold mb-1.5">
                        Sign in to your account
                    </h2>
                    <p class="text-sm text-gray-700 font-normal">
                        If you haven’t signed up yet.
                        <a href="#" class="text-blue-700"
                            ><router-link :to="{ name: 'register' }"
                                >Register here!</router-link
                            ></a
                        >
                    </p>
                </div>

                <!-- form -->
                <form
                    method="post"
                    @submit.prevent="login"
                    class="space-y-7 text-sm text-black font-medium dark:text-white"
                    uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true"
                >
                    <!-- email -->
                    <div>
                        <label for="email" class="">Email address</label>
                        <div class="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="text"
                                autofocus=""
                                placeholder="Email"
                                class="!w-full !rounded-lg !bg-transparent !shadow-sm !border-slate-200 dark:!border-slate-800 dark:!bg-white/5"
                                v-model="user.email"
                            />
                            <p class="text-red-500" v-if="validation.email">
                                {{ validation.email }}
                            </p>
                        </div>
                    </div>
                    <!-- password -->
                    <div>
                        <label for="password" class="">Password</label>
                        <div class="mt-2.5">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="***"
                                class="!w-full !rounded-lg !bg-transparent !shadow-sm !border-slate-200 dark:!border-slate-800 dark:!bg-white/5"
                                v-model="user.password"
                            />
                            <p class="text-red-500" v-if="validation">
                                {{ validation.password }}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2.5">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                v-model="user.remember"
                            />
                            <label for="remember-me" class="font-normal"
                                >Remember me</label
                            >
                        </div>
                        <a href="#" class="text-blue-700">Forgot password </a>
                    </div>

                    <!-- submit button -->
                    <div>
                        <button
                            type="submit"
                            :disabled="loading"
                            class="button bg-primary text-white w-full"
                            :class="{
                                'cursor-not-allowed': loading,
                            }"
                        >
                            <span v-if="loading">
                                <svg
                                    class="animate-spin h-5 w-5 mr-3 text-white"
                                    viewBox="0 0 100 100"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#fff"
                                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                                    >
                                        <animateTransform
                                            attributeName="transform"
                                            attributeType="XML"
                                            type="rotate"
                                            dur="1s"
                                            from="0 50 50"
                                            to="360 50 50"
                                            repeatCount="indefinite"
                                        />
                                    </path>
                                </svg>
                            </span>
                            Sign in
                        </button>
                        <p v-if="errorMsg" class="text-red-500">
                            {{ errorMsg }}
                        </p>
                    </div>

                    <div class="text-center flex items-center gap-6">
                        <hr
                            class="flex-1 border-slate-200 dark:border-slate-800"
                        />
                        Or continue with
                        <hr
                            class="flex-1 border-slate-200 dark:border-slate-800"
                        />
                    </div>

                    <!-- social login -->
                    <div
                        class="flex gap-2"
                        uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 400 ;repeat: true"
                    >
                        <a
                            href="#"
                            class="button flex-1 flex items-center gap-2 bg-primary text-white text-sm"
                        >
                            <!-- <ion-icon
                                name="logo-facebook"
                                class="text-lg"
                            ></ion-icon> -->
                            facebook
                        </a>
                        <a
                            href="#"
                            class="button flex-1 flex items-center gap-2 bg-sky-600 text-white text-sm"
                        >
                            <!-- <ion-icon name="logo-twitter"></ion-icon> -->
                            twitter
                        </a>
                        <a
                            href="#"
                            class="button flex-1 flex items-center gap-2 bg-black text-white text-sm"
                        >
                            <!-- <ion-icon name="logo-github"></ion-icon> -->
                            github
                        </a>
                    </div>
                </form>
            </div>
        </div>

        <!-- image slider -->
        <div class="flex-1 relative bg-primary max-md:hidden">
            <div
                class="relative w-full h-full"
                tabindex="-1"
                uk-slideshow="animation: slide; autoplay: true"
            >
                <ul class="uk-slideshow-items w-full h-full">
                    <li class="w-full">
                        <img
                            src="../assets/images/post/img-3.jpg"
                            alt=""
                            class="w-full h-full object-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left"
                        />
                        <div
                            class="absolute bottom-0 w-full uk-tr ansition-slide-bottom-small z-10"
                        >
                            <div
                                class="max-w-xl w-full mx-auto pb-32 px-5 z-30 relative"
                                uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true"
                            >
                                <img
                                    class="w-12"
                                    src="../assets/images/logo-icon.png"
                                    alt="Socialite html template"
                                />
                                <h4
                                    class="!text-white text-2xl font-semibold mt-7"
                                    uk-slideshow-parallax="y: 600,0,0"
                                >
                                    Connect With Friends
                                </h4>
                                <p
                                    class="!text-white text-lg mt-7 leading-8"
                                    uk-slideshow-parallax="y: 800,0,0;"
                                >
                                    This phrase is more casual and playful. It
                                    suggests that you are keeping your friends
                                    updated on what’s happening in your life.
                                </p>
                            </div>
                        </div>
                        <div
                            class="w-full h-96 bg-gradient-to-t from-black absolute bottom-0 left-0"
                        ></div>
                    </li>
                    <li class="w-full">
                        <img
                            src="../assets/images/post/img-2.jpg"
                            alt=""
                            class="w-full h-full object-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left"
                        />
                        <div
                            class="absolute bottom-0 w-full uk-tr ansition-slide-bottom-small z-10"
                        >
                            <div
                                class="max-w-xl w-full mx-auto pb-32 px-5 z-30 relative"
                                uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true"
                            >
                                <img
                                    class="w-12"
                                    src="../assets/images/logo-icon.png"
                                    alt="Socialite html template"
                                />
                                <h4
                                    class="!text-white text-2xl font-semibold mt-7"
                                    uk-slideshow-parallax="y: 800,0,0"
                                >
                                    Connect With Friends
                                </h4>
                                <p
                                    class="!text-white text-lg mt-7 leading-8"
                                    uk-slideshow-parallax="y: 800,0,0;"
                                >
                                    This phrase is more casual and playful. It
                                    suggests that you are keeping your friends
                                    updated on what’s happening in your life.
                                </p>
                            </div>
                        </div>
                        <div
                            class="w-full h-96 bg-gradient-to-t from-black absolute bottom-0 left-0"
                        ></div>
                    </li>
                </ul>

                <!-- slide nav -->
                <div class="flex justify-center">
                    <ul
                        class="inline-flex flex-wrap justify-center absolute bottom-8 gap-1.5 uk-dotnav uk-slideshow-nav"
                    ></ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import store from "../../store/index.js";
import { ref } from "vue";
import router from "../../route.js";

let validation = ref("");
let loading = ref(false);
let errorMsg = ref("");

const user = reactive({
    email: "",
    password: "",
    remember: false,
});

function login() {
    loading.value = true;
    validation.value = "";
    errorMsg.value = "";
    store
        .dispatch("login", user)
        .then(() => {
            loading.value = false;
            router.push({ name: "app" });
        })
        .catch(({ response }) => {
            if (response.data.errors) {
                validation.value = {
                    email: Array.isArray(response.data.errors?.email)
                        ? response.data.errors.email.join(" ")
                        : "",
                    password: Array.isArray(response.data.errors?.password)
                        ? response.data.errors.password.join(" ")
                        : "",
                };
            } else {
                errorMsg.value = response.data.message || "An error occurred.";
            }
        })
        .finally(() => {
            loading.value = false;
        });
}
</script>
