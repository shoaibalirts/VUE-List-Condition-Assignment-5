const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      listVisibility: true,
      btnCaption: "Hide",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
    toggleList() {
      this.listVisibility = !this.listVisibility; // falst, true
      if (this.listVisibility === false) {
        this.btnCaption = "Show List";
      } else if (this.listVisibility === true) {
        this.btnCaption = "hide";
      }
    },
  },
});
app.mount("#assignment");
