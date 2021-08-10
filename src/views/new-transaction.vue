<template>
    <form @submit.prevent="onSubmit">
        <!-- Start: Main From -->
        <div class="row mt-8">
            <div class="bg-white rounded-lg py-4">
                <div class="container mx-auto px-8">
                    <div class="row">
                        <label for="total" class="flex items-end">
                            <div class="w-10 text-right leading-10 mr-4 pb-1">
                                <span
                                    class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                                >USD</span>
                            </div>
                            <div class="flex flex-col border-b border-gray-100 pb-1">
                                <span class="font-semibold text-xs text-dark">Total</span>
                                <input
                                    id="total"
                                    class="text-4xl text-dark w-full outline-none mt-1"
                                    type="text"
                                    placeholder="0"
                                />
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="category" class="flex items-center">
                            <div class="flex items-center flex-none w-10 text-right leading-10 mr-4">
                                <span class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"></span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input
                                    id="category"
                                    class="text-xl text-dark w-full outline-none"
                                    type="text"
                                    placeholder="Select a category"
                                />
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="note" class="flex items-center">
                            <div class="flex items-center flex-none w-10 text-right leading-10 mr-4">
                                <span class="flex flex-none w-10 ml-4">
                                    <i class="t2ico t2ico-document text-2xl"></i>
                                </span>
                            </div>
                            <div class="flex-1 border-b border-gray-100 py-3">
                                <input
                                    id="note"
                                    class=" text-dark w-full outline-none"
                                    type="text"
                                    placeholder="Note"
                                />
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="createAt" class="flex items-center">
                            <div class="flex-none w-10 mr-4">
                                <span class="flex items-center justify-end text-dark">
                                    <i class="t2ico t2ico-calendar text-2xl"></i>
                                </span>
                            </div>
                            <div class="flex-1 py-2 border-b border-gray-100">
                                <div class="text-dark w-full">Sun, 29 Dec 2021</div>
                            </div>
                        </label>
                    </div>
                    <div class="row">
                        <label for="wallet" class="flex items-center">
                            <div class="flex-none w-10 mr-4">
                                <span class="flex items-center justify-end text-dark">
                                    <i class="t2ico t2ico-wallet text-2xl"></i>
                                </span>
                            </div>
                            <div class="flex-1 py-2">
                                <div class="text-dark w-full">My Wallet</div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-8" v-if="!isMoreDetails">
            <button class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
            @click="isMoreDetails = true">More Detail</button>
        </div>

        <template v-if="isMoreDetails">
            <!-- Start: Advanced From -->
            <div class="row mt-8">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label for="location" class="flex items-center">
                                <div class="flex items-center flex-none w-10 text-right leading-10 mr-4">
                                    <span class="flex flex-none w-10 ml-4">
                                        <i class="t2ico t2ico-location text-2xl"></i>
                                    </span>
                                </div>
                                <div class="flex-1 border-b border-gray-100 py-3">
                                    <input
                                        id="location"
                                        class=" text-dark w-full outline-none"
                                        type="text"
                                        placeholder="Select a location"
                                    />
                                </div>
                            </label>
                        </div>
                        <div class="row">
                            <label for="withPerson" class="flex items-center">
                                <div class="flex items-center flex-none w-10 text-right leading-10 mr-4">
                                    <span class="flex flex-none w-10 ml-4">
                                        <i class="t2ico t2ico-users text-2xl"></i>
                                    </span>
                                </div>
                                <div class="flex-1 border-b border-gray-100 py-3">
                                    <input
                                        id="withPerson"
                                        class=" text-dark w-full outline-none"
                                        type="text"
                                        placeholder="With person"
                                    />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Start: Upload photos -->
            <div class="row mt-8">
                <div class="bg-white rounded-lg py-4">
                    <div class="container mx-auto px-8">
                        <div class="row">
                            <label for="withPerson" class="flex items-center text-primary">
                                <div class="flex items-center flex-none w-10 text-right leading-10 mr-4">
                                    <span class="flex flex-none w-10 ml-4">
                                        <i class="t2ico t2ico-camera text-2xl"></i>
                                    </span>
                                </div>
                                <div class="flex-1 border-b border-gray-100 py-3">
                                    <div class="w-full font-semibold">Upload photos</div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const isMoreDetails = ref(false);

        function onSubmit() {

        }

        return { isMoreDetails, onSubmit }
    }
}
</script>