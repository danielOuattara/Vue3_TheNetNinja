<template>
  <form>
    <label for="email">Email : </label>
    <input type="email" required v-model="email" id="email" name="name" />

    <label for="password">Password : </label>
    <input
      type="password"
      required
      v-model="password"
      id="password"
      name="password"
    />

    <label for="role">Role : </label>
    <select name="role" id="role" v-model="role">
      <option value=""> Select</option>
      <option value="web-developper"> Web Developer</option>
      <option value="web-designer"> Web Designer</option>
    </select>

    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept Terms & Conditions</label>
    </div>

    <hr />

    <div>
      <input
        type="checkbox"
        name="shaun"
        id="shaun"
        value="shaun"
        v-model="names"
      />
      <label for="names">Shaun</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="yoshi"
        id="yoshi"
        value="yoshi"
        v-model="names"
      />
      <label for="names">Yoshi</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="mario"
        id="mario"
        value="mario"
        v-model="names"
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

    <div v-for="skill in skills" :key="skill" class="pill">
      <span @click="removeSkill(skill)"> {{ skill }} </span>
    </div>
  </form>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      names: [],
      tempSkill: "",
      skills: [],
    };
  },

  methods: {
    addSkill(event) {
      // console.log(event)
      if (
        (event.key === "Enter" ||
          event.key === "," ||
          event.key === " " ||
          event.key === "Tab") &&
        this.tempSkill
      ) {
        if (!this.skills.includes(this.tempSkill)) {
        }
        this.skills.push(this.tempSkill);
        this.tempSkill = "";
      }
    },

    removeSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill != item;
      });
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
</style>
