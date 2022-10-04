<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import Footer from "../components/Footer.vue";

const ruleFormRef = ref<FormInstance>();

const validateEmail = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the email"));
  } else if (value.indexOf("@") == -1) {
    callback(new Error("Please input correct address"));
  } else if (value.indexOf(".") == -1) {
    callback(new Error("Please input correct address"));
  } else {
    callback();
  }
};

const validateName = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please input the Name"));
  } else {
    callback();
  }
};

const validateQuestion = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please choose your problem"));
  }
};

const validateSubject = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Please fill in the field"));
  }
};

const validateDetails = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("Describe your problem"));
  }
};

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const ruleForm = reactive({
  Question: "",
  Name: "",
  Email: "",
  Subject: "",
  Details: "",
});

const rules = reactive({
  Name: [{ validator: validateName, trigger: "blur" }],
  Email: [{ validator: validateEmail, trigger: "blur" }],
  Question: [{ validator: validateQuestion, trigger: "blur" }],
  Subject: [{ validator: validateSubject, trigger: "blur" }],
  Details: [{ validator: validateDetails, trigger: "blur" }],
});
</script>
<template>
  <div class="main-div--Contact">
    <div class="first-div--Contact">
      <div
        class="pt-24 pb-24 container mx-auto flex flex-col gap-4 justify-center items-center"
      >
        <h1 class="text-5xl text-white">Contact Us</h1>
        <h4 class="text-2xl text-white">Contact the Help Team</h4>
      </div>
    </div>
    <div class="container mx-auto flex flex-col mt-10 mb-10">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        status-icon
        label-position="top"
        class="Form--Contact"
        ><el-form-item prop="Question"
          ><template #label class="p-0"
            ><div class="text-3xl cursor-pointer label_div--Contact">
              What can we help you with?
            </div>
          </template>
          <el-select v-model="ruleForm.Question" class="select--Contact w-full"
            ><el-option value="Your Account"
              ><span class="text-2xl span--Contact"
                >Your Account</span
              ></el-option
            ><el-option value="Prechu Products"
              ><span class="text-2xl span--Contact"
                >Prechu Products</span
              ></el-option
            ><el-option value="Prechu Pro"
              ><span class="text-2xl span--Contact">Prechu Pro</span></el-option
            ><el-option value="Community"
              ><span class="text-2xl span--Contact">Community</span></el-option
            ><el-option value="Other"
              ><span class="text-2xl span--Contact">Other</span></el-option
            ></el-select
          ></el-form-item
        ><el-form-item prop="Name" class="pb-4"
          ><template #label
            ><div class="text-3xl cursor-pointer pt-4 label_div--Contact">
              Your name:
            </div> </template
          ><el-input
            v-model="ruleForm.Name"
            type="text"
            placeholder="Example: Denis Vlaskin"
            class="pb-4" /></el-form-item
        ><el-form-item prop="Email"
          ><template #label
            ><div class="text-3xl cursor-pointer label_div--Contact">
              E-mail address associated with your Prechu account:
            </div> </template
          ><el-input
            v-model="ruleForm.Email"
            type="email"
            placeholder="Example: denis@prechu.com"
            class="pb-4" /></el-form-item
        ><el-form-item prop="Subject"
          ><template #label
            ><div class="text-3xl cursor-pointer pt-4 label_div--Contact">
              Subject:
            </div></template
          ><el-input
            type="text"
            v-model="ruleForm.Subject"
            class="mb-4" /></el-form-item
        ><el-form-item prop="Details"
          ><template #label
            ><div class="text-3xl cursor-pointer pt-4 label_div--Contact">
              Details:
            </div> </template
          ><el-input
            v-model="ruleForm.Details"
            type="textarea"
            maxlength="200"
            show-word-limit
            resize="none"
            placeholder="Please write your question or a description of the problem you're trying to solve here."
            class="mb-4" /></el-form-item
        ><el-form-item class="pt-8"
          ><el-button
            type="primary"
            class="button--Contact"
            size="large"
            @click="submitForm(ruleFormRef)"
            >Submit</el-button
          ></el-form-item
        ></el-form
      >
    </div>
  </div>
</template>
