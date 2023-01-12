<template>
  <form @submit.prevent="handleSubmit">
    <label for="email">Email : </label>
    <input
      type="email"
      required
      v-model="formData.email"
      id="email"
      name="name"
    />

    <label for="password">Password : </label>
    <input
      :type="visiblePasswordStatus"
      required
      v-model="formData.password"
      id="password"
      name="password"
      ref="password"
    />
    <i class="bi bi-eye-slash" @click="togglePasswordView"></i>
    <div class="passwordError" v-if="passwordError">{{ passwordError }}</div>

    <label for="role">Role : </label>
    <select name="role" id="role" v-model="formData.role">
      <option value=""> Select</option>
      <option value="web-developper"> Web Developer</option>
      <option value="web-designer"> Web Designer</option>
    </select>

    <div class="terms">
      <input type="checkbox" required v-model="formData.terms" />
      <label>Accept Terms & Conditions</label>
    </div>

    <hr />

    <div>
      <input
        type="checkbox"
        name="shaun"
        id="shaun"
        value="shaun"
        v-model="formData.names"
      />
      <label for="names">Shaun</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="yoshi"
        id="yoshi"
        value="yoshi"
        v-model="formData.names"
      />
      <label for="names">Yoshi</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="mario"
        id="mario"
        value="mario"
        v-model="formData.names"
      />
      <label for="names">Mario</label>
    </div>

    <hr />

    <label for="skills">Skills :</label>
    <input
      type="text"
      name="skills"
      id="skills"
      v-model="tempSkill"
      @keyup="addSkill"
    />

    <div v-for="skill in formData.skills" :key="skill" class="pill">
      <span @click="removeSkill(skill)"> {{ skill }} </span>
    </div>

    <div class="submit">
      <button type="submit">Create a account</button>
    </div>
  </form>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      formData: {
        email: "",
        password: "",
        role: "",
        terms: false,
        names: [],
        skills: [],
      },
      tempSkill: "",
      visiblePasswordStatus: "password",
      passwordError: "",
    };
  },

  methods: {
    togglePasswordView() {
      this.visiblePasswordStatus =
        this.visiblePasswordStatus === "password" ? "text" : "password";
    },

    addSkill(event) {
      // console.log(event)
      if ((event.key === "," || event.key === " ") && this.tempSkill) {
        if (!this.formData.skills.includes(this.tempSkill)) {
          this.formData.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },

    removeSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill != item;
      });
    },

    handleSubmit() {
      console.log("form is submitted");
      // validation
      // if(this.password.length < 5 || this.password.length > 30) {
      //   this.passwordError = true;

      this.passwordError =
        this.formData.password.length > 5 && this.formData.password.length < 30
          ? ""
          : "password at least 6 characters and max 30 characters";

      if (!this.passwordError) {
        console.log(this.formData);
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  position: relative;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 1rem;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: rgb(92, 92, 92);
  cursor: pointer;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

i {
  /* margin-left: -30px; */
  right: 0;
  top: -3rem;
  left: 23rem;
  cursor: pointer;
  position: relative;
}

.submit {
  text-align: center;
}

.passwordError {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
